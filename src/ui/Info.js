import React, {Fragment} from 'react';
import Frag from './Frag';
import './Base.css';
import img1 from './bio.png';
import img2 from './work.png';
import img3 from './git.png';

const Info =() => {
    return (
        <Fragment>
            <section id="infos">
                <Frag title="MAIS INFORMAÇÕES" sub="OUTRAS INFORMAÇÕES SOBRE MIM" desc="Mas o curinga é diferente, ele veio ao mundo com o defeito de ver todas as coisas e vê-las com profundidade."/>
                <div className="container">
                    <div className="row">
                        <div id="col" className="col-xl-6 col-md-12 col-sm-12">
                            <img style={{marginRight:"15px", marginBottom:"10px"}} src={img1} width="45" height="45"/>BIOGRAFIA
                            <p style={{textAlign: "justify", color:"#fff", marginLeft:"20px"}}> Meu interesse pela área de tecnologia surgiu quando eu ainda era pequeno com o contato com videogames e o computador. Aos 16 anos iniciei meu curso de Técnico em Mecatrônica pelo SENAI/SP em Sorocaba, realizando em paralelo com o Ensino Médio. Com a finalização do curso aos 17, no ano seguinte dei início ao curso de Bacharelado em Engenharia de Computação na Universidade Tecnológica Federal do Paraná - Câmpus Cornélio Procópio. Atualmente sou do oitavo período e estou em busca de um estágio na área.</p>
                        </div>
                        <div id="col" className="col-xl-6 col-md-12 col-sm-12">
                            <span style={{color:"#fff"}}><img style={{marginRight:"15px", marginBottom: "10px"}} src={img2} width="45" height="45"/>FUTURA PROFISSÃO</span>
                            <p style={{textAlign: "justify", color:"#fff", marginLeft:"20px"}}>Atualmente, busco um estágio que seja capaz de usufruir de todas as minhas habilidades adquiridas durante todos estes anos de preparação, além de eu ser capaz de evoluir profissionalmente. Acredito que na minha futura profissão eu possa, direta ou indiretamente, colaborar com tecnologias que tragam conforto e outras qualidades para as vidas das pessoas.</p>
                        </div>
                    </div>
                 </div>
                 <div style={{textAlign:"center"}}>
                    <a href="https://github.com/kwheltz" target="_blank"><img  src={img3} width="128" height="128" /></a>
                 </div>
                 <div className="container">
						<h4><a style={{textDecoration:"none", color:"#f2e9e4"}} href="https://github.com/kwheltz" target="_blank">GITHUB</a></h4>
                        <p style={{textAlign:"center"}}>Veja alguns dos meus projetos no GitHub.</p>
					</div>
            </section>
        </Fragment>
    );
}

export default Info;