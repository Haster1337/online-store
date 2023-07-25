import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Item} from "../types/item";
import {Icon} from "@iconify/react";

interface ProductPageProps {
    products: Item[] | null | undefined,
    changeProductCount: Function,
    addInCart: Function,

}


const ProductPage: React.FC<ProductPageProps> = ({products, changeProductCount, addInCart}) => {
    const [isClickedDesc, setIsClickedDesc] = useState(false);
    const [isClickedCharacter, setIsClickedCharacter] = useState(false);

    const code = useParams().productCode;
    const product:Item | undefined = products?.filter(product => product.code === code)[0];

    const changeCountHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
       changeProductCount(product, e.currentTarget.value)
    }


    return (
        <div className="product__list main">
            <div className="nav"></div>
            <div className="product__container">
                <div className="product__img">
                    <img src={`${product?.url}`} alt="product image" />
                </div>
                <div className="product__info">
                    <p className="product__inStock">В наличии</p>
                    <h1 className="product__name">{product?.name}</h1>
                    <p className="product__size">
                        {product?.size_type === "объем" ? <Icon icon="whh:bottle"/> :
                            <Icon icon="fa-solid:box-open"/>}
                        {product?.size}
                    </p>
                    <div className="product__price__cart">
                        <div className="product_price__count">
                            <h2 className="product__price">{product?.price}₽</h2>
                            <div className="product__count">
                                <button className="product__count__btn" value="decrement" onClick={changeCountHandler}>-</button>
                                <span>{product?.count ? product.count : 1}</span>
                                <button className="product__count__btn" value="increment" onClick={changeCountHandler}>+</button>
                            </div>
                        </div>

                        <div className="product_add_in_cart add_in_cart">
                            {/*{!isInCart ? <button onClick={addInCartHandler} className="yellow__button">В корзину <Icon*/}
                            {/*    icon="simple-line-icons:basket"/></button> : <NavLink to="/cart" className="to_cart">Перейти в корзину</NavLink>}*/}
                            <button className="yellow__button" onClick={() => addInCart(JSON.stringify(product))}>В корзину <Icon icon="simple-line-icons:basket"/></button>
                        </div>
                    </div>
                    <div className="product__share">
                        <button className="product__share__btn"><Icon icon="ci:share" width="24px" height="24px"/></button>
                        <label className="product__share__label" lang="ru">При покупке от 10 000 ₽ бесплатная доставка по Кокчетаву и области</label>
                        <button className="product__priceList__btn">
                            Прайс-лист <Icon icon="bx:bxs-download" width="17px" height="17px"/>
                        </button>
                    </div>

                    <div>
                        <p className="product__info__p">Производитель: <label>{product?.manufacturer}</label></p>
                        <p className="product__info__p">Бренд: <label>{product?.brand}</label></p>
                        <p className="product__info__p">Тип размера: <label>{product?.size_type}</label></p>
                        <p className="product__info__p">Штрих-код: <label>{product?.code}</label></p>
                    </div>

                    <div className="product__description">
                        <button className="product__unfold__btn" onClick={() => setIsClickedDesc(!isClickedDesc)}>
                            Описание
                        </button>
                        <p className={!isClickedDesc ? "none" : ""}>{product?.description}</p>
                    </div>
                    <div className="product__characteristics">
                        <button className="product__unfold__btn" onClick={() => setIsClickedCharacter(!isClickedCharacter)}>
                            Характеристики
                        </button>
                        <div className={isClickedCharacter ? "product__characteristics__div": "none"}>
                            <p className="product__info__p">Тип размера: <label>{product?.size_type}</label></p>
                            <p className="product__info__p">Размер: <label>{product?.size}</label></p>
                            <p className="product__info__p">Штрих-код: <label>{product?.code}</label></p>
                            <p className="product__info__p">Производитель: <label>{product?.manufacturer}</label></p>
                            <p className="product__info__p">Бренд: <label>{product?.manufacturer}</label></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;