import React, {useEffect, useState} from 'react';
import {Item} from "../types/item";
import {Icon} from "@iconify/react"
import {useProductActions} from "../../hooks/useProductActions";
import {useCartActions} from "../../hooks/useCartActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";

interface ItemProps {
    item: Item,
    addInCart: Function,
    deleteProduct: Function
}

const ItemIcon: React.FC<ItemProps> = ({item, addInCart, deleteProduct}) => {
    const {role} = useTypedSelector(state => state.role);

    return (
        <div className="catalog_product_icon">
            {/*<ProductPage product={item}/>*/}
            <div className="product_name_img">
                <div className="product_icon_img">
                    <img src={`${item.url}`} alt="image"/>
                </div>
                <p className="item_size">
                    {item.size_type === "объем" ? <Icon icon="whh:bottle"/> :
                        <Icon icon="fa-solid:box-open"/>}
                    {item.size}
                </p>
                <NavLink to={`/online-store/catalog/${item.code}`} className="item_name">
                    {item.name}
                </NavLink>
            </div>
            <div className="product_item_info">
                <p className="item_info first"><span>Штрихкод:</span>{item.code}</p>
                <p className="item_info"><span>Производитель:</span>{item.manufacturer}</p>
                <p className="item_info last"><span>Бренд:</span>{item.brand}</p>
                {role === "Admin" && <button className="delete_icon" onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => deleteProduct(e.currentTarget.value)} value={JSON.stringify(item)}>Удалить</button>}
                <div className="add_in_cart">
                    <h4>{item.price}₽</h4>
                    {item.isInCart ? <NavLink to="/cart" className="to_cart">Перейти в корзину</NavLink> :
                        <button className="yellow__button" onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => addInCart(e.currentTarget.value)} value={JSON.stringify(item)}>В корзину <Icon icon="simple-line-icons:basket"/></button>}
                </div>
            </div>

        </div>
    );
};

export default ItemIcon;