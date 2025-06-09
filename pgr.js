// Product data (could be fetched from an API in a real application)
const products = {
  1: {
    id: 1,
    name: "Canstar",
    image: "./images/canstar.png",
    description: "Paclobutrazol 23% SC is used as a plant growth regulator in mango.",
    descript:"Canstar PGR is a highly efficient plant growth regulator formulated with Paclobutrazol 23% SC, designed specifically for use in mango cultivation. It functions by suppressing gibberellin synthesis, effectively reducing unwanted vegetative growth and encouraging the plant to shift energy towards reproductive development. This leads to a more compact canopy, making orchard management and harvesting significantly easier.",
    descript1:"By promoting uniform and early flowering, Canstar plays a vital role in improving fruit set and yield quality. It also supports synchronized flowering, which is especially useful in managing alternate bearing patterns or off-season production. Canstar helps farmers achieve better control over flowering cycles and ensures a more productive and profitable harvest.",
    description1:"Key Benefits:",
    description2:" Promotes uniform and early flowering in mango trees.",
    description3:"Reduces excessive vegetative growth, leading to manageable tree size",
    description4:"Supports better canopy management and easier harvesting.",
    description5:"Enhances fruit set and overall yield quality.",
    heading: "Recommended For:",
    keyfeatures1: "1. Mango growers looking to improve flowering consistency and fruiting.",
    keyfeatures2: "2. Orchards requiring vegetative growth control for better pruning and management.",
    keyfeatures3: "3. Regions facing irregular flowering due to climatic fluctuations."
  },
  }
   


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
    window.location.href = 'details-pgr.html';
}

function displayProductDetails() {
    const productId = sessionStorage.getItem('selectedProductId');
    const product = products[productId];
    
    if (product) {
        document.getElementById('detail-image').src = product.image;
        document.getElementById('detail-image').alt = product.name;
        document.getElementById('detail-title').textContent = product.name;
        document.getElementById('detail-description').textContent = product.description;
        document.getElementById('detail-descript').textContent = product.descript;
        document.getElementById('detail-descript1').textContent = product.descript1;
        document.getElementById('detail-description1').textContent = product.description1;
        document.getElementById('detail-description2').textContent = product.description2;
        document.getElementById('detail-description3').textContent = product.description3;
        document.getElementById('detail-description4').textContent = product.description4;
        document.getElementById('detail-description5').textContent = product.description5;
        document.getElementById('detail-description6').textContent = product.description6;
        document.getElementById('detail-heading').textContent = product.heading;
        document.getElementById('detail-keyfeatures1').textContent = product.keyfeatures1;
        document.getElementById('detail-keyfeatures2').textContent = product.keyfeatures2;
        document.getElementById('detail-keyfeatures3').textContent = product.keyfeatures3;
  
    } else {
        // Product not found, redirect back to index
        window.location.href = './pgr.html';
    }
}