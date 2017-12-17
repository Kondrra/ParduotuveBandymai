import React from 'react';
import { ProductCardComponent } from "./ProductCard";

export var ProductListComponent = (props) => {
    const phones = props.products.map(product => {
        return (
            <ProductCardComponent
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
            />
        );
    });

    return (
        <div className="row">
            {phones}
        </div>
    );
};