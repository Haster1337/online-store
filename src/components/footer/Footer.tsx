import React from 'react';
import {Icon} from "@iconify/react";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__first">
                    <div className="footer__first__img">
                        <img src={require("../../assets/footerLogo.png")} alt="logo"/>
                        <div className="footer__price__button">
                            <button className="yellow__button">
                                Прайс-лист <Icon icon="ic:baseline-download" color={"white"}/>
                            </button>
                        </div>

                    </div>

                    <p>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской
                        области</p>

                    <div className="footer__first__follow">
                        <h5>Подпишись на скидки и акции</h5>
                        <form className="search__input footer__email">
                            <input type="text" placeholder="Введите ваш E-mail"/>
                            <button type="submit" className="search__btn" onClick={(e) => e.preventDefault()}>
                                <Icon icon="ic:outline-keyboard-arrow-right" color="white" width={"15px"}
                                      height={"15px"}/>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer__second">
                    <div className="footer__second__column">
                        <h3>Меню сайта:</h3>
                        <div>
                            <a href="/Users/User/code/course_third/frontend/shop/public"
                               className="header__anchor footer__anchor">О
                                компании</a>
                            <a href="/Users/User/code/course_third/frontend/shop/public"
                               className="header__anchor footer__anchor">Доставка
                                и оплата</a>
                            <a href="/Users/User/code/course_third/frontend/shop/public"
                               className="header__anchor footer__anchor">Возврат</a>
                            <a href="/Users/User/code/course_third/frontend/shop/public"
                               className="header__anchor footer__anchor">Контакты</a>
                        </div>
                    </div>

                    <div className="footer__second__column">
                        <h3>Категории:</h3>
                        <div>
                            <a href="/Users/User/code/course_third/frontend/shop/public"
                               className="header__anchor footer__anchor">Бытовая
                                химия</a>
                            <a href="/Users/User/code/course_third/frontend/shop/public"
                               className="header__anchor footer__anchor">Косметика
                                и гигиена</a>
                            <a href="/Users/User/code/course_third/frontend/shop/public"
                               className="header__anchor footer__anchor">Товары
                                для дома</a>
                            <a href="/Users/User/code/course_third/frontend/shop/public"
                               className="header__anchor footer__anchor">Товары
                                для детей и мам</a>
                            <a href="/Users/User/code/course_third/frontend/shop/public"
                               className="header__anchor">Посуда</a>
                        </div>
                    </div>
                </div>

                <div className="footer__third">
                    <div className="footer__third__price">
                        <h3>Скачать прайс-лист</h3>
                        <div className="header__price_button">
                            <button className="yellow__button">
                                Прайс-лист <Icon icon="ic:baseline-download" color={"white"}/>
                            </button>
                        </div>
                    </div>

                    <div className="footer__third__share">
                        <h4>Связь в мессенджерах</h4>
                        <div>
                            <button className="whatsapp"><Icon icon="ic:baseline-whatsapp" color="white" width="23px"
                                                               height="23px"/></button>
                            <button className="telegram"><Icon icon="logos:telegram" width="39px" height="39px"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer__fourth">
                    <h3>Контакты:</h3>
                    <div className="footer__adaptive">
                        <div className="footer__fourth__content">
                            <div className="footer__sells">
                                <h3>+7 (777) 490-00-91</h3>
                                <p>время работы: 9:00-20:00</p>
                                <button>Заказать звонок</button>
                            </div>

                            <div className="footer__contactus">
                                <h3>opt.sultan@mail.ru </h3>
                                <p>На связи в любое время</p>

                            </div>

                            <div className="footer__cards">
                                <img src={require("../../assets/Visa.png")} alt="visa"/>
                                <img src={require("../../assets/master.png")} alt="master cards"/>
                            </div>
                        </div>

                        <div className="footer__share__adaptive footer__third__share">
                            <h4>Связь в мессенджерах</h4>
                            <div>
                                <button className="whatsapp"><Icon icon="ic:baseline-whatsapp" color="white"
                                                                   width="23px"
                                                                   height="23px"/></button>
                                <button className="telegram"><Icon icon="logos:telegram" width="39px" height="39px"/>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Footer;