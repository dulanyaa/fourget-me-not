# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Dulanya Cooray**

Time spent: **2** hours spent in total

Link to project: https://prework-dulanya.glitch.me 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* Math.random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
* Timer: https://www.w3schools.com/js/js_timing.asp 
* Stopping Timer: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
* A challenge I faced was the implementation of the timer function. I have never used javascript in a project before and had to look up certain functions. I found a tutorial about making timers in javascript, but this ended up displaying what the local time was instead of counting down. This code used a Date object to do this, and I did not know how to only display the minutes and seconds for a Date object. I was also not sure how to display the time, as it needed to be constantly updated.
* As I took a closer look at my code, I realized that the issue could be broken into 2 parts: finding the amount of time left, and displaying that time. I decided to get rid of the date object, and use the setInterval function to keep track of time. I realized that if I just kept track of the total time in seconds, this could be manipulated to show minutes and seconds when being displayed. I recalled that I had studied modular arithmetic in my discrete math class, and I used my knowledge here to create the effect of seconds ‘rolling over’ to 00 after every minute. I feel more confident in my javascript skills, and my ability to combine different kinds of knowledge to find a solution to challenges. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
* My coding experience has been primarily with back-end applications. What are some differences in the ways a developer would approach a complex web development project vs. a back-end one? 
* Are there any transferable skills between these two kinds of development? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
* I would have liked to include additional features. I would have liked to include other images and sound to make the game more interesting to look at and play (I did this for a school project written in Java to create a game in which a character explores an underground maze.) 
* I thought it would be interesting to create a pattern of tones that resembled a song people would recognize, to make the game more enjoyable. I would have also liked to explore how I could have created a pop-up that would play the music video for that song after the player guessed the pattern correctly. 





## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Dulanya Cooray]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.