import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    Qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Phone',
                    Qty: 2,
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    Qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].Qty += 1;
        this.setState({
            products: products
        })
    }
    handledecreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].Qty -= 1;
        this.setState({
            products: products
        })
    }
    handleDeleteProduct = (id)=>{
        const {products} = this.state;
        const items = products.filter((item)=>item.id != id);

        this.setState({
            products: items
        })
    }
    getCartCount = ()=>{
      const {products} = this.state;
      let count = 0;
      products.forEach((product) => {
        count += product.Qty;
      });
      return count;
    }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          ondecreaseQuantity = {this.handledecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
