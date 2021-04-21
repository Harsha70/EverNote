import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import React, { Component } from 'react'

export class Sidebaritem extends Component {
    constructor() {
        super();
        this.state = {

        };
      }
      
    render() {
        return (
            <div >
                Sidebaritem
            </div>
        )
    }
}

export default withStyles(styles)(Sidebaritem)
