export const singer = state => state.singer
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playList = state => state.playList
export const orderPlayList = state => state.orderPlayList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex
export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}



