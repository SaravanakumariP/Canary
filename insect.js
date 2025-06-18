// Product data (could be fetched from an API in a real application)
const products = {
  1: {
    id: 1,
    name: "Render",
    image: "./images/insec2.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    descript:"Render works efficiently to control key pests such as brown plant hopper in paddy and aphids, jassids, thrips, and whiteflies in cotton crops. Its unique action provides both immediate knockdown and long-lasting residual effect, helping protect crop health and maximize yield",
    descript1:"This insecticide is ideal for modern farming needs, supporting Integrated Pest Management (IPM) practices with minimal impact on beneficial insects when used as directed",
    description1:"Key Benefits:",
    description2:"Fast Action: Delivers quick knockdown of target pests, minimizing damage.",
    description3:"Long-lasting Protection: Systemic action protects new growth for extended periods.",
    description4:"User-Friendly: Easy-to-use SG formulation with excellent solubility and spray coverage.",
    description5:"Broad Spectrum: Effective against multiple sap-sucking pests across various crops.",
    description6: "Compatibility: Fits well into integrated pest management programs.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers seeking consistent pest control with fewer applications.",
    keyfeatures2: " Protecting high-value crops during vulnerable growth stages.",
    keyfeatures3: " Regions facing heavy infestation of sap-sucking pests."   
    
  },
   2: {
    id: 2,
    name: "Canary Ace",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",
    image: "./images/ins17.png",
    descript:"Its dual mode of action—both contact and systemic—ensures rapid knockdown of visible pests and continued protection against hidden infestations. The formulation is engineered for excellent solubility, uniform spray coverage, and ease of application, making it a farmer-friendly solution for intensive pest pressure conditions.",
    descript1:"Canary Ace is especially effective in protecting crops such as paddy, cotton, vegetables, and pulses, where insect damage can severely affect plant development and harvest quality.",
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
  3: {
    id: 3,
    name: "Gully",
    image: "./images/ins16.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript:"Gully is a high-performance systemic and contact insecticide developed to deliver rapid and long-lasting control against a broad spectrum of sap-sucking and chewing pests. Formulated with advanced active ingredients, Gully provides consistent pest management across various crops, helping to enhance crop health and secure optimal yields.",
    descript1:"Gully is particularly effective in crops such as paddy, cotton, vegetables, and pulses, where timely insect control is essential for safeguarding plant growth and ensuring high-quality harvests.Its water-soluble formulation allows for excellent spray coverage, quick absorption, and user convenience, making it ideal for use under heavy pest pressure.",
    description1:"Key Benefits:",
    description2:"Broad-Spectrum Control: Effectively targets both sap-sucking and leaf-chewing pests, including aphids, jassids, thrips, whiteflies, and caterpillars.",
    description3:"Fast Knockdown Effect: Quickly neutralizes pests to prevent crop damage.",
    description4:"Systemic Protection: Moves within the plant to protect even newly emerged growth.",
    description5:"Improved Crop Health: Reduces pest-related stress and promotes stronger, healthier crops.",
    description6: "Farmer-Friendly Formulation: Easily mixes in water and applies using standard sprayers.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers in need of a comprehensive solution for multi-pest infestations.",
    keyfeatures2: " Pest control during critical crop development stages.",
    keyfeatures3: " Integration into IPM (Integrated Pest Management) programs for both preventative and curative treatment", 
  },
  4: {
    id: 4,
    name: "Poacher",
    image: "./images/insec.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Poacher is an advanced broad-spectrum insecticide featuring Tolfenpyrad 15% EC, designed to tackle a wide range of insect pests and fungal infections across multiple crop types. With both contact and systemic activity, Poacher delivers fast-acting knockdown and extended residual control, making it a highly reliable tool for farmers facing intense pest pressure.",
    descript1:"It is particularly effective against diamondback moths and aphids in cabbage, and aphids, thrips, powdery mildew, and anthracnose in chilli, cotton, cumin, mango, and onion. By interrupting the energy production in pests, Poacher leads to rapid paralysis and death, minimizing crop damage within hours of application.",
    description1:"Key Benefits:",
    description2:"Broad-Spectrum Activity: Controls insect pests and fungal pathogens in one application.",
    description3:"Fast Knockdown Effect: Quickly eliminates pests to prevent early-stage damage.",
    description4:"Systemic Protection: Suitable for vegetables, spices, and commercial crops.",
    description5:"Improved Crop Health: Reduces biotic stress, supporting better yield and harvest quality.",
    description6: "Farmer-Friendly Formulation:Farmer-friendly EC formulation works with standard spray systems.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers combating diamondback moths, aphids, and thrips in high-value crops.",
    keyfeatures2: " Use in integrated pest and disease management programs.",
    keyfeatures3: " Protection during early to mid-stages of crop growth when pest pressure is high.", 
  },
 5: {
    id: 5,
    name: "Amodh",
    image: "./images/ins14.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Amodh is a powerful insect growth regulator (IGR) containing Novaluron 10% EC, engineered to provide targeted, long-lasting control over a wide range of lepidopteran pests and mosquito larvae. With its novel mode of action, Amodh disrupts the molting process in insects, leading to effective control at immature stages and preventing pest population buildup.",
    descript1:"This product is especially effective in controlling pests like pod borers (Helicoverpa armigera) in chickpea, diamondback moths and tobacco caterpillars in cabbage, fruit borers and leaf-eating caterpillars in chilli and tomato, and bollworms in cotton. Additionally, Amodh plays a vital role in public health by targeting mosquito larvae like Anopheles stephensi, Aedes aegypti, and Culex quinquefasciatus in both clean and polluted surface water bodies.",
    description1:"Key Benefits:",
    description2:"Insect Growth Regulator: Disrupts the life cycle of pests by inhibiting molting and development.",
    description3:"Broad Utility: Controls agricultural pests and mosquito larvae in aquatic habitats.",
    description4:"Extended Protection: Offers residual activity for sustained pest suppression.",
    description5:"Target-Specific: Highly effective against lepidopteran pests without harming beneficial insects.",
    description6: "Versatile Application: Suitable for use in fields, vegetable crops, and mosquito control programs.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers facing recurring infestations of pod borers, bollworms, and leaf caterpillars.",
    keyfeatures2: " Public health authorities and farmsteads needing mosquito larvae control in water bodies.",
    keyfeatures3: " Integration into IPM programs for sustainable pest management in chickpea, cabbage, chilli, tomato, and cotton.", 
  },
  6: {
    id: 6,
    name: "Canmites",
    image: "./images/ins15.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Canmites is a specialized acaricide (miticide) formulated with Propargite 57% EC, designed to effectively control mites in various high-value crops. Known for its powerful contact action, Canmites disrupts the life cycle of mites, providing quick knockdown and long-lasting protection.ing to effective control at immature stages and preventing pest population buildup.",
    descript1:"It is especially effective in managing European red mites and two-spotted spider mites in apple, red spider mites in tea, and mites in chillies. Its unique formulation ensures deep penetration into foliage, targeting mites hidden under leaf surfaces where conventional sprays may fail.",
    description1:"Key Benefits:",
    description2:"Targeted Mite Control: Disrupts the life cycle of pests by inhibiting molting and development.",
    description3:"Fast Action: Controls agricultural pests and mosquito larvae in aquatic habitats.",
    description4:"Safe on Crops: Offers residual activity for sustained pest suppression.",
    description5:"Minimal Resistance Risk: Highly effective against lepidopteran pests without harming beneficial insects.",
    description6: "Leaf Surface Coverage: Suitable for use in fields, vegetable crops, and mosquito control programs.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers facing recurring infestations of pod borers, bollworms, and leaf caterpillars.",
    keyfeatures2: " Public health authorities and farmsteads needing mosquito larvae control in water bodies.",
    keyfeatures3: " Integration into IPM programs for sustainable pest management in chickpea, cabbage, chilli, tomato, and cotton.", 
  },
   7: {
    id: 7,
    name: "Rifle",
    image: "./images/inse3.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Rifle Insecticide contains Emamectin Benzoate 1.9% EC, a highly effective modern insecticide known for its strong stomach and contact action. It primarily targets lepidopteran pests by disrupting their nerve impulses, causing paralysis and death shortly after ingestion.",
    descript1:"Rifle provides rapid action with long-lasting residual control and is well-suited for protecting a variety of crops from leaf and fruit-eating caterpillars. Its Emulsifiable Concentrate (EC) formulation ensures easy mixing and superior leaf coverage.",
    description1:"Key Benefits:",
    description2:"Excellent control of lepidopteran pests such as bollworms, fruit borers, and leaf folders.",
    description3:"Quick knockdown effect with long-lasting residual activity.",
    description4:"Suitable for Integrated Pest Management (IPM) and resistance rotation strategies.",
    description5:"Safe for beneficial insects when used as directed.",
    description6:"Helps in improving crop yield and quality by reducing damage at critical growth stages.",
    heading: "Recommended For:",
    keyfeatures1: "1. Recommended for use in cotton, chilli, brinjal, okra, and rice to control caterpillars and borers.",
    keyfeatures2: "2. Effectively controls fruit borers, shoot borers, stem borers, and leaf folders.",
    keyfeatures3: "3. Best applied at the early larval stage for maximum impact and minimal crop damage.", 
  },
  
  8: {
    id: 8,
    name: "Matanga",
    image: "./images/insec1.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Mataga is a next-generation systemic insecticide formulated with Triflumezopyrim 10% SC, specifically designed for highly effective control of planthoppers in paddy cultivation. With a novel mode of action, Mataga targets the nervous system of pests, providing rapid feeding cessation and prolonged protection against brown plant hopper and white backed plant hopper.",
    descript1:"Its systemic mobility ensures that new growth is protected, while its compatibility with other agrochemicals makes it a farmer-friendly choice for integrated pest management in rice fields.",
    description1:"Key Benefits:",
    description2:"Highly Effective on Planthoppers: Fast knockdown of brown and white backed plant hoppers.",
    description3:"Long-Lasting Control: Offers extended residual activity to reduce re-infestation.",
    description4:"Systemic Action: Moves through the plant to protect new growth.",
    description5:"Low Application Rate: Economical and efficient for large paddy fields.",
    description6: "Resistance Management: Ideal for use in rotation programs to prevent resistance buildup.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers struggling with hopper infestations in paddy fields.",
    keyfeatures2: " Regions with high humidity and dense paddy growth that attract sucking ",
    keyfeatures3: " Integrated pest management (IPM) programs focused on sustainable control of rice pests.", 
  },
  9: {
    id: 9,
    name: "Mutant",
    image: "./images/insec7.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Mutant is a specialized acaricide-insecticide formulated with Fenazaquin 18.3% SC, engineered to provide highly effective control of red spider mites, especially in rice cultivation. Fenazaquin acts by disrupting the energy metabolism of mites, resulting in rapid knockdown and extended protection. Its unique chemistry makes it a preferred solution in resistance management programs where conventional miticides have lost effectiveness.",
    descript1:"Mutant effectively disrupts mite activity at the source, helping maintain crop vigor and preventing yield loss caused by hidden infestations.",
    description1:"Key Benefits:",
    description2:"Target-Specific Control: Highly effective against red spider mites.",
    description3:"Long-Lasting Protection: Residual control for several days post-application.",
    description4:"Gentle on Crops: Safe for use on rice at recommended doses.",
    description5:"Low Application Rate: Economical and efficient for large paddy fields.",
    description6: "Resistance Management: Offers an alternative mode of action to traditional acaricides.",
    heading: "Recommended For:",
    keyfeatures1: " For farmers experiencing spider mite infestations in paddy fields.",
    keyfeatures2: " Particularly useful during hot and dry periods, when mite activity peaks. ",
    keyfeatures3: " As part of a rotation strategy in IPM programs to maintain field health and yield.",
  },
  10: {
    id: 10,
    name: "Splinter",
    image: "./images/ins19.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Splinter is a potent dual-action insecticide combining the power of Chlorantraniliprole and Abamectin, specially formulated to combat multiple pest threats in chilli crops. This synergistic combination targets both chewing and sucking pests, delivering fast knockdown and long-lasting control against thrips, mites, and fruit borers.",
    descript1:"Chlorantraniliprole disrupts calcium regulation in pests, causing muscle paralysis, while Abamectin interferes with nerve signals, stopping feeding activity rapidly. Together, they provide a complete solution for pest-infested fields under high pressure.",
    description1:"Key Benefits:",
    description2:"Broad-Spectrum Control: Simultaneously targets thrips, mites, and borers.",
    description3:"Dual Mode of Action: Combines systemic and contact activity for enhanced effectiveness.",
    description4:"Fast Feeding Cessation: Protects crops almost immediately after application.",
    description5:"Long Residual Effect: Prolonged protection reduces the need for frequent spraying.",
    description6: "Improved Crop Health: Minimizes stress and supports vigorous plant growth.",
    heading: "Recommended For:",
    keyfeatures1: " Best suited for chilli fields suffering from complex pest infestations.",
    keyfeatures2: " Effective during critical growth stages to avoid damage to fruit and foliage.",
    keyfeatures3: " Ideal for IPM strategies needing both curative and preventive pest control."
  },
  11: {
    id: 11,
    name: "Gozzar",
    image: "./images/inec2.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Gozzar is a powerful broad-spectrum, non-systemic insecticide formulated with Diafenthiuron 47.8% SC, designed to control key sucking pests in cotton crops. It belongs to Group 12A (Inhibitors of mitochondrial ATP synthase) in the insecticide mode of action classification, offering a unique resistance-breaking solution for pests that have become tolerant to conventional chemistries.",
    descript1: "It's highly effective against aphids, jassids, thrips, and whiteflies, ensuring healthier plant growth and improved yield by reducing pest pressure throughout the crop cycle.",
    description1:"Key Benefits:",
    description2:"Broad-Spectrum Protection: Targets all major sucking pests in cotton.",
    description3:"Unique Mode of Action: Effective where other insecticides may fail due to resistance.",
    description4:"Fast Feeding Cessation: Protects crops almost immediately after application.",
    description5:"Long Residual Activity: Prolonged pest suppression after application.",
    description6: "Non-Systemic with Vapor Action: Controls pests even in hidden plant parts.",
    heading: "Recommended For:",
    keyfeatures1: " For cotton growers facing persistent issues with sucking pests.",
    keyfeatures2: " Suitable during vegetative and flowering stages to protect plant vitality.",
    keyfeatures3: " Ideal for inclusion in resistance management programs using multiple MoA groups."
  },

  12: {
    id: 12,
    name: "Perrier",
    image: "./images/insec8.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Perrier is a high-performance insecticide powered by Fipronil 18.87% SC, specifically developed to control thrips in cotton. Fipronil, a phenylpyrazole insecticide, disrupts the central nervous system of pests by blocking GABA-regulated chloride channels, leading to rapid paralysis and death.",
    descript1: "It is known for its contact and ingestion action, offering long-lasting control even under challenging field conditions. It provides effective coverage and protection, helping to preserve crop quality and maximize yield potential.",
    description1:"Key Benefits:",
    description2:"Targeted Control of Thrips: Eliminates thrips quickly and effectively.",
    description3:"Dual Action: Works via contact and ingestion for more comprehensive control.",
    description4:"Long Residual Activity: Extended protection reduces the frequency of applications.",
    description5: "Crop-Safe: Gentle on cotton plants when applied at recommended doses.",
    description6: "Improved Yield Quality: Minimizes pest-related stress and crop damage.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers looking for a reliable solution to manage thrips in cotton.",
    keyfeatures2: " Use during vegetative and flowering stages to prevent early pest buildup.",
    keyfeatures3: " Effective in resistance management when rotated with other insecticide classes."
  },
   13: {
    id: 13,
    name: "Neutron",
    image: "./images/ins15.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Neutron Insecticide is a next-generation, broad-spectrum insecticide formulated with Novaluron 5.25% and Emamectin Benzoate 0.9% SC, offering a dual mode of action for effective pest control. Novaluron, an Insect Growth Regulator (IGR), inhibits chitin formation and molting, while Emamectin provides fast knockdown through stomach action by disrupting nerve signals in target pests.",
    descript1:"This synergistic combination is highly effective against lepidopteran pests, ensuring long-lasting protection and minimal crop damage. Its Suspension Concentrate formulation ensures uniform spray, better leaf adhesion, and high bio-efficacy.",
    description1:"Key Benefits:",
    description2:"Dual-action formula ensures both larval control and growth regulation of pests.",
    description3:"Excellent control of diamondback moth, tobacco caterpillar, gram pod borer, and stem borers.",
    description4:"Long residual activity reduces the need for frequent applications.",
    description5:"Ideal for resistance management and fits well in Integrated Pest Management (IPM) programs.",
    description6: "Safe for crops when used as directed, with minimal environmental impact.",
    heading: "Recommended For:",
    keyfeatures1: " Effective for controlling Diamondback moth (DBM) and Tobacco caterpillar in Cabbage.",
    keyfeatures2: " Recommended for Gram pod borer and Tobacco caterpillar in Chilli and Gram crops.",
    keyfeatures3: " Useful for managing Gram pod borers in Red Gram and Stem borers in Rice.", 
  },
   14: {
    id: 14,
    name: "Jumet",
    image: "./images/insec6.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Jumet is a specialized acaricide-insecticide formulated with Fenazaquin 10% EC, designed to offer targeted control of multiple mite species across a variety of crops. Its fast-acting contact action makes it highly effective against red spider mites, yellow mites, pink mites, purple mites, and two-spotted spider mites. Jumet works by disrupting energy production in mites, leading to rapid knockdown and long-lasting control.",
    descript1: "It is ideal for high-value horticultural and vegetable crops such as apple, chilli, brinjal, okra, tomato, and tea, where mite infestations can cause significant economic loss.",
    description1:"Key Benefits:",
    description2:"Wide-Spectrum Mite Control: Targets various mite species across multiple crops.",
    description3:"Quick Knockdown Effect: Stops pest activity rapidly after application.",
    description4:"Long Residual Protection: Provides lasting control to minimize repeat sprays.",
    description5:"Crop-Safe: Gentle on plants when used as directed.",
    description6:"Effective in Hot Climates: Performs well under high temperature and humidity conditions.",
    heading: "Recommended For:",
    keyfeatures1: " Best suited for fruit orchards, tea plantations, and vegetable farms facing persistent mite infestations.",
    keyfeatures2: " Ideal during early stages of pest buildup to prevent crop damage.",
    keyfeatures3: " Effective as part of an IPM strategy for resistance and pest management."
  },
   15: {
    id: 15,
    name: "Emanil",
    image: "./images/insec5.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Emanil is a powerful dual-action insecticide designed to combat both chewing and sucking pests in chilli crops. The combination of Emamectin Benzoate, a highly effective larvicide, and Fipronil, a contact and ingestion insecticide, delivers rapid knockdown and extended protection against thrips and fruit borers.",
    descript1: "This synergistic formulation disrupts pest feeding quickly and protects tender growth, making it an excellent choice for high-value vegetable crops.",
    description1:"Key Benefits:",
    description2:"Broad-Spectrum Control: Manages both thrips and fruit borers effectively.",
    description3:"Fast Action: Immediate feeding cessation and pest immobilization.",
    description4:"Long-Lasting Residual Effect: Sustained crop protection over time.",
    description5:"Dual Mode of Action: Reduces the risk of resistance development.",
    description6:"Enhanced Crop Quality: Minimizes pest-induced crop damage, improving yields.",
    heading: "Recommended For:",
    keyfeatures1: " For chilli growers facing combined infestations of thrips and borers.",
    keyfeatures2: " Suitable during flowering and fruiting stages to protect crop integrity",
    keyfeatures3: " Ideal in resistance management programs needing multiple MoA products."
  },
  16: {
    id: 16,
    name: "Flipride",
    image: "./images/insec9.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Flipride is an advanced, broad-spectrum insecticide that combines Fipronil and Acetamiprid to deliver dual-action control against major sucking pests in cotton crops. Fipronil acts on the insect nervous system by disrupting GABA-gated chloride channels, while Acetamiprid, a neonicotinoid, targets nicotinic receptors — offering both contact and systemic protection.",
    descript1: "This unique combination ensures fast knockdown of aphids, jassids, and whiteflies, along with long-lasting residual activity for healthier, pest-free crops.",
    description1:"Key Benefits:",
    description2:"Dual Mode of Action: Synergistic control through systemic and contact activity.",
    description3:"Fast & Effective: Rapid pest mortality and feeding inhibition.",
    description4:"Residual Protection: Long-lasting effectiveness reduces reapplication needs.",
    description5:"Targeted Pest Control: Specifically designed for sucking pests in cotton.",
    description6:"Yield Protection: Promotes healthier plant growth and improved yield.",
    heading: "Recommended For:",
    keyfeatures1: " Effective during vegetative and flowering stages of the crop.",
    keyfeatures2: " Ideal for cotton farmers combating early and mid-season sucking pest outbreaks.",
    keyfeatures3: " Recommended for integrated pest management (IPM) strategies."
  },
   17: {
    id: 17,
    name: "Update",
    image: "./images/ins11.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Update Insecticide is a highly potent combination of Imidacloprid 6% and Lambda Cyhalothrin 4% SC, delivering both systemic and contact action for broad-spectrum pest control. Imidacloprid, a neonicotinoid, targets the nervous system of insects through systemic movement within the plant, while Lambda Cyhalothrin, a pyrethroid, offers rapid knockdown and residual contact action.",
    descript1:"This powerful combination ensures long-lasting protection against a variety of sucking and chewing pests across multiple crops. Its Suspension Concentrate (SC) formulation allows for uniform spray distribution, better crop safety, and effective pest management.",
    description1:"Key Benefits:",
    description2:"Dual action: Systemic protection with Imidacloprid and fast knockdown with Lambda Cyhalothrin.",
    description3:"Controls a broad range of pests including aphids, jassids, whiteflies, thrips, and caterpillars.",
    description4:"Quick absorption and long-lasting control both internally and externally on the plant.",
    description5:"SC formulation ensures easy application, better leaf coverage, and low residue.",
    description6:"Suitable for integrated pest management (IPM) and resistance management programs.",
    heading: "Recommended For:",
    keyfeatures1: " Suitable for cotton, rice, vegetables, and pulses affected by both sucking and chewing pests.",
    keyfeatures2: " Effectively controls aphids, jassids, whiteflies, thrips, leaf hoppers, and bollworms.",
    keyfeatures3: " Recommended for application during the early stages of pest infestation for maximum efficacy.", 
  },
  18: {
    id: 18,
    name: "Proton",
    image: "./images/insec10.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Proton is a specialized insecticide formulated with Lufenuron 5.4% EC, designed to effectively manage diamond back moth infestations in cabbage. As an Insect Growth Regulator (IGR), it inhibits chitin synthesis, preventing larvae from molting and developing into adult pests, thereby disrupting the pest lifecycle.",
    descript1: "Proton ensures long-term protection, minimal crop damage, and supports integrated pest management practices.",
    description1:"Key Benefits:",
    description2:"Effective larval control of diamond back moth.",
    description3:"Long-lasting residual activity.",
    description4:"Safe for beneficial insects..",
    description5: "Supports resistance management strategies.",
    heading: "Recommended For:",
    keyfeatures1: " Apply during early larval stage.",
    keyfeatures2: " Suitable for IPM programs in cabbage cultivation.",
  },
  19: {
    id: 19,
    name: "Triund",
    image: "./images/ins18.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Triund Insecticide is specially recommended for cotton crops, where pest management is critical for ensuring yield and crop quality. It is highly effective in controlling major sucking pests such as Leaf Hoppers (Amrasca biguttula), Aphids (Aphis gossypii), and Thrips (Thrips tabaci) that commonly infest cotton fields. These pests not only damage the plant by feeding on sap but also act as vectors for viral diseases, making early control essential.",
    descript1: "Triund offers excellent control over key bollworms including Helicoverpa armigera, Earias spp., and Pectinophora gossypiella, which are known to cause significant damage during the reproductive stages of cotton. The combination of Acephate and Bifenthrin ensures deep penetration into plant tissue as well as effective action on contact, making it ideal for integrated pest management (IPM) programs.",
    description1:"Key Benefits:",
    description2:"Dual mode of action for quick knockdown and long-lasting control.",
    description3:"Controls both sucking pests (leaf hoppers, aphids, thrips) and chewing pests (bollworms).",
    description4:"WDG formulation ensures easy handling, reduced dust, and better crop safety.",
    description5:"Promotes healthy plant growth by minimizing pest damage.",
    description6:"Helps in resistance management when used in rotation with other insecticides.",
    heading: "Recommended For:",
    keyfeatures1: " For best results, it is advised to apply Triund during the early stages of infestation, following the recommended dosage and safety guidelines.",
    keyfeatures2: " Specifically recommended for cotton crops.",
    keyfeatures3: " Always follow label instructions and recommended dosage for safe and effective use."
  },
  20: {
    id: 20,
    name: "Steamer",
    image: "./images/BS2.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

     descript: "Steamer is a granular systemic insecticide containing Carbosulfan 6% GR, specifically developed for effective control of major insect pests in rice crops. It offers robust protection against stem borers, gall midge, green leaf hoppers, and leaf folders by targeting their nervous system through ingestion and contact.",
    descript1: "Its granular formulation ensures easy application and consistent distribution in paddy fields, leading to healthier crop growth and improved yield.",
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
  21: {
    id: 21,
    name: "Gozzar",
    image: "./images/pocket.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Gozzar is a powerful broad-spectrum insecticide containing Diafenthiuron 50% WP, specially developed for managing a wide range of sucking and chewing pests across multiple crops. It works by disrupting the energy metabolism of target pests, resulting in quick paralysis and death, while also offering prolonged residual protection.",
    descript1: "Its non-systemic yet translaminar action ensures effective pest control, making it ideal for crops like cotton, cabbage, chilli, brinjal, and cardamom.",
    description1:"Key Benefits:",
    description2:"Broad Crop & Pest Spectrum: Controls whiteflies, aphids, thrips, jassids, mites, and borers.",
    description3:"Unique Mode of Action: Targets pest respiration and neural activity with minimal resistance risk.",
    description4:"Long Residual Control: Offers extended protection after application.",
    description5:"Selective Safety: Gentle on beneficial insects when used as directed.",
    description6:"Versatile Use: Suitable for both field and horticultural crops.",
    heading: "Recommended For:",
    keyfeatures1: " Cotton: Whiteflies, aphids, jassids, thrips.",
    keyfeatures2: " Cabbage: Diamond back moth (DBM), Chilli: Mites.",
    keyfeatures3: " Brinjal: Whiteflies, Cardamom: Thrips, capsule borer."
  },
  22: {
    id: 22,
    name: "Gebril",
    image: "./images/poc6.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Gebril is a potent dual-action insecticide combining Fipronil and Imidacloprid, designed to provide long-lasting control of white grubs in sugarcane. Its unique formulation targets both the nervous and feeding systems of grubs, leading to quick mortality and extended soil protection. The water-dispersible granule (WG) format ensures ease of application and superior soil penetration.",
    descript1: "Its water-dispersible granule (WG) formulation allows for deep soil penetration and uniform distribution. Gebril provides long-lasting residual control, protecting sugarcane roots from grub damage and promoting healthy growth with improved crop establishment and yield.",
    description1:"Key Benefits:",
    description2:"Dual Active Power: Combines contact and systemic action for rapid knockdown.",
    description3:"Deep Soil Action: Reaches and controls root-zone pests like white grubs.",
    description4:"Extended Residual Effect: Protects sugarcane for a longer duration.",
    description5:"Improved Root Health: Prevents root damage, improving crop vigor and yield.",
    heading: "Recommended For:",
    keyfeatures1: " Sugarcane growers facing persistent white grub infestations.",
    keyfeatures2: " Use at early stages of infestation or during planting for preventive action.",
  },
   23: {
    id: 23,
    name: "Abina",
    image: "./images/ins poc.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Abina Insecticide is a high-performance solution formulated with Ethiprole and Pymetrozine, designed specifically to combat Brown Plant Hopper (BPH) and White Backed Plant Hopper (WBPH) in rice crops. The combination of these two active ingredients ensures both immediate knockdown and prolonged feeding inhibition, providing comprehensive control over pest populations. This protects rice plants during their most vulnerable stages and helps in maintaining consistent crop growth.",
    descript1: "Its unique dual mode of action makes Abina a reliable tool for farmers aiming for long-lasting pest management. While Ethiprole disrupts the nervous system of hoppers, Pymetrozine effectively prevents further feeding, reducing the chances of reinfestation.",
    description1:"Key Benefits:",
    description2:"Rapid knockdown of hopper pests.",
    description3:"Long-lasting residual control.",
    description4:"Dual mode of action for enhanced performance.",
    description5:"Excellent fit in resistance management programs.",
    description6:"Yield Protection: Promotes healthier plant growth and improved yield.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers looking for quick and lasting control of hopper pests in rice.",
    keyfeatures2: " The formulation is designed to be selective, targeting pests while being gentle on beneficial insects and the environment.",
    keyfeatures3: " Proven efficacy under varying climatic and field conditions, ensuring dependable results season after season."
  },
  24: {
    id: 24,
    name: "Chausar",
    image: "./images/poc3.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

     descript: "Chausar is a powerful insecticide formulated with Dinotefuran 15% and Pymetrozine 45% WG, offering both systemic and translaminar action. It is designed to target some of the most damaging rice pests, including brown plant hopper, white backed plant hopper, green leafhopper, and rice ear head bug.Dinotefuran provides rapid knockdown of active pests, while Pymetrozine inhibits feeding, preventing further crop damage and pest multiplication.",
    descript1: "Chausar moves efficiently within plant tissues, making it highly effective even on hidden pests. With its broad-spectrum control and excellent residual activity, it supports resistance management and integrated pest control programs, ensuring healthier, more productive rice fields.",
    description1:"Key Benefits:",
    description2:"Fast-acting and long-lasting protection.",
    description3:"Controls both visible and hidden pest threats.",
    description4:"Excellent systemic movement within the plant.",
    description5:"Suitable for resistance management strategies.",
    description6:"Yield Protection: Promotes healthier plant growth and improved yield.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers seeking comprehensive hopper and bug control in paddy fields during high-pressure pest periods.",
    keyfeatures2: " Suitable for paddy growers implementing IPM (Integrated Pest Management) strategies looking to minimize resistance buildup and ensure long-term efficacy.",
    keyfeatures3: " Recommended during critical crop stages like tillering and panicle initiation, when pest pressure can significantly reduce yield quality and quantity."
  },
   25: {
    id: 25,
    name: "Canary Ace",
    image: "./images/BS1.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

    descript: "Canary Ace is a highly effective systemic insecticide containing Acephate 75% SP, specially designed to manage piercing and sucking pests across major crops. It offers excellent control of jassids and bollworms in cotton, and aphids in sunflower, ensuring crop health during critical growth phases. Its soluble powder formulation ensures easy application and quick absorption into plant tissues, delivering reliable results.",
    descript1:"Its curative and preventive action not only halts existing pest infestations but also shields the crop from future attacks. By minimizing pest-induced stress, Canary Ace supports robust plant development, leading to stronger root systems, healthier foliage, and enhanced flowering.",
    description1:"Key Benefits:",
    description2:"Rapid pest knockdown with systemic reach.",
    description3:"Long-lasting residual effect on target pests",
    description4:"Compatible with most insecticide resistance programs",
    description5:"Promotes healthier, pest-free crop development",
    heading: "Recommended For:",
    keyfeatures1: " Cotton farmers facing bollworm and jassid infestation.",
    keyfeatures2: " Sunflower cultivators dealing with early-stage aphid outbreaks.",
    keyfeatures3: " Use during high-pressure pest periods for preventive and curative action."
  },
  26:{
    id: 26,
    name: "Tarkash",
    image: "./images/ins poc1.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

     descript: "Tarkash is a granular formulation insecticide containing Cartap Hydrochloride 4%, developed to provide effective and sustained control of key pests in rice cultivation. It works both by contact and stomach action, efficiently targeting stem borer, leaf folder, and whorl maggot—pests that are notorious for damaging early and mid-stage paddy crops. Its mode of action interferes with the nervous system of insects, resulting in quick knockdown and prolonged protection.",
    descript1: "It is easy to apply directly to the soil or standing crop, making it highly convenient for farmers. It ensures healthy tillering, stronger stems, and enhanced grain formation, ultimately supporting higher yields and better crop quality.",
    description1:"Key Benefits:",
    description2:"Dual action: contact and stomach poison.",
    description3:"Long residual control with minimal pest resurgence.",
    description4:"Improves plant vigor and ensures healthier crop establishment.",
    description5:"Easy granular application without the need for complex mixing.",
    description6:"Yield Protection: Promotes healthier plant growth and improved yield.",
    heading: "Recommended For:",
    keyfeatures1: " Farmers dealing with recurring pest pressure in paddy fields.",
    keyfeatures2: " Use during transplanting or early vegetative stage for maximum effect.",
    keyfeatures3: " Integrated pest management (IPM) practices where season-long protection is critical."
  },
  27:{
    id: 27,
    name: "Darcee",
    image: "./images/poc4.png",
    description:"Acephate 75% SP is used to control Jassid, Bollworms in Cotton crop and used to control Aphid in Sunflower crop.",

     descript: "Darcee is a powerful systemic insecticide formulated with a dual-action combination of Dinotefuran 4% and Acephate 50% SG. This synergistic blend ensures quick knockdown and long-lasting control of a wide range of sucking and chewing pests. Dinotefuran acts rapidly through contact and ingestion, while Acephate provides a strong systemic action by penetrating the plant and targeting hidden pests. The SG (Soluble Granule) formulation makes Darcee easy to handle, mix, and apply, ensuring even distribution and effective pest control across the crop canopy.",
    descript1: "Darcee is ideal for use in cotton, vegetables (such as brinjal, tomato, and okra), rice, and other field crops affected by sucking and chewing insects. Apply at the early stage of pest infestation for optimal results.",
    description1:"Key Benefits:",
    description2:"Dual mode of action ensures fast knockdown and prolonged protection.",
    description3:"LonEffective against a broad spectrum of pests including aphids, jassids, whiteflies, thrips, and caterpillars.",
    description4:"Reduces pest resurgence and promotes healthier crop growth.",
    description5:"Water-soluble granule formulation for easy handling, uniform application, and minimal residue.",
    heading: "Recommended For:",
    keyfeatures1: " Suitable for use in cotton, rice, and vegetable crops like brinjal, tomato, and okra.",
    keyfeatures2: " Recommended for controlling sucking pests (aphids, jassids, whiteflies, thrips).",
    keyfeatures3: " Ideal for use during the early stages of pest infestation for maximum efficacy."
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
    window.location.href = 'Insecticide-details.html';
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
        window.location.href = 'Insecticide.html';
    }
}