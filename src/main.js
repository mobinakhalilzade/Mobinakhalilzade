import * as data from "./data.json" assert { type: "json" };

const area = document.querySelector("#galaxy");
let amountMeteor = 100;
let amountStar = 600;
let i = 0;
let j = 0;
let k = 0;

function galaxy() {
  while (i < amountMeteor) {
    // meteor from top
    let drop = document.createElement("span");
    let size = Math.random() + 0.5;
    let posX = Math.floor(Math.random() * area.offsetWidth);
    let delay = Math.random() * -200000;
    let duration = Math.random() * 200 + 3;

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
    let size = Math.random() + 0.3;
    let posY = Math.floor(Math.random() * area.offsetHeight);
    let delay = Math.random() - 200;
    let duration = Math.random() * 300 + 3;

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
    let size = Math.random() * 3;
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

function renderMenu() {
  const navbar = document.getElementById("navbar");
  let html = "";
  data.default.menuItem.forEach((i) => {
    let anchor = `<a href="#${i.link}" class="text-base font-medium
     text-white hover:text-pink">${i.name}</a>`;
    html += anchor;
  });
  navbar.innerHTML = html;
}

function renderProfessionalSection() {
  const photo = document.getElementById("photo");
  photo.innerHTML = `<img width="200" height="100" class="mx-auto rounded-full mb-4 shadow-md"
    src="${data.default.about.professional.img}" alt="${data.default.about.professional.title}" />
    <div class="flex justify-center">
   <p class="text-black basis-full md:basis-2/3">${data.default.about.professional.description}</p></div>
   <div class="text-center text-pink mx-auto">
   <label class="block my-5">Here my resume</label>
   <a target="_blank"href=${data.default.about.professional.link}><i class="fa-solid fa-file-lines fa-2xl"></i></a></div>
   `;
}

function renderSkills() {
  const skills = document.getElementById("skills");
  let h2 = document.createElement("h2");
  let i = document.createElement("i");
  i.classList.add("fa-solid", "fa-code", "text-blue");
  const skillText = document.createTextNode("Skills ");
  h2.appendChild(skillText);
  h2.appendChild(i);
  h2.classList.add("text-black", "text-center", "pb-8");
  skills.appendChild(h2);
  let html = "";
  // <i class="${i.logo} fa-xl text-blue p-2"></i> ${i.title}
  data.default.skills.forEach((i) => {
    let segment = `<div class="flex gap-1 justify-between sm:justify-center mx-0 lg:mx-10">
    <div class="flex basis-2/6 sm:basis-1/6 my-2">
    <img width="50" height="40" src=${i.photo} alt=${i.title} class="mr-2 md:mr-5 w-5 h-5 md:w-12 md:h-12"  />
    <p class="text-dark font-semibold self-center">${i.title}</p>
    </div>
    <div class="bar ${i.level} self-center basis-4/6"></div>
    </div>`;
    html += segment;
  });
  skills.innerHTML += html;
}

function renderPersonalSection() {
  const summary = document.getElementById("summary");
  summary.innerHTML = `<img width="200" height="200" class="mx-auto rounded-3xl mb-4 shadow-md"
  src="${data.default.about.personal.img}" alt="${data.default.about.personal.title}" />
  <div class="flex justify-center">
 <p class="text-black basis-full md:basis-2/3 mt-10">
  I am 26 years old married woman who is a feminist
  <img class="inline m-0 p-0" width="30" height="30" src=../assets/images/feminism.png /> at heart and besides coding,
  I spend my time on many different things. I care about a healthy lifestyle, so I cook for almost every meal.
  baking cookies and cakes make me really happy. Honestly, I enjoy cooking more than eating :)
  I lift weights every other day to stay fit.
  Following and listening to <a class="text-blue" href="https://hubermanlab.com/" target=_blank>Huberman's podcast</a> has helped me a lot in having a healthy lifestyle.
  The second most important hobby of mine is watching movies and TV series.
  I like watching popular TV shows.
  But I love artistic movies and reading their critics or joining movie criticism sessions.
  I can watch movies with mythological stories like 
  <a class="text-blue" href="https://www.imdb.com/title/tt5109784/" target=_blank>Mother!</a> or
  <a class="text-blue" href="https://www.imdb.com/title/tt0870984/?ref_=nv_sr_srsg_4" target=_blank>Antichrist</a>
  over and over again. My favortie directors are
  <a class="text-blue" href="https://www.imdb.com/name/nm0000233/" target=_blank>Quentin Tarantino</a> and
  <a class="text-blue" href="https://www.imdb.com/name/nm0001885/" target=_blank>Lars von Trier</a>.
  I used to swim and take part in swimming competitions during primary and high school but now I just swim in summers and for recreation :)
  This is a kind of side effect of having a job like programming:))</p></div>
  <div class="w-[75%] mx-auto flex justify-around md:justify-center gap-2 md:gap-10 text-blue my-8 md:my-10">
  <i class="fa-solid fa-cookie-bite fa-3x"></i>
  <i class="fa-solid fa-dumbbell fa-3x"></i>
  <i class="fa-solid fa-video fa-3x"></i>
  <i class="fa-solid fa-person-swimming fa-3x"></i>
  </div>

 `;
}

function renderBlog() {
  const blog = document.getElementById("blogs");
  let html = "";
  data.default.blogItems.forEach((i) => {
    let segment = `<a href=${i.link} target="_blank" class="self-center rounded border border-gray
     shadow text-dark p-4">
    <img src="${i.img}" alt="${i.title}">
    <h3 class="my-4">${i.title}</h3>
    <p class="text-base text-truncate-2">${i.description}</p>
    <small class="text-seconary">
    ${i.date}
    </small>
    </a>`;
    html += segment;
  });
  blog.innerHTML = html;
}

document.getElementById("sendEmail").addEventListener("click", function () {
  let name = document.querySelector('[name="name"]').value;
  let message = document.querySelector('[name="message"]').value;
  let subject = "Emailing from your website";
  window.open(
    `mailto:mobinakhalilzade@gmail.com?subject=${subject}&body=Hi Mobina, I am ${name}. ${message}`
  );
});

function renderSocialMedia() {
  const socialMedia = document.getElementById("socialMedia");
  let html = "";
  data.default.socialMediaItems.forEach((i) => {
    let segment = `<div class="text-center">
    <a class="text-primary" href="${i.link}" target="_blank">
      <i class="${i.icon} fa-2x text-blue"></i>
    </a>
    </div>`;
    html += segment;
  });
  socialMedia.innerHTML = html;
}

function getYear() {
  let footer = document.getElementById("year");
  let year = new Date().getFullYear();
  footer.innerHTML = `<small class="text-mute"
  >Mobina Khalilzade <i class="fa fa-copyright text-pink"></i> ${year}
</small>`;
}

galaxy();
renderMenu();
renderBlog();
renderSocialMedia();
renderSkills();
renderProfessionalSection();
renderPersonalSection();
getYear();
