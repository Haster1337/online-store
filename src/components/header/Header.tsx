import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import {Item} from "../types/item";
import React from "react";

import HeaderBurger from "./HeaderBurger";

interface HeaderProps {
    products: Item[] | undefined | null
}


const Header: React.FC<HeaderProps> = ({products}) => {
    const cartProducts = products?.filter(product => product.isInCart);

    const count = cartProducts?.length || 0;


    return (
        <div className="header">
            <HeaderTop/>
            <HeaderBottom cartProducts={cartProducts} count={count}/>
            <HeaderBurger count={count}/>
        </div>
    );
};

export default Header;