import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function ProductDetail({onaddtowishlist,addToCart}) {
    const { state: product } = useLocation();
    const navigate = useNavigate();

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <div className="product-detail" style={styles.container}>
            <button
                onClick={() => navigate(-1)}
                style={styles.backButton}
            >
                Go Back
            </button>
            <div style={styles.content}>
                <div style={styles.imageContainer}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={styles.image}
                    />
                </div>
                <div style={styles.detailsContainer}>
                    <h1 style={styles.title}>{product.name}</h1>
                    <p style={styles.price}>Price: ₹{product.price}</p>
                    <p style={styles.description}>
                        <strong>Description:</strong> {product.description || "No description available."}
                    </p>
                    <ul style={styles.detailsList}>
                        <li><strong>Material:</strong> {product.material}</li>
                        <li><strong>Quality:</strong> {product.quality}</li>
                        <li><strong>Customer Reviews:</strong> {product.customerReview} ⭐</li>
                        <li><strong>Pattern:</strong> {product.pattern}</li>
                        <li><strong>Fabric Care:</strong> {product.fabricCare}</li>
                        <li><strong>Type:</strong> {product.type}</li>
                        <li><strong>Length:</strong> {product.length}</li>
                        <li><strong>Color:</strong> {product.color}</li>
                    </ul>
                    <div style={styles.buttonContainer}>
                        <button style={styles.cartButton} onClick={()=>onaddtowishlist(product)}>Add to Cart</button>
                        <button style={styles.wishlistButton} onClick={() => addToCart(product)}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to right, #f7f7f7, #e0e0e0)",
        minHeight: "100vh",
    },
    backButton: {
        marginBottom: "20px",
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        cursor: "pointer",
        alignSelf: "flex-start",
    },
    content: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "flex-start",
        maxWidth: "1200px",
        width: "100%",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden",
        padding: "20px",
    },
    imageContainer: {
        flex: "1",
        textAlign: "center",
    },
    image: {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
    detailsContainer: {
        flex: "2",
        padding: "10px",
    },
    title: {
        fontSize: "2.5em",
        fontWeight: "bold",
        fontFamily: "'Dancing Script', cursive",
        color: "#3e3e3e",
    },
    price: {
        fontSize: "1.8em",
        marginBottom: "20px",
        color: "#4CAF50",
        fontWeight: "bold",
    },
    description: {
        fontSize: "1.2em",
        margin: "10px 0",
        color: "#555",
        lineHeight: "1.6",
    },
    detailsList: {
        listStyleType: "none",
        padding: 0,
        fontSize: "1.2em",
        lineHeight: "1.8",
    },
    buttonContainer: {
        display: "flex",
        gap: "20px",
        marginTop: "20px",
    },
    cartButton: {
        padding: "10px 20px",
        backgroundColor: "#ff6f61",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1em",
        fontWeight: "bold",
    },
    wishlistButton: {
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1em",
        fontWeight: "bold",
    },
};

export default ProductDetail;
