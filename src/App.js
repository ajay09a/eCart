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
                    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Phone',
                    Qty: 2,
                    img: 'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    Qty: 4,
                    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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
    getTotalAmount = ()=>{
      const {products} = this.state;
      let count = 0;
      products.map((product) => {
        count += product.Qty * product.price;
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
        <div style={{padding:10, fontSize:20}}>Total: {this.getTotalAmount()}</div>
      </div>
    );
  }
}

export default App;
