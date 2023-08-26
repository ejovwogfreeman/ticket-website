let openBtn = document.getElementById("modal-button");
let modal = document.getElementById("modal-container");
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

console.log(ticketTitle);
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

let tickets = document.getElementById("tickets");

fetchTicket();
