const Ticket = require("../models/ticketModel");

const createTicket = async (req, res) => {
  try {
    const { type, sec, row, seat, artist, title, date, venue, image } =
      req.body;
    if (req.files && req.files.length > 0) {
      let filesArray = [];
      req.files.forEach((element) => {
        const file = {
          fileName: element.originalname,
          fileType: element.mimetype,
          link: `file/${element.filename}`,
        };
        filesArray.push(file);
      });
    }

    const newTicket = new Blog({
      type,
      sec,
      row,
      seat,
      artist,
      title,
      date,
      venue,
      image: filesArray,
    });

    const savedTicket = await newTicket.save();

    res.status(201).json(savedTicket);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Failed to create blog" });
  }
};

const updateTicket = async (req, res) => {
  try {
    const { type, sec, row, seat, artist, title, date, venue } = req.body;

    const ticketId = req.params.id;

    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    ticket.type = type;
    ticket.sec = sec;
    ticket.row = row;
    ticket.seat = seat;
    ticket.artist = artist;
    ticket.title = title;
    ticket.date = date;
    ticket.venue = venue;

    const updatedTicket = await ticket.save();

    res.status(200).json(updatedTicket);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: "Failed to update blog" });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const ticketId = req.params.id;

    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    await ticket.remove();

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const allBlogs = await Ticket.find();

    res.status(200).json(allBlogs);
  } catch (error) {
    console.error("Error getting all blogs:", error);
    res.status(500).json({ error: "Failed to get blogs" });
  }
};

const getSingleTicket = async (req, res) => {
  try {
    const ticketId = req.params.id;

    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error getting ticket by ID:", error);
    res.status(500).json({ error: "Failed to get ticket" });
  }
};

module.exports = {
  createTicket,
  updateTicket,
  deleteTicket,
  getAllTickets,
  getSingleTicket,
};
