export interface ProductTS{
    id: number,
    title: string,
    dercription: string,
    rating: {
        rate: number,
        count:number
    },
    price:number
}
export interface ProductGroupTS{
    allProducts: {
        [productList:string]: Array<ProductTS>;
        [cartList:string]: Array<ProductTS>;
    }
}
export interface AddUserTS{

}