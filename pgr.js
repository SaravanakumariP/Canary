// Product data (could be fetched from an API in a real application)
const products = {
  1: {
    id: 1,
    name: "Render",
    image: "./images/insec2.png",
    description: "Dinotefuran 20% SG is used to control brown plant hopper in paddy and aphids, jassids, thrips and white fly in cotton crop."
  },
   2: {
    id: 2,
    name: "Canary Ace",
    image: "./images/BS1.png",
    description: "Acephate 75% SP is used to control jassid, bollworms in cotton and aphid in sunflower."
  },
  3: {
    id: 3,
    name: "Gully",
    image: "./images/ins16.png",
    description: "Pymetrozine 50% WG is used to control brown plant hopper in rice crop."
  },
  4: {
    id: 4,
    name: "Poacher",
    image: "./images/insec.png",
    description: "Tolfenpyrad 15% EC is used to control diamond back moth and aphid in cabbage, aphid, thrips, powdery mildew, anthracnose on chilli, cotton, cumin, mango and onion."
  },
 5: {
    id: 5,
    name: "Amodh",
    image: "./images/ins14.png",
    description:"Novaluron 10% EC is used to control podborer (hellothisarmigera) in Bengal Gram(Chick Pea); Diamond back moth and  Tobacco Leaf in Cabbage; fruit borer Tobacco leaf eating Caterpillar in Chilli; Anopheles Stephensi, Aedes aegypti in clear surface water; American Bollworm and Tobacco leaf eating caterpillar in Cotton; Culex Quinquefasciatus, Anopheles subpictus in polluted surface water; fruit borer in Tomato."
  },
  6: {
    id: 6,
    name: "Canmites",
    image: "ins15",
    description: "Propargite 57% EC is used for the control of European red mite, two spotted mite on apple; mite in chillies and red spider mite in tea."
  },
  7: {
    id: 7,
    name: "Matanga",
    image: "/images/insec1.png",
    description: "Triflumezopyrim 10% SC is used to control brown plant hopper and white backed plant hopper in paddy crop."
  },
  8: {
    id: 8,
    name: "Mutant",
    image: "insec7",
    description: "Fenazaquin 18.3% SC is used to control red spider mite in rice crop."
  },
  9: {
    id: 9,
    name: "Splinter",
    image: "./images/ins19.png",
    description: "Chlorantraniliprole 4.3% + Abamectin 1.7% SC is used to control thrips, mites and fruit borer in chilli."
  },
  10: {
    id: 10,
    name: "Gozzar",
    image: "./images/inec2.png",
    description: "Diafenthiuron 47.8% SC is a broad spectrum non-systemic insecticide for aphids, jassids, thrips and whiteflies in cotton. Belongs to group 12A of insecticide mode of action."
  },
  11: {
    id: 11,
    name: "Jumet",
    image: "insec6",
    description: "Fenazaquin 10% EC is used to control red spider mite, two spotted mite on apple; red spider mite on brinjal and okra; yellow mite on chilli; red spider, pink, and purple mites on tea; two spotted spider mite on tomato."
  },
  12: {
    id: 12,
    name: "Perrier",
    image: "insec8",
    description: "Fipronil 18.87% SC is used to control thrips in cotton."
  },
  13: {
    id: 13,
    name: "Flipride",
    image: "./images/insec9.png",
    description: "Fipronil 4% + Acetamiprid 4% SC is used to control aphids, jassids and whiteflies on cotton crop."
  },
  14: {
    id: 14,
    name: "Proton",
    image: "./images/insec10",
    description: "Lufenuron 5.4% EC is used to control diamond back moth in cabbage."
  },
  15: {
    id: 15,
    name: "Steamer",
    image: "./images/BS2",
    description: "Carbosulfan 6% GR is used for the control of stem borer, gall midge, green leaf hopper and leaf folder in rice crop."
  },
  16: {
    id: 16,
    name: "Canary Ace",
    image: "./images/BS1",
    description: "Acephate 75% SP is used to control jassid, bollworms in cotton and aphid in sunflower."
  },
  17: {
    id: 17,
    name: "Gozzar",
    image: "/images/pocket.png",
    description: "Diafenthiuron 47.8% SC is a broad spectrum non-systemic insecticide for aphids, jassids, thrips and whiteflies in cotton. Belongs to group 12A of insecticide mode of action."
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
    window.location.href = 'details.html';
}

function displayProductDetails() {
    const productId = sessionStorage.getItem('selectedProductId');
    const product = products[productId];
    
    if (product) {
        document.getElementById('detail-image').src = product.image;
        document.getElementById('detail-image').alt = product.name;
        document.getElementById('detail-title').textContent = product.name;
        document.getElementById('detail-description').textContent = product.description;
  
    } else {
        // Product not found, redirect back to index
        window.location.href = 'pgr.html';
    }
}