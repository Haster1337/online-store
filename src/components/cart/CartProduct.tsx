import React, {useState} from 'react';
import {Item} from "../types/item";
import {useCartActions} from "../../hooks/useCartActions";
import {useSelector} from "react-redux";
import {Icon} from "@iconify/react";

interface CartProductProps {
    item: Item,
    changeProductCount: Function,
    deleteFromCart: Function
}

const CartProduct: React.FC<CartProductProps> = ({item, changeProductCount, deleteFromCart}) => {

    const deleteHandler = () => {
        deleteFromCart(item);
    }

    const changeCountHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.currentTarget.value === "increment" ? changeProductCount(item, e.currentTarget.value) : changeProductCount(item, e.currentTarget.value);
    }

    return (
        <div className="cart__product">
            <div className="cart__product__img__info">
                <div className="product__img">
                    <img src={`${item.url}`} alt="product image"/>
                </div>
                <div className="cart__info">
                    <p className="product__size">
                        {item.size_type === "объем" ? <Icon icon="whh:bottle"/> :
                            <Icon icon="fa-solid:box-open"/>}
                        {item.size}
                    </p>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            </div>

            <div className="product__action">
                <div className="product__count">
                    <button onClick={changeCountHandler} className="product__count__btn" value="increment">+</button>
                    <span>{item.count}</span>
                    <button onClick={changeCountHandler} className="product__count__btn" value="decrement">-</button>
                </div>


                <h3 className="product__price">{item.price}₽</h3>
                <button onClick={deleteHandler} className="product__delete"><Icon icon="fluent:delete-16-filled"
                                                                                  width="25px" height="25px"
                                                                                  color="#fff"/></button>
            </div>

        </div>

    );
};

export default CartProduct;