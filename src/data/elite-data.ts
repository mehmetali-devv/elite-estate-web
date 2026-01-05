export interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    image: string;
    description: string;
    features: {
        beds: number;
        baths: number;
        sqft: number;
    };
    gallery: string[];
}

export const properties: Property[] = [
    {
        id: "1",
        title: "The Azure Penthouse",
        location: "Istanbul, Bosphorus",
        price: "$4,500,000",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
        description: "Boğaz'ın eşsiz manzarasına hakim, özel tasarım bir penthouse. Modern mimari ve lüksün zirvesi.",
        features: {
            beds: 4,
            baths: 3.5,
            sqft: 4500,
        },
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
        ],
    },
    {
        id: "2",
        title: "Villa Serenity",
        location: "Bodrum, Yalikavak",
        price: "$2,750,000",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
        description: "Ege'nin maviliklerine açılan, kendisine ait özel koyu ve iskelesi bulunan minimalist bir villa.",
        features: {
            beds: 5,
            baths: 5,
            sqft: 6200,
        },
        gallery: [
            "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
        ],
    },
    {
        id: "3",
        title: "Onyx Residence",
        location: "London, Kensington",
        price: "£5,200,000",
        image: "https://images.unsplash.com/photo-1600596542815-2a4d9fddace7?q=80&w=2670&auto=format&fit=crop",
        description: "Londra'nın kalbinde, tarihi dokuyu modern lüksle birleştiren seçkin bir rezidans dairesi.",
        features: {
            beds: 3,
            baths: 2,
            sqft: 2800,
        },
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2670&auto=format&fit=crop",
        ],
    },
];
