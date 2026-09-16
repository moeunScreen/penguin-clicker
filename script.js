const clickButton = document.querySelector("#clickButton");
const clickCount = document.querySelector("#clickCount");
const penguinImage = document.querySelector("#penguinImage");
const stageName = document.querySelector("#stageName");
const message = document.querySelector("#message");
const clearMessage = document.querySelector("#clearMessage");
const stageElement = document.querySelector(".stage");
const heartImage = document.querySelector("#heartImage");
heartImage.style.display = "none";

let count = 0;
let gameCleared = false;

const stages = [
    {
        count: 0,
        name: "🥚 알",
        image: "images/egg.png",
        message : "아직 알입니다"
    },
    {
        count: 10,
        name: "🐧 펭귄 부화",
        image: "images/penguin.png",
        message : "행운을 빌어요!"
    },
    {
        count: 30,
        name: "👑 왕펭귄",
        image: "images/penguin_king.png",
        message : "왕펭귄!"
    },
    {
        count: 70,
        name: "🐧🐧🐧🐧 펭귄들",
        image: "images/genguin_friends.png",
        message : "펭귄들이 모였습니다!"
    },
    {
        count: 120,
        name: "🛠️🐧🐧🐧🐧",
        image: "images/penguin_craft.png",
        message : "펭귄들이 무언가를 만들고있습니다.... \n 대체 뭘 만드는거죠??"
    },
    {
        count: 200,
        name: "🧊🛶",
        image:  "images/penguin_glass.png",
        message : "펭귄이 만족합니다!\n"
    }
    ,{
        count: 300,
        name: "🍰같이먹어요",
        image:  "images/penguin_glass_c.png",
        message : "게임클리어!\n"
    }
];

clickButton.addEventListener("click", () => {

    if (gameCleared) return;

    if (count >= 70 && count < 200) {
        clickButton.disabled = true;
        return;
    } else {
        clickButton.disabled = false;
    }
    count++;

    clickCount.textContent = count;

    updateStage();

    if (count >= 300) {
        clearGame();
    }
});
heartImage.addEventListener("click", () => {

    if (gameCleared) return;


    if (count >= 70 && count < 200) {
        count++;
        clickCount.textContent = count;
        updateStage();
    }
});

function updateStage() {

    let currentStage = stages[0];

    for (const stage of stages) {
        if (count >= stage.count) {
            currentStage = stage;
        }
    }

    penguinImage.src = currentStage.image;
    stageName.textContent = currentStage.name;
    message.textContent = currentStage.message;
      stageElement.classList.remove(
        "egg",
        "king",
        "friend",
        "craft",
        "glass"
    );

    if(count >= 200){
        stageElement.classList.add("glass");
        heartImage.style.display = "none";
        clickButton.disabled = false;
    }
    else if(count>=120){
        stageElement.classList.add("craft");
        heartImage.style.display = "block";
        clickButton.disabled = true;
    }
    else if(count>=70){
        stageElement.classList.add("friend");
        heartImage.style.display = "block";
        clickButton.disabled = true;
    }
    else if(count>=30){
        stageElement.classList.add("king");
        heartImage.style.display = "none";
        clickButton.disabled = false;

    }
    else{
        stageElement.classList.add("egg");
        heartImage.style.display = "none";
        clickButton.disabled = false;
    }
}


function clearGame() {

    gameCleared = true;
    clickButton.disabled = true;
    heartImage.style.display = "none";
    clearMessage.textContent =
        "🎉!";
}