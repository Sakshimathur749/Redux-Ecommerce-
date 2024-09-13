import { baseUrl } from "../axiosinstance";
import { category, Product } from "../type/type";
export default class Apiservices {
    public static async fetchallproducts(): Promise<Product[] | undefined>{
        try {
            return (await baseUrl.get('products?limit=5')).data
            
        } catch (error) {
            console.log(error);
        }
    }
    public static async allproducts(): Promise<Product[] | undefined>{
        try {
            return (await baseUrl.get('products')).data
            
        } catch (error) {
            console.log(error);
        }
    }
    public static async allCategory(): Promise<category[] | undefined>{
        try {
            return (await baseUrl.get('products/categories')).data
            
        } catch (error) {
            console.log(error);
        }
    }
}