import React from 'react';
import { ProductListComponent } from "./ProductListComponent";

export class ProductListContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { products: [
                {
                    title: "Nokia",
                    image: "nokia.jpg",
                    description: "Telefonas",
                    price: 15,
                    quantity: 17
                }
            ]};
    }

    render() {
        console.log(this.state.products);
        return <ProductListComponent products={this.state.products}/>
    }
}