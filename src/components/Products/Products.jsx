import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';



// Product Data
const products = [
  { id: 1, imgSrc: img2, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 2, imgSrc: img3, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 3, imgSrc: img4, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 4, imgSrc: img5, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 5, imgSrc: img3, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 6, imgSrc: img2, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 7, imgSrc: img3, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 8, imgSrc: img4, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 9, imgSrc: img5, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 10, imgSrc: img2, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 11, imgSrc: img3, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
  { id: 12, imgSrc: img4, title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
];

const Products = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section style={{ background: '#f2f2f2', padding: '40px 0', textAlign: 'center' }}>
        <h1>All Products</h1>
        <div style={{ marginTop: '10px' }}>
          <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a> / <span>All Products</span>
        </div>
      </section>

      {/* Product Grid */}
      <section style={{ padding: '40px 0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              flex: '1 1 calc(25% - 20px)',
              maxWidth: 'calc(25% - 20px)',
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: '8px',
              overflow: 'hidden',
              textAlign: 'center',
              transition: 'transform 0.3s ease-in-out'
            }}>
              <Link to="/details" style={{ color: 'inherit', textDecoration: 'none' }}>
                <div style={{ position: 'relative' }}>
                  <img src={product.imgSrc} alt={product.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: '#000',
                    color: '#fff',
                    padding: '4px 8px',
                    fontSize: '12px',
                    borderRadius: '4px'
                  }}>Best Seller</span>
                  <p style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#000',
                    color: '#fff',
                    padding: '6px 10px',
                    borderRadius: '20px',
                    fontSize: '14px'
                  }}>Add to cart</p>
                </div>
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>{product.title}</h3>
                  <p>
                    <del style={{ marginRight: '10px', color: '#999' }}>₹{product.originalPrice}</del>
                    <span style={{ color: '#e53935', fontWeight: 'bold' }}>₹{product.salePrice}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button style={{ margin: '0 10px', padding: '10px 15px', background: '#eee', borderRadius: '4px', border: 'none' }}>Previous</button>
          <button style={{ margin: '0 5px', padding: '8px 12px', background: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}>1</button>
          <button style={{ margin: '0 5px', padding: '8px 12px', background: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}>2</button>
          <button style={{ margin: '0 10px', padding: '10px 15px', background: '#eee', borderRadius: '4px', border: 'none' }}>Next</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
