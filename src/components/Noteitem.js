import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {

    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;


    return (
        <div className='col-md-3'>

            <div className='my-3 ' style={{cursor:"pointer"}}>
                <div className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                    <div style={{
                        display: "flex", position: 'absolute', right: "0"
                    }}>
                        <span className=" badge rounded-pill bg-danger">{note.tag?note.tag.slice(0,10):"General"}{note.tag.length > 10 ? "..." : ""}
                        </span>
                    </div>
                    <div className="card-body ">

                        <h5 className="card-title">{note.title ? note.title.slice(0, 22) : ''}{note.title.length > 21 ? "..." : ""}</h5>
                        <p className="card-text">{note.description ? note.description.slice(0, 32) : ''}{note.description.length > 31 ? "..." : ""}</p>
                        <i className="fa-solid fa-trash mx-2 " data-toggle="tooltip" data-placement="bottom" title="Delete" onClick={() => { deleteNote(note._id); props.showAlert("Note Deleted Successfully", "success"); }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" data-toggle="tooltip" data-placement="bottom" title="Edit" onClick={() => { updateNote(note);}}></i>
                    </div>

                </div>
            </div>

















        </div>
    )
}

export default Noteitem
