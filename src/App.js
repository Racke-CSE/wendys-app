import React, { Component } from 'react';
import './App.css';
import './Menu.css';
import Menu from "./Menu";
import Product from "./Product";

class WendysApp extends Component {

  constructor(props){
     super(props);
     this.state = {
         categories: [
             { name:'Foods', active: true, products: [
                 {name: 'Spicy Chicken Sandwich', pic:'sandwich.jpg', price:3.49, active: true},
                 {name: 'Salad', pic:'salad.png', price:4.49, active: false},
                 {name: 'Chocolate Chip Cookie', pic:'cookie.jpg', price:2.00, active: false},
                 ] },
             { name:'Games', active: false, products: [
                 {name: 'Overwatch', pic:'overwatch.jpg', price:29.99, active: false},
                 {name: 'Mario 64', pic:'mario.png', price:19.99, active: false},
                 ] },
             { name:'Drinks', active: false, products: [
                 {name: 'Water', pic:'water.jpg', price:1.99, active: false},
                 {name: 'Tea', pic:'tea.jpg', price:2.99, active: false},
                 ] },
         ],
         selectedCategory: 0,
         selectedProduct: 0
     };
  } ;

  handleMenuClick = (index, innerIndex) => {
      const curProducts = this.state;
      curProducts.categories[this.state.selectedCategory].active = false;
      curProducts.categories[this.state.selectedCategory].products[this.state.selectedProduct].active = false;
      curProducts.selectedCategory = index;
      curProducts.selectedProduct = innerIndex;
      curProducts.categories[index].active = true;
      curProducts.categories[index].products[innerIndex].active = true;
      this.setState(curProducts);
  };

  render() {

    return (
      <div className="WendysApp">
        <header className="App-header">
          <img src="http://1000logos.net/wp-content/uploads/2017/08/Wendys-Logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Karl's Picks</h1>
        </header>

        <Menu callback={this.handleMenuClick} menuCategories={this.state.categories}/>

        <Product selectedProduct={this.state.categories[this.state.selectedCategory].products[this.state.selectedProduct]} />

      </div>
    );
  }
}

export default WendysApp;
