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
console.log(ticketTitle);
const fetchTicket = async () => {
  const res = await fetch(
    `https://ticket-website.onrender.com/api/ticket/${ticketId}`
  );
  const data = await res.json();

  ticketTitle.textContent = data.title;
};

let tickets = document.getElementById("tickets");

fetchTicket();
