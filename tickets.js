const fetchTicket = async () => {
  const res = await fetch(`https://ticket-website.onrender.com/api/ticket/`);
  const data = await res.json();

  let html = "";

  data.forEach((x) => {
    html += `
      <li>https://ticket-web.netlify.app/ticket.html?id=64ddd674d88064f68552d0c4</li>
    `;
  });

  tickets.innerHTML = html;
};

let tickets = document.getElementById("tickets");

fetchTicket();