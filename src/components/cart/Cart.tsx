import React, {useState} from 'react';
import CartProduct from "./CartProduct";
import {Item} from "../types/item";
import {getTotalAmount} from "../../functions/getTotalAmount";
import {NavLink} from "react-router-dom";

interface CartProps {
    products: Item[] | null | undefined,
    changeProductCount: Function,
    deleteFromCart: Function,
    clearCart: Function
}

const Cart: React.FC<CartProps> = ({products, changeProductCount, deleteFromCart, clearCart}) => {

    const cartProducts = products?.filter(product => product.isInCart);
    const [showText, setShowText] = useState(false);
    const totalAmount = getTotalAmount(cartProducts);

    const onSubmitHandler = () => {
        clearCart();
        setShowText(true);

        setTimeout(() => {
            setShowText(false);
        }, 3000)
    }

    return (
        <div className="cart main">
            <div className="cart__container">
                <div className="nav">
                    <NavLink to="/" className="nav_link">Главная</NavLink>
                    <NavLink to="/" className="nav_link">Каталог</NavLink>
                    <NavLink to="/cart" className="nav_link">Корзина</NavLink>
                </div>
                <h1>Корзина</h1>
                {showText && <h2>Спасибо за покупку</h2>}
                {cartProducts?.map(item => (
                        <CartProduct item={item} changeProductCount={changeProductCount} deleteFromCart={deleteFromCart}
                                     key={item.code}/>
                    )
                )}
                <div className="cart__order">
                    <button className="yellow__button" onClick={onSubmitHandler} >Оформить заказ</button>
                    <h3>{totalAmount}₽</h3>
                </div>

            </div>

        </div>
    );
};

export default Cart;