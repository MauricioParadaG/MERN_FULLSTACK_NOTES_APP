import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

// Components
import NavegationComponent from './components/nav/Navegation.component';
import CreateUserComponent from './components/users/CreateUser.component';
import CreateNoteComponent from './components/notes/CreateNote.component';
import NoteslistComponent from './components/notes/Noteslist.component';

function App() {
  return (
      <Router>
        <NavegationComponent></NavegationComponent>
        
        <Route exact path="/" component={NoteslistComponent}>
        </Route>

        <Route exact path="/edit/:id" component={CreateNoteComponent}>
        </Route>

        <Route exact path="/create" component={CreateNoteComponent}>
        </Route>

        <Route exact path="/user" component={CreateUserComponent}>
        </Route>

      </Router>
      

  );
}

export default App;
