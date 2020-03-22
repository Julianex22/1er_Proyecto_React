import React from 'react';

import "../styles/styles.scss"
import Curso from "./Molecules/CourseCard"
import Home from './Pages/Home'
import Banner from "./Organisms/Banner"
import Formulario from "./Pages/Form"
import CourseGrid from "./Organisms/Coursegrid"
import Course from "./Pages/Course"
import MainMenu from "./Organisms/MainMenu"
import History from "./Pages/History"
import Users from "./Pages/Users"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (

<Router>
  <MainMenu/>
  <Switch>
  <Route  path="/" exact  component={Home}/>
  <Route  path="/banner" exact  component={Banner}/>
  <Route  path="/historial/:valor" exact  component={History}/>
  <Route  path="/historial" exact  component={History}/>
  <Route  path="/usuarios" exact  component={Users}/>
  <Route  path="/formulario" exact  component={Formulario}/>
  <Route  path="/cursos/:id"   component={Course}/>
  <Route  path="/cursos" exact  component={CourseGrid}/>
  <Route    component={()=>(

    <div>

      <p>No encontrado 40</p>
      <h2>Error 404</h2>
    </div>
  )}/>
  {/* 
  <Banner/>
    <Formulario /> 
    <CourseGrid/>  */}
    </Switch>
 </Router>

   


  );
}


export default App;
