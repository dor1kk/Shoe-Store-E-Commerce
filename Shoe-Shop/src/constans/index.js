import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const items = [
    {
        thumbnail: "https://pnghq.com/wp-content/uploads/wireless-headphones-front-view.-white-png-icon-on-a-transparent-background.-3d-rendering.-14033452-png.png",
        bigItem: 'https://pnghq.com/wp-content/uploads/wireless-headphones-front-view.-white-png-icon-on-a-transparent-background.-3d-rendering.-14033452-png.png',
    },
    {
        thumbnail: 'https://pngimg.com/d/macbook_PNG101741.png',
        bigItem: 'https://pngimg.com/d/macbook_PNG101741.png',
    },
    {
        thumbnail: 'https://static.vecteezy.com/system/resources/previews/027/144/874/original/futuristic-bluetooth-portable-speaker-isolated-on-transparent-background-png.png',
        bigItem: 'https://static.vecteezy.com/system/resources/previews/027/144/874/original/futuristic-bluetooth-portable-speaker-isolated-on-transparent-background-png.png',
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: 'https://img.freepik.com/premium-photo/computer-mouse-with-blue-light_1059945-1482.jpg',
        name: "Bluetooth Mouse",
        price: "$20.20",
    },
    {
        imgURL: 'https://img.freepik.com/premium-photo/pair-headphones-orangepinkish-background_927585-99.jpg',
        name: "MySound Headphones",
        price: "$50.20",
    },
    {
        imgURL: 'https://img.freepik.com/premium-photo/phone-with-back-facing-camera-back-it-is-red-blue_662214-56503.jpg',
        name: "Iphone 15 Pro Max",
        price: "$1220.20",
    },
    {
        imgURL: 'https://img.freepik.com/premium-photo/laptop-computer-with-colorful-animation-background-green-screen-style-dark-indigo-brown_334364-5826.jpg',
        name: "Apple Pro Macbook",
        price: "$2230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: 'https://img.freepik.com/photos-gratuite/portrait-jolie-femme-souriante-au-bureau_23-2148187253.jpg',
        customerName: 'Jane Smith',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: 'https://img.freepik.com/free-photo/portrait-young-bearded-man-looking-camera_23-2148187159.jpg',
        customerName: 'John Doe',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];