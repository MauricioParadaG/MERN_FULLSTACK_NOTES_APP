import React, { Component } from 'react'
import axios from 'axios';
import {format} from 'timeago.js'

export default class NoteslistComponent extends Component {
    
    state = {
        notes:[]   
    }

    componentDidMount(){
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({
            notes: res.data
        });
      }

    deleteNote = async (id) =>{
        //console.log(id);
        await axios.delete('http://localhost:4000/api/notes/' + id);
        this.getNotes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note =>(
                    <div className="col-md-4 p-2" 
                    key={note._id}>
                        {/** Note's Cards */}
                        <div className="card">
                           <div className="card-header">
                              <h5>{note.title}</h5>
                            </div>
                            {/** Card Content */}
                           <div className="card-body">
                              <p>{note.content}</p>
                              <p>{note.user}</p>
                              <p>{format(note.date)}</p>
                            </div>  
                            {/** Card Eliminar */}
                           <div className="card-footer">
                              <button className="btn btn-danger"
                              onClick={() => this.deleteNote(note._id)}>
                                  Delete
                              </button>
                            </div>  

                        </div>
                    </div>
                    ))
                }
           </div>     
        )
    }
}
