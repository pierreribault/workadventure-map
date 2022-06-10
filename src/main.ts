/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { SourceMap } from "module";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })



    WA.room.onEnterLayer('popupZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("zonePopup","Infos pratiques À lire attentivement Votre mission principale est de déverrouiller la porte ! Vous aurez tout au long de votre aventure plusieurs énigmes qui vous permettra d’obtenir un code à 7 chiffres. Vous aurez besoin d’un papier et d’un stylo. Il est nécessaire que vous noté sur papier chaque indice que vous aurez trouvé. Tout au long de votre parcours vous n’aurez pas le plaisir de voir l’intégralité de la carte du au faite que vous saurez dans le noir. Alors faite attentions à chaque détail. Et enfin vous avez 60min pour ouvrir la porte. Le décompte s’activera quand tous les participant seront dans la salle. Bonne aventure...",[]);
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
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
