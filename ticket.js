let openBtn = document.getElementById("modal-button");
let modal = document.getElementById("modal-container");
let modContainer = document.querySelector(".mod-container");
let closeBtn = document.getElementById("close");
let bg = document.getElementById("bg");

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

let ticketTitle = document.getElementById("ticketTitle");
let sec = document.getElementById("sec");
let row = document.getElementById("row");
let seat = document.getElementById("seat");
let img = document.getElementById("img");
let ticketTitle2 = document.getElementById("ticketTitle2");
let sec2 = document.getElementById("sec2");
let row2 = document.getElementById("row2");
let seat2 = document.getElementById("seat2");
let img2 = document.getElementById("img2");

const fetchTicket = async () => {
  const res = await fetch(
    `https://ticket-website.onrender.com/api/ticket/${ticketId}`
  );
  const data = await res.json();

  console.log(data);

  ticketTitle.textContent = data.title;
  sec.textContent = data.sec;
  row.textContent = data.row.split(",")[0];
  seat.textContent = data.seat.split(",")[0];
  img.src =
    "https://ticket-website.onrender.com/api/files/" + data.image[0].link;
  ticketTitle2.textContent = data.title;
  sec2.textContent = data.sec;
  row2.textContent = data.row.split(",")[1];
  seat2.textContent = data.seat.split(",")[1];
  img2.src =
    "https://ticket-website.onrender.com/api/files/" + data.image[0].link;
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
});
