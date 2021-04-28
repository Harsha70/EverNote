import { Divider, Button, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import React, { Component } from 'react'
import Sidebaritem from '../sidebaritem/sidebaritem';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            addingNote:false,
            title:null
        };
      }
    newNoteBtnClick = () => {
        console.log("new btn ")
        this.setState({title:null, addingNote:!this.state.addingNote})
    }
    updateTitle = (txt) => {
        this.setState({title: txt})
        console.log(txt)
    }
    newNote = () => {
        this.props.newNote(this.state.title)
        this.setState({ title:null, addingNote: false })
    }
    selectNote = (n,i) => this.props.selectNote(n,i)
    deleteNote = (note) =>{
        this.props.deleteNote(note)
    }
    render() {
        const {notes, selectedNoteIndex, classes} = this.props
        if (notes) {
            return (
                <div className={classes.sidebarContainer}>
                    <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>{this.state.addingNote? "Cancel":"Newnote" }</Button>
                    {
                        this.state.addingNote? <div>
                            <input type="text" 
                            className={classes.newNoteInput}
                            placeholder="Enter note title"  
                            onKeyUp={(e) => this.updateTitle(e.target.value)}
                            />
                            <Button 
                            className={classes.newNoteSubmitBtn}
                            onClick={this.newNote}>Submit Note</Button>
                        </div>: null
                    }
                    <List>
                        {
                            notes.map((note,index)=>{
                                return(
                                    <div key={index}>
                                        <Sidebaritem
                                        note={note} 
                                        index={index}
                                        selectedNoteIndex={selectedNoteIndex}
                                        selectNote={this.selectNote}
                                        deleteNote={this.deleteNote}
                                        ></Sidebaritem>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                    
                </div>
            )
        } else{
        return(<div>Add a new note</div>)
        }
        
    }
}

export default withStyles(styles)(Sidebar)
