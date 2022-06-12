/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;


// Waiting for the API to be ready
WA.onInit().then(async () => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player)
    
    function addHours(numOfHours: number, date = new Date()): Date {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
        
        return date;
    }
    
    const start_time = addHours(1);
    
    let minutes = 0;
    let seconds = 0;
    
    type VisiblePosition = {
        x: number,
        y: number,
    }
    
    let visibles: VisiblePosition[] = [];
    let door_amphi = false;
    let door_suite = false;
    

    const myWebsite = await WA.ui.website.open({
        url: "https://e.ggtimer.com/1heures",
        position: {
            vertical: "top",
            horizontal: "middle",
        },
        size: {
            height: "100px",
            width: "600px",
        },
    });

    myWebsite.position.vertical = "top";
    
    // Update the count down every 1 second
    setInterval(function () {
        
        // Get today's date and time
        let now = new Date().getTime();
        
        // Find the distance between now and the count down date
        let distance = start_time.getTime() - now;
        
        // Time calculations for days, hours, minutes and seconds
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    })
    
    WA.chat.onChatMessage((message => {
        if(message == "N") {
            WA.room.hideLayer('door_closed4');
        }
    }));
    
    WA.chat.onChatMessage((message => {
        if(message == "🤡") {
            WA.room.hideLayer('door_closed5');
        }
    }));
    WA.chat.onChatMessage((message => {
        if(message == "clown") {
            WA.chat.sendChatMessage('Tu connais les emojis ?', 'Maitre du jeu');
        }
    }));
    
    WA.chat.onChatMessage((message => {
        if(message == "9y4") {
            WA.chat.sendChatMessage('As-tu lu mon dernier message ?!', 'Maitre du jeu');
        }
    }));
    
    WA.chat.onChatMessage((message => {
        if(message == "i25d") {
            WA.room.hideLayer('finalDoor');
        }
    }));
    
    let triggerPneu = function(data: unknown) {
        let totalPneu: any = [];
        WA.state.saveVariable("pneu4", data);
        let pneu1 = WA.state.loadVariable("pneu1");
        let pneu2 = WA.state.loadVariable("pneu2");
        let pneu3 = WA.state.loadVariable("pneu3");
        let pneu4 = WA.state.loadVariable("pneu4");       
        totalPneu.push(pneu1, pneu2, pneu3, pneu4)
        let pneuOk = totalPneu.filter(Boolean)
        let pneuLeft = totalPneu.length - pneuOk.length;
        if(pneu1 && pneu2 && pneu3 && pneu4) {  
            WA.chat.sendChatMessage("Une porte vient de s'ouvrir ", "Maitre du jeu" )
            
            WA.state.saveVariable('door_2', {
                'default': true
            });
            
            WA.state.loadVariable('door_2')

            if (door_suite == false) {
                WA.camera.set(39 * 32, 36 * 32, undefined, undefined, false, true);
                door_suite = true
            }
            
            for (let x = 0; x < 40; x++) {
                for (let y = 0; y < 30; y++) {
                    WA.room.setTiles([
                        { x: x, y: y, tile: null, layer: "darkness" },
                    ]);
                    
                    visibles.push({ x: x, y: y});
                }
            }
            
            for (let x = 28; x < 40; x++) {
                for (let y = 30; y < 60; y++) {
                    WA.room.setTiles([
                        { x: x, y: y, tile: null, layer: "darkness" },
                    ]);
                    
                    visibles.push({ x: x, y: y});
                }
            }
            
            for (let x = 0; x < 40; x++) {
                for (let y = 54; y < 60; y++) {
                    WA.room.setTiles([
                        { x: x, y: y, tile: null, layer: "darkness" },
                    ]);
                    
                    visibles.push({ x: x, y: y});
                }
            }
        } else {
            WA.chat.sendChatMessage("Il reste " + pneuLeft + "/" + totalPneu.length + " pneus à ramasser ", "Maitre du jeu" )
        }
    }

    WA.state.onVariableChange("pneu1").subscribe(triggerPneu);
    WA.state.onVariableChange("pneu2").subscribe(triggerPneu);
    WA.state.onVariableChange("pneu3").subscribe(triggerPneu);
    WA.state.onVariableChange("pneu4").subscribe(triggerPneu);
    
    
    WA.room.onEnterLayer('trigger_timer_amphi').subscribe(() => {
        currentPopup = WA.ui.openPopup("timer_amphi", "Temps restant: " + minutes + " minutes " + seconds + " secondes", [])
        console.log("test");
    })
    
    WA.room.onEnterLayer('guess').subscribe(() => {
        currentPopup = WA.ui.openPopup("guess1", "L'océan est sale, nettoyez-le.", []);;
    })
    WA.room.onEnterLayer('first').subscribe(() => {
        currentPopup = WA.ui.openPopup("first", "682 : Un des numéros est bien placé.", []);;
    })
    WA.room.onEnterLayer('second').subscribe(() => {
        currentPopup = WA.ui.openPopup("second", "614 : Un des numéros est correct mais mal placé.", []);;
    })
    WA.room.onEnterLayer('third').subscribe(() => {
        currentPopup = WA.ui.openPopup("third", "206 : Deux numéros sont corrects mais mal placés.", []);;
    })
    WA.room.onEnterLayer('four').subscribe(() => {
        currentPopup = WA.ui.openPopup("four", "738 : Aucun des numéros n’est correct.", []);;
    })
    WA.room.onEnterLayer('five').subscribe(() => {
        currentPopup = WA.ui.openPopup("five", "780 : Un des numéros est correct mais mal placé.", []);;
    })
    WA.room.onEnterLayer('six').subscribe(() => {
        currentPopup = WA.ui.openPopup("six", "402 : Deux chiffres sont corrects mais mal placés.", []);;
    })
    WA.room.onEnterLayer('seven').subscribe(() => {
        currentPopup = WA.ui.openPopup("seven", "079 : Aucun chiffre correct.", []);;
    })
    WA.room.onEnterLayer('eight').subscribe(() => {
        currentPopup = WA.ui.openPopup("eight", "345 : Un seul chiffre correct et bien placé.", []);;
    })
    WA.room.onEnterLayer('nine').subscribe(() => {
        currentPopup = WA.ui.openPopup("nine", "870 : Un seul chiffre correct mais mal placé.", []);;
    })
    WA.room.onEnterLayer('ten').subscribe(() => {
        currentPopup = WA.ui.openPopup("ten", "293 : Un seul chiffre correct et bien placé.", []);;
    })
    WA.room.onEnterLayer('n1').subscribe(() => {
        currentPopup = WA.ui.openPopup("n1", "Elle est dans le mot tant et au fond du jardin.", []);;
    })
    WA.room.onEnterLayer('n2').subscribe(() => {
        currentPopup = WA.ui.openPopup("n2", "Elle commence la nuit et elle finit le matin.", []);;
    })
    WA.room.onEnterLayer('n3').subscribe(() => {
        currentPopup = WA.ui.openPopup("n3", "Elle apparaît deux fois dans l’année.", []);;
    })
    WA.room.onEnterLayer('a1').subscribe(() => {
        currentPopup = WA.ui.openPopup("a1", "Cette étape sera plus dur", []);;
    })
    WA.room.onEnterLayer('a2').subscribe(() => {
        currentPopup = WA.ui.openPopup("a2", "Et oui, Bon courage, 🤡", []);;
    })
    WA.room.onEnterLayer('a3').subscribe(() => {
        currentPopup = WA.ui.openPopup("a3", "🤡", []);;
    })
    
    WA.room.onEnterLayer('lastOne').subscribe(() => {
        currentPopup = WA.ui.openPopup("lastOne", "L'alphabet et les chiffres sont inversé", []);;
    })
    
    WA.room.onEnterLayer('secondMessage').subscribe(() => {
        WA.chat.sendChatMessage("9", "Maitre du jeu");
    })
    WA.room.onEnterLayer('thirdMessage').subscribe(() => {
        WA.chat.sendChatMessage("y", "Maitre du jeu");
    })
    WA.room.onEnterLayer('fourthMessage').subscribe(() => {
        WA.chat.sendChatMessage("4", "Maitre du jeu");
    })
    
    WA.room.onEnterLayer('openWallZone').subscribe(() => {
        WA.room.hideLayer('openWall');
    })
    
    WA.room.onEnterLayer('closeWallZone').subscribe(() => {
        WA.room.showLayer('openWall');
    })
    WA.room.onEnterLayer('clockZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("clockPopup", "Time left: " + minutes + " " + seconds, []);;
    })
    
    WA.room.onEnterLayer('door_openZone4').subscribe(() => {
        WA.room.showLayer('door_closed4');
    })
    
    WA.room.onEnterLayer('door_openZone5').subscribe(() => {
        WA.room.showLayer('door_closed5');
    })
    WA.room.onLeaveLayer('guess').subscribe(closePopUp)
    WA.room.onLeaveLayer('first').subscribe(closePopUp)
    WA.room.onLeaveLayer('second').subscribe(closePopUp)
    WA.room.onLeaveLayer('third').subscribe(closePopUp)
    WA.room.onLeaveLayer('four').subscribe(closePopUp)
    WA.room.onLeaveLayer('five').subscribe(closePopUp)
    WA.room.onLeaveLayer('six').subscribe(closePopUp)
    WA.room.onLeaveLayer('seven').subscribe(closePopUp)
    WA.room.onLeaveLayer('eight').subscribe(closePopUp)
    WA.room.onLeaveLayer('nine').subscribe(closePopUp)
    WA.room.onLeaveLayer('ten').subscribe(closePopUp)
    WA.room.onLeaveLayer('n1').subscribe(closePopUp)
    WA.room.onLeaveLayer('n2').subscribe(closePopUp)
    WA.room.onLeaveLayer('n3').subscribe(closePopUp)
    WA.room.onLeaveLayer('a1').subscribe(closePopUp)
    WA.room.onLeaveLayer('a2').subscribe(closePopUp)
    WA.room.onLeaveLayer('a3').subscribe(closePopUp)
    WA.room.onLeaveLayer('lastOne').subscribe(closePopUp)
    WA.room.onLeaveLayer('start').subscribe(closePopUp)
    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('trigger_timer_amphi').subscribe(closePopUp)
    
    WA.room.getTiledMap().then(async (map) => {
        let width = map.width;
        let height = map.height;
        
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                WA.room.setTiles([
                    { x: x, y: y, tile: 6461, layer: "darkness" },
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
                if (playerX != Math.round(position.x / 32) || playerY != Math.round(position.y / 32)) {
                    
                    for (let x = 0; x < 5; x++) {
                        for (let y = 0; y < 5; y++) {
                            if (! visibles.some(position => position.x == playerX - 2 + x && position.y == playerY - 2 + y)) {
                                WA.room.setTiles([
                                    { x: playerX - 2 + x, y: playerY - 2 + y, tile: 6461, layer: "darkness" },
                                ]);
                            }
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
    
    WA.state.onVariableChange('door_amphi').subscribe((data: unknown) => {
        if (data == true) {
            if (door_amphi == false) {
                WA.camera.set(13 * 32, 30 * 32, undefined, undefined, false, true);
                door_amphi = true
            }
            
            for (let x = 0; x < 28; x++) {
                for (let y = 30; y < 53; y++) {
                    WA.room.setTiles([
                        { x: x, y: y, tile: null, layer: "darkness" },
                    ]);
                    
                    visibles.push({ x: x, y: y});
                }
            }
        }
    });
    
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(async () => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export { };
