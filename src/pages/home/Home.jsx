import React from 'react';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/footer/Footer';
import HomeImg from '../../img/imgHome.png'
import imgCardOne from '../../img/jHome2.png'
import imgCardTwo from '../../img/jHome1.png'
import imgCardThree from '../../img/jHome3.png'
import HomeImgs from '../../img/homeimgs3.png'
import ImgGridOne from '../../img/personalizado.png'
import ImgGridTwo from '../../img/sneakers.png'
import ImgGridThree from '../../img/shirt.png'
import Hoodie1 from '../../img/hoodie1.png'
import sneaker1 from '../../img/shop12.png'
import sneaker2 from '../../img/shop10.png'

import './Home.scss'
const Home = () => {
    return (
        <>
            <Layout />
      
      <section className="S Landing">
        <div className="greeting">
          <h1>Everything <span>you need for</span> any sport<span>.</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque asperiores minima dignissimos aspernatur ratione!</p>
          <a href="#" className='go'>Go to store</a>
          <a href="#">More bought</a>
        </div>
        <span className='ImgContainer'>
          <img src={HomeImg} alt="" />
        </span>
      </section>
      <section className="S moreBought">
        <h3 className='Tittle'>more bought</h3>
        <div className='CardContainer'>
          <div className="Card">
            <p className="price">$48.99 USD</p>
      
                  <i className='bx bx-info-circle'></i>
                  <p className="text">
                      Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
                  </p>
      
                  <div className="imgBx one">
                      <img className="Img" src={imgCardOne} alt="a pair of blue and red ASICS sneakers" />
                      <h2>Nike</h2>
                      <p>Jordan Flight Origin 4</p>
                  </div>
                  <div className="contentBx  ">
                      
                      <div className="size">
                          <h3>Size:</h3>
                          <span>34</span>
                          <span>36</span>
                          <span>38</span>
                          <span>40</span>
                          <span>42</span>
                      </div>
                      <div className="color">
                          <h3>Color:</h3>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      <button> Add to Cart</button>
                  </div>
          </div>
          <div className="Card">
            <p className="price">$48.99 USD</p>
      
                  <i className='bx bx-info-circle'></i>
                  <p className="text">
                      Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
                  </p>
      
                  <div className="imgBx Two">
                      <img className="Img" src={imgCardTwo} alt="a pair of blue and red ASICS sneakers" />
                      <h2>Nike</h2>
                      <p>Jordan Flight Origin 4</p>
                  </div>
                  <div className="contentBx">
                      
                      <div className="size">
                          <h3>Size:</h3>
                          <span>34</span>
                          <span>36</span>
                          <span>38</span>
                          <span>40</span>
                          <span>42</span>
                      </div>
                      <div className="color">
                          <h3>Color:</h3>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      <button> Add to Cart</button>
                  </div>
          </div>
          <div className="Card">
            <p className="price">$48.99 USD</p>
      
                  <i className='bx bx-info-circle'></i>
                  <p className="text">
                      Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
                  </p>
      
                  <div className="imgBx three">
                      <img className="Img" src={imgCardThree} alt="a pair of blue and red ASICS sneakers" />
                      <h2>Nike</h2>
                      <p>Jordan Flight Origin 4</p>
                  </div>
                  <div className="contentBx  ">
                      
                      <div className="size">
                          <h3>Size:</h3>
                          <span>34</span>
                          <span>36</span>
                          <span>38</span>
                          <span>40</span>
                          <span>42</span>
                      </div>
                      <div className="color">
                          <h3>Color:</h3>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      <button> Add to Cart</button>
                  </div>
          </div>
        </div>
        <div className="BigCard">
          <img src={HomeImgs} alt="" />
          <div>
            <h3>Everything <span>you need for</span> any sport.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quam accusantium corporis voluptas omnis? Laboriosam, nesciunt.</p>
          </div>
        </div>
      </section>
      <section className="S Mc">
        <h3 className='Tittle'>best categories</h3>
        <main className="GridContainer">
          <div>
              <h4 className='Tittle'>Personalized</h4>
              <img src={ImgGridOne} alt="#" />
          </div>
          <div>
              <h4 className='Tittle'>Sports t-shirts</h4>
            <img src={ImgGridThree} alt="" />
          </div>
          <div>
              <h4 className='Tittle'>Sports shoes</h4>
            <img src={ImgGridTwo} alt="" />
          </div>
        </main>
      </section>
      <section className='S More'>
        <h3 className='Tittle'>More</h3>
        <div className='CardContainer'>
          <div className="Card">
            <p className="price">$48.99 USD</p>
      
                  <i className='bx bx-info-circle'></i>
                  <p className="text">
                      Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
                  </p>
      
                  <div className="imgBx one">
                      <img className="Img" src={sneaker1} alt="a pair of blue and red ASICS sneakers" />
                      <h2>Nike</h2>
                      <p>Jordan Flight Origin 4</p>
                  </div>
                  <div className="contentBx  ">
                      
                      <div className="size">
                          <h3>Size:</h3>
                          <span>34</span>
                          <span>36</span>
                          <span>38</span>
                          <span>40</span>
                          <span>42</span>
                      </div>
                      <div className="color">
                          <h3>Color:</h3>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      <button> Add to Cart</button>
                  </div>
          </div>
          <div className="Card">
            <p className="price">$48.99 USD</p>
      
                  <i className='bx bx-info-circle'></i>
                  <p className="text">
                      Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
                  </p>
      
                  <div className="imgBx Two">
                      <img className="Img" src={Hoodie1} alt="a pair of blue and red ASICS sneakers" />
                      <h2>Nike</h2>
                      <p>Jordan Flight Origin 4</p>
                  </div>
                  <div className="contentBx">
                      
                      <div className="size">
                          <h3>Size:</h3>
                          <span>34</span>
                          <span>36</span>
                          <span>38</span>
                          <span>40</span>
                          <span>42</span>
                      </div>
                      <div className="color">
                          <h3>Color:</h3>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      <button> Add to Cart</button>
                  </div>
          </div>
          <div className="Card">
            <p className="price">$48.99 USD</p>
      
                  <i className='bx bx-info-circle'></i>
                  <p className="text">
                      Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
                  </p>
      
                  <div className="imgBx three">
                      <img className="Img" src={sneaker2} alt="a pair of blue and red ASICS sneakers" />
                      <h2>Nike</h2>
                      <p>Jordan Flight Origin 4</p>
                  </div>
                  <div className="contentBx  ">
                      
                      <div className="size">
                          <h3>Size:</h3>
                          <span>34</span>
                          <span>36</span>
                          <span>38</span>
                          <span>40</span>
                          <span>42</span>
                      </div>
                      <div className="color">
                          <h3>Color:</h3>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      <button> Add to Cart</button>
                  </div>
          </div>
        </div>
      </section>
      <Footer />   
        </>
    );
}

export default Home;
