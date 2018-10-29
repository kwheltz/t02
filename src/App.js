import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Perfil from './ui/Perfil';
import Skills from './ui/Skills';
import Blog from './ui/Blog';
import Portfolio from './ui/Portfolio';
import Info from './ui/Info';
import Contact from './ui/Contact';
import Footer from './ui/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Perfil nome={"YURI RODRIGUES GARCIA"}/>
        <Skills/>
        <Blog/>
        <Portfolio/>
        <Info/>
        <Contact/>
        <Footer name="Yuri Rodrigues Garcia " occupation="Engenharia de Computação" email="kwheltz" server="@gmail.com" tel="+55 (43) 99958-4585"/>
      </div>
    );
  }
}

export default App;
