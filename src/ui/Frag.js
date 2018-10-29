import React, {Fragment} from 'react';

const Frag = (props) => {
    return (
        <Fragment>
            <img>{props.imagem}</img>
            <h2>{props.title}</h2>
            <h3>{props.sub}</h3>
            <p>{props.desc}</p>
            <a>{props.link}</a>
        </Fragment>
    );
}
export default Frag;