// const fetchTicket = async () => {
//   const res = await fetch(`https://ticket-website.onrender.com/api/ticket/`);
//   const data = await res.json();

//   console.log(data);

//   let html = "";

//   data.forEach((x) => {
//     html += `
//       <li>http://127.0.0.1:5500/ticket.html/?id=${x._id}</li>
//     `;
//   });

//   tickets.innerHTML = html;
//   console.log(html);
// };

// let tickets = document.getElementById("tickets");

// fetchTicket();

const fetchTicket = async () => {
  const res = await fetch(`https://ticket-website.onrender.com/api/ticket/`);
  const data = await res.json();

  let html = "";

  data.forEach((x) => {
    html += `
      <li>http://127.0.0.1:5500/ticket.html?id=64ddd674d88064f68552d0c4</li>
    `;
  });

  tickets.innerHTML = html;
};

let tickets = document.getElementById("tickets");

fetchTicket();
