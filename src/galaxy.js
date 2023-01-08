const area = document.querySelector("#galaxy");
let amountMeteor = 10;
let amountStar = 100;
let i = 0;
let j = 0;
let k = 0;

function galaxy() {
  while (i < amountMeteor) {
    // meteor from top
    let drop = document.createElement("span");
    let size = Math.random();
    let posX = Math.floor(Math.random() * area.offsetWidth);
    let delay = Math.random() * -200000;
    let duration = Math.random() * 600 + 5;

    drop.style.width = size + "px";
    drop.style.left = posX + "px";
    drop.style.top = 0;
    drop.style.animationDelay = delay + "s";
    drop.style.animationDuration = duration + "s";
    area.appendChild(drop);
    i++;
  }

  while (k < amountMeteor * 2) {
    // meteor from right
    let drop = document.createElement("span");
    let size = Math.random();
    let posY = Math.floor(Math.random() * area.offsetHeight);
    let delay = Math.random() - 200;
    let duration = Math.random() * 600 + 5;

    drop.style.width = size + "px";
    drop.style.right = "15px";
    drop.style.top = posY + "px";
    drop.style.animationDelay = delay + "s";
    drop.style.animationDuration = duration + "s";
    area.appendChild(drop);
    k++;
  }

  while (j < amountStar) {
    let star = document.createElement("j");
    let size = Math.random() * 2;
    let posX = Math.floor(Math.random() * area.offsetWidth * 2);
    let posY = Math.floor(Math.random() * area.offsetHeight);
    let duration = Math.random() * 5000 + 10;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = posX + "px";
    star.style.top = posY + "px";
    star.style.animationDuration = duration + "s";

    area.appendChild(star);
    j++;
  }
}

galaxy();

