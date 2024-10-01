import React from 'react'
import HeaderComponent from './components/Nav-Bar/HeaderComponent';
import styles from './components/Nav-Bar/HeaderComponent.module.css';
import ProductSectionComponent from './components/Product-Section/ProductSectionComponent';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <HeaderComponent />
            <ProductSectionComponent />
        </div>
    )
}

export default Layout