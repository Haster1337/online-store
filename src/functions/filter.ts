import {Item} from "../components/types/item";
import {SortState} from "../components/types/sortState";
import {PriceValues} from "../components/types/priceValues";

export const filterProducts = (products: Item[] | null | undefined,
                               filterType: string[],
                               sortState: SortState,
                               sortType: string,
                               priceValues: PriceValues,
                               searchText: string,
                               manufacturers: string[]
) => {
    return products?.filter((product) => {
        let isProductIncluded = false;
        if (filterType.length === 0) {
            isProductIncluded = true;
        } else {
            if (product.type.includes('/')) {
                let split = product.type.split('/');
                isProductIncluded = filterType.includes(split[0]);
                if (!isProductIncluded) {
                    isProductIncluded = filterType.includes(split[1]);
                }
            } else {
                isProductIncluded = filterType.includes(product.type);
            }
        }
        return isProductIncluded;
    })
        ?.sort((a: Item, b: Item) => {
            if (!sortState.byPrice) return 0;
            return sortType === "ascending" ? +a.price - +b.price : +b.price - +a.price;
        })
        ?.sort((a, b) => {
            if (!sortState.byName) return 0;

            let aNameFirstLetter = a.name[0].toLocaleLowerCase();
            let bNameFirstLetter = b.name[0].toLocaleLowerCase();

            return sortType === "ascending" ? aNameFirstLetter.localeCompare(bNameFirstLetter) : bNameFirstLetter.localeCompare(aNameFirstLetter);
        })
        ?.filter(product => {
            if (priceValues.min && priceValues.max) {
                return priceValues.min <= +product.price && priceValues.max >= +product.price
            }
            return true;
        })
        ?.filter(({manufacturer}) => {
            if (!searchText) {
                return true;
            }
            return manufacturer.toLowerCase().includes(searchText.toLowerCase())
        })
        ?.filter(({manufacturer}) => {
            if (manufacturers.length === 0) {
                return true;
            }
            return manufacturers.includes(manufacturer);
        })
}