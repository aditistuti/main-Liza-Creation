import React, { useState } from 'react';
import Product from '../components/Product'; 
import { useNavigate } from 'react-router-dom';



const initialProducts = [
  
        {
            id: 1,
            name: 'Dress',
            price: 2000,
            image: '/images/dress1.jpg',
            material: 'Cotton',
            quality: 'Premium',
            customerReview: 4.5,
            pattern: 'Floral',
            fabricCare: 'Machine Wash',
            type: 'A-Line',
            length: 'Knee-Length',
            color: 'Blue'
        },
        {
            id: 3,
            name: 'Lehenga',
            price: 5000,
            image: '/images/lehanga.webp',
            material: 'Silk',
            quality: 'High',
            customerReview: 4.8,
            pattern: 'Embroidered',
            fabricCare: 'Dry Clean Only',
            type: 'Traditional',
            length: 'Floor-Length',
            color: 'Red'
        },
        {
            id: 4,
            name: 'Kurti',
            price: 1200,
            image: '/images/kurti.webp',
            material: 'Rayon',
            quality: 'Good',
            customerReview: 4.3,
            pattern: 'Printed',
            fabricCare: 'Hand Wash',
            type: 'Casual Wear',
            length: 'Calf-Length',
            color: 'Pink'
        },
        {
            id: 5,
            name: 'Saree',
            price: 3000,
            image: '/images/dress5.webp',
            material: 'Chiffon',
            quality: 'Premium',
            customerReview: 4.7,
            pattern: 'Plain with Border',
            fabricCare: 'Dry Clean',
            type: 'Party Wear',
            length: '6.5 meters',
            color: 'Green'
        },
        {
            id: 6,
            name: 'Lehenga Choli',
            price: 6000,
            image: '/images/dress50.webp',
            material: 'Net',
            quality: 'Designer',
            customerReview: 4.9,
            pattern: 'Sequence Work',
            fabricCare: 'Dry Clean Only',
            type: 'Bridal Wear',
            length: 'Floor-Length',
            color: 'Gold'
        },
        {
            id: 7,
            name: 'Salwar Kameez',
            price: 2500,
            image: '/images/dress7.jpeg',
            material: 'Georgette',
            quality: 'Standard',
            customerReview: 4.4,
            pattern: 'Printed',
            fabricCare: 'Machine Wash',
            type: 'Ethnic Wear',
            length: 'Ankle-Length',
            color: 'Yellow'
        },
        {
            id: 8,
            name: 'Anarkali Suit',
            price: 3500,
            image: '/images/dress8.webp',
            material: 'Silk Blend',
            quality: 'High',
            customerReview: 4.6,
            pattern: 'Embroidered',
            fabricCare: 'Dry Clean',
            type: 'Occasion Wear',
            length: 'Floor-Length',
            color: 'Purple'
        },
        {
            id: 9,
            name: 'Patiala Suit',
            price: 2800,
            image: '/images/dress9.jpeg',
            material: 'Cotton Blend',
            quality: 'Good',
            customerReview: 4.5,
            pattern: 'Checkered',
            fabricCare: 'Hand Wash',
            type: 'Daily Wear',
            length: 'Calf-Length',
            color: 'Black and White'
        },
        {
            id: 10,
            name: 'Dupatta',
            price: 500,
            image: '/images/dress10.jpeg',
            material: 'Chiffon',
            quality: 'Lightweight',
            customerReview: 4.2,
            pattern: 'Plain',
            fabricCare: 'Hand Wash',
            type: 'Accessory',
            length: '2.5 meters',
            color: 'Pink'
        },
        {
            id: 12,
            name: 'Kurta',
            price: 1500,
            image: '/images/dress12.jpeg',
            material: 'Cotton',
            quality: 'Comfortable',
            customerReview: 4.3,
            pattern: 'Solid',
            fabricCare: 'Machine Wash',
            type: 'Semi-Formal',
            length: 'Knee-Length',
            color: 'White'
        },
        {
            id: 13,
            name: 'Churidar',
            price: 1000,
            image: '/images/dress13.webp',
            material: 'Spandex Blend',
            quality: 'Stretchable',
            customerReview: 4.1,
            pattern: 'Solid',
            fabricCare: 'Machine Wash',
            type: 'Inner Wear',
            length: 'Full-Length',
            color: 'Beige'
        },
        {
            id: 14,
            name: 'Chaniya Choli',
            price: 4000,
            image: '/images/dress14.jpeg',
            material: 'Cotton Silk',
            quality: 'Festive',
            customerReview: 4.6,
            pattern: 'Mirror Work',
            fabricCare: 'Dry Clean Only',
            type: 'Traditional Wear',
            length: 'Floor-Length',
            color: 'Multi-Colored'
        },
        {
            id: 15,
            name: 'Kanjivaram Saree',
            price: 8000,
            image: '/images/dress15.webp',
            material: 'Pure Silk',
            quality: 'Luxury',
            customerReview: 5.0,
            pattern: 'Zari Work',
            fabricCare: 'Dry Clean Only',
            type: 'Wedding Wear',
            length: '6.5 meters',
            color: 'Golden Red'
        },
        {
            id: 16,
            name: 'Banarasi Saree',
            price: 7500,
            image: '/images/dress16.jpeg',
            material: 'Brocade Silk',
            quality: 'Premium',
            customerReview: 4.8,
            pattern: 'Woven',
            fabricCare: 'Dry Clean Only',
            type: 'Traditional',
            length: '6.5 meters',
            color: 'Royal Blue'
        },
        {
            id: 17,
            name: 'Pattu Pavadai',
            price: 2500,
            image: '/images/dress90.webp',
            material: 'Silk Blend',
            quality: 'Good',
            customerReview: 4.2,
            pattern: 'Printed',
            fabricCare: 'Hand Wash',
            type: 'Kids Wear',
            length: 'Knee-Length',
            color: 'Pink and Yellow'
        },
        {
            id: 18,
            name: 'Jodhpuri Suit',
            price: 6500,
            image: '/images/dress18.webp',
            material: 'Velvet',
            quality: 'Royal',
            customerReview: 4.9,
            pattern: 'Embroidered',
            fabricCare: 'Dry Clean Only',
            type: 'Formal Wear',
            length: 'Full-Length',
            color: 'Maroon'
        },
        {
            id: 19,
            name: 'Mekhela Chador',
            price: 3500,
            image: '/images/dress19.webp',
            material: 'Assam Silk',
            quality: 'Traditional',
            customerReview: 4.7,
            pattern: 'Woven',
            fabricCare: 'Dry Clean Only',
            type: 'Ethnic Wear',
            length: '6 meters',
            color: 'Ivory and Red'
        },
        {
            id: 20,
            name: 'Rajasthani Ghagra Choli',
            price: 5500,
            image: '/images/dress20.jpeg',
            material: 'Cotton',
            quality: 'Festive',
            customerReview: 4.8,
            pattern: 'Bandhani',
            fabricCare: 'Dry Clean Only',
            type: 'Traditional Wear',
            length: 'Floor-Length',
            color: 'Orange and Green'
        }

    
];

function Products({ wishlist, setWishlist }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory,setSelectedCategory] =useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const navigate = useNavigate();



    const filteredProducts = initialProducts.filter(product =>{
        const search=product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const category= selectedCategory?product.name==selectedCategory:true;
        const price= selectedPrice?(selectedPrice==='under 3000'?product.price<=5000 && product.price>=500: product.price>5000 && product.price<=8000):true;
         return search && category && price;
    }
    );

   
    const addtowishlist = (product) => {
        if (!wishlist.find(item => item.id === product.id)) {
            setWishlist([...wishlist, product]);
            alert(`${product.name} added to wishlist!`);
        } else {
            alert(`${product.name} is already in the wishlist!`);
        }
    };

    return (
        <div className="products-page">
            <h2>Our Products</h2>


            <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
            />
             
            <div className='filters'>
                <select onChange={(e)=>{setSelectedCategory(e.target.value)}} value={selectedCategory}>
                <option value="">Select Category</option>
                    <option value="Saree">Saree</option>
                    <option value="Lehenga">Lehenga</option>
                    <option value="Kurti">Kurti</option>
                    <option value="Dress">Dress</option>
                </select>
                <select onChange={(e)=>{setSelectedPrice(e.target.value)}} value={selectedPrice}>
                <option value="">Select Price Range</option>
                    <option value="under 3000">₹500 to ₹5000</option>
                    <option value="3000to5000">₹5000 to ₹8000</option>
                </select>
            </div>
  
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        onaddtowishlist={addtowishlist}
                        onViewDetails={() => navigate(`/product/${product.id}`, { state: product })}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
