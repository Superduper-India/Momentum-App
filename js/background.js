const imgs = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpg", "4.jpg", "5.jpg"];

const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

const tagImg = document.createElement("img"); // tag:img 불러오기 //

tagImg.src = `img/${randomImg}`;
tagImg.classList.add("bgImg");

document.body.prepend(tagImg);
