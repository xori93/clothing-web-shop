import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clothing = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts(); // ✅ Make sure this call is inside useEffect and properly defined
    }, []); // ✅ Empty dependency array is correct
     
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section id="clothing">
          <div className="clothing__container">
            <div className="row">
            <h2 className="section__title">Clothing Products</h2>
            <div className="clothes">
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <img src={product.images[0]} alt={product.title} width="100" />
                    </li>
                ))}
            </div>
            </div>
          </div>
        </section>
    );
};

export default Clothing;
