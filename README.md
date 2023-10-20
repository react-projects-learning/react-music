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
- songTimingInfo (include currentTime, duration)

### Player control:-

- play / pause click => it seems like a toggle button. how to play / pause song in HTML?
- next click => find the currentSong and find next song and make it currentSong
- back click => find the currentSong and find before song and make it currentSong

### Time control:-

- How to get duration of a song? -> audioRef?.current?.duration

- How to change start and end time? -> audioRef?.current?.currentTime

- How to run that progress bar to show song progress? (timePassed / totalDuration)
  not required. think of it as an input with range and max value to be song duartion and currentTime to be the value

- How to update timings on screen? -> do we need to use setInterval for every 100 seconds and clear it if song is paused
  let's use inbuilt audio methods instead of interval

- when we select new song we need to play it from start. How to do this?
  audioRef.current.play() will return a promise and when this promise is resolved the song will start tot play

- How to bind the audio to the progress bar input? (so seeking progressBar should take song at that time) -> take input as range one with min=0, max=duration and value=curretTime and onChnage is called whenever we drag the range input

- When the selected audio ends we want to play the next song. so we need an event to detect that the current song has ended. Html audio element has an event called "ended"
