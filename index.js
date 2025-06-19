const products = {

    1: {
    id: 1,
    name: "Ace 75",
    image: "./images/BS1.png",
    description:" Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    description1:"Key Benefits:",
    description2:"Broad-Spectrum Action: Controls both sucking and chewing pests including aphids, thrips, jassids, whiteflies, and caterpillars.",
    description3:"Fast Knockdown: Quickly paralyzes and eliminates pests, preventing crop damage.",
    description4:"Systemic Protection: Translocates within the plant to safeguard even new and hidden growth.",
    description5:"Enhanced Yield: Helps maintain plant vigor and productivity by reducing pest stress.",
    description6:"User-Friendly Formulation: Easy to handle, mix, and apply with standard spraying equipment.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers looking for an all-in-one solution to manage multiple pest types.",
    keyfeatures2: " Integrated pest management strategies requiring both curative and preventive control.",
    keyfeatures3: " Use during critical crop stages where insect protection is essential for growth and output.", 
  },
   2: {
    id: 2,
    name: "Steamer",
    image: "./images/BS2.png",
    description:" Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    // descript1: "Its granular formulation ensures easy application and consistent distribution in paddy fields, leading to healthier crop growth and improved yield.",
    description1:"Key Benefits:",
    description2:"Broad-spectrum control of key rice pests.",
    description3:"Systemic and contact action for prolonged efficacy.",
    description4:"Granular formulation for soil application and ease of use.",
    description5:"Enhances crop vigor by reducing pest-induced stress.",
    description6:"Ideal for transplanted and direct-sown paddy.",
    heading: "Recommended For:",
    keyfeatures1: " Apply during early crop stages or at the first sign of pest activity.",
    keyfeatures2: " Suitable for standing water conditions in paddy fields.",
    keyfeatures3: " Compatible with integrated pest management (IPM) practices."
  },
   3: {
    id: 3,
    name: "Aster",
    image: "./images/BS3.png",
    description:" Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Aster is a highly effective non-selective, systemic herbicide containing Ammonium Salt of Glyphosate 71% SG. It is designed to provide robust control over a broad spectrum of annual, biennial, and perennial weeds, including stubborn grasses and sedges. Aster is absorbed quickly through the foliage and translocated throughout the plant, targeting the root system for complete eradication. Its advanced formulation ensures consistent performance even in tough weed infestations.",
    descript1:"Ideal for use in tea plantations and non-crop areas, Aster delivers long-lasting residual control, reducing the frequency of applications and lowering maintenance costs. Its rapid action not only improves field hygiene but also prepares land effectively for planting or upkeep in industrial and public utility zones.",
    description1:"Key Benefits:",
    description2:"Broad-Spectrum Control: Effectively manages a wide variety of annual and perennial weeds, including grasses, sedges, and broadleaf species.",
    description3:"Systemic Action: Absorbed through the foliage and translocated throughout the plant, ensuring complete root-to-tip weed elimination.",
    description4:"Non-Selective Formula: Ideal for clearing unwanted vegetation in non-crop areas and preparing fields before sowing.",
    description5:"Rainfast & Residual: Offers long-lasting results and remains effective even after rainfall.",
    heading: "Recommended For:",
    keyfeatures1: "1. Effective pre-planting weed control in tea estates.",
    keyfeatures2: "2. Management of persistent weeds in non-crop and industrial zones.",
    keyfeatures3: "3. Suitable for controlling invasive species such as Cynodon dactylon, Cyperus rotundus, and Digitaria spp."
  },
    4: {
    id: 4,
    name: "Canstar",
    image: "./images/canstar.png",
    description: "Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
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
    window.location.href = 'Product-Details.html';
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
        window.location.href = './Product-Details.html';
    }
}