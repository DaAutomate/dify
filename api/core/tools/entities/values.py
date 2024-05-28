from enum import Enum

from core.tools.entities.common_entities import I18nObject
from core.tools.entities.tool_entities import ToolLabel


class ToolLabelEnum(Enum):
    SEARCH = 'search'
    IMAGE = 'image'
    VIDEOS = 'videos'
    WEATHER = 'weather'
    FINANCE = 'finance'
    DESIGN = 'design'
    TRAVEL = 'travel'
    SOCIAL = 'social'
    NEWS = 'news'
    MEDICAL = 'medical'
    PRODUCTIVITY = 'productivity'
    EDUCATION = 'education'
    BUSINESS = 'business'
    ENTERTAINMENT = 'entertainment'
    UTILITIES = 'utilities'
    OTHER = 'other'

ICONS = {
    ToolLabelEnum.SEARCH: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7.33398 1.3335C10.646 1.3335 13.334 4.0215 13.334 7.3335C13.334 10.6455 10.646 13.3335 7.33398 13.3335C4.02198 13.3335 1.33398 10.6455 1.33398 7.3335C1.33398 4.0215 4.02198 1.3335 7.33398 1.3335ZM7.33398 12.0002C9.91232 12.0002 12.0007 9.91183 12.0007 7.3335C12.0007 4.75516 9.91232 2.66683 7.33398 2.66683C4.75565 2.66683 2.66732 4.75516 2.66732 7.3335C2.66732 9.91183 4.75565 12.0002 7.33398 12.0002ZM12.9909 12.0476L14.8764 13.9332L13.9337 14.876L12.0481 12.9904L12.9909 12.0476Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.IMAGE: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.0514 9.71752L10.4718 7.13792C10.2115 6.87752 9.78932 6.87752 9.52898 7.13792L4.57721 12.0897C3.4097 11.1113 2.66732 9.64232 2.66732 7.99992C2.66732 5.0544 5.05513 2.66659 8.00065 2.66659C10.9462 2.66659 13.334 5.0544 13.334 7.99992C13.334 8.60085 13.2346 9.17852 13.0514 9.71752ZM5.72683 12.8257L10.0004 8.55212L12.4259 10.9777C11.4668 12.4001 9.84152 13.3331 8.00038 13.3331C7.18632 13.3331 6.41628 13.1511 5.72683 12.8257ZM8.00065 14.6666C11.6825 14.6666 14.6673 11.6818 14.6673 7.99992C14.6673 4.31802 11.6825 1.33325 8.00065 1.33325C4.31875 1.33325 1.33398 4.31802 1.33398 7.99992C1.33398 11.6818 4.31875 14.6666 8.00065 14.6666ZM7.33398 6.66658C7.33398 7.40299 6.73705 7.99992 6.00065 7.99992C5.26427 7.99992 4.66732 7.40299 4.66732 6.66658C4.66732 5.9302 5.26427 5.33325 6.00065 5.33325C6.73705 5.33325 7.33398 5.9302 7.33398 6.66658Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.VIDEOS: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00065 13.3333H13.334V14.6666H8.00065C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992C14.6673 9.50072 14.1714 10.8857 13.3345 11.9999H11.5284C12.6356 11.0227 13.334 9.59285 13.334 7.99992C13.334 5.0544 10.9462 2.66659 8.00065 2.66659C5.05513 2.66659 2.66732 5.0544 2.66732 7.99992C2.66732 10.9455 5.05513 13.3333 8.00065 13.3333ZM8.00065 6.66658C7.26425 6.66658 6.66732 6.06963 6.66732 5.33325C6.66732 4.59687 7.26425 3.99992 8.00065 3.99992C8.73705 3.99992 9.33398 4.59687 9.33398 5.33325C9.33398 6.06963 8.73705 6.66658 8.00065 6.66658ZM5.33398 9.33325C4.5976 9.33325 4.00065 8.73632 4.00065 7.99992C4.00065 7.26352 4.5976 6.66658 5.33398 6.66658C6.07036 6.66658 6.66732 7.26352 6.66732 7.99992C6.66732 8.73632 6.07036 9.33325 5.33398 9.33325ZM10.6673 9.33325C9.93092 9.33325 9.33398 8.73632 9.33398 7.99992C9.33398 7.26352 9.93092 6.66658 10.6673 6.66658C11.4037 6.66658 12.0007 7.26352 12.0007 7.99992C12.0007 8.73632 11.4037 9.33325 10.6673 9.33325ZM8.00065 11.9999C7.26425 11.9999 6.66732 11.403 6.66732 10.6666C6.66732 9.93018 7.26425 9.33325 8.00065 9.33325C8.73705 9.33325 9.33398 9.93018 9.33398 10.6666C9.33398 11.403 8.73705 11.9999 8.00065 11.9999Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.WEATHER: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.6553 3.37344C7.42088 2.1484 8.78162 1.3335 10.3327 1.3335C12.7259 1.3335 14.666 3.2736 14.666 5.66683C14.666 6.38704 14.4903 7.06623 14.1794 7.66383C14.8894 8.3325 15.3327 9.28123 15.3327 10.3335C15.3327 12.3586 13.6911 14.0002 11.666 14.0002H5.99935C3.05383 14.0002 0.666016 11.6124 0.666016 8.66683C0.666016 5.72131 3.05383 3.3335 5.99935 3.3335C6.22143 3.3335 6.44034 3.34707 6.6553 3.37344ZM8.03628 3.73629C9.37768 4.29108 10.4435 5.37735 10.9711 6.73256C11.1961 6.68943 11.4284 6.66683 11.666 6.66683C12.1561 6.66683 12.6237 6.76296 13.0511 6.93743C13.2317 6.55162 13.3327 6.12102 13.3327 5.66683C13.3327 4.00998 11.9895 2.66683 10.3327 2.66683C9.41115 2.66683 8.58662 3.08236 8.03628 3.73629ZM11.666 12.6668C12.9547 12.6668 13.9993 11.6222 13.9993 10.3335C13.9993 9.04483 12.9547 8.00016 11.666 8.00016C11.013 8.00016 10.4227 8.26836 9.99922 8.70063C9.99928 8.68936 9.99935 8.6781 9.99935 8.66683C9.99935 6.45769 8.20848 4.66683 5.99935 4.66683C3.79021 4.66683 1.99935 6.45769 1.99935 8.66683C1.99935 10.876 3.79021 12.6668 5.99935 12.6668H11.666Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.FINANCE: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00262 14.6685C4.32071 14.6685 1.33594 11.6838 1.33594 8.00184C1.33594 4.31997 4.32071 1.33521 8.00262 1.33521C11.6845 1.33521 14.6693 4.31997 14.6693 8.00184C14.6693 11.6838 11.6845 14.6685 8.00262 14.6685ZM8.00262 13.3352C10.9482 13.3352 13.336 10.9474 13.336 8.00184C13.336 5.05635 10.9482 2.66854 8.00262 2.66854C5.05708 2.66854 2.66927 5.05635 2.66927 8.00184C2.66927 10.9474 5.05708 13.3352 8.00262 13.3352ZM5.66927 9.33517H9.33595C9.52002 9.33517 9.66928 9.18597 9.66928 9.00184C9.66928 8.81777 9.52002 8.66851 9.33595 8.66851H6.66928C5.7488 8.66851 5.0026 7.92237 5.0026 7.00184C5.0026 6.08139 5.7488 5.33521 6.66928 5.33521H7.33595V4.00187H8.66928V5.33521H10.336V6.66851H6.66928C6.48518 6.66851 6.33594 6.81777 6.33594 7.00184C6.33594 7.18597 6.48518 7.33517 6.66928 7.33517H9.33595C10.2564 7.33517 11.0026 8.08137 11.0026 9.00184C11.0026 9.92237 10.2564 10.6685 9.33595 10.6685H8.66928V12.0018H7.33595V10.6685H5.66927V9.33517Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.DESIGN: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M4.70152 9.41416L3.2873 10.8284L5.17292 12.714L12.7154 5.17154L10.8298 3.28592L9.41557 4.70013L10.3584 5.64295L9.41557 6.58575L8.47277 5.64295L7.52997 6.58575L8.47277 7.52856L7.52997 8.47136L6.58713 7.52856L5.64433 8.47136L6.58713 9.41416L5.64433 10.357L4.70152 9.41416ZM11.3012 1.87171L14.1296 4.70013C14.39 4.96049 14.39 5.38259 14.1296 5.64295L5.64433 14.1282C5.38397 14.3886 4.96187 14.3886 4.70152 14.1282L1.87309 11.2998C1.61274 11.0394 1.61274 10.6174 1.87309 10.357L10.3584 1.87171C10.6187 1.61136 11.0408 1.61136 11.3012 1.87171ZM9.41557 12.2423L10.3584 11.2995L11.8534 12.7945H12.7962V11.8517L11.3012 10.3567L12.244 9.41383L14.0011 11.171V13.9999H11.1732L9.41557 12.2423ZM3.75861 6.58533L1.87299 4.69971C1.61265 4.43937 1.61265 4.01725 1.87299 3.75691L3.75861 1.87129C4.01896 1.61094 4.44107 1.61094 4.70142 1.87129L6.58704 3.75691L5.64423 4.69971L4.23002 3.2855L3.28721 4.22831L4.70142 5.64253L3.75861 6.58533Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.TRAVEL: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M9.44839 2C9.80198 2 10.1411 2.14047 10.3912 2.39053L13.6101 5.60947C13.8602 5.85953 14.0007 6.19866 14.0007 6.55229V11.3333H15.334V12.6667L9.91652 12.6672C9.62032 13.8171 8.57638 14.6667 7.33398 14.6667C6.0916 14.6667 5.04766 13.8171 4.75146 12.6672L2.00065 12.6667C1.63246 12.6667 1.33398 12.3682 1.33398 12V3.33333C1.33398 2.59695 1.93094 2 2.66732 2H9.44839ZM7.33398 10.6667C6.5976 10.6667 6.00065 11.2636 6.00065 12C6.00065 12.7364 6.5976 13.3333 7.33398 13.3333C8.07038 13.3333 8.66732 12.7364 8.66732 12C8.66732 11.2636 8.07038 10.6667 7.33398 10.6667ZM9.44839 3.33333H2.66732V11.3333L4.75128 11.3335C5.04726 10.1833 6.09136 9.33333 7.33398 9.33333C8.57658 9.33333 9.62072 10.1833 9.91665 11.3335L12.6673 11.3333V6.55229L9.44839 3.33333ZM9.33398 4.66667V8.66667H4.00065V4.66667H9.33398ZM8.00065 6H5.33398V7.33333H8.00065V6Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.SOCIAL: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.334 7.99992C13.334 5.0544 10.9462 2.66659 8.00065 2.66659C5.05513 2.66659 2.66732 5.0544 2.66732 7.99992C2.66732 10.9455 5.05513 13.3333 8.00065 13.3333C9.09518 13.3333 10.1127 13.0035 10.9594 12.438L11.699 13.5475C10.6408 14.2545 9.36885 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992V8.99992C14.6673 10.2886 13.6227 11.3333 12.334 11.3333C11.5312 11.3333 10.8231 10.9278 10.4032 10.3105C9.79678 10.9409 8.94452 11.3333 8.00065 11.3333C6.1597 11.3333 4.66732 9.84085 4.66732 7.99992C4.66732 6.15897 6.1597 4.66658 8.00065 4.66658C8.75118 4.66658 9.44378 4.91464 10.001 5.33325H11.334V8.99992C11.334 9.55219 11.7817 9.99992 12.334 9.99992C12.8863 9.99992 13.334 9.55219 13.334 8.99992V7.99992ZM8.00065 5.99992C6.89605 5.99992 6.00065 6.89532 6.00065 7.99992C6.00065 9.10452 6.89605 9.99992 8.00065 9.99992C9.10525 9.99992 10.0007 9.10452 10.0007 7.99992C10.0007 6.89532 9.10525 5.99992 8.00065 5.99992Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.NEWS: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.6673 13.3335V2.66683H2.66732V12.6668C2.66732 13.035 2.9658 13.3335 3.33398 13.3335H10.6673ZM12.6673 14.6668H3.33398C2.22942 14.6668 1.33398 13.7714 1.33398 12.6668V2.00016C1.33398 1.63198 1.63246 1.3335 2.00065 1.3335H11.334C11.7022 1.3335 12.0007 1.63198 12.0007 2.00016V6.66683H14.6673V12.6668C14.6673 13.7714 13.7719 14.6668 12.6673 14.6668ZM12.0007 8.00016V12.6668C12.0007 13.035 12.2991 13.3335 12.6673 13.3335C13.0355 13.3335 13.334 13.035 13.334 12.6668V8.00016H12.0007ZM4.00065 4.00016H8.00065V8.00016H4.00065V4.00016ZM5.33398 5.3335V6.66683H6.66732V5.3335H5.33398ZM4.00065 8.66683H9.33398V10.0002H4.00065V8.66683ZM4.00065 10.6668H9.33398V12.0002H4.00065V10.6668Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.MEDICAL: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.79747 1.51186L10.9641 5.26464C11.1482 5.5835 11.0389 5.99122 10.7201 6.17532L9.85373 6.67474L10.5207 7.83001L9.366 8.49668L8.699 7.34141L7.83333 7.84201C7.51447 8.02608 7.10673 7.91681 6.92267 7.59794L5.69747 5.47632C4.32922 5.89145 3.33333 7.16268 3.33333 8.66654C3.33333 9.08348 3.40987 9.48248 3.54965 9.85034C4.06613 9.52254 4.67762 9.33321 5.33333 9.33321C6.45605 9.33321 7.44913 9.88828 8.05313 10.7389L13.1787 7.78014L13.8454 8.93488L8.5932 11.9672C8.64133 12.1927 8.66667 12.4267 8.66667 12.6665C8.66667 12.895 8.64367 13.1181 8.59993 13.3337L14 13.3332V14.6665L2.66703 14.6673C2.2482 14.1101 2 13.4173 2 12.6665C2 11.9951 2.19855 11.3699 2.54014 10.8467C2.19517 10.1964 2 9.45428 2 8.66654C2 6.66968 3.25421 4.96575 5.01785 4.29953L4.75598 3.84519C4.38779 3.20747 4.60629 2.39202 5.24402 2.02382L6.97607 1.02382C7.6138 0.655637 8.42927 0.874138 8.79747 1.51186ZM5.33333 10.6665C4.22877 10.6665 3.33333 11.562 3.33333 12.6665C3.33333 12.9003 3.37343 13.1247 3.44711 13.3331H7.21953C7.29327 13.1247 7.33333 12.9003 7.33333 12.6665C7.33333 11.562 6.4379 10.6665 5.33333 10.6665ZM7.64273 2.17852L5.91068 3.17852L7.744 6.35395L9.47607 5.35395L7.64273 2.17852Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.PRODUCTIVITY: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.64807 11.9999H9.35062C9.43862 11.1989 9.84742 10.5376 10.5111 9.81499C10.5858 9.73365 11.0652 9.23752 11.1221 9.16665C11.6872 8.46199 11.9993 7.58992 11.9993 6.66659C11.9993 4.45745 10.2085 2.66659 7.99935 2.66659C5.79021 2.66659 3.99935 4.45745 3.99935 6.66659C3.99935 7.58945 4.31118 8.46105 4.87576 9.16552C4.93271 9.23659 5.41322 9.73405 5.48704 9.81445C6.15112 10.5375 6.56004 11.1989 6.64807 11.9999ZM9.33268 13.3333H6.66602V13.9999H9.33268V13.3333ZM3.83532 9.99939C3.10365 9.08639 2.66602 7.92759 2.66602 6.66659C2.66602 3.72107 5.05383 1.33325 7.99935 1.33325C10.9449 1.33325 13.3327 3.72107 13.3327 6.66659C13.3327 7.92825 12.8945 9.08759 12.1622 10.0009C11.7487 10.5165 10.666 11.3333 10.666 12.3333V13.9999C10.666 14.7363 10.0691 15.3333 9.33268 15.3333H6.66602C5.92964 15.3333 5.33268 14.7363 5.33268 13.9999V12.3333C5.33268 11.3333 4.24907 10.5157 3.83532 9.99939ZM8.66602 6.66979H10.3327L7.33268 10.6698V8.00312H5.66602L8.66602 3.99992V6.66979Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.EDUCATION: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14 2.66683H4.66667C3.93029 2.66683 3.33333 3.26378 3.33333 4.00016C3.33333 4.73654 3.93029 5.3335 4.66667 5.3335H14V14.0002C14 14.3684 13.7015 14.6668 13.3333 14.6668H4.66667C3.19391 14.6668 2 13.4729 2 12.0002V4.00016C2 2.5274 3.19391 1.3335 4.66667 1.3335H13.3333C13.7015 1.3335 14 1.63198 14 2.00016V2.66683ZM3.33333 12.0002C3.33333 12.7366 3.93029 13.3335 4.66667 13.3335H12.6667V6.66683H4.66667C4.18095 6.66683 3.72557 6.53697 3.33333 6.31008V12.0002ZM13.3333 4.66683H4.66667C4.29848 4.66683 4 4.36835 4 4.00016C4 3.63198 4.29848 3.3335 4.66667 3.3335H13.3333V4.66683Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.BUSINESS: '''<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M3.66732 3.33341V1.33341C3.66732 0.965228 3.9658 0.666748 4.33398 0.666748H9.66732C10.0355 0.666748 10.334 0.965228 10.334 1.33341V3.33341H13.0007C13.3689 3.33341 13.6673 3.63189 13.6673 4.00008V13.3334C13.6673 13.7016 13.3689 14.0001 13.0007 14.0001H1.00065C0.632464 14.0001 0.333984 13.7016 0.333984 13.3334V4.00008C0.333984 3.63189 0.632464 3.33341 1.00065 3.33341H3.66732ZM12.334 8.66675H1.66732V12.6667H12.334V8.66675ZM12.334 4.66675H1.66732V7.33341H3.66732V6.00008H5.00065V7.33341H9.00065V6.00008H10.334V7.33341H12.334V4.66675ZM5.00065 2.00008V3.33341H9.00065V2.00008H5.00065Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.ENTERTAINMENT: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M11.3327 2.66675C13.5418 2.66675 15.3327 4.45761 15.3327 6.66675V9.33342C15.3327 11.5425 13.5418 13.3334 11.3327 13.3334H4.66602C2.45688 13.3334 0.666016 11.5425 0.666016 9.33342V6.66675C0.666016 4.45761 2.45688 2.66675 4.66602 2.66675H11.3327ZM11.3327 4.00008H4.66602C3.23788 4.00008 2.07196 5.12273 2.00262 6.53365L1.99935 6.66675V9.33342C1.99935 10.7615 3.122 11.9275 4.53292 11.9968L4.66602 12.0001H11.3327C12.7608 12.0001 13.9267 10.8774 13.9961 9.46648L13.9993 9.33342V6.66675C13.9993 5.23861 12.8767 4.07269 11.4657 4.00335L11.3327 4.00008ZM6.66602 6.00008V7.33342H7.99935V8.66675H6.66535L6.66602 10.0001H5.33268L5.33202 8.66675H3.99935V7.33342H5.33268V6.00008H6.66602ZM11.9993 8.66675V10.0001H10.666V8.66675H11.9993ZM10.666 6.00008V7.33342H9.33268V6.00008H10.666Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.UTILITIES: '''<svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
  <path d="M12.3346 0.333252C12.7028 0.333252 13.0013 0.631732 13.0013 0.999919V4.33325C13.0013 4.70144 12.7028 4.99992 12.3346 4.99992H9.0013V13.6666C9.0013 14.0348 8.70284 14.3333 8.33463 14.3333H5.66797C5.29978 14.3333 5.0013 14.0348 5.0013 13.6666V4.99992H1.33464C0.966449 4.99992 0.667969 4.70144 0.667969 4.33325V2.74527C0.667969 2.49276 0.810635 2.26192 1.0365 2.14899L4.66797 0.333252H12.3346ZM9.0013 1.66659H4.98273L2.0013 3.1573V3.66659H6.33464V12.9999H7.66797V3.66659H9.0013V1.66659ZM11.668 1.66659H10.3346V3.66659H11.668V1.66659Z" fill="#344054"/>
</svg>''',
    ToolLabelEnum.OTHER: '''<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00052 0.666748L4.00065 7.33342H12.0007L8.00052 0.666748ZM8.00052 3.25828L9.64572 6.00008H6.35553L8.00052 3.25828ZM4.50065 13.3334C3.48813 13.3334 2.66732 12.5126 2.66732 11.5001C2.66732 10.4875 3.48813 9.66675 4.50065 9.66675C5.51317 9.66675 6.33398 10.4875 6.33398 11.5001C6.33398 12.5126 5.51317 13.3334 4.50065 13.3334ZM4.50065 14.6667C6.24955 14.6667 7.66732 13.249 7.66732 11.5001C7.66732 9.75115 6.24955 8.33342 4.50065 8.33342C2.75175 8.33342 1.33398 9.75115 1.33398 11.5001C1.33398 13.249 2.75175 14.6667 4.50065 14.6667ZM10.0007 10.3334V13.0001H12.6673V10.3334H10.0007ZM8.66732 14.3334V9.00008H14.0007V14.3334H8.66732Z" fill="#344054"/>
</svg>'''
}

default_tool_label_dict = {
    ToolLabelEnum.SEARCH: ToolLabel(name='search', label=I18nObject(en_US='Search', zh_Hans='搜索'), icon=ICONS[ToolLabelEnum.SEARCH]),
    ToolLabelEnum.IMAGE: ToolLabel(name='image', label=I18nObject(en_US='Image', zh_Hans='图片'), icon=ICONS[ToolLabelEnum.IMAGE]),
    ToolLabelEnum.VIDEOS: ToolLabel(name='videos', label=I18nObject(en_US='Videos', zh_Hans='视频'), icon=ICONS[ToolLabelEnum.VIDEOS]),
    ToolLabelEnum.WEATHER: ToolLabel(name='weather', label=I18nObject(en_US='Weather', zh_Hans='天气'), icon=ICONS[ToolLabelEnum.WEATHER]),
    ToolLabelEnum.FINANCE: ToolLabel(name='finance', label=I18nObject(en_US='Finance', zh_Hans='金融'), icon=ICONS[ToolLabelEnum.FINANCE]),
    ToolLabelEnum.DESIGN: ToolLabel(name='design', label=I18nObject(en_US='Design', zh_Hans='设计'), icon=ICONS[ToolLabelEnum.DESIGN]),
    ToolLabelEnum.TRAVEL: ToolLabel(name='travel', label=I18nObject(en_US='Travel', zh_Hans='旅行'), icon=ICONS[ToolLabelEnum.TRAVEL]),
    ToolLabelEnum.SOCIAL: ToolLabel(name='social', label=I18nObject(en_US='Social', zh_Hans='社交'), icon=ICONS[ToolLabelEnum.SOCIAL]),
    ToolLabelEnum.NEWS: ToolLabel(name='news', label=I18nObject(en_US='News', zh_Hans='新闻'), icon=ICONS[ToolLabelEnum.NEWS]),
    ToolLabelEnum.MEDICAL: ToolLabel(name='medical', label=I18nObject(en_US='Medical', zh_Hans='医疗'), icon=ICONS[ToolLabelEnum.MEDICAL]),
    ToolLabelEnum.PRODUCTIVITY: ToolLabel(name='productivity', label=I18nObject(en_US='Productivity', zh_Hans='生产力'), icon=ICONS[ToolLabelEnum.PRODUCTIVITY]),
    ToolLabelEnum.EDUCATION: ToolLabel(name='education', label=I18nObject(en_US='Education', zh_Hans='教育'), icon=ICONS[ToolLabelEnum.EDUCATION]),
    ToolLabelEnum.BUSINESS: ToolLabel(name='business', label=I18nObject(en_US='Business', zh_Hans='商业'), icon=ICONS[ToolLabelEnum.BUSINESS]),
    ToolLabelEnum.ENTERTAINMENT: ToolLabel(name='entertainment', label=I18nObject(en_US='Entertainment', zh_Hans='娱乐'), icon=ICONS[ToolLabelEnum.ENTERTAINMENT]),
    ToolLabelEnum.UTILITIES: ToolLabel(name='utilities', label=I18nObject(en_US='Utilities', zh_Hans='工具'), icon=ICONS[ToolLabelEnum.UTILITIES]),
    ToolLabelEnum.OTHER: ToolLabel(name='other', label=I18nObject(en_US='Other', zh_Hans='其他'), icon=ICONS[ToolLabelEnum.OTHER]),
}

default_tool_labels = [v for k, v in default_tool_label_dict.items()]
default_tool_label_name_list = [label.name for label in default_tool_labels]
