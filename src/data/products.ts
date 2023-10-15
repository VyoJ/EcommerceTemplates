export interface Product {
    prodid: number
    name: string
    img: string
    desc: string
    price: number
    rating: number
    specs: string
}
  
export const products: Product[] = [
    {
        prodid: 1,
        name : "Smart Watch",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Close_Up_of_Apple_Watch_8.jpg/640px-Close_Up_of_Apple_Watch_8.jpg",
        desc : "Lorem Ipsum Dolor Sit Amet",
        price : 499,
        rating : 5,
        specs : "Lorem Ipsum",
    },
    {
        prodid: 2,
        name : "Laptop",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Schenker_VIA14_Laptop_asv2021-01.jpg/640px-Schenker_VIA14_Laptop_asv2021-01.jpg",
        desc : "Lorem Ipsum Dolor Sit Amet",
        price : 399,
        rating : 4,
        specs : "Lorem Ipsum",
    },
    {
        prodid: 3,
        name : "Headphones",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Headphone-dynamic-clay.png/640px-Headphone-dynamic-clay.png",
        desc : "Lorem Ipsum Dolor Sit Amet",
        price : 599,
        rating : 3,
        specs : "Lorem Ipsum",
    },
]