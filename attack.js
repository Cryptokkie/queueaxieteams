const clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});
const mouseOverEvent = new MouseEvent("mouseover", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

// delay function
const delay = ms => new Promise(res => setTimeout(res, ms));

/*

    Script to send teams to battle in axieinfinity
    In chrome:
    - go to 'My teams'
    - open the developer window (ctrl+shift+i)
    - in the console: dump this entire script there and press enter
    - if there are still battles ready repeat the last steps (reload the page (ctrl+R) and paste the script in the console again, press enter.)

    I mad ethis script for myself because I have so many teams that having to click them all literally hurts my arm
    - It's not suited for a beauty contest
    - it might produce warnings and such
    - the point is: queue all the teams to battle

    How does it do this?
    I am looking for the first occurence of a blue line. You know, the one that indicates that the team is ready.
    If so, the script 'presses' that teams element. This makes a menu appear. The first option of the menu is clicked (send to battle)

    Far from pretty but hey! It saves me a hell of a lot of clicking


    Now the react application has to make a request to the server for each time.
    In the longer run it's better to have the queueing take place on the backend.

    */
''
// Retrieve all teams:
const teams = document.querySelectorAll('.sc-bIKvTM.jfrZFE'); // sc-bIKvTM jfrZFE
// console.log("teams:", teams)


    Array.prototype.forEach.call(teams, async function (team, i) {

        let firstBattleBlueExists = team.querySelector('.sc-hqyNC.hpzzYN'); // hpzzYN = blue (and full)
        // console.log(i, 'firstBattleBlueExists', firstBattleBlueExists)

        if (firstBattleBlueExists) {
            console.log(i, team, 'Blue detected: fight! - clicking team');

            console.log('showing menu....');
            // (team.querySelector('.sc-bIKvTM.jfrZFE').dispatchEvent(clickEvent); // Team div zelf)
            //      team.querySelector('.sc-cgzHhG.ufOnU').dispatchEvent(clickEvent);
            //          team.querySelector('.sc-gFXMyG.fqEjos').dispatchEvent(clickEvent);


            // let hitArea = team
            let hitArea = team.querySelector('.sc-cgzHhG.ufOnU')
            //let hitArea = team.querySelector('.sc-gFXMyG.fqEjos')
            console.log('hitArea', hitArea)
            hitArea.dispatchEvent(mouseOverEvent);
            // hitArea.dispatchEvent(mouseEnterEvent);

            // team.dispatchEvent(clickEvent);
            await delay(75)


            console.log('sendToBattle... - click')
            await delay(75);

            let menu = team.querySelector('.sc-gFXMyG.kdpNsG')
            menu.firstChild.dispatchEvent(clickEvent);

            await delay(700);
            // message appears 'team sent to battle...'
            // click close button:
            // sc-ckYZGd fAZdJR sc-iAyFgw bcILQa
            document.querySelector('.sc-ckYZGd.fAZdJR.sc-iAyFgw.bcILQa').dispatchEvent(clickEvent);

            // wait for menu to disappear:
            await delay(300);


        } else {
            console.log(i, team, 'no "battle ready" found - skipping');
        }

    });
