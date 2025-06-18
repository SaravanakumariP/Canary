// Product data (could be fetched from an API in a real application)
const products = {
  1: {
    id: 1,
    name: "Plava",
    image: "./images/herbi2.png",
    description: "Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    descript1:"This herbicide is commonly recommended for crops such as cotton and tea, where targeted application between rows ensures minimal crop damage and maximum weed suppression. Plava’s low soil persistence and reduced leaching risk also make it an environmentally conscious choice for integrated weed management programs.",
    description1:"Key Benefits:",
    description2:"Offers excellent burn-down activity even on mature, stubborn weeds.",
    description3:"Provides a non-selective action while being safer for non-target crops when applied with precision.",
    description4:"Reduces weed competition significantly, promoting better nutrient uptake by crops.",
    description5:"Has minimal soil residual activity, making it environmentally safer and ideal for rotation cropping.",
    heading: "Recommended For:",
    keyfeatures1: "1. Non-crop areas to clear vegetation efficiently.",
    keyfeatures2: "2. Pre-planting in orchards or plantations where complete weed knockdown is needed.",
    keyfeatures3: "3. Inter-row weed control in row crops like maize, soybean, and sugarcane."
  },
   2: {
    id: 2,
    name: "Taipan",
    image: "./images/herb3.png",
    description: "Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    descript:"Taipan is a broad-spectrum, pre-emergent herbicide formulated to effectively control a variety of annual grasses and broadleaf weeds in major crops like wheat, paddy, cotton, and soybean. It works by inhibiting cell division and root/shoot development in germinating weed seeds, ensuring clean fields right from the start of the season. Applied before or shortly after sowing, Taipan offers long-lasting residual control.",
    descript1:"Its dual action against grasses like Phalaris minor, Echinochloa spp., and broadleaf weeds like Chenopodium album, Amaranthus spp., and Portulaca oleracea makes it a reliable choice for farmers aiming to reduce weed pressure and maximize yield potential.",
    description1:"Key Benefits:",
    description2:"Provides effective pre-emergent control of a broad spectrum of annual grasses and broadleaf weeds.",
    description3:"Long residual activity ensures early-season weed-free conditions, reducing crop competition.",
    description4:"Promotes better crop establishment and uniform growth.",
    description5:"Compatible with major crops like wheat, paddy, soybean, and cotton.",
    heading: "Recommended For:",
    keyfeatures1: "1. Wheat: Phalaris minor, Chenopodium album, Portulaca oleracea.",
    keyfeatures2: "2. Paddy: Echinochloa spp., Amaranthus viridis, Eleusine indica.",
    keyfeatures3: "3. Soybean & Cotton: Effective against multiple annual grasses and broadleaf weeds pre-emergence."
   },
  3: {
    id: 3,
    name: "Quaint",
    image: "./images/herb4.png",
    description: "Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    descript1:"Its precision targeting ensures crop safety while delivering rapid and consistent weed suppression. By eliminating weed competition, Quaint supports better crop establishment, improved nutrient availability, and enhanced overall yield performance.",
    description1:"Key Benefits:",
    description2:"High efficacy against major grassy weeds like Echinochloa, Digitaria, Dactyloctenium, and Eleusine.",
    description3:"Safe on broadleaf crops like soybean, black gram, and onion.",
    description4:"Compatible with integrated weed management systems.",
    description5:"Reduces labor costs and manual weeding frequency.",
    heading: "Recommended For:",
    keyfeatures1: "1. Farmers cultivating soybean, black gram, or onion facing tough grassy weed pressure.",
    keyfeatures2: "2. Fields with post-emergent infestations of Echinochloa colonum, Digitaria sanguinalis, or Eleusine indica.",
    keyfeatures3: "3. Growers seeking efficient, crop-safe grass control solutions with long residual activity.",
  },
  4: {
    id: 4,
    name: "Lodex",
    image: "./images/herbi.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    descript:"Lodex is a highly effective post-emergence herbicide formulated with Tembotrione 34.4% w/w SC. It offers robust control over a wide spectrum of weeds commonly found in maize fields, such as Echinochloa spp., Trianthema portulacastrum, and Brachiaria spp.. Its rapid absorption and translocation within the plant ensure quick and visible weed suppression, allowing maize to thrive without competition.",
    descript1:"The advanced formulation of Lodex allows for flexibility in application timing and delivers long-lasting residual activity. This results in cleaner fields, healthier crops, and optimized yield potential with minimal need for follow-up treatments.",
    description1:"Key Benefits:",
    description2:"Targets and controls both broadleaf and grassy weeds.",
    description3:"Compatible with tank mixes for broader weed management.",
    description4:"Effective under diverse climatic and soil conditions.",
    description5:"Enhances nutrient and water availability by reducing weed competition.",
    heading: "Recommended For:",
    keyfeatures1: "1. Areas with persistent Trianthema, Echinochloa, or Brachiaria infestations.",
    keyfeatures2: "2. Farmers practicing precision agriculture for optimal input efficiency.",
    keyfeatures3: "3. Regions prone to seasonal flushes of post-emergent weed growth."
  },
 5: {
    id: 5,
    name: "Tunga",
    image: "./images/herbi1.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    descript:"Tung is a powerful post-emergence herbicide designed specifically for maize cultivation. It provides broad-spectrum control over a variety of both grassy and broadleaf weeds that compete with the crop for nutrients, water, and light. With its quick absorption and systemic movement within the plant, Tung effectively inhibits weed growth soon after application.",
    descript1:"Its formulation ensures long-lasting control, minimizing the need for repeated applications. This not only improves crop cleanliness but also supports higher yields by allowing the maize plants to grow without early-stage competition or stress.",
    description1:"Key Benefits:",
    description2:"Effectively controls both annual and perennial weeds that compete with maize during crucial growth stages.",
    description3:"Offers flexibility in application timing, ensuring optimal control during the post-emergence period.",
    description4:"Prevents yield loss by reducing early-stage nutrient, light, and water competition.",
    description5:"Suitable for mechanized as well as manual farming practices.",
    heading: "Recommended For:",
    keyfeatures1: "1. Farmers cultivating maize crops facing heavy infestation of grassy and broadleaf weeds.",
    keyfeatures2: "2. Suitable for areas where weeds like Echinochloa spp., Digitaria spp., Parthenium hysterophorus, and Amaranthus viridis are prevalent.",
    keyfeatures3: "3.Especially useful in rotational cropping systems that need selective and effective weed suppression without harming the main crop."
  },
  6: {
    id: 6,
    name: "Suspend",
    image: "./images/herb poc.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    descript:"Suspend (2,4-D Sodium Salt 80% WP) is a selective, systemic herbicide effective for controlling a wide range of broadleaf weeds in crops like wheat, citrus, grapes, and also in aquatic environments. It mimics natural plant hormones, disrupting weed growth and leading to their eventual death. Its water-soluble formulation ensures even coverage and quick uptake by target species.",
    descript1:"Suspend is ideal for managing aggressive weeds such as Leucas aspera, Argemone mexicana, Chenopodium album, and aquatic weeds like Eichhornia crassipes, helping ensure cleaner fields and improved crop health.",
    description1:"Key Benefits:",
    description2:"Effectively targets and eliminates a broad spectrum of annual and perennial broadleaf weeds.",
    description3:"Offers systemic action, ensuring complete absorption and eradication from the root level.",
    description4:"Supports better crop establishment and reduces weed competition for nutrients, sunlight, and space.",
    description5:"Suitable for large-scale field and aquatic weed management due to its wide applicability and high efficacy.",
    heading: "Recommended For:",
    keyfeatures1: "1. Farmers seeking efficient weed control in wheat, citrus, grape, and aquatic systems.",
    keyfeatures2: "2. Weed management programs requiring selective control without harming main crops.",
    keyfeatures3: ""

  },
  7: {
    id: 7,
    name: "Pollar",
    image: "./images/herb poc1.png",
    description: "Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    descript:"Pollar (Atrazine 50% WP) is a pre- and early post-emergent herbicide designed to deliver broad-spectrum control of both grassy and broadleaf weeds in maize and sugarcane crops. It works by inhibiting photosynthesis in susceptible plants, allowing crops to grow without competition for nutrients, water, and sunlight. Pollar provides residual action, maintaining weed control for an extended period after application.",
    descript1:"Its selective nature ensures crop safety while effectively managing difficult weed species like Trianthema monogyna, Echinochloa spp., Amaranthus viridis, and Cyperus spp. Pollar contributes to better field hygiene, improved crop establishment, and ultimately, higher yield potential.",
    description1:"Key Benefits:",
    description2:"Long residual control reduces need for repeated applications.",
    description3:"Promotes better crop establishment and growth.",
    description4:"Compatible with various tank-mix combinations.",
    description5:"Easy to apply and suitable for integrated weed management.",
    heading: "Recommended For:",
    keyfeatures1: "1. Maize: Controls weeds like Trianthema monogyna, Digitaria arvensis, Echinochloa spp., Eleusine spp., Xanthium strumarium, and more.",
    keyfeatures2: "2. Sugarcane: Effective against Portulaca oleracea, Boerhavia diffusa, Euphorbia spp., Tribulus terrestris, and related weed species.",
    keyfeatures3: ""

  },
  8: {
    id: 8,
    name: "Aster",
    image: "./images/BS3.png",
    description: "Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
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
   1: {
    id: 1,
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
    window.location.href = 'Herbicite-Details.html';
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
        document.getElementById('detail-heading').textContent = product.heading;
        document.getElementById('detail-keyfeatures1').textContent = product.keyfeatures1;
        document.getElementById('detail-keyfeatures2').textContent = product.keyfeatures2;
        document.getElementById('detail-keyfeatures3').textContent = product.keyfeatures3;


  
    } else {
        // Product not found, redirect back to index
        window.location.href = './Herbicide.html';
    }
}