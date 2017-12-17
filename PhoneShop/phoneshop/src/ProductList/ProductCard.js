import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export var ProductCardComponent = (props) => {
    var {title, price, image, quantity, description} = props;
    return (
        <div className="col-xs-8 col-sm-4 text-center">
            <a href="" className="thumbnail">
                <img src={image} alt="Foun"/>
                <h2>{title}</h2>
                <p>{description}</p>
                <span>{price}</span>
                <p>{quantity}</p>
                <p><button className="btn btn-primary">Buy</button></p>
            </a>
        </div>
    );
};