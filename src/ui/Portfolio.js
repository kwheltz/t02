import React, {Fragment} from 'react';
import Frag from './Frag';
import './Base.css';
import Portfolio2 from './Portfolio2';
import img1 from './android.png';
import img2 from './blue.png';
import img3 from './cart.png';

const Portfolio = () => {
    return (
        <Fragment>
            <section id='port'>
                <Frag title="PORTFÓLIO" sub="TRABALHOS" desc="Trabalhos em destaque desenvolvidos durante a graduação:"/>
                <div className="container">
                    <div className="card-deck mb-3 text-center" style={{paddingLeft:"50px", paddingRight:"50px"}}>
                        <div className="row">
                            <Portfolio2 imagem={img1} description="Aplicativo Lista de Mercado: Aplicativo desenvolvido em Android para listar itens de compra."/>
                            <Portfolio2 imagem={img2} description="Limitações Bluetooth: Trabalho para testar limitações da transmissão de dados."/>
                            <Portfolio2 imagem={img3} description="TCC: Estudo Metodológico sobre o Fluxo de Filas em Supermercados."/>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
export default Portfolio;