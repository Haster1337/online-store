import React, {useState} from 'react';
import ItemsCatalog from './ItemsCatalog';
import {SortState} from "../types/sortState";
import CatalogTopFilter from "./CatalogTopFilter";
import CatalogLeftFilter from "./CatalogLeftFilter";
import {filterProducts} from "../../functions/filter";
import {Item} from "../types/item";

interface priceValues {
    min: number | undefined,
    max: number | undefined
}

interface CatalogContainerProps {
    products: Item[] | null | undefined,
    addInCart: Function,
    deleteProduct: Function
}

const CatalogContainer: React.FC<CatalogContainerProps> = ({products, addInCart, deleteProduct}) => {
    const [sortType, setSortType] = useState<string>("ascending");
    const [sortState, setSortState] = useState<SortState>({
        byPrice: false,
        byName: true,
    });
    const [searchText, setSearchText] = useState<string>("");

    const [filterType, setFilterType] = useState<string[]>([]);
    const [manufacturers, setManufacturers] = useState<string[]>([]);

    const prices: number[] | undefined = products?.map(product => +product.price);
    let minPriceValue: number | undefined, maxPriceValue: number | undefined;
    if (prices) {
        minPriceValue = +Math.min.apply(null, prices);
        maxPriceValue = +Math.max.apply(null, prices);
    }


    const [priceValues, setPriceValues] = useState<priceValues>({
        min: minPriceValue,
        max: maxPriceValue
    })
    const filteredProducts = filterProducts(products, filterType, sortState, sortType, priceValues, searchText, manufacturers);



    const changeFilterTypeHandler = (newFilterType: string[]) => {
        setFilterType(newFilterType);
    }


    const changeSortStateHandler = (newSortState: SortState) => {
        setSortState(newSortState);
    }

    const changeSearchTextHandler = (newSearchText: string) => {
        setSearchText(newSearchText);
    }

    const changeManufacturersHandler = (newManufacturers: string[]) => {
        console.log(newManufacturers)
        setManufacturers(newManufacturers);
    }

    const changeSortTypeHandler = () => {
        sortType === "ascending" ? setSortType("descending") : setSortType("ascending")
    }

    const changePriceValuesHandler = (min: number | undefined, max: number | undefined) => {
        setPriceValues({min: min, max: max});
    }

    return (
        <div>
            <div className="catalog_container">
                <CatalogTopFilter
                    filterType={filterType}
                    sortType={sortType}
                    changeSortTypeHandler={changeSortTypeHandler}
                    changeFilterTypeHandler={changeFilterTypeHandler}
                    changeSortStateHandler={changeSortStateHandler}
                />
                <div className="catalog_items_filter">
                    <CatalogLeftFilter
                        constProducts={products}
                        min={minPriceValue}
                        max={maxPriceValue}
                        changePriceValues={changePriceValuesHandler}
                        changeSearchTextHandler={changeSearchTextHandler}
                        manufacturers={manufacturers}
                        sortType={sortType}
                        changeManufacturersHandler={changeManufacturersHandler}
                    />
                    <ItemsCatalog
                        products={filteredProducts}
                        addInCart={addInCart}
                        deleteProduct={deleteProduct}
                    />
                </div>
            </div>
        </div>
    );
};

export default CatalogContainer;