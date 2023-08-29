import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./cards";
import CreateArea from "./createarea"

function App(){
    const [notes,setNotes]=useState([])
    
    function addNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        });
    }

    return (
    <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((notesItem)=>{ 
            return <Note 
            key={notesItem.key}
            title={notesItem.title}
            content={notesItem.content} />
        })}
        <Footer />
    </div>
    )}

export default App;