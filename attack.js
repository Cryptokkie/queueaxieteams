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
    How to use the script:
    In google chrome:

    go to 'My teams' https://axieinfinity.com/battle-lobby/my-teams
    open chrome's developer window (ctrl+shift+i)
    in the console: dump this entire script there and press enter
    if there are still battles ready repeat the last steps (reload the page (ctrl+R) and paste the script in the console again, press enter.)
*/

// Retrieve all teams:
const teams = document.querySelectorAll('.sc-bIKvTM.jfrZFE'); // sc-bIKvTM jfrZFE
// console.log("teams:", teams)

    Array.prototype.forEach.call(teams, async function (team, i) {

        let firstBattleBlueExists = team.querySelector('.sc-hqyNC.hpzzYN'); // hpzzYN = blue (and full)
        // console.log(i, 'firstBattleBlueExists', firstBattleBlueExists)

        if (firstBattleBlueExists) {
            console.log(i, team, 'Blue detected: fight! - clicking team');

            console.log('showing menu....');
            // (team.querySelector('.sc-bIKvTM.jfrZFE').dispatchEvent(clickEvent); // Team div itself)
            //      team.querySelector('.sc-cgzHhG.ufOnU').dispatchEvent(clickEvent);
            //          team.querySelector('.sc-gFXMyG.fqEjos').dispatchEvent(clickEvent);


            let hitArea = team.querySelector('.sc-cgzHhG.ufOnU')
            hitArea.dispatchEvent(mouseOverEvent);
            console.log('sendToBattle... - click')
            await delay(100);
            let menu = team.querySelector('.sc-gFXMyG.kdpNsG')
            menu.firstChild.dispatchEvent(clickEvent);
            await delay(700);
            // message appears 'team sent to battle...'
            // click close button:
            document.querySelector('.sc-ckYZGd.fAZdJR.sc-iAyFgw.bcILQa').dispatchEvent(clickEvent);

            // wait for menu to disappear:
            await delay(300);

        } else {
            console.log(i, team, 'no "battle ready" found - skipping');
        }

    });
