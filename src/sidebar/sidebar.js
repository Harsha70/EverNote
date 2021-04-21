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

        };
      }

    render() {
        return (
            <div>
                Sidebar
            </div>
        )
    }
}

export default withStyles(styles)(Sidebar)
