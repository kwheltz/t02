import React from 'react';
import pic from './Avatar.png';
import cv from './Curriculum Vitae Yuri Garcia.pdf';
import li from './love icon.png';
import bi from './book icon.png';
import ci from './chat icon.png';
import ai from './activity icon.png';
import './Base.css';
import { relative } from 'path';

const Perfil = (props) => {
    return(
        <section id = "perfil">>
            <div className = "container" style = {{marginTop: 120}}>
                <div className = "row">
                    <div id ="col" className="col-sm-12 col-md-12 col-xl-6">
                    <img id = "foto" src={pic} width="300" height="300" />
                    <p style={{paddingTop: 30}}>Olá, sou o <strong>Yuri Rodrigues Garcia</strong>, Universitário, natural de Itapetininga - SP, atualmente morando em Cornélio Procópio - PR.</p>
                    <a href={cv} target="_blank" download="Currículo Vitae Yuri Garcia.pdf"><button>CURRÍCULO COMPLETO</button></a>
                    
                </div>
                <div id="col" className="col-sm-12 col-md-12 col-xl-6">
                <h1>{props.nome}</h1>
                <div className="interests" style={{paddingTop: 10}}>
                <span style={{position:relative}}><img src={li} style={{position:relative, paddingRight:"10px", width: "40px", height: "40px" }} />INTERESSES</span>
                <ul style={{paddingTop:"10px"}}>
                    <li>Sistemas Embarcados</li>
                    <li>Automação</li>
                    <li>Inteligência Artificial</li>
                </ul>
                </div>
                <div className="language" style={{paddingTop: 10}}>
                <span style={{position:relative}}><img src={ci} style={{position:relative, paddingRight:"10px", width: "40px", height: "40px"}} />IDIOMAS</span>
                <ul style={{paddingTop:"10px"}}>
                    <li>Português Brasileiro - Nativo</li>
                    <li>Inglês - Avançado</li>
                </ul>
                </div>
                <div className="study" style={{paddingTop: 10}}>
                <span style={{position:relative}}><img src={bi} style={{position:relative, paddingRight:"10px", width: "40px", height: "40px"}} />FORMAÇÃO</span>
                <ul style={{paddingTop:"10px"}}>
                    <li>2015 - 2019 - UTFPR - Bacharelado em Engenharia de Computação</li>
                    <li>2014 - SENAI/SP - Técnico em Mecatrônica</li>
                    <li>2014 - SESI/SP - Ensino Médio</li>
                </ul>
                </div>
                <div className="activity" style={{paddingTop: 10}}>
                <span style={{position:relative}}><img src={ai} style={{position:relative, paddingRight:"10px", width: "40px", height: "40px"}} />ATIVIDADES</span>
                <ul style={{paddingTop:"10px"}}>
                    <li>Universitário</li>
                    <li>Desenvolvendo TCC: Estudo Metodológico Sobre o Fluxo de Filas em Supermercados</li>
                </ul>
                </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Perfil;