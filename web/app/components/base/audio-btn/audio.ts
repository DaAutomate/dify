import Toast from '@/app/components/base/toast'
import { textToAudioStream } from '@/service/share'

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    ManagedMediaSource: any
  }
}

export default class AudioPlayer {
  mediaSource: MediaSource | null
  audio: HTMLAudioElement
  audioContext: AudioContext
  sourceBuffer?: SourceBuffer
  cacheBuffers: ArrayBuffer[] = []
  pauseTimer: number | null = null
  msgId: string | undefined
  msgContent: string | null | undefined = null
  voice: string | undefined = undefined
  isLoadData = false
  url: string
  isPublic: boolean
  callback: ((event: string) => {}) | null

  constructor(streamUrl: string, isPublic: boolean, msgId: string | undefined, msgContent: string | null | undefined, callback: ((event: string) => {}) | null) {
    this.audioContext = new AudioContext()
    this.msgId = msgId
    this.msgContent = msgContent
    this.url = streamUrl
    this.isPublic = isPublic
    this.callback = callback

    // Compatible with iphone ios17 ManagedMediaSource
    const MediaSource = window.MediaSource || window.ManagedMediaSource
    if (!MediaSource) {
      Toast.notify({
        message: 'Your browser does not support audio streaming, if you are using an iPhone, please update to iOS 17.1 or later.',
        type: 'error',
      })
    }
    this.mediaSource = MediaSource ? new MediaSource() : null
    this.audio = new Audio()
    this.setCallback(callback)
    this.audio.src = this.mediaSource ? URL.createObjectURL(this.mediaSource) : ''
    // this.audio.autoplay = true

    const source = this.audioContext.createMediaElementSource(this.audio)
    source.connect(this.audioContext.destination)
    this.listenMediaSource('audio/mpeg')
  }

  public resetMsgId(msgId: string) {
    this.msgId = msgId
  }

  private listenMediaSource(contentType: string) {
    this.mediaSource?.addEventListener('sourceopen', () => {
      if (this.sourceBuffer)
        return

      this.sourceBuffer = this.mediaSource?.addSourceBuffer(contentType)
      this.sourceBuffer?.addEventListener('update', () => {
        if (this.cacheBuffers.length && !this.sourceBuffer?.updating) {
          const cacheBuffer = this.cacheBuffers.shift()!
          this.sourceBuffer?.appendBuffer(cacheBuffer)
        }
        // this.pauseAudio()
      })
    })
  }

  public setCallback(callback: ((event: string) => {}) | null) {
    this.callback = callback
    if (callback) {
      this.audio.addEventListener('ended', () => {
        callback('ended')
      }, false)
      this.audio.addEventListener('paused', () => {
        this.isLoadData = false
        callback('paused')
      }, true)
      this.audio.addEventListener('loaded', () => {
        callback('loaded')
      }, true)
      this.audio.addEventListener('play', () => {
        callback('play')
      }, true)
      this.audio.addEventListener('timeupdate', () => {
        callback('timeupdate')
      }, true)
      this.audio.addEventListener('loadeddate', () => {
        callback('loadeddate')
      }, true)
      this.audio.addEventListener('canplay', () => {
        callback('canplay')
      }, true)
      this.audio.addEventListener('error', () => {
        callback('error')
      }, true)
    }
  }

  private async loadAudio() {
    try {
      const audioResponse: any = await textToAudioStream(this.url, this.isPublic, { content_type: 'audio/mpeg' }, {
        message_id: this.msgId,
        streaming: true,
        voice: this.voice,
        text: this.msgContent,
      })

      if (audioResponse.status !== 200) {
        if (this.callback)
          this.callback('error')
      }

      const reader = audioResponse.body.getReader()
      while (true) {
        const { value, done } = await reader.read()

        if (done) {
          this.receiveAudioData(value)
          break
        }

        this.receiveAudioData(value)
      }
    }
    catch (error) {
      this.callback && this.callback('error')
    }
  }

  // play audio
  public playAudio() {
    if (this.isLoadData) {
      if (this.audio.paused) {
        this.audioContext.resume().then((_) => {
          this.audio.play()
          this.callback && this.callback('play')
        })
      }
      else if (this.audio.ended) {
        this.audio.play()
        this.callback && this.callback('play')
      }
      if (this.callback)
        this.callback('play')
    }
    else {
      this.isLoadData = true
      this.cacheBuffers = []
      try {
        this.sourceBuffer?.abort()
      }
      catch (e) {
      }
      this.loadAudio()
    }
  }

  public async playAudioWithAudio(audio: string, play = true) {
    const audioContent = Buffer.from(audio, 'base64')
    this.receiveAudioData(new Uint8Array(audioContent))

    if (play) {
      if (this.audio.paused) {
        this.audioContext.resume().then((_) => {
          this.audio.play()
          this.callback && this.callback('play')
        })
      }
      else if (this.audio.ended) {
        this.audio.play()
        this.callback && this.callback('play')
      }
      else {
        this.audio.play()
        this.callback && this.callback('play')
      }
    }
  }

  public pauseAudio() {
    this.callback && this.callback('paused')
    this.audio.pause()
    this.audioContext.suspend()
  }

  public cancer() {

  }

  private receiveAudioData(unit8Array: Uint8Array) {
    if (!unit8Array) {
      try {
        this.mediaSource?.endOfStream()
      }
      catch (e) {
      }
      return
    }
    const audioData = this.byteArrayToArrayBuffer(unit8Array)
    if (!audioData.byteLength) {
      if (this.mediaSource?.readyState === 'open') {
        try {
          this.mediaSource?.endOfStream()
        }
        catch (e) {
        }
      }
      return
    }

    if (this.sourceBuffer?.updating)
      this.cacheBuffers.push(audioData)
    else
      this.sourceBuffer?.appendBuffer(audioData)
    if (this.audioContext.state !== 'suspended')
      this.audio.play()
  }

  private byteArrayToArrayBuffer(byteArray: Uint8Array): ArrayBuffer {
    const arrayBuffer = new ArrayBuffer(byteArray.length)
    const uint8Array = new Uint8Array(arrayBuffer)
    uint8Array.set(byteArray)
    return arrayBuffer
  }
}
