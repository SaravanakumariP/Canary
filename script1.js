// Product data (could be fetched from an API in a real application)
const products = {
    1: {
        id: 1,
        name: "Product 1",
        price: "$19.99",
        image: "https://via.placeholder.com/600x400?text=Product+1",
        description: "This is a detailed description of Product 1. It includes all the features and benefits that make this product special."
    },
    2: {
        id: 2,
        name: "Product 2",
        price: "$24.99",
        image: "https://via.placeholder.com/600x400?text=Product+2",
        description: "Product 2 is our premium offering with advanced features that set it apart from the competition."
    },
    3: {
        id: 3,
        name: "Product 3",
        price: "$29.99",
        image: "https://via.placeholder.com/600x400?text=Product+3",
        description: "Our flagship Product 3 combines style and functionality for the ultimate user experience."
    }
};

// Handle product clicks on index page
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.product-grid')) {
        // We're on the index page
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Don't navigate if the click was on the button (we'll handle that separately)
                if (e.target.classList.contains('view-details')) return;
                
                const productId = this.getAttribute('data-product-id');
                navigateToProduct(productId);
            });
            
            // Handle button clicks specifically
            const button = card.querySelector('.view-details');
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent the card click from also firing
                const productId = card.getAttribute('data-product-id');
                navigateToProduct(productId);
            });
        });
    } else if (document.querySelector('.product-detail')) {
        // We're on the product detail page
        displayProductDetails();
    }
});

function navigateToProduct(productId) {
    // Store the product ID in sessionStorage to access on the detail page
    sessionStorage.setItem('selectedProductId', productId);
    
    // Navigate to the product detail page
    window.location.href = 'ttlproducts.html';
}

function displayProductDetails() {
    const productId = sessionStorage.getItem('selectedProductId');
    const product = products[productId];
    
    if (product) {
        document.getElementById('detail-image').src = product.image;
        document.getElementById('detail-image').alt = product.name;
        document.getElementById('detail-title').textContent = product.name;
        document.getElementById('detail-price').textContent = product.price;
        document.getElementById('detail-description').textContent = product.description;
  
    } else {
        // Product not found, redirect back to index
        window.location.href = 'product1.html';
    }
}