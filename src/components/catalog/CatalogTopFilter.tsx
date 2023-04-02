import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Modal from '../modal/Modal';


interface CatalogTopFilterProps {
    filterType: string[],
    sortType: string,
    changeSortTypeHandler: Function,
    changeFilterTypeHandler: Function,
    changeSortStateHandler: Function,
}


const CatalogTopFilter: React.FC<CatalogTopFilterProps> = ({
                                                               filterType,
                                                               sortType,
                                                               changeSortTypeHandler,
                                                               changeFilterTypeHandler,
                                                               changeSortStateHandler,

                                                           }) => {
    const {role} = useTypedSelector(state => state.role);
    const [isClicked, setIsClicked] = useState(false);
    const [newTypes, setNewTypes] = useState<string[]>([]);
    const [value, setValue] = useState<string>("");
    const addFilterHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        if (!filterType.includes(e.currentTarget.value)) {
            changeFilterTypeHandler([...filterType, e.currentTarget.value]);
        } else {
            changeFilterTypeHandler(filterType.filter(type => type !== e.currentTarget.value));
        }
    }

    const sortOptionHandler = (e: React.SyntheticEvent<HTMLSelectElement>) => {
        switch (e.currentTarget.value) {
            case 'price':
                changeSortStateHandler({byPrice: true, byName: false});
                return;
            case 'name':
                changeSortStateHandler({byPrice: false, byName: true});
                return;
            default:
                return;
        }
    };

    const createNewSortType = () => {
        changeSortTypeHandler();
    }

    const addingTypeHandler = () => {
        isClicked ? setIsClicked(false) : setIsClicked(true);
    }

    const onChangeInputHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const addNewType = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(value.length !== 0){
            newTypes.length > 0 ? setNewTypes([...newTypes, value]) : setNewTypes([value]);
            setValue("");
            setIsClicked(false);
        }
    }

    return (
        <div className="catalog_top_filter">
            <div className="catalog_top_sort">
                <label>Сортировка:</label>
                <select name="sort" id="sorting" defaultValue="name" onChange={sortOptionHandler}>
                    <option value="name">Название</option>
                    <option value="price">Цена</option>
                </select>
                <button onClick={createNewSortType}>
                    {sortType === "ascending" ? <Icon icon="mdi:arrow-top"/> : <Icon icon="mdi:arrow-down"/>}
                </button>
            </div>

            <div className="catalog_top_filter_btn">
                <button onClick={addFilterHandler} value="body">
                    Уход за телом
                </button>

                <button onClick={addFilterHandler} value="hands">
                    Уход за руками
                </button>
                {newTypes.map(type => (
                    <button onClick={addFilterHandler} value={type}>Уход за {type}</button>
                ))}
                {role === "Admin" && <button onClick={addingTypeHandler} id="add_type">Добавить новый тип</button>}
                <Modal active={isClicked} setActive={setIsClicked}>
                    <form onSubmit={addNewType} className="add__type__form">
                        <input type="text" value={value} onChange={onChangeInputHandler}/>
                        <button type="submit" id="submit__form">Добавить тип ухода</button>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default CatalogTopFilter;