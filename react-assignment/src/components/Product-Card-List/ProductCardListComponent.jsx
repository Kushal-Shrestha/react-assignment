import React, { useEffect, useState } from 'react';
import ecommerceService from '../../services/ProductDetails';
import styles from '../Product-Card-List/ProductCardListComponent.module.css';
import Modal from '../Modal/ModalComponent';

const ProductCardListComponent = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                //Set Timeout To Delay the response so as to show different staates.
                await new Promise((resolve) => setTimeout(resolve, 3000));
                const data = await ecommerceService.getAllProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);


    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    if (loading) return (
        <div className={styles.loadingContainer}>
            <div className={styles.loading}>
            </div>
            <h1>Loading....</h1>
        </div>
    )

    return (
        <div>
            <h1>Products</h1>
            {error ? (
                <div className={styles.error}>
                    <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd" />
                    </svg>
                    <h1>{error}</h1>
                </div>
            ) : (
                <div className={styles.productContainer}>
                    {products.map(product => (
                        <div className={styles.productCard} key={product.id}>
                            <div className={styles.imageContainer} style={{ backgroundImage: `url(${product.image})` }}>
                            </div>
                            <div className={styles.productDetails}>
                                <p className={styles.productTitle}>{product.title}</p>
                                <p className={styles.productCategory}>{product.category}</p>
                                <div className={styles.productCardFooter}>
                                    <span>${product.price}</span>
                                    <button onClick={() => openModal(product)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
        </div>
    );
};

export default ProductCardListComponent;
