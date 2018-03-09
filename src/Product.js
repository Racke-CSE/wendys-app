import React from 'react';

const Product = (props) => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return images;});
        return images;
    }

    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

    return(
        <div className="main-display">
            <h1>{props.selectedProduct.name}</h1>
            <img src={images[props.selectedProduct.pic]} alt={props.selectedProduct.name}/>
            <p>${props.selectedProduct.price.toFixed(2)}</p>
        </div>
    );
}

export default Product;