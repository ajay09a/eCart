import React  from "react";

const CartItem = (props)=>{
    
            
    //     this.increaseQuantity = () => {
    //         // console.log('this', this.state);

    //         // form state 1
    //         // this.setState({
    //         //     Qty: this.state.Qty + 1
    //         // })

    //         // form state 2
    //         this.setState((prevState)=>{
    //             return {
    //                 Qty: prevState.Qty + 1
    //             }
    //         })
    //     }
    //     this.decreaseQuantity = () => {
    //         const {Qty} = this.state;
    //         if(Qty===0){
    //             return;
    //         }
    //         this.setState((prevState)=>{
    //             return {
    //                 Qty: prevState.Qty - 1
    //             }
    //         })
    //     }
    // }
    const {title, price, Qty} = props.product;
    const {product, onIncreaseQuantity, ondecreaseQuantity, onDeleteProduct} = props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
            </div>
            <div className="right-block">
                <div style={ {fontSize: 25}}>{title}</div>
                <div style={ {color: '#777'}}>{price}</div>
                <div style={ {color: '#777'}}>{Qty}</div>
                <div className="cart-item-actions">
                    <img alt="increase" className="action-icons" onClick={()=>props.onIncreaseQuantity(props.product)} src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                    <img alt="decrease" className="action-icons" onClick={()=>props.ondecreaseQuantity(props.product)} src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" />
                    <img alt="delete" className="action-icons" onClick={()=>onDeleteProduct(product.id)} src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" />
                </div>
            </div>
        </div>
    )
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;