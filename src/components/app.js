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

    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((notesItem,index)=>{
                return index!== id;
            })
        })
    }

    return (
    <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((notesItem,index)=>{ 
            return <Note 
            key={notesItem.key}
            id={index}
            title={notesItem.title}
            content={notesItem.content} onDelete={deleteNote}/>
        })}
        <Footer />
    </div>
    )}

export default App;