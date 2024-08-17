// function createNewElements(fieldCreate, counter, idElem, newClass, cc ){
//     for (let i = cc; i <= counter; i++) {
//         const newEl = document.createElement('div');
//         newEl.setAttribute("id", String(i)+idElem);
//         newEl.setAttribute("class", newClass);
//         newEl.innerText = newEl.id;
//         fieldCreate.appendChild(newEl);
//         // console.log(newEl);
//     }
// }
//
// console.log("2121212")
//
// const tableCells = document.querySelector('.table-cells');
// const field = document.querySelector('.field__cells');
//
// createNewElements(tableCells, 4, "playerCell", "player-elem", 1);
// createNewElements(field, 36, "", "elem-droppableArea", 1);
//
// const playerCells = document.querySelectorAll('.player-elem');
//
// playerCells.forEach((cell, ind) => {
//     createNewElements(cell, ind+1, "pl", "player-draggableElement", ind+1);
// });
//
// function makeNewStep() {
//     const step = Math.floor(Math.random()*6 + 1);
//     return step;
// }
//
// const dropBtn = document.querySelector('.drop-btn');
// const stepCounter = document.querySelector('.step-counter');
// const draggablePlayers = document.querySelectorAll('.player-draggableElement');
// const droppableArea = document.querySelectorAll('.elem-droppableArea');
//
// draggablePlayers.forEach((player) => {
//     player.setAttribute("draggable", false)
// });
//
// let activePlayer = 4;
//
// const dataOfGameAndPlayers = require('./objects');
// const playersData = dataOfGameAndPlayers.playersList;
// const gameData = dataOfGameAndPlayers.gameData;
//
// dropBtn.addEventListener("click", function (){
//
//     dropBtn.disabled = true;
//     const stepCount = makeNewStep();
//     stepCounter.innerText = stepCount + '';
//     activePlayer = activePlayer%4 == 0 ? 1 : activePlayer+1;
//
//     gameData.activePlayerInd = activePlayer - 1;
//     gameData.nextCell = playersData[activePlayer - 1].currentCoord + stepCount;
//
//     const currentPlayer = draggablePlayers[gameData.activePlayerInd];
//     currentPlayer.draggable = true;
//
//     currentPlayer.addEventListener('dragstart', (event) => {
//         event.dataTransfer.setData('text/plain', event.target.id);
//     });
//
//     droppableArea[gameData.nextCell - 1].setAttribute("ondragover", "dragoverHandler(event);");
//     droppableArea[gameData.nextCell - 1].setAttribute("ondrop", "dropHandler(event);");
// });
//
//
// function dragoverHandler(ev) {
//     ev.preventDefault();
// }
//
// function dropHandler(ev) {
//     ev.preventDefault();
//     const data = ev.dataTransfer.getData('text/plain');
//     const draggableElement = document.getElementById(data);
//     ev.target.appendChild(draggableElement);
//
//     playersData[gameData.activePlayerInd].currentCoord = gameData.nextCell;
//
//     // if (Number(currentCellId) === nextCell){
//     droppableArea[gameData.nextCell - 1].removeAttribute("ondrop");
//     droppableArea[gameData.nextCell - 1].removeAttribute("ondragover");
//     draggablePlayers[gameData.activePlayerInd].draggable = false;
//     dropBtn.disabled = false
//     // }
// }




// function createNewElements(fieldCreate, counter, idElem, newClass, cc ){
//     for (let i = cc; i <= counter; i++) {
//         const newEl = document.createElement('div');
//         newEl.setAttribute("id", String(i)+idElem);
//         newEl.setAttribute("class", newClass);
//         newEl.innerText = newEl.id;
//         fieldCreate.appendChild(newEl);
//         // console.log(newEl);
//     }
// }




// createNewElements(backgroundTableCells, 4, "playerCell", "player-elem", 1);
// createNewElements(field, 36, "", "elem-droppableArea", 1);

// const playerCells = document.querySelectorAll('.player-elem');

// playerCells.forEach((cell, ind) => {
//     createNewElements(cell, ind+1, "pl", "player-draggableElement", ind+1);
// });

// function makeNewStep() {
//     const step = Math.floor(Math.random()*6 + 1);
//     return step;
// }

// const dropBtn = document.querySelector('.drop-btn');
// const stepCounter = document.querySelector('.step-counter');
// const draggablePlayers = document.querySelectorAll('.player-draggableElement');
// const droppableArea = document.querySelectorAll('.elem-droppableArea');
//
// draggablePlayers.forEach((player) => {
//     player.setAttribute("draggable", false)
// });

// console.log(droppableArea);
// console.log(draggablePlayers);

// const playersList = [{
//     currentCoord : 0,
// } ,
//     {
//         currentCoord : 0,
//     },
//     {
//         currentCoord : 0,
//     },
//     {
//         currentCoord: 0,
//     }]

// const gameOptions = {
//     nextCell: 0,
//     activePlayerInd: 0
// }

// let activePlayer = 4;

//
// function createNextCell
//

// dropBtn.addEventListener('click', function (){
    // dropBtn.disabled = true
    // const stepCount = makeNewStep();
    // stepCounter.innerText = stepCount + '';
    // console.log("STEP:", stepCount)
    // activePlayer = activePlayer%4 == 0 ? 1 : activePlayer+1;
    // gameOptions.activePlayerInd = activePlayer - 1;
    // gameOptions.nextCell = playersList[activePlayer-1].currentCoord + stepCount;
    //
    //
    // const currentPlayer = draggablePlayers[gameOptions.activePlayerInd];
    // currentPlayer.draggable = true
    // console.log(currentPlayer)

    // playersList[activePlayerInd].nextCell = playersList[activePlayerInd].currentCoord + stepCount;
    // console.log("NEXT CELL BEFORE DROP:", nextCell)


    // console.log(droppableArea[nextCell-1]);

// });


// function dragoverHandler(ev) {
//     ev.preventDefault();
// }
//
// function dropHandler(ev) {
//     ev.preventDefault();
//     const data = ev.dataTransfer.getData('text/plain');
//     const draggableElement = document.getElementById(data);
//     ev.target.appendChild(draggableElement);
//     playersList[activePlayer-1].currentCoord = gameOptions.nextCell;
//     // const currentCellId = currentPlayer.parentElement.id;
//     // playersList[activePlayerInd].currentCoord = nextCell;
//
//     // if (Number(currentCellId) === nextCell){
//     droppableArea[gameOptions.nextCell - 1].removeAttribute("ondrop");
//     droppableArea[gameOptions.nextCell - 1].removeAttribute("ondragover");
//     draggablePlayers[gameOptions.activePlayerInd].draggable = false;
//     dropBtn.disabled = false
//     // }
// }


// droppableArea[nextCell-1].classList.add("droppable-el");
// const activeDroppableArea = document.querySelector(".droppable-el");
// // console.log(activeDroppableArea);
// console.log('ACTIVE AREA BEFORE DROP:', activeDroppableArea);
//
// currentPlayer.addEventListener('dragstart', (event) => {
//     event.dataTransfer.setData('text/plain', event.target.id);
// });


//     activeDroppableArea.addEventListener('drop', (event) => {
//         event.preventDefault();
//         const data = event.dataTransfer.getData('text/plain');
//         const draggableElement = document.getElementById(data);
//         event.target.appendChild(draggableElement);
//
//         const currentCellId = currentPlayer.parentElement.id;
//         console.log("ID:", currentPlayer.parentElement.id)
//         console.log("ELEMENTP:", currentPlayer.parentElement)
//
//         playersList[activePlayerInd].currentCoord = nextCell;
//         console.log("NEXT CELL AFTER DROP:", nextCell)
//         console.log('ACTIVE AREA AFTER DROP:', activeDroppableArea);
//         console.log("COORD I NEED:", playersList[activePlayerInd].currentCoord)
//         console.log("WHERE I:", currentCellId)
//         console.log('ACTIVE AREA:', activeDroppableArea);
//
//
//         if( Number(currentCellId) === nextCell) {
//             // droppableArea[nextCell-1].classList.remove("droppable-el");
//
//             currentPlayer.draggable = false;
//             dropBtn.disabled = false
//
//             activeDroppableArea.removeEventListener('drop', event);
//         } else {
//             console.log("NO")
//         }
//
//
//     });
//     activeDroppableArea.addEventListener('dragover', (event) => {
//         event.preventDefault();
//     });
//
//


// draggablePlayers.forEach((player) => {
//     player.setAttribute("draggable", true)
//     player.addEventListener('dragstart', (event) => {
//         event.dataTransfer.setData('text/plain', event.target.id);
//     });
//     droppableArea.forEach((elem) =>{
//         elem.addEventListener('drop', (event) => {
//             event.preventDefault();
//             const data = event.dataTransfer.getData('text/plain');
//             const draggableElement = document.getElementById(data);
//             event.target.appendChild(draggableElement);
//
//             // console.log(elem)
//             // console.log("====================")
//             // console.log(player)
//             // console.log("====================")
//         });
//         elem.addEventListener('dragover', (event) => {
//             event.preventDefault();
//         });
//     });
//
// });
