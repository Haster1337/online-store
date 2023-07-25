import React, {useState} from 'react';
import {Icon} from "@iconify/react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useRoleActions} from "../../hooks/useRoleActions";

const HeaderTop = () => {
    const {role} = useTypedSelector(state => state.role)
    const {giveAdminRole, giveUserRole} = useRoleActions();
    const [text, setText] = useState("Получить админку");

    const changeRoleHandler = () => {
        switch (role){
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

    return (
        <div className="header__top">
            <div className="header__top__container">
                <div className="header__contacts">
                    <div className="header__contacts__address">
                        <div>
                            <Icon icon="ion:location-outline" width={"20px"} height={"20px"} color={"#3F4E65"}/>
                        </div>
                        <div className="header__text">
                            <h3>г. Кокчетав, ул. Ж. Ташенова 129Б </h3>
                            <p>(Рынок Восточный)</p>
                        </div>
                    </div>

                    <div className="header__contacts__email">
                        <div className="header__icon">
                            <Icon icon="ic:outline-email" width={"20px"} height={"20px"} color={"#3F4E65"}/>
                        </div>
                        <div className="header__text">
                            <h3>opt.sultan@mail.ru </h3>
                            <p>На связи в любое время</p>
                        </div>
                    </div>

                </div>
                <div className="header__about">
                    <a href="/Users/User/code/course_third/frontend/shop/public" className="header__anchor">О компании</a>
                    <a href="/Users/User/code/course_third/frontend/shop/public" className="header__anchor">Доставка и оплата</a>
                    <a href="/Users/User/code/course_third/frontend/shop/public" className="header__anchor">Возврат</a>
                    <a href="/Users/User/code/course_third/frontend/shop/public" className="header__anchor">Контакты</a>
                    <button onClick={changeRoleHandler} className="header__anchor header__role">{text}</button>
                </div>
            </div>

        </div>
    );
};

export default HeaderTop;