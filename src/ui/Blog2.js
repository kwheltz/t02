import React, {Fragment} from 'react';

const Blog2 = (props) => {
    return (
        <Fragment>
            <div style={{margin:"5px"}} className="card mb-4 shadow-sm" >
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{props.title}</h4>
                </div>
                <img className="card-img-top" src={props.imagem}  height="250px"/>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">{props.date} <small class="text-muted">{props.author}</small></h1>
                    <p>{props.description}</p>
                    <a target="_blank" class="btn btn-lg btn-block btn-secondary" href = {props.link} role = "button">Fonte</a>
                </div>
            </div>
        </Fragment>
    );
}

export default Blog2;