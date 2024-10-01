import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, product }) => {
    const [quantity, setQuantity] = useState(0);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const increment = () => {
        setQuantity((prevValue) => prevValue + 1);
    };

    const decrement = () => {
        setQuantity((prevValue) => Math.max(0, prevValue - 1));
    };

    const handleAddtoCart = async () => {
        setLoading(true);
        setSuccess(false);

        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    };


    return (
        <div>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div>
                            <button className={styles.closeButton} onClick={onClose}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>

                        <div className={styles.modalImageContainer}>
                            <div className={styles.modalImage} alt={product.title} style={{ backgroundImage: `url(${product.image})` }}>
                            </div>
                            <div className={styles.modalProductContainer}>
                                <h4>{product.title}</h4>
                                <p> ${product.price}</p>
                                <p>{product.description}</p>
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <span> Enter Quantity</span>
                            <button className={styles.modalButton} onClick={decrement}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                </svg>
                            </button>

                            <span>{quantity}</span>

                            <button className={styles.modalButton} onClick={increment}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                </svg>
                            </button>
                        </div>

                        <div className={styles.modalFooter}>
                            <button onClick={handleAddtoCart}>
                                {loading ? (
                                    <div className={styles.loading} />
                                ) : success ? (
                                    <div className={styles.success}>
                                        <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        <span>Success!</span>
                                    </div>
                                ) : (
                                    <div className={styles.modalCartButton}>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                        </svg>
                                        <span>Add To Cart</span>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
