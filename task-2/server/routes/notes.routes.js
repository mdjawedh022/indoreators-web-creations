const express = require("express");
const { NoteModel } = require("../model/notes.model");

const noteRouter = express.Router();

// ----------------------get Notes---------------------
noteRouter.get("/", async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.send({ notes });
  } catch (err) {
    res.status(500).send({ msg: "Something went wrong 😔!", error: err });
  }
});

// ---------------------post Notes------------------------
noteRouter.post("/post", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.send({ msg: "Note added successfully!", note });
  } catch (err) {
    res.status(500).send({ msg: "Internal server error!", error: err });
  }
});

// ---------------------delete Notess------------------------

noteRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await NoteModel.findByIdAndDelete({ _id: id });
    if (!deleteNote) {
      return res.send({ msg: "Note not found!" });
    }
    res.send({ msg: "Note deleted successfully!", note: deleteNote });
  } catch (err) {
    res.status(500).send({ msg: "Internal server error!", error: err });
  }
});

module.exports = { noteRouter };
