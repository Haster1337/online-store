import React, {useState} from "react";
import ItemIcon from "./ItemIcon";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import AddProduct from "./AddProduct";
import {Item} from "../types/item";
import PaginationButton from "./PaginationButton";
import Modal from "../modal/Modal";

interface ItemsCatalogProps {
    products: Item[] | undefined | null,
    addInCart: Function,
    deleteProduct: Function
}

const ItemsCatalog: React.FC<ItemsCatalogProps> = ({products, addInCart, deleteProduct}) => {
    const [isAdding, setIsAdding] = useState(false);
    const {role} = useTypedSelector((state) => state.role);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(6);

    const addProductHandler = () => {
        isAdding ? setIsAdding(false) : setIsAdding(true);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (
        let i = 1;
        i <= Math.ceil((products?.length ?? 1) / itemsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    return (
        <div className="catalog_items">
            {role === "Admin" && (
                <button onClick={addProductHandler} className="add__product">
                    Открыть форму добавления продукт
                </button>
            )}
            <Modal setActive={setIsAdding} active={isAdding}>
                <AddProduct/>
            </Modal>

            <div className="catalog_grid_items">

                {currentItems?.map((product) => (
                    <ItemIcon item={product} addInCart={addInCart} deleteProduct={deleteProduct} key={product.code}/>
                ))}


            </div>

            <div className="catalog_items_nav">
                {pageNumbers.map((number) => (
                    <PaginationButton paginate={paginate} number={number} key={number}/>
                ))}
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis
                iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed
                pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper
                enim,
                malesuada.
            </p>

        </div>
    );
};

export default ItemsCatalog;