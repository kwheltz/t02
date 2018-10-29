import React, {Fragment} from 'react';
import Frag from './Frag';
import './Base.css';

const Skills = () => {
    return (
        <Fragment>
            <section id="skills">
            <Frag title="SKILLS" sub="QUAIS AS MINHAS HABILIDADES?" desc="Segue uma lista de algumas habilidades profissionais:"/>
            <div className="container">
            <ul>
                <li>C/C++</li>
                <li>Java</li>
                <li>Photoshop</li>
                <li>SQL</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Android</li>
                <li>Arduino</li>
                <li>Texas</li>
                <li>PIC</li>
                <li>Proteus</li> 
            </ul>
            </div>
        </section>
        </Fragment>
        
    );
}

export default Skills;