import React  from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
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
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return(
                    <CartItem
                        product={product} 
                        key={product.id} 
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        ondecreaseQuantity = {this.handledecreaseQuantity}
                     />
                    )
                })}
            </div>
        );
    }
}


export default Cart;