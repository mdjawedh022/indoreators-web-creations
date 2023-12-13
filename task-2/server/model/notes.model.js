const mongoose=require("mongoose");

const NoteSchema = mongoose.Schema({
  
  note:{ type: String, require: true },
  
},{
    versionKry:false,
});

const NoteModel=mongoose.model("notes",NoteSchema);


module.exports={
    NoteModel
};