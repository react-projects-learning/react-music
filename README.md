### for styling we can use sass partials

Styles Folder structure we can use:-

- abstracts:- functions, variables and mixins
- base:- typography, reset
- components
- layouts / page level

### datasource -> list of songs

### states:-

- allSongs (have an active flag to indicate the current playing song)
- currentSong
- isPlaying (its true show pause button else show play button)

### Player control:-

- play / pause click => it seems like a toggle button. how to play / pause song in HTML?
- next click => find the currentSong and find next song and make it currentSong
- back click => find the currentSong and find before song and make it currentSong

### Time control:-

- How to get duration of a song?
- How to change start and end time?
- How to run that progress bar to show song progress? (timePassed / totalDuration)
- How to bind the audio to the progress bar input? (so seeking progressBar should take song at that time)
