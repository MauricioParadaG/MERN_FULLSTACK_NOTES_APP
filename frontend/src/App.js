import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
 import './App.css';

// Components
import NavegationComponent from './components/nav/Navegation.component';
import CreateUserComponent from './components/users/CreateUser.component';
import CreateNoteComponent from './components/notes/CreateNote.component';
import NoteslistComponent from './components/notes/Noteslist.component';

function App() {
  return (
      <Router>
        <NavegationComponent></NavegationComponent>

        <div className="container p-4">
          <Route exact path="/" component={NoteslistComponent}>
          </Route>

          <Route exact path="/edit/:id" component={CreateNoteComponent}>
          </Route>

          <Route exact path="/create" component={CreateNoteComponent}>
          </Route>

          <Route exact path="/user" component={CreateUserComponent}>
          </Route>

        </div>
      </Router>
      

  );
}

export default App;
