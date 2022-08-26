const body= document.getElementById('body');
const start = document.getElementById('start');
const start_button = document.createElement('button');
const time_p = document.createElement('p');
start_button.innerText="Start";
let starttime=0;
let endtime=0;
let historytime=document.getElementById('contant');
start_button.className="start_button";
time_p.className="time_p";
time_p.innerText="History";

start.append(start_button)
start_button.addEventListener('click',start_game);
function start_game(){
  document.getElementById('main').style.display="flex";
  document.getElementById('start').style.display="none";
  starttime=Date.now()
  console.log(starttime);
}

function history(){
  document.getElementById('history').style.display="flex";
  document.getElementById('start').style.display="none";
}


//#region

const main = document.getElementById('main');
const element = document.createElement("div");
const content = document.createElement("div");
const elements = document.getElementsByClassName('elem');
let activenumber;
let activenumber2;
let activenumbers = [];
let activenumbersId = [];
let cell2;
let count = 0;
let cell1;
const fragment = new DocumentFragment();

const matric = [[[], [], [], []], [[], [], [], []], [[], [], [], []], [[], [], [], []]];
const numbers = [];
const includes2times = [];

element.className = "elements";

content.classList.add("d-none");
content.classList.add("elem");


//16 hat div-i steghcum
for (let i = 0; i < 16; i++) {
  element.append(content)
  fragment.appendChild(element.cloneNode(true));

}
main.appendChild(fragment);
function random_number_generator() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let random_number = Math.floor(Math.random() * 8);
      if (includes2times.includes(random_number)) {
        j--;
      } else if (numbers.includes(random_number) && !includes2times.includes(random_number)) {
        includes2times.push(random_number);
        matric[i][j].push(random_number);

        elements[4 * i + j].innerText = random_number;
      } else if (!numbers.includes(random_number) && !includes2times.includes(random_number)) {
        matric[i][j].push(random_number);
        numbers.push(random_number);

        elements[4 * i + j].innerText = random_number;
      }
    }
  }
}
function endGame(){
  endtime=Date.now();
  let time=endtime-starttime;
  
  main.style.display="none";
  
  body.append(time_p);
  time_p.className="game_time"
  
  let relod=document.createElement('button');
  relod.innerText="Play Again";
  body.append(relod);
  min = Math.floor((time/1000/60) << 0),
  sec = Math.floor((time/1000) % 60);
  time_p.innerText=`GAME TIME - ${min + ':' + sec}`;

  
  relod.addEventListener('click',() => document.location.reload(true))
  relod.className="relod_button";
  
}


function Click(e) {
  let greenCount=0;
  for(let i of elements){
  if(i.parentElement.style.backgroundColor=="green"){
    greenCount++;
  }
}
if(greenCount>15){
  endGame();
}

  if(e.target.children[0].classList.contains("d-none")){
  if (e.target.className == "elements") {
    console.log(e.target)
    cell2 = cell1;
    if (count < 2) {
      e.target.children[0].classList.remove("d-none");
      ++count;
    }
    if (count == 1) {
      cell1 = e.target;
    }
    if (count == 2) {
      cell2 = e.target;
      compare(cell1, cell2)
    }
  }

}
}



function compare(cell1, cell2) {
  console.log(cell2, cell1);
  console.log(cell1.children[0].innerText, cell2.children[0].innerText)
  setTimeout
  if (cell1.children[0].innerText == cell2.children[0].innerText) {

    cell1.style.backgroundColor = 'green';
    cell2.style.backgroundColor = 'green';



    count = 0;



  }

  else {
    setTimeout(() => {
      cell1.children[0].classList.add("d-none");
      cell1.children[0].classList.add("unclick");
      
      cell2.children[0].classList.add("unclick");
      cell2.children[0].classList.add("d-none");

    }, 1000)
    count = 0;

  }

}





main.addEventListener("click", Click);
random_number_generator();
console.log(matric, numbers);

//#endregion

