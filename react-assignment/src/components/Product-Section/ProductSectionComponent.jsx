import React from 'react'
import { ProductHeroComponent } from '../Product-Hero-Component/ProductHeroComponent'
import ProductListComponent from '../Product-List/ProductListComponent'

const ProductSectionComponent = () => {
    return (
        <div>
            <div>
                <ProductHeroComponent />
                <ProductListComponent />
            </div>
        </div>
    )
}

export default ProductSectionComponent