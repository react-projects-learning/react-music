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

- How to get duration of a song? -> audioRef?.current?.duration

- How to change start and end time? -> audioRef?.current?.currentTime

- How to run that progress bar to show song progress? (timePassed / totalDuration)

- How to update timings on screen? -> do we need to use setInterval for every 100 seconds and clear it if song is paused

- what happens when a new song is selected? Do we need to play it or not?

- if we are using interval we need to clear it if song changes

- How to bind the audio to the progress bar input? (so seeking progressBar should take song at that time)
