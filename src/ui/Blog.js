import React, {Fragment} from 'react';
import Frag from './Frag';
import Blog2 from './Blog2';
import './Base.css';
import img1 from './tesla.jpg';
import img2 from './microsoft.png';
import img3 from './facebook.png';

const Blog = () => {
    return (
        <Fragment>
            <section id="blog">
                <Frag title="BLOG" sub="TECNOLOGIA" desc="Alguns assuntos interessantes sobre a área." />
                <div className="container">
                    <div className="card-deck mb-3 text-center" style={{paddingLeft:"50px", paddingRight:"50px"}}>
                        <Blog2 link = {"https://g1.globo.com/economia/tecnologia/noticia/2018/10/17/tesla-compra-terreno-em-xangai-para-sua-fabrica-de-us-2-bi-na-china.ghtml"} imagem = {img1} title="Tesla na China" date="17/10/2018" author="Reuters" description="Tesla compra terreno em Xangai para sua fábrica de US$ 2 bi na China."/>
                        <Blog2 link = {"https://g1.globo.com/economia/tecnologia/noticia/2018/10/15/morre-paul-allen-co-fundador-da-microsoft.ghtml"} imagem = {img2} title="Paul Allen falece" date="15/10/2018" author="Globo G1" description="Morre Paul Allen, confundador da Microsoft, aos 65 anos."/>
                        <Blog2 link = {"https://g1.globo.com/economia/tecnologia/noticia/2018/10/12/facebook-diz-que-hackers-roubaram-dados-de-29-milhoes-de-usuarios.ghtml"} imagem = {img3} title="Vazamento de dados" date="12/10/2018" author="Reuters" description="Facebook diz que hackers roubaram dados de 29 milhões de usuários."/>
                    </div>
                </div>                
            </section>
        </Fragment>
    );
}

export default Blog;