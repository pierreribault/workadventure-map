import{b as W}from"./init.e2c43348.js";console.log("Script started successfully");let s;WA.onInit().then(async()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player);function c(o,e=new Date){return e.setTime(e.getTime()+o*60*60*1e3),e}const b=c(1);let p=0,A=0;console.log(WA.player),console.log(WA.room+"test"),setInterval(function(){let o=new Date().getTime(),e=b.getTime()-o;p=Math.floor(e%(1e3*60*60)/(1e3*60)),A=Math.floor(e%(1e3*60)/1e3)}),WA.chat.onChatMessage(o=>{o=="N"&&WA.room.hideLayer("door_closed4")}),WA.chat.onChatMessage(o=>{o=="\u{1F921}"&&WA.room.hideLayer("door_closed5")}),WA.chat.onChatMessage(o=>{o=="clown"&&WA.chat.sendChatMessage("Tu connais les emojis ?","Maitre du jeu")}),WA.chat.onChatMessage(o=>{o=="q9y4"&&WA.chat.sendChatMessage("As-tu lu mon dernier message ?!","Maitre du jeu")}),WA.chat.onChatMessage(o=>{o=="17i25d"&&WA.room.hideLayer("finalDoor")}),WA.state.onVariableChange("pneu1").subscribe(o=>{let e=[];WA.state.saveVariable("pneu1",o);let i=WA.state.loadVariable("pneu1"),l=WA.state.loadVariable("pneu2"),u=WA.state.loadVariable("pneu3"),r=WA.state.loadVariable("pneu4");e.push(i,l,u,r);let a=e.filter(Boolean),t=e.length-a.length;i&&l&&u&&r?console.log("TAMERE"):WA.chat.sendChatMessage("Il reste "+t+"/"+e.length+" pneus \xE0 ramasser ","Maitre du jeu")}),WA.state.onVariableChange("pneu2").subscribe(o=>{let e=[];WA.state.saveVariable("pneu2",o);let i=WA.state.loadVariable("pneu1"),l=WA.state.loadVariable("pneu2"),u=WA.state.loadVariable("pneu3"),r=WA.state.loadVariable("pneu4");e.push(i,l,u,r);let a=e.filter(Boolean),t=e.length-a.length;i&&l&&u&&r?console.log("TAMERE"):WA.chat.sendChatMessage("Il reste "+t+"/"+e.length+" pneus \xE0 ramasser ","Maitre du jeu")}),WA.state.onVariableChange("pneu3").subscribe(o=>{let e=[];WA.state.saveVariable("pneu3",o);let i=WA.state.loadVariable("pneu1"),l=WA.state.loadVariable("pneu2"),u=WA.state.loadVariable("pneu3"),r=WA.state.loadVariable("pneu4");e.push(i,l,u,r);let a=e.filter(Boolean),t=e.length-a.length;i&&l&&u&&r?console.log("TAMERE"):WA.chat.sendChatMessage("Il reste "+t+"/"+e.length+" pneus \xE0 ramasser ","Maitre du jeu")}),WA.state.onVariableChange("pneu4").subscribe(o=>{let e=[];WA.state.saveVariable("pneu4",o);let i=WA.state.loadVariable("pneu1"),l=WA.state.loadVariable("pneu2"),u=WA.state.loadVariable("pneu3"),r=WA.state.loadVariable("pneu4");e.push(i,l,u,r);let a=e.filter(Boolean),t=e.length-a.length;i&&l&&u&&r?console.log("TAMERE"):WA.chat.sendChatMessage("Il reste "+t+"/"+e.length+" pneus \xE0 ramasser ","Maitre du jeu")}),WA.room.onEnterLayer("guess").subscribe(()=>{s=WA.ui.openPopup("guess1","Une fois rentr\xE9 vous devrez trouver le code pour ressortir.",[])}),WA.room.onEnterLayer("first").subscribe(()=>{s=WA.ui.openPopup("first","682 : Un des num\xE9ros est bien plac\xE9.",[])}),WA.room.onEnterLayer("second").subscribe(()=>{s=WA.ui.openPopup("second","614 : Un des num\xE9ros est correct mais mal plac\xE9.",[])}),WA.room.onEnterLayer("third").subscribe(()=>{s=WA.ui.openPopup("third","206 : Deux num\xE9ros sont corrects mais mal plac\xE9s.",[])}),WA.room.onEnterLayer("four").subscribe(()=>{s=WA.ui.openPopup("four","738 : Aucun des num\xE9ros n\u2019est correct.",[])}),WA.room.onEnterLayer("five").subscribe(()=>{s=WA.ui.openPopup("five","780 : Un des num\xE9ros est correct mais mal plac\xE9.",[])}),WA.room.onEnterLayer("six").subscribe(()=>{s=WA.ui.openPopup("six","402 : Deux chiffres sont corrects mais mal plac\xE9s.",[])}),WA.room.onEnterLayer("seven").subscribe(()=>{s=WA.ui.openPopup("seven","079 : Aucun chiffre correct.",[])}),WA.room.onEnterLayer("eight").subscribe(()=>{s=WA.ui.openPopup("eight","345 : Un seul chiffre correct et bien plac\xE9.",[])}),WA.room.onEnterLayer("nine").subscribe(()=>{s=WA.ui.openPopup("nine","870 : Un seul chiffre correct mais mal plac\xE9.",[])}),WA.room.onEnterLayer("ten").subscribe(()=>{s=WA.ui.openPopup("ten","293 : Un seul chiffre correct et bien plac\xE9.",[])}),WA.room.onEnterLayer("n1").subscribe(()=>{s=WA.ui.openPopup("n1","Elle est dans le mot tant et au fond du jardin.",[])}),WA.room.onEnterLayer("n2").subscribe(()=>{s=WA.ui.openPopup("n2","Elle commence la nuit et elle finit le matin.",[])}),WA.room.onEnterLayer("n3").subscribe(()=>{s=WA.ui.openPopup("n3","Elle appara\xEEt deux fois dans l\u2019ann\xE9e.",[])}),WA.room.onEnterLayer("a1").subscribe(()=>{s=WA.ui.openPopup("a1","Cette \xE9tape sera plus dur",[])}),WA.room.onEnterLayer("a2").subscribe(()=>{s=WA.ui.openPopup("a2","Et oui, Bon courage, \u{1F921}",[])}),WA.room.onEnterLayer("a3").subscribe(()=>{s=WA.ui.openPopup("a3","\u{1F921}",[])}),WA.room.onEnterLayer("lastOne").subscribe(()=>{s=WA.ui.openPopup("lastOne","L'alphabet et les chiffres sont invers\xE9",[])}),WA.room.onEnterLayer("firstMessage").subscribe(()=>{WA.chat.sendChatMessage("q","Maitre du jeu")}),WA.room.onEnterLayer("secondMessage").subscribe(()=>{WA.chat.sendChatMessage("9","Maitre du jeu")}),WA.room.onEnterLayer("thirdMessage").subscribe(()=>{WA.chat.sendChatMessage("y","Maitre du jeu")}),WA.room.onEnterLayer("fourthMessage").subscribe(()=>{WA.chat.sendChatMessage("4","Maitre du jeu")}),WA.room.onEnterLayer("openWallZone").subscribe(()=>{WA.room.hideLayer("openWall")}),WA.room.onEnterLayer("closeWallZone").subscribe(()=>{WA.room.showLayer("openWall")}),WA.room.onEnterLayer("clockZone").subscribe(()=>{s=WA.ui.openPopup("clockPopup","Time left: "+p+" "+A,[])}),WA.room.onEnterLayer("door_openZone4").subscribe(()=>{WA.room.showLayer("door_closed4")}),WA.room.onEnterLayer("door_openZone5").subscribe(()=>{WA.room.showLayer("door_closed5")}),WA.room.onLeaveLayer("guess").subscribe(n),WA.room.onLeaveLayer("first").subscribe(n),WA.room.onLeaveLayer("second").subscribe(n),WA.room.onLeaveLayer("third").subscribe(n),WA.room.onLeaveLayer("four").subscribe(n),WA.room.onLeaveLayer("five").subscribe(n),WA.room.onLeaveLayer("six").subscribe(n),WA.room.onLeaveLayer("seven").subscribe(n),WA.room.onLeaveLayer("eight").subscribe(n),WA.room.onLeaveLayer("nine").subscribe(n),WA.room.onLeaveLayer("ten").subscribe(n),WA.room.onLeaveLayer("n1").subscribe(n),WA.room.onLeaveLayer("n2").subscribe(n),WA.room.onLeaveLayer("n3").subscribe(n),WA.room.onLeaveLayer("a1").subscribe(n),WA.room.onLeaveLayer("a2").subscribe(n),WA.room.onLeaveLayer("a3").subscribe(n),WA.room.onLeaveLayer("lastOne").subscribe(n),WA.room.onLeaveLayer("start").subscribe(n),WA.room.onLeaveLayer("clockZone").subscribe(n),W().then(async()=>{console.log("Scripting API Extra ready"),WA.room.getTiledMap().then(async o=>{let e=o.width,i=o.height;for(let r=0;r<e;r++)for(let a=0;a<i;a++)WA.room.setTiles([{x:r,y:a,tile:"dark",layer:"darkness"}]);let l=0,u=0;WA.player.getPosition().then(r=>{l=Math.round(r.x/32),u=Math.round(r.y/32);for(let a=0;a<5;a++)for(let t=0;t<5;t++)WA.room.setTiles([{x:l-2+a,y:u-2+t,tile:null,layer:"darkness"}])}),WA.player.onPlayerMove(async()=>{WA.player.getPosition().then(r=>{if(l!=Math.round(r.x/32)||u!=Math.round(r.y/32)){for(let a=0;a<5;a++)for(let t=0;t<5;t++)WA.room.setTiles([{x:l-2+a,y:u-2+t,tile:"dark",layer:"darkness"}]);l=Math.round(r.x/32),u=Math.round(r.y/32);for(let a=0;a<5;a++)for(let t=0;t<5;t++)WA.room.setTiles([{x:l-2+a,y:u-2+t,tile:null,layer:"darkness"}])}})})})}).catch(o=>console.error(o))}).catch(c=>console.error(c));function n(){s!==void 0&&(s.close(),s=void 0)}
