# queueaxieteams
Script for queueing all axieinfinity.com axie-teams for battle in one go 

### Why?
At the moment of writing users of axieinfinity have to click several times per team to send it for three battle rounds.
I have [quite a lot of axies](https://axieinfinity.com/profile/0xa374a95b8246cc6d9c5bb660a913571be8c2d8aa) in over 30 battle-teams. To send these to battle I had to click more than 180 times. 
I thought:
> Man! Write a script that does this clicking for you damnit!

Now, many days after that thought, I finally made my ass sit down and started programming.
When I was finished I thought:
> While I'm at - why not improve the quality of life of my fellow axie battle opponents and share it with them too?

So here it is!

### How to use the script:

  In Google chrome browser:
  - go to 'My teams' https://axieinfinity.com/battle-lobby/my-teams
  - open chrome's developer tool window <kbd>Ctrl</kbd>+<kbd>shift</kbd>+<kbd>i</kbd>
  - Select the entire content <kbd>Ctrl</kbd>+<kbd>A</kbd> of the JavaScript file [attack.js](https://raw.githubusercontent.com/Cryptokkie/queueaxieteams/master/attack.js), copy it to the clipboard <kbd>Ctrl</kbd>+<kbd>C</kbd> and paste it <kbd>Ctrl</kbd>+<kbd>V</kbd> in the dev console at the prompt. After that - press <kbd>enter</kbd>.
  - All teams will be queued for the first battle.
  - if there are still battles ready repeat the last steps. (Reload the page first! <kbd>Ctrl</kbd>+<kbd>R</kbd>, after that paste the script in the console again, press <kbd>enter</kbd>.)


### Some disclaimerish warning statements:
- The script depends on generated (uglified/obfuscated)-css classes - so anytime these names change the script becomes unusable until the proper classes have been set again.
- I made this script for myself because I have so many teams that having to click them all literally hurts my arm
- Code is not planning to participate in a beauty contest
- Might produce and display warnings/errors - I am not going to fix this anytime soon, the point is: queue all teams at once
- I am not a member of the axie team, just a user of Axie infinity

> Wow man! It's incredible, how does it do this?

First the script collects all the team-divs.
Than it starts looking for the first occurence of a blue line - you know, the one that indicates that the team is ready and is orange if it is not.
If it finds the blue indicator, the script 'presses / mouseovers' that teams element. 
This makes a menu appear. The first option of that menu is 'send to battle' - the script 'clicks' on it. 

Yes, a very ghetto lo-tec solution... but hey! It does save me a hell a lot of clicking.

### For ze future (TODO):
- To you, axie developer/architect - The react application has to make a request to the server for each battle. In the longer run it's probably better to have batch-queueing take place on the backend.

Remember: This is just a temporary solution until the axie devteam implements similar functionality on the website. When the time comes they have, we can all think back of this time and smile. How silly we were...

Enjoy! 

@Cryptokkie discord twitter
