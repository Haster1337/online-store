import React from 'react';
import {Icon} from "@iconify/react"
import {NavLink} from "react-router-dom";
import {Item} from "../types/item";
import {getTotalAmount} from "../../functions/getTotalAmount";

interface HeaderBottomProps {
    cartProducts: Item[] | undefined | null
    count: number
}

const HeaderBottom: React.FC<HeaderBottomProps> = ({cartProducts, count}) => {

    const totalAmount = getTotalAmount(cartProducts);


    const onClickHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    return (
        <div className="header__bottom">
            <div className="header__bottom__container">
                <NavLink className="header__logo" to="/online-store">
                    <img src={require("../../assets/logo.png")} alt="logo"/>
                </NavLink>
                <div className="header__catalog">
                    <button className="yellow__button">
                        Каталог <img src={require("../../assets/Frame 125.png")} alt="catalog"/>
                    </button>
                    <form className="search__input header__search">
                        <input type="text" placeholder="Поиск..."/>
                        <button type="submit" className="search__btn" onClick={onClickHandler}>
                            <Icon icon="ri:search-line" color="white" width={"15px"} height={"15px"}/>
                        </button>
                    </form>

                </div>
                <div className="header__contactus">
                    <div className="contactus__text">
                        <h3>+7 (777) 490-00-91</h3>
                        <p>время работы: 9:00-20:00</p>
                        <button><span>Заказать звонок</span></button>
                    </div>

                    <div className="contactus_img">
                        <img src={require("../../assets/woman.png")} alt="woman"/>
                    </div>
                </div>
                <div className="header__price_button">
                    <button className="yellow__button">
                        Прайс-лист <Icon icon="ic:baseline-download" color={"white"}/>
                    </button>
                </div>
                <div className="header__cart">
                    <NavLink to="/online-store/cart" className="header__cart__btn">
                        <Icon icon="gg:shopping-cart" width="40px" height="28px"/>
                        <div className="cart__count">
                            {count}
                        </div>
                        <div className="cart__count__background_white"></div>
                    </NavLink>

                    <div className="cart__info">
                        <p>Корзина</p>
                        <h3>{totalAmount} ₽</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;
