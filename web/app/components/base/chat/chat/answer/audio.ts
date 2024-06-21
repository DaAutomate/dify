import Toast from '@/app/components/base/toast'

export function byteArrayToArrayBuffer(byteArray: Uint8Array): ArrayBuffer {
  const arrayBuffer = new ArrayBuffer(byteArray.length)
  const uint8Array = new Uint8Array(arrayBuffer)
  uint8Array.set(byteArray)
  return arrayBuffer
}

let audioPlayer: AudioPlayer | null

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    ManagedMediaSource: any
  }
}

class AudioPlayer {
  mediaSource: MediaSource | null
  audio: HTMLAudioElement
  audioContext: AudioContext
  sourceBuffer?: SourceBuffer
  cacheBuffers: ArrayBuffer[] = []
  pauseTimer: number | null = null

  constructor() {
    this.audioContext = new AudioContext()

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
    this.audio.src = this.mediaSource ? URL.createObjectURL(this.mediaSource) : ''

    this.audioContextConnect()
    this.listenMediaSource()
  }

  private audioContextConnect() {
    const source = this.audioContext.createMediaElementSource(this.audio)
    source.connect(this.audioContext.destination)
  }

  private listenMediaSource() {
    this.mediaSource?.addEventListener('sourceopen', () => {
      if (this.sourceBuffer)
        return

      this.sourceBuffer = this.mediaSource?.addSourceBuffer('audio/mpeg')

      this.sourceBuffer?.addEventListener('update', () => {
        if (this.cacheBuffers.length && !this.sourceBuffer?.updating) {
          const cacheBuffer = this.cacheBuffers.shift()!
          this.sourceBuffer?.appendBuffer(cacheBuffer)
        }

        this.pauseAudio()
      })
    })
  }

  private pauseAudio() {
    const neePlayTime = this.sourceBuffer!.timestampOffset - this.audio.currentTime || 0

    this.pauseTimer && clearTimeout(this.pauseTimer)

    this.pauseTimer = setTimeout(() => this.audio.pause(), neePlayTime * 1000 + 5000) as unknown as number
  }

  // play audio
  private playAudio() {
    setTimeout(() => {
      if (this.audio.paused) {
        try {
          this.audio.play()
        }
        catch (e) {
          this.playAudio()
        }
      }
    }, 200)
  }

  public receiveAudioData(unit8Array: Uint8Array) {
    const audioData = byteArrayToArrayBuffer(unit8Array)
    if (!audioData.byteLength)
      return

    if (this.sourceBuffer?.updating)
      this.cacheBuffers.push(audioData)

    else
      this.sourceBuffer?.appendBuffer(audioData)

    this.playAudio()
  }

  public stop() {
    this.audio.pause()
    this.cacheBuffers = []
    if (this.sourceBuffer?.updating)
      this.sourceBuffer?.abort?.()
    else if (this.sourceBuffer && this.sourceBuffer?.buffered.length > 0)
      this.sourceBuffer?.remove(0, this.sourceBuffer.buffered.end(0))

    audioPlayer = null
  }
}

export function getAudioPlayer() {
  if (audioPlayer)
    return audioPlayer
  else
    audioPlayer = new AudioPlayer()

  return audioPlayer
}

export default AudioPlayer
