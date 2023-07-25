import React, {useEffect, useState} from 'react';
import Catalog from "./components/catalog/Catalog";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import "./styles/css/styles.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./components/productPage/ProductPage";
import {useProductActions} from "./hooks/useProductActions";
import {useDispatch} from "react-redux";
import {Item} from "./components/types/item";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
    const {products} = useTypedSelector(state => state.products);
    const dispatch = useDispatch();
    const {getProducts} = useProductActions();

    let storedProducts: string | null | undefined = localStorage.getItem("products");
    const [parsedProducts, setParsedProducts] = useState<Item[] | null | undefined>(condition(storedProducts, products));


    function condition(storedProducts: string | null | undefined,
                       products: Item[] | null | undefined) {
        if (storedProducts !== "null" && storedProducts !== "[]" && storedProducts) {

            if (JSON.parse(storedProducts)) {

                return JSON.parse(storedProducts);
            }
        }
        localStorage.setItem("products", JSON.stringify(products));
        return products;
    }

    const deleteProductFromCartHandler = (product: string) => {
        let newProduct: Item = JSON.parse(product)
        let newProducts = parsedProducts?.filter((prod: Item | null | undefined) => {
            return prod?.code !== newProduct.code && prod;
        });
        setParsedProducts(newProducts);
    }

    const addInCartHandler = (product: string) => {
        let newProduct: Item = JSON.parse(product);
        if (!newProduct.isInCart) {
            newProduct.isInCart = true;
            if (!newProduct.count) {
                newProduct.count = 1;
            }
            let newProducts = parsedProducts?.map(prod => {
                return prod.code !== newProduct.code ? prod : newProduct;
            });
            setParsedProducts(newProducts);

        }

    }

    const changeProductCountHandler = (product: Item, action: string) => {
        if (action === "increment") {
            product.count ? product.count++ : product.count = 1;
            let newProducts = parsedProducts?.map(prod => {
                return prod.code !== product.code ? prod : product;
            });
            setParsedProducts(newProducts);
        } else {
            product.count ? product.count-- : product.count = 1;
            let newProducts = parsedProducts?.map(prod => {
                return prod.code !== product.code ? prod : product;
            });
            setParsedProducts(newProducts);
        }
    }

    const deleteFromCartHandler = (product: Item) => {
        product.isInCart = false;
        product.count = 1;
        const newProducts = parsedProducts?.map(prod => {
            return prod.code === product.code ? product : prod;
        });

        setParsedProducts(newProducts);
    }

    const clearCartHandler = () => {
        const newProducts = parsedProducts?.map(prod => {
            if (prod.isInCart) {
                prod.isInCart = false;
                prod.count = 1;
            }
            return prod;
        });
        setParsedProducts(newProducts);
    }

    useEffect(() => {
        getProducts();
    }, [useProductActions, dispatch]);

    useEffect(() => {
        if (!parsedProducts || parsedProducts.length === 0) {
            getProducts();
            setParsedProducts(products);
        }
    }, [parsedProducts, useProductActions, dispatch, localStorage.getItem("products")]);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(parsedProducts));

    }, [setParsedProducts, parsedProducts]);

    return (
        <div className="body_container">
            <BrowserRouter>
                <Header products={parsedProducts}/>
                <Routes>
                    <Route path="/online_store" element={<Catalog
                        products={parsedProducts}
                        addInCart={addInCartHandler}
                        deleteProduct={deleteProductFromCartHandler}
                    />}/>
                    <Route path="/online_store/catalog/:productCode"
                           element={<ProductPage products={products} changeProductCount={changeProductCountHandler}
                                                 addInCart={addInCartHandler}/>}/>
                    <Route path="/online_store/cart"
                           element={<Cart products={parsedProducts} changeProductCount={changeProductCountHandler}
                                          deleteFromCart={deleteFromCartHandler} clearCart={clearCartHandler}/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
