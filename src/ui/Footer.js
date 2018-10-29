import React, {Fragment} from 'react';
import './Base.css';

const Footer = (props) => {
    return (
        <Fragment>
            <footer id="main-footer">
                <div id="footer-bottom">
                    <div className="container clearfix">
                        <p id="footer-info"><strong>{props.name}</strong>{props.occupation}<br/><strong>{props.email}</strong>{props.server}<br/>{props.tel}</p>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;