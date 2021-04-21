import React from 'react';
import './App.css';
import { firebase } from '@firebase/app'
import { Sidebar } from './sidebar/sidebar';
import Editor from './editor/editor';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      selectedNoteIndex:null,
      selectedNote:null,
      notes:null
    }
  }
  componentDidMount=()=>{
    firebase
      .firestore()
      .collection('notes') //whenever anything updates in notes then this snapshot calls immediately
      .onSnapshot(serverUpdate => {
        // let documents = []
        // serverUpdate.forEach(doc => {
        //             documents.push({...doc.data(), id: doc.id})
        //         })
        // console.log(documents);
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  }

  render(){
    return (
      <div className="app-container">
        <Sidebar />
        <Editor />
      </div>
    );
  }
}

export default App;
