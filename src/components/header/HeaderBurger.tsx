import React, {useState} from 'react';
import {Icon} from "@iconify/react";
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useRoleActions} from "../../hooks/useRoleActions";

interface HeaderBurgerProps {
    count: number
}

const HeaderBurger: React.FC<HeaderBurgerProps> = ({count}) => {
    const {role} = useTypedSelector(state => state.role)
    const {giveAdminRole, giveUserRole} = useRoleActions();
    const [text, setText] = useState("Получить админку");
    const [isClicked, setIsClicked] = useState(false);

    const changeRoleHandler = () => {
        switch (role) {
            case "User":
                giveAdminRole();
                setText("Стать юзером");
                return;
            case "Admin":
                giveUserRole();
                setText("Получить админку");
                return;
            default:
                giveUserRole();
        }
    }

    const onClickHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    return (
        <div className="header__burger">
            <div className="header__burger__top">
                <button className="burger__btn" onClick={() => setIsClicked(!isClicked)}>
                    <Icon icon="dashicons:menu-alt" width="12px" height="12px"/>
                </button>

                <NavLink className="header__logo" to="/">
                    <img src={require("../../assets/logo.png")} alt="logo"/>
                </NavLink>

                <NavLink to="/cart" className="header__cart__btn">
                    <Icon icon="gg:shopping-cart" width="40px" height="28px"/>
                    <div className="cart__count">
                        {count}
                    </div>
                    <div className="cart__count__background_white"></div>
                </NavLink>
            </div>

            <div className="header__burger__bottom">
                <button className="burger_catalog__button">
                    <img src={require("../../assets/burgerFrame.png")} alt="catalog"/> Каталог
                </button>

                <form className="burger__search">
                    <input type="text" placeholder="Поиск..."/>
                    <button type="submit" onClick={onClickHandler}>
                        <Icon icon="ri:search-line" width={"15px"} height={"15px"}/>
                    </button>
                </form>
            </div>

            <div className={isClicked ? "header__burger__open" : "header__burger__none"} onClick={() => setIsClicked(false)}>
                <div className="blur" />

                <div className="header__burger__content" onClick={(e) => e.stopPropagation()}>
                    <div className="burger__top">
                        <div className="burger__info">
                            <div>
                                <Icon icon="ion:location-outline" width={"20px"} height={"20px"} color={"#3F4E65"}/>
                            </div>
                            <div className="header__text">
                                <h3>г. Кокчетав, ул. Ж. Ташенова 129Б </h3>
                                <p>(Рынок Восточный)</p>
                            </div>
                        </div>

                        <div className="burger__info">
                            <div className="header__icon">
                                <Icon icon="ic:outline-email" width={"20px"} height={"20px"} color={"#3F4E65"}/>
                            </div>
                            <div className="header__text">
                                <h3>opt.sultan@mail.ru </h3>
                                <p>На связи в любое время</p>
                            </div>
                        </div>

                        <div className="burger__info">
                            <div>
                                <Icon icon="cil:phone" width="18px" height="18px" rotate={45}/>
                            </div>

                            <div className="burger__sells">
                                <h2>Отдел продаж</h2>
                                <h3>+7 (777) 490-00-91</h3>
                                <p>время работы: 9:00-20:00</p>
                            </div>


                        </div>

                        <div className="burger__info burger__call">
                            <button><Icon icon="carbon:phone-filled" width="10px" height="10px"/></button>
                            <button><span>Заказать звонок</span></button>
                        </div>
                    </div>

                    <div className="burger__bottom">
                        <h2>Меню сайта:</h2>
                        <div>
                            <div className="burger__about">
                                <a href="/Users/User/code/course_third/frontend/shop/public" className="header__anchor">О
                                    компании</a>
                                <a href="/Users/User/code/course_third/frontend/shop/public" className="header__anchor">Доставка
                                    и оплата</a>
                                <a href="/Users/User/code/course_third/frontend/shop/public"
                                   className="header__anchor">Возврат</a>
                                <a href="/Users/User/code/course_third/frontend/shop/public"
                                   className="header__anchor">Контакты</a>
                                <button onClick={changeRoleHandler}
                                        className="header__anchor header__role">{text}</button>
                            </div>

                        </div>
                        <div className="header__price_button">
                            <button className="yellow__button">
                                Прайс-лист <Icon icon="ic:baseline-download" color={"white"}/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeaderBurger;