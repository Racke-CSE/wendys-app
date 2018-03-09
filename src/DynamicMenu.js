import React from 'react';

class DynamicMenu extends Component{
    renderProductElement(selectedProduct) {
        return <Product productName={selectedProduct.name} productImage={selectedProduct.pic} productPrice={selectedProduct.price} />;
    };
}
