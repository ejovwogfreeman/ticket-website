let openBtn = document.getElementById("modal-button");
let modal = document.getElementById("modal-container");
let modContainer = document.querySelector(".mod-container");
let closeBtn = document.getElementById("close");
let bg = document.getElementById("bg");
let secnum = document.getElementById("secnum");
let rownum = document.getElementById("rownum");
let seatnum = document.getElementById("seatnum");
let secnum2 = document.getElementById("secnum2");
let rownum2 = document.getElementById("rownum2");
let seated1 = document.getElementById("seated1");
let seated2 = document.getElementById("seated2");
let seatedspan = document.querySelectorAll(".seatedspan");
let count = document.querySelectorAll(".count");

openBtn.addEventListener("click", () => {
  modal.style.bottom = "0px";
  bg.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.bottom = "-500px";
  bg.style.display = "none";
});

let ticketId = window.location.href.split("=").pop();
console.log(ticketId);

let ticketType = document.getElementById("ticketType");
let sec = document.getElementById("sec");
let row = document.getElementById("row");
let seat = document.getElementById("seat");
let img = document.getElementById("img");
let artiste = document.getElementById("artiste");
let title = document.getElementById("title");
let date = document.getElementById("date");
let venue = document.getElementById("venue");
let ticketType2 = document.getElementById("ticketType2");
let sec2 = document.getElementById("sec2");
let row2 = document.getElementById("row2");
let seat2 = document.getElementById("seat2");
let img2 = document.getElementById("img2");
let artiste2 = document.getElementById("artiste2");
let title2 = document.getElementById("title2");
let date2 = document.getElementById("date2");
let venue2 = document.getElementById("venue2");

const fetchTicket = async () => {
  const res = await fetch(
    `https://ticket-website.onrender.com/api/ticket/${ticketId}`
  );
  const data = await res.json();

  console.log(data);

  ticketType.textContent = data.type;
  sec.textContent = data.sec;
  row.textContent = data.row.split(",")[0];
  seat.textContent = data.seat.split(",")[0];
  img.src =
    "https://ticket-website.onrender.com/api/files/" + data.image[0].link;
  artiste.textContent = data.artist;
  title.textContent = data.title;
  date.textContent = data.date;
  venue.textContent = data.venue;
  ticketType2.textContent = data.type;
  sec2.textContent = data.sec;
  row2.textContent = data.row.split(",")[1];
  seat2.textContent = data.seat.split(",")[1];
  img2.src =
    "https://ticket-website.onrender.com/api/files/" + data.image[0].link;
  artiste2.textContent = data.artist;
  title2.textContent = data.title;
  date2.textContent = data.date;
  venue2.textContent = data.venue;
  secnum.textContent = data.sec;
  rownum.textContent = data.row;
  seatnum.textContent = data.seat;
  secnum2.textContent = data.sec;
  rownum2.textContent = data.row;
  seated1.textContent = data.seat.split(",")[0];
  seated2.textContent = data.seat.split(",")[1];
};

fetchTicket();

let tickets = document.querySelector(".tickets");
let dot = document.querySelectorAll(".dot");

tickets.addEventListener("scroll", () => {
  if (tickets.scrollLeft > 200) {
    for (let i = 0; i < dot.length; i++) {
      if (!dot[1].classList.contains("active")) {
        dot[0].classList.remove("active");
        dot[1].classList.add("active");
      }
    }
  } else {
    for (let i = 0; i < dot.length; i++) {
      dot[0].classList.add("active");
      dot[1].classList.remove("active");
    }
  }
});

let modalForm = document.querySelector(".modal-form");
modalForm.style.display = "none";

let transferBtn = document.getElementById("transferBtn");
let backBtn = document.querySelector(".backBtn");

transferBtn.addEventListener("click", () => {
  modContainer.style.display = "none";
  modalForm.style.display = "block";
});

backBtn.addEventListener("click", () => {
  modContainer.style.display = "block";
  modalForm.style.display = "none";
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.style.bottom = "-500px";
  bg.style.display = "none";
});

let arr = [];

for (let i = 0; i < seatedspan.length; i++) {
  seatedspan[i].addEventListener("click", () => {
    seatedspan[i].classList.toggle("clicked");
    if (seatedspan[i].classList.contains("clicked")) {
      arr.push(seatedspan[i]);
    } else {
      arr.pop(seatedspan[i]);
    }

    for (let i = 0; i < count.length; i++) {
      count[i].textContent = arr.length;
    }
  });
}

for (let i = 0; i < count.length; i++) {
  count[i].textContent = 0;
}
