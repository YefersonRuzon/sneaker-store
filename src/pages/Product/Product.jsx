import React from 'react';
import Footer from '../../components/footer/Footer';
import Layout from '../../components/Layout/Layout';
import sneaker2 from '../../img/hoodie1.png'
import './Product.scss'
const Product = () => {
    return (
        <>
            <Layout/>
            <main className='ProductContainer'>
                <section className='InfoContainer'>
                    <b>Men's Fleece Pullover Hoodie</b>
                    <h2>Paris <span>Saint-Germain nike</span> Club</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam sint soluta saepe hic provident ad iusto? Perspiciatis, possimus dolorem?</p>
                    <div className='size'>
                        <span className='select'>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                    </div>
                    <div className='BtnContainer'>
                        <a href="#">
                            Add to cart
                        </a>
                        <a href="#">
                            Buy now
                        </a>

                    </div>
                </section>
                <b className='Price'>$105.90</b>
                <img src={sneaker2} alt="#" />
            </main>
            <Footer />
        </>  
    );
}

export default Product;
