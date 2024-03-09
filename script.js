let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turnO = true;//player O
let winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//track the click
let count = 0;


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.textContent = "O";
            turnO = false;
            count++;

        }
        else {
            box.textContent = "X";
            turnO = true;
            count++;
        }
        box.disabled = true;

        //function to check winner 
        checkWinner();
        console.log(count);
    });

});
const resetGame = () => {
    turnO = true;
    enableBoxes();
    newGameBtn.style.opacity = 0;
    msg.style.opacity = 0;
    count=0;

};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showDraw = () => {
    msg.innerText = "Game is Draw";
    newGameBtn.style.opacity = 1;
    msg.style.opacity = 1;
    count=0;
    disableBoxes();
}


const showWinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner} `;
    newGameBtn.style.opacity = 1;
    msg.style.opacity = 1;
    count=0;
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
            else if(count===9 &&(pos1Val !== pos2Val || pos2Val !== pos3Val)){
                showDraw();
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

