import { instance } from '../config/axiosConfig';

class EcommerceService {
    static instance;

    constructor() {
        if (!EcommerceService.instance) {
            EcommerceService.instance = this;
        }
        return EcommerceService.instance;
    }

    async getAllProducts() {
        return await instance.get('products');
    }

    async getSingleProduct(productId) {
        return await instance.get(`products/${productId}`);
    }

    async getProductsByCategory(category) {
        return await instance.get(`products/category/${category}`);
    }
}

const ecommerceService = new EcommerceService();
export default ecommerceService;
