import React, {SyntheticEvent, useState} from 'react';
import {Item} from "../types/item";

const AddProduct = () => {
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [sizeType, setSizeType] = useState("");
    const [size, setSize] = useState("");
    const [code, setCode] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [brand, setBrand] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [formValid, setFormValid] = useState(false);

    const checkFormValidity = () => {
        const isValid = Boolean(url && name && sizeType && size && code && manufacturer && brand && desc && price && type);
        setFormValid(isValid);
    }


    const setValueHandler = (e: SyntheticEvent<HTMLInputElement>): void => {
        switch (e.currentTarget.name){
            case "url":
                setUrl(e.currentTarget.value);
                break;
            case "name":
                setName(e.currentTarget.value);
                break;
            case "size_type":
                setSizeType(e.currentTarget.value);
                break;
            case "size":
                setSize(e.currentTarget.value);
                break;
            case "code":
                setCode(e.currentTarget.value);
                break;
            case "manufacturer":
                setManufacturer(e.currentTarget.value);
                break;
            case "brand":
                setBrand(e.currentTarget.value);
                break;
            case "description":
                setDesc(e.currentTarget.value);
                break;
            case "price":
                setPrice(e.currentTarget.value);
                break;
            case "type":
                setType(e.currentTarget.value);
                break;
        }
        checkFormValidity();
    }

    const addProductHandler = async (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!formValid){
            setErrorMessage("Заполните все поля");
            return;
        }
        try {
            const newProduct: Item = {
                url,
                name,
                size,
                size_type: sizeType,
                code,
                manufacturer,
                brand,
                description: desc,
                price,
                type
            }
            const storedProduct = localStorage.getItem("products");
            if(storedProduct) {
                const products: Item[] = JSON.parse(storedProduct)
                products.push(newProduct);
                localStorage.setItem("products", JSON.stringify(products));
            }

            setUrl("");
            setName("");
            setSize("");
            setSizeType("");
            setCode("");
            setManufacturer("");
            setBrand("");
            setDesc("");
            setPrice("");
            setType("");
            setErrorMessage("");
        } catch (error: unknown) {
            setErrorMessage((error as Error).message);
        }
    }

    return (
        <form className="add__type__form">
            <input type="text" name="url" onChange={setValueHandler} value={url} required={true} placeholder="Url"/>
            <input type="text" name="name" onChange={setValueHandler} value={name} required={true} placeholder="Name"/>
            <input type="text" name="size_type" onChange={setValueHandler} value={sizeType} required={true} placeholder="Size type"/>
            <input type="text" name="size" onChange={setValueHandler} value={size} required={true} placeholder="Size"/>
            <input type="text" name="code" onChange={setValueHandler} value={code} required={true} placeholder="Code"/>
            <input type="text" name="manufacturer" onChange={setValueHandler} value={manufacturer} required={true} placeholder="Manufacturer"/>
            <input type="text" name="brand" onChange={setValueHandler} value={brand} required={true} placeholder="Brand"/>
            <input type="text" name="description" onChange={setValueHandler} value={desc} required={true} placeholder="Description"/>
            <input type="text" name="price" onChange={setValueHandler} value={price} required={true} placeholder="Price"/>
            <input type="text" name="type" onChange={setValueHandler} value={type} required={true} placeholder="Type"/>
            <button onClick={addProductHandler}>Добавить продукт</button>
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export default AddProduct;