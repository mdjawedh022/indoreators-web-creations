const mongoose=require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    note: { type: String, require: true },
    date: { type: Date, default: Date.now },
  },
  {
    versionKry: false,
  }
);

const NoteModel=mongoose.model("notes",NoteSchema);


module.exports={
    NoteModel
};