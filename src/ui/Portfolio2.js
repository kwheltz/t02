import React, {Fragment} from 'react';

const Portfolio2 = (props) => {
    return (
        <Fragment>
            <div style={{margin:"10px"}} className="card mb-4 shadow-sm" >
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{props.title}</h4>
                </div>
                <img className="card-img-top" src={props.imagem}  height="200px"/>
                <div className="card-body">
                    <p>{props.description}</p>
                </div>
            </div>
        </Fragment>
    );
}
export default Portfolio2;