import React from 'react';

import {Card, Col} from 'react-bootstrap';
import "./styles.css";

const LinkItem = ({url, title}) => {

    return ( 
        <Col md={6} lg={4} className="card_col">
            <Card className="card_main">
                <blockquote className="blockquote mb-0 card-body">
                    <h4 style={{ textAlign: "center"}}>
                        {title}
                    </h4>
                    
                    <a 
                        style={{ color: "#e493ea", textDecoration: "none" }}
                        href={url}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <div className="preview-main">
                            <p className="p-item">{title}</p>
                            <p className="p-item" style={{fontSize: "14px", fontWeight: "normal"}} >{url}</p>
                        </div>
                    </a>
                </blockquote>
            </Card>
        </Col>
    );
}
 
export default LinkItem;