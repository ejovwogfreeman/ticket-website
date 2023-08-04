import React, { useState } from "react";

const Edit = () => {
  const [type, setType] = useState(null);
  const [sec, setSec] = useState(null);
  const [row, setRow] = useState(null);
  const [seat, setSeat] = useState(null);
  const [artist, setArtist] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [venue, setVenue] = useState(null);

  return (
    <div>
      <label htmlFor="">TYPE</label>
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Please enter ticket type"
      />
      <label htmlFor="">SEC</label>
      <input
        type="text"
        value={sec}
        onChange={(e) => setSec(e.target.value)}
        placeholder="Please enter sec"
      />
      <label htmlFor="">ROW</label>
      <input
        type="text"
        value={row}
        onChange={(e) => setRow(e.target.value)}
        placeholder="Please enter row"
      />
      <label htmlFor="">SEAT</label>
      <input
        type="text"
        value={seat}
        onChange={(e) => setSeat(e.target.value)}
        placeholder="Please enter seat"
      />
      <label htmlFor="">ARTIST</label>
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Please enter artist"
      />
      <label htmlFor="">TITLE</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Please enter title"
      />
      <label htmlFor="">DATE</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Please enter date"
      />
      <label htmlFor="">VENUE</label>
      <input
        type="text"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        placeholder="Please enter venue"
      />
    </div>
  );
};

export default Edit;
