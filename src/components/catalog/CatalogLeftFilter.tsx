import React, {useState} from 'react';
import {Icon} from "@iconify/react";
import {Item} from "../types/item";
import ManufacturersList from "./ManufacturersList";

interface CatalogLeftFilterProps {
    constProducts: Item[] | null | undefined,
    min: number | undefined,
    max: number | undefined,
    changePriceValues: Function,
    changeSearchTextHandler: Function,
    manufacturers: string[],
    sortType: string,
    changeManufacturersHandler: Function
}

const CatalogLeftFilter: React.FC<CatalogLeftFilterProps> = ({
                                                                 constProducts,
                                                                 min,
                                                                 max,
                                                                 changePriceValues,
                                                                 changeSearchTextHandler,
                                                                 manufacturers,
                                                                 sortType,
                                                                 changeManufacturersHandler
                                                             }) => {
        const [isClicked, setIsClicked] = useState(true);
        const [inputText, setInputText] = useState("");

        const [leftPrice, setLeftPrice] = useState<string | number>("");
        const [rightPrice, setRightPrice] = useState<string | number>("");



        const searchHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
            e.preventDefault();
            changeSearchTextHandler(inputText);
        }

        const changeInputTextHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
            e.currentTarget.value === "" && changeSearchTextHandler("");
            setInputText(e.currentTarget.value);
        }


        const changeValueHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
            switch (e.currentTarget.name) {
                case "left":
                    if (sortType === "ascending") {
                        setLeftPrice(+e.currentTarget.value);
                        return;
                    }
                    setRightPrice(+e.currentTarget.value);
                    return;
                case "right":
                    if (sortType === "ascending") {
                        setRightPrice(+e.currentTarget.value);
                        return;
                    }
                    setLeftPrice(+e.currentTarget.value);
                    return;
            }
        }

        const useFilter = () => {
            if (sortType === "ascending") {
                changePriceValues(+leftPrice || min, +rightPrice || max);
            } else {
                changePriceValues(+rightPrice || min, +leftPrice || max);
            }
        }


        return (
            <div className="catalog_left_filter">
                <h4>Подбор по параметрам <button onClick={() => setIsClicked(!isClicked)}>{!isClicked ?
                    <Icon icon="mdi:arrow-top"/> : <Icon icon="mdi:arrow-down"/>}</button></h4>
                <div className={isClicked ? "catalog_left_filter_details" : "none"}>
                    <div className="catalog_price_filter">
                        <h4>Цена</h4>
                        <div className="catalog_price__input">
                            <input
                                type="number"
                                name="left"
                                placeholder={sortType === "ascending" ? `${min}` : `${max}`}
                                min={min}
                                max={max}
                                value={sortType === "ascending" ? `${leftPrice}` : `${rightPrice}`}
                                onChange={changeValueHandler}
                            />
                            <span>-</span>
                            <input
                                type="number"
                                name="right"
                                placeholder={sortType === "ascending" ? `${max}` : `${min}`}
                                min={min}
                                max={max}
                                value={sortType === "ascending" ? `${rightPrice}` : `${leftPrice}`}
                                onChange={changeValueHandler}
                            />
                        </div>
                    </div>
                    <form className="catalog_left_search" onSubmit={searchHandler}>
                        <h4>Производитель</h4>
                        <div className="search__input catalog_left_search__input">
                            <input type="text" value={inputText} onChange={changeInputTextHandler} placeholder="Поиск..."/>
                            <button type="submit" className="search__btn">
                                <Icon icon="ri:search-line" color="white" width={"15px"} height={"15px"}/>
                            </button>
                        </div>
                        <ManufacturersList manufacturers={manufacturers} changeManufacturersHandler={changeManufacturersHandler} constProducts={constProducts}/>
                    </form>

                    <div className="catalog_left_filter_btn">
                        <button onClick={useFilter}>
                            Показать
                        </button>
                    </div>
                </div>
            </div>
        );
    }
;

export default CatalogLeftFilter;