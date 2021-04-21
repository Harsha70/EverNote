import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import React, { Component } from 'react'

export class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            addingNote:false,
            title:null
        };
      }

    render() {
        const {notes, classes, selectedNoteIndex} = this.props
        return (
            <div className={classes.sidebarContainer}>
                Sidebar
            </div>
        )
    }
}

export default withStyles(styles)(Sidebar)
