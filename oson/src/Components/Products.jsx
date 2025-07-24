import drug_1 from '../assets/drugs/drug_1.png'
import drug_2 from '../assets/drugs/drug_2.png'
import drug_3 from '../assets/drugs/drug_3.png'
import drug_4 from '../assets/drugs/drug_4.jpg'
import drug_5 from '../assets/drugs/drug_5.jpg'
import drug_6 from '../assets/drugs/drug_6.jpg'
import drug_7 from '../assets/drugs/drug_7.jpg'
import drug_8 from '../assets/drugs/drug_8.jpg'

function Products(){
  return(
    <div className="products_jsx">
      <h1 className='top_name'>Популярные товары</h1>
          <div className="top_products">
      <div className="about_product">
        <div className="product_image">
          <img src={drug_1} alt="" className="drug_image" />
        </div>
        <div className="product_info">
          <h3 className="product_name">Магне В6 форте таб. п/о №40</h3>
          <h2 className="product_name">82 000 so'mdan</h2>
        </div>
      </div>
            <div className="about_product">
        <div className="product_image">
          <img src={drug_2} alt="" className="drug_image" />
        </div>
        <div className="product_info">
          <h3 className="product_name">
Кордарон таб. 200мг №30</h3>
          <h2 className="product_name">88 000 so'mdan
</h2>
        </div>
      </div>
            <div className="about_product">
        <div className="product_image">
          <img src={drug_3} alt="" className="drug_image" />
        </div>
        <div className="product_info">
          <h3 className="product_name">Осетрон р-р д/ин. 2мг/мл 4мл №5</h3>
          <h2 className="product_name">70 000 so'mdan</h2>
        </div>
      </div>
            <div className="about_product">
        <div className="product_image">
          <img src={drug_4} alt="" className="drug_image" />
        </div>
        <div className="product_info">
          <h3 className="product_name">Гонадотропин хорионический лиоф д/ин. 1000МЕ №5</h3>
          <h2 className="product_name">296 500 so'mdan</h2>
        </div>
      </div>
            <div className="about_product">
        <div className="product_image">
          <img src={drug_5} alt="" className="drug_image" />
        </div>
        <div className="product_info">
          <h3 className="product_name">Лорде гиаль р-р д/ингаляций 4мл №10</h3>
          <h2 className="product_name">68 000 so'mdan</h2>
        </div>
      </div>
            <div className="about_product">
        <div className="product_image">
          <img src={drug_6} alt="" className="drug_image" />
        </div>
        <div className="product_info">
          <h3 className="product_name">
Тивортин аспартат р-р д/приема внутрь 100мл №1</h3>
          <h2 className="product_name">160 000 so'mdan</h2>
        </div>
      </div>
            <div className="about_product">
        <div className="product_image">
          <img src={drug_7} alt="" className="drug_image" />
        </div>
        <div className="product_info">
          <h3 className="product_name">Депакин сироп 57.64мг/мл 150мл №1</h3>
          <h2 className="product_name">167 300 so'mdan</h2>
        </div>
      </div>
            <div className="about_product">
        <div className="product_image">
          <img src={drug_8} alt="" className="drug_image" />
        </div>
        <div className="product_info">
          <h3 className="product_name">
Плаквенил таб. п/о 200мг №60</h3>
          <h2 className="product_name">145 000 so'mdan</h2>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Products;