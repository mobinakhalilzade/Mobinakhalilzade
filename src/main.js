const menuItem = [
  {
    name: "Home",
    link: "home",
    active: false,
  },
  {
    name: "Professional",
    link: "professional",
    active: false,
  },
  {
    name: "Personal",
    link: "personal",
    active: false,
  },
  {
    name: "Blog",
    link: "blog",
    active: false,
  },
  {
    name: "Contact",
    link: "contact",
    active: false,
  },
];

window.onscroll = function () {
  stickyNav();
};

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
      menuItem.forEach((i) => {
        if (i.link == current) {
          i.active = true;
          renderMenu();
        } else {
          i.active = false;
        }
      });
    }
  });
});

let menu = document.getElementById("menu");
let sticky = menu.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("fixed", "top-0", "w-full");
  } else {
    menu.classList.remove("fixed", "top-0", "w-full");
  }
}

document.getElementById("view-btn").addEventListener("mouseover", function () {
  let i = document.querySelector(".fa-arrow-right");
  i.classList.remove("fa-arrow-right");
  i.classList.add("fa-arrow-down");
});

document.getElementById("view-btn").addEventListener("mouseout", function () {
  let i = document.querySelector(".fa-arrow-down");
  i.classList.remove("fa-arrow-down");
  i.classList.add("fa-arrow-right");
});

function renderMenu() {
  const navbar = document.getElementById("navbar");
  let html = "";
  menuItem.forEach((i) => {
    if (i.active) {
      let anchor = `<a href="#${i.link}" class="text-base font-medium
     text-pink">${i.name}</a>`;
      html += anchor;
    } else {
      let anchor = `<a href="#${i.link}" class="text-base font-medium
      text-white hover:text-pink">${i.name}</a>`;
      html += anchor;
    }
  });
  navbar.innerHTML = html;
}

function renderProfessionalSection() {
  const professional = {
    title: "Mobina Khalilzade",
    description:
      "I am a computer science graduate. Since 2019, I have been working as a front-end developer specializing in the Angular framework in order to build and develop websites, PWAs, and admin dashboards. I have experienced working for both startup and well-established companies. I am currently living in Istanbul, Turkey but I was born in Tehran, Iran. I speak Farsi, English, Spanish and Turkish.",
    img: "../assets/images/mobinakhalilzade-crop.jpg",
    link: "https://drive.google.com/file/d/17w01GAwFCKACeK3YYbeA1-C9bXeqWlZo/view?usp=share_link",
  };
  const photo = document.getElementById("photo");
  photo.innerHTML = `<img width="200" height="100" class="mx-auto rounded-full mb-4 shadow-md"
    src="${professional.img}" alt="${professional.title}" />
    <div class="flex justify-center">
   <p class="text-black basis-full md:basis-2/3 text-lg font-medium">${professional.description}</p></div>
   <div class="text-center text-pink mx-auto">
   <label class="block my-5">Here my resume</label>
   <a target="_blank"href=${professional.link}><i class="fa-solid fa-file-lines fa-2xl"></i></a></div>
   `;
}

function renderSkills() {
  const data = [
    {
      title: "HTML",
      logo: "fa-brands fa-html5",
      photo: "../assets/images/html.png",
      level: "expert",
    },
    {
      title: "CSS",
      logo: "fa-brands fa-css3-alt",
      photo: "../assets/images/css.png",
      level: "expert",
    },
    {
      title: "Bootstrap",
      logo: "fa-brands fa-css3-alt",
      photo: "../assets/images/bootstrap.png",
      level: "expert",
    },
    {
      title: "Tailwind",
      logo: "fa-brands fa-css3-alt",
      photo: "../assets/images/tailwind.png",
      level: "advanced",
    },
    {
      title: "JavaScript",
      logo: "fa-brands fa-square-js",
      photo: "../assets/images/js.png",
      level: "advanced",
    },
    {
      title: "TypeScript",
      logo: "fa-regular fa-t",
      photo: "../assets/images/ts.png",
      level: "advanced",
    },
    {
      title: "Angular",
      logo: "fa-brands fa-angular",
      photo: "../assets/images/angular.png",
      level: "advanced",
    },
    {
      title: "RxJs",
      logo: "fa-brands fa-react",
      photo: "../assets/images/rxjs.png",
      level: "intermediate",
    },
    {
      title: "React",
      logo: "fa-brands fa-react",
      photo: "../assets/images/react.png",
      level: "intermediate",
    },
    {
      title: "Redux",
      logo: "fa-brands fa-react",
      photo: "../assets/images/redux.png",
      level: "basic",
    },
    {
      title: "Git",
      logo: "fa-brands fa-git",
      photo: "../assets/images/git.png",
      level: "intermediate",
    },
    {
      title: "NodeJs",
      logo: "fa-brands fa-node-js",
      photo: "../assets/images/nodejs.png",
      level: "intermediate",
    },
    {
      title: "Express",
      logo: "fa-brands fa-node-js",
      photo: "../assets/images/express.png",
      level: "learning",
    },
    {
      title: "Mongo DB",
      logo: "fa-solid fa-database",
      photo: "../assets/images/mongodb.png",
      level: "learning",
    },
    {
      title: "Adobe Photoshop",
      logo: "fa-regular fa-p",
      photo: "../assets/images/photoshop.png",
      level: "basic ",
    },
    {
      title: "Adobe XD",
      logo: "fa-regular fa-x",
      photo: "../assets/images/xd.png",
      level: "basic",
    },
  ];
  const skills = document.getElementById("skills");
  let h2 = document.createElement("h2");
  let i = document.createElement("i");
  i.classList.add("fa-solid", "fa-code", "text-pink", "mr-2");
  const skillText = document.createTextNode("Skills ");
  h2.appendChild(i);
  h2.appendChild(skillText);
  h2.classList.add("text-black", "text-center", "pb-8");
  skills.appendChild(h2);
  let html = "";
  data.forEach((i) => {
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
  const personal = {
    title: "Shared Module",
    img1: "../assets/images/mobina.jpg",
    img2: "../assets/images/mobina-laptop.jpg",
  };
  const summary = document.getElementById("summary");
  // <img width="200" height="200" class="mx-auto rounded-3xl mb-4 shadow-md"
  // src="${personal.img}" alt="${personal.title}" />
  summary.innerHTML = `<div class="flex flex-wrap justify-center gap-10">
  <img width="300" height="300" class="grow sm:grow-0 rounded-3xl mb-4 shadow-md"
  src="${personal.img1}" alt="${personal.title}" />
  <img width="300" height="300" class="grow sm:grow-0 rounded-3xl mb-4 shadow-md"
  src="${personal.img2}" alt="${personal.title}" />
  </div>
  
  <div class="flex justify-center">
 <p class="text-black basis-full md:basis-2/3 mt-10 text-lg font-medium">
  I am 26 years old married woman who is a feminist
  <img class="inline m-0 p-0" width="30" height="30" src=../assets/images/feminism.png alt="feminism logo" /> at heart and besides coding,
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
  <div class="w-[75%] mx-auto flex justify-around md:justify-center gap-2 md:gap-10 text-pink my-8 md:my-10">
  <i class="fa-solid fa-cookie-bite fa-3x"></i>
  <i class="fa-solid fa-dumbbell fa-3x"></i>
  <i class="fa-solid fa-video fa-3x"></i>
  <i class="fa-solid fa-person-swimming fa-3x"></i>
  </div>

 `;
}

function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function duolingoStreak() {
  let duolingo = document.getElementById("duolingo");
  let today = new Date();
  let day = new Date("2023/01/03");

  let difference = dateDiffInDays(day, today);
  let streak = 393 + difference;

  let html = "";
  let segment = `<div>
  <img src="../assets/images/duolingo.png" class="w-1/2 mx-auto" alt="duolingo logo">
  <div class="text-center text-orange">
  <div class="text-[50px] font-extrabold">${streak}</div>
  <div class="flex justify-center">
  <div class="text-xl font-bold">days of learning Spanish </div>
  <img width="50" height="40" src="../assets/images/spain.jpg" alt="spain flag" />
  </div>
  </div>
  </div>`;
  html += segment;
  duolingo.innerHTML = html;
}

function renderBlog() {
  const data = [
    {
      title: "Shared Module",
      description:
        "We intend to build an angular application with shared module for making use of reusable codes.",
      img: "../assets/images/shared-module.png",
      link: "https://medium.com/@mobinaya/shared-module-in-angular-bc56f8264b2e",
      date: "May 28, 2021",
    },
  ];
  const blog = document.getElementById("blogs");
  let html = "";
  data.forEach((i) => {
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
  const socialMediaItems = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/mobina-khalilzade/",
      icon: "fab fa-linkedin-in",
    },
    {
      name: "Github",
      link: "https://github.com/mobinakhalilzade",
      icon: "fab fa-github",
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/+989016355725",
      icon: "fab fa-whatsapp",
    },
    {
      name: "Telegram",
      link: "https://t.me/mobinaya",
      icon: "fa-brands fa-telegram",
    },
  ];
  const socialMedia = document.getElementById("socialMedia");
  let html = "";
  socialMediaItems.forEach((i) => {
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

renderMenu();
renderBlog();
renderSocialMedia();
renderSkills();
renderProfessionalSection();
renderPersonalSection();
duolingoStreak();
getYear();
