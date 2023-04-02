import React, {useState} from 'react';
import {Item} from "../types/item";
import {Icon} from "@iconify/react";

interface ManufacturersListProps {
    manufacturers: string[],
    changeManufacturersHandler: Function,
    constProducts: Item[] | null | undefined
}


const ManufacturersList: React.FC<ManufacturersListProps> = ({
                                                                 manufacturers,
                                                                 changeManufacturersHandler,
                                                                 constProducts
                                                             }) => {

    let productManufacturers: string[] = [];
    constProducts?.forEach((product: Item) => {
        if (!productManufacturers.includes(product.manufacturer)) {
            productManufacturers.push(product.manufacturer);
        }
    });

    const [isClicked, setIsClicked] = useState(false);
    let isBig = true;
    const shortMan = productManufacturers.slice(0, 4);

    const searchManufacturersHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            changeManufacturersHandler([...manufacturers, e.currentTarget.name])
        } else {
            changeManufacturersHandler(manufacturers?.filter(man => man !== e.currentTarget.name))
        }
    }

    if (productManufacturers.length < 3) {
        isBig = false;
    }

    return (
        <>
            {isBig ?
                (
                    <div>
                        {isClicked ? productManufacturers?.map(man => (
                                <div className="manufacturers__div" key={man}>
                                    <input type="checkbox" name={man} onClick={searchManufacturersHandler}/>
                                    <label htmlFor={man}>{man}</label>
                                </div>)) :
                            shortMan?.map(man => (
                                <div className="manufacturers__div" key={man}>
                                    <input type="checkbox" name={man} onClick={searchManufacturersHandler}/>
                                    <label htmlFor={man}>{man}</label>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>
                        {shortMan?.map(man => (
                            <div className="manufacturers__div" key={man}>
                                <input type="checkbox" name={man} onClick={searchManufacturersHandler}/>
                                <label htmlFor={man}>{man}</label>
                            </div>
                        ))}
                    </div>
                )}
            <button onClick={() => setIsClicked(!isClicked)}
                    className="change_visibility">{isClicked ? (
                    <>
                        Скрыть
                        <Icon icon="mdi:arrow-top"/>
                    </>

                ) :
                <>
                    Показать всех
                    <Icon icon="mdi:arrow-down"/>
                </>
            }</button>
        </>
    );
};

export default ManufacturersList;