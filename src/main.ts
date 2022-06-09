/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(async () => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player)

    function addHours(numOfHours: number, date = new Date()): Date {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

        return date;
    }

    const start_time = addHours(1);

    let minutes = 0;
    let seconds = 0;

    console.log(WA.player)
    console.log(WA.room)

    // Update the count down every 1 second
    setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = start_time.getTime() - now;

        // Time calculations for days, hours, minutes and seconds
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    })


    WA.room.onEnterLayer('clockZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("clockPopup","Time left: " + minutes + " " + seconds,[]);;
    })

    WA.room.onEnterLayer('popupZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("zonePopup","nique ta pute de mère",[]);
    })

    WA.room.onEnterLayer('openWallZone').subscribe(() => {
        WA.room.hideLayer('openWall');
    })

    WA.room.onEnterLayer('closeWallZone').subscribe(() => {
        WA.room.showLayer('openWall');
    })

    WA.room.onLeaveLayer('popupZone').subscribe(closePopUp)

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(async () => {
        console.log('Scripting API Extra ready');

        WA.room.getTiledMap().then(async (map) => {
            let width = map.width;
            let height = map.height;

            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    WA.room.setTiles([
                        { x: x, y: y, tile: 7, layer: "darkness" },
                    ]);
                }
            }

            let playerX = 0;
            let playerY = 0;

            WA.player.getPosition().then((position) => {
                playerX = Math.round(position.x / 32);
                playerY = Math.round(position.y / 32);
            
                for (let x = 0; x < 5; x++) {
                    for (let y = 0; y < 5; y++) {
                        WA.room.setTiles([
                            { x: playerX - 2 + x, y: playerY - 2 + y, tile: null, layer: "darkness" },
                        ]);
                    }
                }
            });

            WA.player.onPlayerMove(async () => {
                WA.player.getPosition().then((position) => {
                    if (playerX !=  Math.round(position.x / 32) || playerY != Math.round(position.y / 32)) {
                        for (let x = 0; x < 5; x++) {
                            for (let y = 0; y < 5; y++) {
                                WA.room.setTiles([
                                    { x: playerX - 2 + x, y: playerY - 2 + y, tile: 7, layer: "darkness" },
                                ]);
                            }
                        }

                        playerX = Math.round(position.x / 32);
                        playerY = Math.round(position.y / 32);
                    
                        for (let x = 0; x < 5; x++) {
                            for (let y = 0; y < 5; y++) {
                                WA.room.setTiles([
                                    { x: playerX - 2 + x, y: playerY - 2 + y, tile: null, layer: "darkness" },
                                ]);
                            }
                        }
                    }
                });
            });
        });        
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
