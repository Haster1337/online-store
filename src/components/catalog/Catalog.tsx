import React from 'react';
import CatalogContainer from "./CatalogContainer";
import {NavLink} from "react-router-dom";
import {Item} from "../types/item";

interface CatalogProps {
    products: Item[] | null | undefined,
    addInCart: Function,
    deleteProduct: Function
}

const Catalog: React.FC<CatalogProps> = ({products, addInCart, deleteProduct}) => {
    
    return (
        <div className="catalog main">
            <div className="nav">
                <NavLink to="/" className="nav_link">
                    Главная
                </NavLink>

                <NavLink to="/" className="nav_link">
                    Косметика и гигиена
                </NavLink>
            </div>
            <h1>Косметика и гигиена</h1>
            <CatalogContainer products={products} addInCart={addInCart} deleteProduct={deleteProduct}/>
        </div>
    );
};

export default Catalog;