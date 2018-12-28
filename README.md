# queueaxieteams
Script for queueing all axieinfinity.com axie-teams for battle in one go 

### Why?
At the moment of writing users of axieinfinity have to click several times per team to send it for three battle rounds.
I have over 30 teams and it got annoying, that is why I decided to write this script.
It's just a temporary solution until the axie devteam improves this functionality.

### How to use the script:

  In google chrome:
  - go to 'My teams' https://axieinfinity.com/battle-lobby/my-teams
  - open chrome's developer window (ctrl+shift+i)
  - in the console: dump this entire script there and press enter
  - if there are still battles ready repeat the last steps (reload the page (ctrl+R) and paste the script in the console again, press enter.)


### Some disclaimerish warning statements:
- The script depends on generated (uglified/obfuscated)-css classes - so anytime these names change the script becomes unusable until the proper classes have been set again.
  - I made this script for myself because I have so many teams that having to click them all literally hurts my arm
  - Code is not planning to participate in a beauty contest
  - Might produce and display warnings/errors - I am not going to fix this anytime soon, the point is: queue all teams at once
  - I am not a member of the axie team, just a user of Axie infinity

> Wow man! It's incredible, how does it do this?

First the script collects all the team-divs
Than it starts looking for the first occurence of a blue line - you know, the one that indicates that the team is ready and is orange if it is not.
If it finds the blue indicator, the script 'presses/mouseovers' that teams element. 
This makes a menu appear. The first option of that menu is than clicked (The one that says: 'send to battle')

Yes, a lo-tec - far from pretty ghetto tech solution... but hey! It does save me a hell a lot of clicking

### For ze future:
- Maybe wrap the script in a chrome extension... maybe
- To you, axie developer/architect - The react application has to make a request to the server for each teambattle. In the longer run it's probably better to have the queueing take place on the backend.


