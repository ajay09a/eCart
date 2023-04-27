import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {db} from "./firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    db
      .collection("products")
      .get()
      .then(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
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
        const items = products.filter((item)=>item.id !== id);

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
        return count += product.Qty * product.price;
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
