import React from 'react';
import images from '../../utils/images';
import "../../styles/HomePage.scss";
import { Title, ProductList, FilterView, Preloader } from '../../components/common';
import { useProductContext } from '../../context/productContext';

const HomePage = () => {
    const { products, productsLoading } = useProductContext();

    return (
        <main className='bg-secondary'>
            <section className='sc-banner'>
                <div className='banner-item h-100 img-cover'>
                    <img src = {images.banner_1} alt = "banner_image" className='img-cover' />
                </div>
            </section>

            <section className='sc-wrapper py-5'>
                <Title title={"Our Products"} />
                <FilterView />
                <br />
                <br />
                {
                    productsLoading ? <Preloader /> : <ProductList products = {products} />
                }
            </section>
        </main>
    )
}

export default HomePage