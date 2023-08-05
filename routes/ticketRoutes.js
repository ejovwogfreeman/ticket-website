const express = require("express");
const {
  createTicket,
  updateTicket,
  deleteTicket,
  getAllTickets,
  getSingleTicket,
} = require("../controllers/ticketControllers");
const protect = require("../middlewares/authMiddleware");
const { upload } = require("../middlewares/fileMiddleware");

const router = express.Router();

router.get("/", protect, getAllTickets);
router.get("/:id", protect, getSingleTicket);
router.post("/ticket/create", protect, upload.array("files"), createTicket);
router.put("/ticket/update", protect, updateTicket);
router.delete("/ticket/delete", protect, deleteTicket);

module.exports = router;
