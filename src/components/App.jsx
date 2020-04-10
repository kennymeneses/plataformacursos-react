import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Organisms/Header'
import Public from './Routes/Public'
import Protected from './Routes/Protected'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Specialities from './pages/Specialities'
import Courses from './pages/Courses'
import Teachers from './pages/Teachers'
import Page404 from './pages/Page404'

const App = ()=>(
  <Router>
      <Header />
      <Switch>
        <Public path="/" exact component={Home}/>
        <Public path="/login" exact component={Login}/>
        <Public path="/registro"exact component={Register}/>
        
        <Protected path="/especialidades" component={Specialities}/>
        <Protected path="/cursos" component={Courses}/>
        <Protected path="/profesores" component={Teachers}/>

        <Route component={Page404} />

      </Switch>
  </Router>
)

export default App;
