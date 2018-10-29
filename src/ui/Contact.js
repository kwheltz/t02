import React, {Fragment} from 'react';
import Frag from './Frag';
import './Base.css';
import img1 from './fcb.png';
import img2 from './insta.png';
import img3 from './linkedin.png';


const Contact = () => {
    return (
        <Fragment>
            <section id="contact">
                <Frag title="CONTATO" sub="ENTRE EM CONTATO" desc="Entre em contato pelo formulário abaixo ou pelo email kwheltz@gmail.com"/>
                <div className="container">
                    <form style={{color:"#f2e9e4", padding:"5px"}}>
                        <div className="form-group">
                            <input type="name" className="form-control" id="namecontrol" placeholder="Nome"></input>
                        </div>
                        <div className="form-group">
                            <input type="name" className="form-control" id="emailcontrol" placeholder="E-mail"></input>
                        </div>
                        <div className="form-group">
                            <input type="name" className="form-control" id="emailcontrol" placeholder="Assunto"></input>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Mensagem"></textarea>
                        </div>
                        <button>ENVIAR</button>
                    </form>
                </div>
                <div style={{textAlign:"center", paddingBottom:"20px"}} className="container">
                
                    <Frag sub="REDES SOCIAIS" desc="Entre em contato comigo por minhas redes sociais" />
                    <span ><a id = "rede" style={{padding:"15px"}} href="https://www.facebook.com/Kwheltz" target="_blank"><img src={img1} /></a><a id = "rede" style={{padding:"15px"}} href="https://instagram.com/kwheltz" target="_blank"><img src={img2} /></a><a id = "rede" style={{padding:"15px"}} href="https://www.linkedin.com/in/yuri-garcia-25771b32/" target="_blank"><img src={img3} /></a></span>
                    
                </div>
            </section>
        </Fragment>
    );
}

export default Contact;