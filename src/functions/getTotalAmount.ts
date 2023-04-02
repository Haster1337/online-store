import {Item} from "../components/types/item";

export const getTotalAmount = (prods: Item[] | null | undefined): number => {
    let sum = 0;
    prods?.forEach(prod => {
        if(prod.count) sum += prod.count * +prod.price;
    })
    return sum;
}

