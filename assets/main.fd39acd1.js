import{b as p}from"./init.e2c43348.js";console.log("Script started successfully");let e;WA.onInit().then(async()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player);function c(r,t=new Date){return t.setTime(t.getTime()+r*60*60*1e3),t}const A=c(1);let l=0,b=0;console.log(WA.player),console.log(WA.room+"test"),setInterval(function(){let r=new Date().getTime(),t=A.getTime()-r;l=Math.floor(t%(1e3*60*60)/(1e3*60)),b=Math.floor(t%(1e3*60)/1e3)}),WA.chat.onChatMessage(r=>{r=="N"&&WA.room.hideLayer("door_closed4")}),WA.chat.onChatMessage(r=>{r=="\u{1F921}"&&WA.room.hideLayer("door_closed5")}),WA.chat.onChatMessage(r=>{r=="clown"&&WA.chat.sendChatMessage("Tu connais les emojis ?","Maitre du jeu")}),WA.chat.onChatMessage(r=>{r=="q9y4"&&WA.chat.sendChatMessage("As-tu lu mon dernier message ?!","Maitre du jeu")}),WA.chat.onChatMessage(r=>{r=="17i25d"&&WA.room.hideLayer("finalDoor")}),WA.room.onEnterLayer("start").subscribe(()=>{e=WA.ui.openPopup("startingZone",`Bienvenue sur notre carte Escape game 
 le but est de sortir de retourner sur l'autre map, 
 Vous n'aurez pas plus d'indices. GLHF`,[])}),WA.room.onEnterLayer("guess").subscribe(()=>{e=WA.ui.openPopup("guess1","Une fois rentr\xE9 vous devrez trouver le code pour ressortir.",[])}),WA.room.onEnterLayer("first").subscribe(()=>{e=WA.ui.openPopup("first","682 : Un des num\xE9ros est bien plac\xE9.",[])}),WA.room.onEnterLayer("second").subscribe(()=>{e=WA.ui.openPopup("second","614 : Un des num\xE9ros est correct mais mal plac\xE9.",[])}),WA.room.onEnterLayer("third").subscribe(()=>{e=WA.ui.openPopup("third","206 : Deux num\xE9ros sont corrects mais mal plac\xE9s.",[])}),WA.room.onEnterLayer("four").subscribe(()=>{e=WA.ui.openPopup("four","738 : Aucun des num\xE9ros n\u2019est correct.",[])}),WA.room.onEnterLayer("five").subscribe(()=>{e=WA.ui.openPopup("five","780 : Un des num\xE9ros est correct mais mal plac\xE9.",[])}),WA.room.onEnterLayer("six").subscribe(()=>{e=WA.ui.openPopup("six","402 : Deux chiffres sont corrects mais mal plac\xE9s.",[])}),WA.room.onEnterLayer("seven").subscribe(()=>{e=WA.ui.openPopup("seven","079 : Aucun chiffre correct.",[])}),WA.room.onEnterLayer("eight").subscribe(()=>{e=WA.ui.openPopup("eight","345 : Un seul chiffre correct et bien plac\xE9.",[])}),WA.room.onEnterLayer("nine").subscribe(()=>{e=WA.ui.openPopup("nine","870 : Un seul chiffre correct mais mal plac\xE9.",[])}),WA.room.onEnterLayer("ten").subscribe(()=>{e=WA.ui.openPopup("ten","293 : Un seul chiffre correct et bien plac\xE9.",[])}),WA.room.onEnterLayer("n1").subscribe(()=>{e=WA.ui.openPopup("n1","Elle est dans le mot tant et au fond du jardin.",[])}),WA.room.onEnterLayer("n2").subscribe(()=>{e=WA.ui.openPopup("n2","Elle commence la nuit et elle finit le matin.",[])}),WA.room.onEnterLayer("n3").subscribe(()=>{e=WA.ui.openPopup("n3","Elle appara\xEEt deux fois dans l\u2019ann\xE9e.",[])}),WA.room.onEnterLayer("a1").subscribe(()=>{e=WA.ui.openPopup("a1","Cette \xE9tape sera plus dur",[])}),WA.room.onEnterLayer("a2").subscribe(()=>{e=WA.ui.openPopup("a2","Et oui, Bon courage, \u{1F921}",[])}),WA.room.onEnterLayer("a3").subscribe(()=>{e=WA.ui.openPopup("a3","\u{1F921}",[])}),WA.room.onEnterLayer("lastOne").subscribe(()=>{e=WA.ui.openPopup("lastOne","L'alphabet et les chiffres sont invers\xE9",[])}),WA.room.onEnterLayer("firstMessage").subscribe(()=>{WA.chat.sendChatMessage("q","Maitre du jeu")}),WA.room.onEnterLayer("secondMessage").subscribe(()=>{WA.chat.sendChatMessage("9","Maitre du jeu")}),WA.room.onEnterLayer("thirdMessage").subscribe(()=>{WA.chat.sendChatMessage("y","Maitre du jeu")}),WA.room.onEnterLayer("fourthMessage").subscribe(()=>{WA.chat.sendChatMessage("4","Maitre du jeu")}),WA.room.onEnterLayer("openWallZone").subscribe(()=>{WA.room.hideLayer("openWall")}),WA.room.onEnterLayer("closeWallZone").subscribe(()=>{WA.room.showLayer("openWall")}),WA.room.onEnterLayer("clockZone").subscribe(()=>{e=WA.ui.openPopup("clockPopup","Time left: "+l+" "+b,[])}),WA.room.onEnterLayer("door_openZone4").subscribe(()=>{WA.room.showLayer("door_closed4")}),WA.room.onEnterLayer("door_openZone5").subscribe(()=>{WA.room.showLayer("door_closed5")}),WA.room.onLeaveLayer("guess").subscribe(o),WA.room.onLeaveLayer("first").subscribe(o),WA.room.onLeaveLayer("second").subscribe(o),WA.room.onLeaveLayer("third").subscribe(o),WA.room.onLeaveLayer("four").subscribe(o),WA.room.onLeaveLayer("five").subscribe(o),WA.room.onLeaveLayer("six").subscribe(o),WA.room.onLeaveLayer("seven").subscribe(o),WA.room.onLeaveLayer("eight").subscribe(o),WA.room.onLeaveLayer("nine").subscribe(o),WA.room.onLeaveLayer("ten").subscribe(o),WA.room.onLeaveLayer("n1").subscribe(o),WA.room.onLeaveLayer("n2").subscribe(o),WA.room.onLeaveLayer("n3").subscribe(o),WA.room.onLeaveLayer("a1").subscribe(o),WA.room.onLeaveLayer("a2").subscribe(o),WA.room.onLeaveLayer("a3").subscribe(o),WA.room.onLeaveLayer("lastOne").subscribe(o),WA.room.onLeaveLayer("start").subscribe(o),WA.room.onLeaveLayer("clockZone").subscribe(o),p().then(async()=>{console.log("Scripting API Extra ready"),WA.room.getTiledMap().then(async r=>{let t=r.width,W=r.height;for(let n=0;n<t;n++)for(let s=0;s<W;s++)WA.room.setTiles([{x:n,y:s,tile:"dark",layer:"darkness"}]);let i=0,u=0;WA.player.getPosition().then(n=>{i=Math.round(n.x/32),u=Math.round(n.y/32);for(let s=0;s<5;s++)for(let a=0;a<5;a++)WA.room.setTiles([{x:i-2+s,y:u-2+a,tile:null,layer:"darkness"}])}),WA.player.onPlayerMove(async()=>{WA.player.getPosition().then(n=>{if(i!=Math.round(n.x/32)||u!=Math.round(n.y/32)){for(let s=0;s<5;s++)for(let a=0;a<5;a++)WA.room.setTiles([{x:i-2+s,y:u-2+a,tile:"dark",layer:"darkness"}]);i=Math.round(n.x/32),u=Math.round(n.y/32);for(let s=0;s<5;s++)for(let a=0;a<5;a++)WA.room.setTiles([{x:i-2+s,y:u-2+a,tile:null,layer:"darkness"}])}})})})}).catch(r=>console.error(r))}).catch(c=>console.error(c));function o(){e!==void 0&&(e.close(),e=void 0)}
