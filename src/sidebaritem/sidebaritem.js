import { removeHTMLTags } from '../helpers';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';

import React, { Component } from 'react'
import { ListItem, ListItemText } from '@material-ui/core';

class Sidebaritem extends Component {
      
    selectNote=(n,i)=>this.props.selectNote(n,i)
    deleteNote=(note)=>{
        if (window.confirm(`Are you sure? : ${note}`)){
            this.props.deleteNote(note)
        }
    }
    render() {
        const {note, index, classes, selectedNoteIndex} = this.props
        return (
            <div key={index}>
                <ListItem
                className={classes.listItem}
                selected={selectedNoteIndex === index}
                alignItems="flex-start"
                >
                    <div className={classes.textSection} onClick={()=>this.selectNote(note, index)}>
                        <ListItemText
                        primary={note.title}
                        secondary={removeHTMLTags(note.body.substring(0,30))+"..."}></ListItemText>
                    </div>
                    
                    <DeleteIcon onClick={()=>this.deleteNote(note)}
                    className={classes.deleteIcon}>

                    </DeleteIcon>
                </ListItem>
            </div>
        )
    }
}

export default withStyles(styles)(Sidebaritem)
