"use client";



import { useEffect, useState } from "react";



const categories = [

  { id: "tandoori", name: "Tandoori" },

  { id: "nonveg-tandoori", name: "Non-Veg Tandoori" },

  { id: "veg-starter", name: "Veg Starter" },

  { id: "nonveg-starter", name: "Non-Veg Starter" },

  { id: "fries", name: "Fries" },

  { id: "soup", name: "Soup" },

  { id: "sandwich", name: "Sandwich" },

  { id: "pizza", name: "Pizza" },

  { id: "biryani", name: "Biryani" },

  { id: "nonveg-main", name: "Non-Veg Main Course" },

  { id: "indian-main", name: "Indian Main Course" },

  { id: "dal", name: "Dal" },

  { id: "rice", name: "Rice" },

  { id: "noodles", name: "Noodles" },

  { id: "bread", name: "Bread" },

  { id: "salad", name: "Salad" },

  { id: "mocktail", name: "Mocktail" },

  { id: "shake", name: "Shake" },

  { id: "sweet-beverage", name: "Sweet & Beverage" },

];



const menuSections = [

  { id: "tandoori", title: "🔥 Tandoori", items: [

    { name: "Paneer Tikka", price: "₹220", type: "veg", bestseller: true },

    { name: "Mushroom Tikka", price: "₹230", type: "veg" },

  ]},

  { id: "nonveg-tandoori", title: "🍗 Tandoori Starter — Non Veg", items: [

    { name: "Chicken Tikka", price: "₹250", type: "nonveg", bestseller: true },

    { name: "Tandoori Chicken", price: "₹350", type: "nonveg" },

  ]},

  { id: "veg-starter", title: "🥗 Veg Starter", items: [

    { name: "Baby Corn Chilly", price: "₹200", type: "veg" },

    { name: "Mushroom Chilly", price: "₹210", type: "veg" },

    { name: "Paneer Chilly", price: "₹190", type: "veg", bestseller: true },

    { name: "Honey Chilly Potato", price: "₹180", type: "veg" },

    { name: "Paneer 65", price: "₹190", type: "veg" },

    { name: "Veg Manchurian", price: "₹160", type: "veg" },

    { name: "Paneer Manchurian", price: "₹190", type: "veg" },

    { name: "Paneer Pakoda", price: "₹150", type: "veg" },

    { name: "Baby Corn Crispy", price: "₹200", type: "veg" },

  ]},

  { id: "nonveg-starter", title: "🍗 Non Veg Starter", items: [

    { name: "Chicken Chilly", price: "₹220", type: "nonveg", bestseller: true },

    { name: "Chicken Lollipop (6 pcs)", price: "₹260", type: "nonveg" },

    { name: "Chicken 65", price: "₹230", type: "nonveg" },

    { name: "Crispy Chicken", price: "₹230", type: "nonveg" },

  ]},

  { id: "fries", title: "🍟 Fries", items: [

    { name: "French Fries", price: "₹90", type: "veg", bestseller: true },

    { name: "Cheese Fries", price: "₹120", type: "veg" },

    { name: "Masala Fries", price: "₹115", type: "veg" },

  ]},

  { id: "soup", title: "🍲 Soup", items: [

    { name: "Soup", price: "₹75", type: "veg" },

    { name: "Chicken Soup", price: "₹85", type: "nonveg" },

    { name: "Veg Monchao Soup", price: "₹85", type: "veg" },

  ]},

  { id: "sandwich", title: "🥪 Sandwich", items: [

    { name: "Indian Veg Sandwich", price: "₹80", type: "veg" },

    { name: "Tandoori Paneer Sandwich", price: "₹110", type: "veg", bestseller: true },

    { name: "Tandoori Chicken Sandwich", price: "₹130", type: "nonveg" },

    { name: "Chicken Cheese Sandwich", price: "₹140", type: "nonveg" },

    { name: "Paneer Cheese Sandwich", price: "₹140", type: "veg" },

    { name: "Cheese Sandwich", price: "₹110", type: "veg" },

    { name: "Egg Sandwich", price: "₹100", type: "nonveg" },

  ]},

  { id: "pizza", title: "🍕 Pizza", items: [

    { name: "Veg Loaded Pizza", price: "₹175", type: "veg" },

    { name: "Cheese Loaded Pizza", price: "₹175", type: "veg" },

    { name: "Paneer Loaded Pizza", price: "₹175", type: "veg", bestseller: true },

    { name: "Tandoori Chicken Pizza", price: "₹195", type: "nonveg" },

    { name: "Tandoori Paneer Pizza", price: "₹185", type: "veg" },

    { name: "Chicken Loaded Pizza", price: "₹205", type: "nonveg" },

    { name: "Mushroom Pizza", price: "₹175", type: "veg" },

  ]},

  { id: "biryani", title: "🍚 Biryani", items: [

    { name: "Veg Biryani", price: "₹165", type: "veg" },

    { name: "Paneer Biryani", price: "₹165", type: "veg" },

    { name: "Egg Biryani", price: "₹170", type: "nonveg" },

    { name: "Chicken Biryani", price: "₹190", type: "nonveg", bestseller: true },

    { name: "Chicken Biryani With Egg", price: "₹200", type: "nonveg" },

    { name: "Hyderabadi Chicken Biryani", price: "₹210", type: "nonveg" },

    { name: "Mutton Biryani", price: "₹250", type: "nonveg" },

  ]},

  { id: "nonveg-main", title: "🍗 Non Veg Indian Main Course", items: [

    { name: "Mutton Istu (2 pcs / 4 pcs)", price: "₹200", type: "nonveg" },

    { name: "Chicken Curry (4 pcs)", price: "₹240", type: "nonveg", bestseller: true },

    { name: "Mutton Curry (2 pcs / 4 pcs)", price: "₹190", type: "nonveg" },

    { name: "Chicken Dehati (4 pcs / 8 pcs)", price: "₹250", type: "nonveg" },

    { name: "Mutton Kadhai (2 pcs / 4 pcs)", price: "₹210", type: "nonveg" },

    { name: "Murg Masallam (8 pcs)", price: "₹550", type: "nonveg" },

    { name: "Mutton Masala (2 pcs / 4 pcs)", price: "₹200", type: "nonveg" },

  ]},

  { id: "indian-main", title: "🥘 Indian Main Course", items: [

    { name: "Shahi Paneer", price: "₹210", type: "veg", bestseller: true },

    { name: "Paneer Masala", price: "₹210", type: "veg" },

    { name: "Paneer Handi", price: "₹220", type: "veg" },

    { name: "Mushroom Kadhai", price: "₹230", type: "veg" },

    { name: "Mushroom Do Payaza", price: "₹230", type: "veg" },

    { name: "Mushroom Butter Masala", price: "₹230", type: "veg" },

    { name: "Mushroom Masala", price: "₹230", type: "veg" },

    { name: "Matar Mushroom", price: "₹200", type: "veg" },

    { name: "Matar Paneer Mushroom", price: "₹210", type: "veg" },

    { name: "Mix Veg", price: "₹180", type: "veg" },

    { name: "Palak Paneer", price: "₹210", type: "veg" },

    { name: "Mushroom Handi", price: "₹240", type: "veg" },

    { name: "Paneer Butter Masala", price: "₹220", type: "veg", bestseller: true },

    { name: "Matar Paneer", price: "₹200", type: "veg" },

  ]},

  { id: "dal", title: "🥣 Dal", items: [

    { name: "Dal Tadka", price: "₹110", type: "veg" },

    { name: "Dal Fry", price: "₹110", type: "veg" },

    { name: "Lahsuni Dal", price: "₹110", type: "veg" },

    { name: "Dal Makhani", price: "₹200", type: "veg", bestseller: true },

  ]},

  { id: "rice", title: "🍚 Rice", items: [

    { name: "Veg Fried Rice", price: "₹120", type: "veg" },

    { name: "Chicken Fried Rice", price: "₹150", type: "nonveg" },

    { name: "Paneer Fried Rice", price: "₹140", type: "veg" },

    { name: "Egg Fried Rice", price: "₹140", type: "nonveg" },

    { name: "Veg Schezwan Rice", price: "₹130", type: "veg" },

    { name: "Chicken Schezwan Fried Rice", price: "₹160", type: "nonveg" },

    { name: "Steam Rice", price: "₹75", type: "veg" },

    { name: "Kashmiri Pulao", price: "₹155", type: "veg" },

    { name: "Peas Pulao", price: "₹125", type: "veg" },

    { name: "Jeera Rice", price: "₹90", type: "veg" },

  ]},

  { id: "noodles", title: "🍜 Noodles", items: [

    { name: "Veg Hakka Noodle", price: "₹100", type: "veg" },

    { name: "Paneer Noodle", price: "₹140", type: "veg" },

    { name: "Egg Noodle", price: "₹130", type: "nonveg" },

    { name: "Chicken Hakka Noodle", price: "₹150", type: "nonveg" },

    { name: "Veg Schezwan Noodle", price: "₹120", type: "veg" },

    { name: "Chicken Schezwan Noodle", price: "₹160", type: "nonveg" },

    { name: "Paneer Schezwan Noodle", price: "₹150", type: "veg" },

  ]},

  { id: "bread", title: "🫓 Bread", items: [

    { name: "Tandoori Roti", price: "₹15", type: "veg" },

    { name: "Butter Tandoori Roti", price: "₹20", type: "veg" },

    { name: "Plain Naan", price: "₹30", type: "veg" },

    { name: "Butter Naan", price: "₹35", type: "veg" },

    { name: "Garlic Naan", price: "₹45", type: "veg" },

    { name: "Stuffed Naan", price: "₹55", type: "veg" },

    { name: "Kulcha", price: "₹65", type: "veg" },

    { name: "Tandoori Laccha Paratha", price: "₹45", type: "veg" },

    { name: "Tawa Laccha Paratha", price: "₹40", type: "veg" },

  ]},

  { id: "salad", title: "🥗 Salad", items: [

    { name: "Onion Salad", price: "₹45", type: "veg" },

    { name: "Green Salad", price: "₹65", type: "veg" },

    { name: "Raita", price: "₹45", type: "veg" },

    { name: "Papad Dry / Fry", price: "₹35", type: "veg" },

  ]},

  { id: "mocktail", title: "🍹 Mocktail", items: [

    { name: "Virgin Mojito", price: "₹90", type: "veg", bestseller: true },

    { name: "Blue Sea", price: "₹90", type: "veg" },

    { name: "Red Rose Mojito", price: "₹90", type: "veg" },

    { name: "Green Mint Mojito", price: "₹90", type: "veg" },

    { name: "Classic Mint Mojito", price: "₹100", type: "veg" },

  ]},

  { id: "shake", title: "🥤 Shake", items: [

    { name: "Cold Coffee", price: "₹90", type: "veg", bestseller: true },

    { name: "Oreo Shake", price: "₹100", type: "veg" },

    { name: "Banana Shake", price: "₹70", type: "veg" },

    { name: "Mango Shake", price: "₹70", type: "veg" },

    { name: "Kitkat Shake", price: "₹120", type: "veg" },

    { name: "Strawberry Shake", price: "₹90", type: "veg" },

    { name: "Fruit Punch", price: "₹120", type: "veg" },

  ]},

  { id: "sweet-beverage", title: "🍨 Sweet & Beverage", items: [

    { name: "Mineral Water", price: "₹20", type: "veg" },

    { name: "Cold Drink Maaza", price: "₹35", type: "veg" },

    { name: "Vanilla Ice Cream", price: "₹55", type: "veg" },

    { name: "Strawberry Ice Cream", price: "₹55", type: "veg" },

    { name: "Chocolate Ice Cream", price: "₹65", type: "veg" },

    { name: "Butter Scotch Ice Cream", price: "₹75", type: "veg" },

    { name: "Hot Coffee", price: "₹65", type: "veg" },

    { name: "Hot Gulab Jamun (2 pc)", price: "₹40", type: "veg" },

    { name: "Hot Gulab Jamun With Ice Cream", price: "₹75", type: "veg" },

  ]},

];



type ThemeConfig = {
  name: string;
  welcomeBg: string;
  menuBg: string;
  cardBg: string;
  primary: string;
  dark: string;
  accent: string;
  accentSoft: string;
  text: string;
  muted: string;
  border: string;
  banner: boolean;
  icon: string;
  greeting: string;
  subtitle: string;
  description: string;
  cta: string;
  specialTitle: string;
  specialLabel: string;
  specialNote: string;
};

const themeConfigs: Record<string, ThemeConfig> = {
  classic: {
    name: "Classic",
    welcomeBg: "#24170f", menuBg: "#f1e4d2", cardBg: "#fffaf4",
    primary: "#4b2e1f", dark: "#24170f", accent: "#c9a66b", accentSoft: "#ead8b9",
    text: "#38251a", muted: "#765d49", border: "#eadbc8",
    banner: false, icon: "🍽️", greeting: "", subtitle: "Fry Nation Restro & Café",
    description: "Delicious food, refreshing drinks & good vibes.",
    cta: "View Menu", specialTitle: "", specialLabel: "", specialNote: "",
  },

  newYear: {
    name: "New Year", welcomeBg: "#07111f", menuBg: "#f4f7fb", cardBg: "#ffffff",
    primary: "#0f4c81", dark: "#07111f", accent: "#d4af37", accentSoft: "#f5e8b5",
    text: "#10263d", muted: "#587086", border: "#d9e3ee",
    banner: true, icon: "🎆", greeting: "Happy New Year", subtitle: "Start the year with great food",
    description: "Celebrate new beginnings with good food, good vibes & your favourite people.",
    cta: "✨ View New Year Menu", specialTitle: "New Year Favourites", specialLabel: "Celebrate", specialNote: "A fresh start deserves something delicious.",
  },

  makarSankranti: {
    name: "Makar Sankranti", welcomeBg: "#173b4a", menuBg: "#fff8e8", cardBg: "#fffdf7",
    primary: "#c96b18", dark: "#173b4a", accent: "#e5b83d", accentSoft: "#fff0bd",
    text: "#4d321e", muted: "#7d6246", border: "#ead5a7",
    banner: true, icon: "🪁", greeting: "Happy Makar Sankranti", subtitle: "Fly high. Feast well.",
    description: "A bright festive mood with warm food and happy moments.",
    cta: "🪁 View Festive Menu", specialTitle: "Sankranti Favourites", specialLabel: "Festive Picks", specialNote: "Bright flavours for a bright celebration.",
  },

  vasantPanchami: {
    name: "Vasant Panchami", welcomeBg: "#5a4108", menuBg: "#fffdf0", cardBg: "#fffef8",
    primary: "#b68b00", dark: "#5a4108", accent: "#f0c419", accentSoft: "#fff1a8",
    text: "#5a430b", muted: "#806b35", border: "#eadb9c",
    banner: true, icon: "🌼", greeting: "Happy Vasant Panchami", subtitle: "A bright day at Fry Nation",
    description: "Fresh colours, warm hospitality and delicious food.",
    cta: "🌼 View Menu", specialTitle: "Festive Favourites", specialLabel: "Bright Picks", specialNote: "A cheerful spread for the season.",
  },

  mahaShivratri: {
    name: "Maha Shivratri", welcomeBg: "#17122a", menuBg: "#f7f3ff", cardBg: "#ffffff",
    primary: "#5a3c8c", dark: "#17122a", accent: "#d8b45b", accentSoft: "#f0e3bd",
    text: "#34264e", muted: "#6d6280", border: "#ddd3ee",
    banner: true, icon: "🔱", greeting: "Har Har Mahadev", subtitle: "Maha Shivratri at Fry Nation",
    description: "A calm, elegant festive theme for a special evening.",
    cta: "🔱 View Menu", specialTitle: "Special Picks", specialLabel: "Festive Mode", specialNote: "A warm place to pause, share and enjoy.",
  },

  valentines: {
    name: "Valentine's Day", welcomeBg: "#3a101b", menuBg: "#fff5f7", cardBg: "#ffffff",
    primary: "#a52b4b", dark: "#3a101b", accent: "#e7a3b5", accentSoft: "#f8dce4",
    text: "#5a1f31", muted: "#8b5b69", border: "#efd1da",
    banner: true, icon: "❤️", greeting: "Love & Good Food", subtitle: "Valentine's at Fry Nation",
    description: "Make the moment special with food worth sharing.",
    cta: "❤️ View Valentine's Menu", specialTitle: "Date Night Favourites", specialLabel: "For Two", specialNote: "Good food tastes better when shared.",
  },

  holi: {
    name: "Holi", welcomeBg: "#3b174b", menuBg: "#fff8fc", cardBg: "#ffffff",
    primary: "#8c2aa6", dark: "#3b174b", accent: "#f2b93b", accentSoft: "#ffe9a6",
    text: "#4a2458", muted: "#785d82", border: "#ead8ef",
    banner: true, icon: "🎨", greeting: "Happy Holi", subtitle: "Rangon aur flavours ka celebration",
    description: "Bring colour to the table with food, friends and fun.",
    cta: "🎨 View Holi Menu", specialTitle: "Holi Favourites", specialLabel: "Colourful Picks", specialNote: "A colourful celebration deserves a colourful table.",
  },

  eid: {
    name: "Eid", welcomeBg: "#073b35", menuBg: "#f5fbf8", cardBg: "#ffffff",
    primary: "#087a65", dark: "#073b35", accent: "#d5b45a", accentSoft: "#f4e7bb",
    text: "#17473f", muted: "#5e7770", border: "#d6e6e1",
    banner: true, icon: "🌙", greeting: "Eid Mubarak", subtitle: "Celebrate together at Fry Nation",
    description: "Warm hospitality, great food and moments worth sharing.",
    cta: "🌙 View Eid Menu", specialTitle: "Eid Favourites", specialLabel: "Special Picks", specialNote: "Celebrate together around a delicious table.",
  },

  ramNavami: {
    name: "Ram Navami", welcomeBg: "#5b1a12", menuBg: "#fff8f2", cardBg: "#fffdf9",
    primary: "#a63b16", dark: "#5b1a12", accent: "#e2ad39", accentSoft: "#f8e6b0",
    text: "#5b2b1e", muted: "#815d4f", border: "#edd6c8",
    banner: true, icon: "🏹", greeting: "Jai Shri Ram", subtitle: "Ram Navami at Fry Nation",
    description: "A warm festive atmosphere with food and togetherness.",
    cta: "🏹 View Menu", specialTitle: "Festive Favourites", specialLabel: "Celebration Picks", specialNote: "Share good food and good moments.",
  },

  easter: {
    name: "Easter", welcomeBg: "#284d4a", menuBg: "#f4fbfa", cardBg: "#ffffff",
    primary: "#347c75", dark: "#284d4a", accent: "#e6c86e", accentSoft: "#f7ebbd",
    text: "#244b47", muted: "#62807c", border: "#d7e7e4",
    banner: true, icon: "🐣", greeting: "Happy Easter", subtitle: "A cheerful day at Fry Nation",
    description: "Fresh energy, good food and a table full of smiles.",
    cta: "🐣 View Menu", specialTitle: "Easter Favourites", specialLabel: "Special Picks", specialNote: "Keep the celebration bright and delicious.",
  },

  buddhaPurnima: {
    name: "Buddha Purnima", welcomeBg: "#263d36", menuBg: "#f6faf6", cardBg: "#ffffff",
    primary: "#5a7d50", dark: "#263d36", accent: "#d4b35b", accentSoft: "#eee4bb",
    text: "#304936", muted: "#6c7d6d", border: "#dce6db",
    banner: true, icon: "🪷", greeting: "Happy Buddha Purnima", subtitle: "A peaceful festive moment",
    description: "A simple, elegant theme for a meaningful day.",
    cta: "🪷 View Menu", specialTitle: "Favourites", specialLabel: "Special Picks", specialNote: "Good food, calm moments and warm company.",
  },

  bakrid: {
    name: "Bakrid", welcomeBg: "#0c3d36", menuBg: "#f5fbf8", cardBg: "#ffffff",
    primary: "#08745e", dark: "#0c3d36", accent: "#d3ad4e", accentSoft: "#f3e4b5",
    text: "#16483e", muted: "#5e7770", border: "#d7e7e2",
    banner: true, icon: "🌙", greeting: "Eid al-Adha Mubarak", subtitle: "Celebrate together",
    description: "Warm hospitality and a table made for togetherness.",
    cta: "🌙 View Menu", specialTitle: "Celebration Favourites", specialLabel: "Special Picks", specialNote: "Gather, share and enjoy.",
  },

  muharram: {
    name: "Muharram", welcomeBg: "#182a2b", menuBg: "#f5f9f8", cardBg: "#ffffff",
    primary: "#245d5d", dark: "#182a2b", accent: "#b9a56a", accentSoft: "#e9e0c2",
    text: "#244444", muted: "#657676", border: "#d9e4e2",
    banner: true, icon: "🌙", greeting: "Muharram", subtitle: "A calm and respectful theme",
    description: "A subdued visual experience with warm hospitality.",
    cta: "View Menu", specialTitle: "Favourites", specialLabel: "Special Picks", specialNote: "A simple, respectful presentation.",
  },

  rakhi: {
    name: "Raksha Bandhan", welcomeBg: "#50102d", menuBg: "#fff7fa", cardBg: "#ffffff",
    primary: "#9b285a", dark: "#50102d", accent: "#e2b15c", accentSoft: "#f6e4bb",
    text: "#5d2440", muted: "#805e6c", border: "#edd5df",
    banner: true, icon: "🎀", greeting: "Happy Raksha Bandhan", subtitle: "Celebrate the bond",
    description: "Bring family together over something delicious.",
    cta: "🎀 View Menu", specialTitle: "Family Favourites", specialLabel: "For Family", specialNote: "Because the best meals are shared.",
  },

  janmashtami: {
    name: "Janmashtami", welcomeBg: "#10284a", menuBg: "#f5f8ff", cardBg: "#ffffff",
    primary: "#2457a6", dark: "#10284a", accent: "#e1b84d", accentSoft: "#f5e7b5",
    text: "#203e68", muted: "#61728c", border: "#d8e2f1",
    banner: true, icon: "🪈", greeting: "Happy Janmashtami", subtitle: "Celebrate with good food",
    description: "A rich festive mood for an evening of celebration.",
    cta: "🪈 View Menu", specialTitle: "Festive Favourites", specialLabel: "Special Picks", specialNote: "A joyful table for friends and family.",
  },

  ganesh: {
    name: "Ganesh Chaturthi", welcomeBg: "#54200e", menuBg: "#fff8f0", cardBg: "#fffdf9",
    primary: "#b84b18", dark: "#54200e", accent: "#e0ad3f", accentSoft: "#f8e4ad",
    text: "#5a2d19", muted: "#81614f", border: "#ecd7c8",
    banner: true, icon: "🐘", greeting: "Ganpati Bappa Morya", subtitle: "Ganesh Chaturthi at Fry Nation",
    description: "A warm festive celebration with great food and great company.",
    cta: "🐘 View Menu", specialTitle: "Ganesh Chaturthi Favourites", specialLabel: "Festive Picks", specialNote: "Celebrate the day with warmth and togetherness.",
  },

  navratri: {
    name: "Navratri", welcomeBg: "#431354", menuBg: "#fff7ff", cardBg: "#ffffff",
    primary: "#8b2b9d", dark: "#431354", accent: "#e2b341", accentSoft: "#f8e8b2",
    text: "#52245d", muted: "#7d6382", border: "#ead8ed",
    banner: true, icon: "🪔", greeting: "Happy Navratri", subtitle: "Nine nights. One festive table.",
    description: "A vibrant festive theme for the Navratri season.",
    cta: "🪔 View Navratri Menu", specialTitle: "Navratri Favourites", specialLabel: "Festival Mode", specialNote: "A festive look that can be paired with restaurant-controlled offers.",
  },

  durgaPuja: {
    name: "Durga Puja", welcomeBg: "#4b0b13", menuBg: "#fff8f0", cardBg: "#fffdf9",
    primary: "#8f1520", dark: "#3b0710", accent: "#d7a51a", accentSoft: "#f8e4a3",
    text: "#5b1018", muted: "#7d4548", border: "#e7b8a9",
    banner: true, icon: "🌺", greeting: "🌺 Shubho Durga Puja 🌺", subtitle: "Fry Nation Restro & Café",
    description: "Celebrate • Dine • Enjoy",
    cta: "🌺 View Festival Menu", specialTitle: "Puja Favourites", specialLabel: "Special Picks", specialNote: "A festive selection made for sharing good food and good moments.",
  },

  dussehra: {
    name: "Dussehra", welcomeBg: "#4b160d", menuBg: "#fff8ee", cardBg: "#fffdf9",
    primary: "#a83b13", dark: "#4b160d", accent: "#e0aa35", accentSoft: "#f7e2ac",
    text: "#5b2d1d", muted: "#805f4d", border: "#ecd6c5",
    banner: true, icon: "🏹", greeting: "Happy Dussehra", subtitle: "Celebrate the victory of good",
    description: "A bold festive theme for a memorable meal.",
    cta: "🏹 View Dussehra Menu", specialTitle: "Dussehra Favourites", specialLabel: "Festival Picks", specialNote: "A festive table for family and friends.",
  },

  karwaChauth: {
    name: "Karwa Chauth", welcomeBg: "#421322", menuBg: "#fff5f8", cardBg: "#ffffff",
    primary: "#9e3157", dark: "#421322", accent: "#d9a35d", accentSoft: "#f5e0bd",
    text: "#5c2639", muted: "#805d69", border: "#ecd4dc",
    banner: true, icon: "🌙", greeting: "Karwa Chauth", subtitle: "A special evening at Fry Nation",
    description: "A soft, elegant festive theme for the evening.",
    cta: "🌙 View Menu", specialTitle: "Evening Favourites", specialLabel: "Special Picks", specialNote: "A beautiful table for a special evening.",
  },

  diwali: {
    name: "Diwali", welcomeBg: "#160d2b", menuBg: "#fff9ee", cardBg: "#fffdf8",
    primary: "#7b1fa2", dark: "#160d2b", accent: "#e5b93f", accentSoft: "#f7e7ae",
    text: "#4c245a", muted: "#746080", border: "#ead9c3",
    banner: true, icon: "🪔", greeting: "✨ Happy Diwali ✨", subtitle: "Light up your celebration",
    description: "Celebrate the festival of lights with delicious food and bright moments.",
    cta: "🪔 View Diwali Menu", specialTitle: "Diwali Favourites", specialLabel: "Festival Specials", specialNote: "Light up the table with food worth sharing.",
  },

  chhath: {
    name: "Chhath Puja", welcomeBg: "#6b310e", menuBg: "#fff9ed", cardBg: "#fffdf8",
    primary: "#b95e17", dark: "#6b310e", accent: "#e2b33d", accentSoft: "#f8e6ae",
    text: "#5c351c", muted: "#81664b", border: "#ead6b4",
    banner: true, icon: "🌅", greeting: "Chhath Puja", subtitle: "A special Bihar festive theme",
    description: "A warm sunrise-inspired look for the Chhath season.",
    cta: "🌅 View Menu", specialTitle: "Chhath Season", specialLabel: "Festival Mode", specialNote: "Restaurant-controlled offers can be added for the occasion.",
  },

  guruNanak: {
    name: "Guru Nanak Jayanti", welcomeBg: "#17413b", menuBg: "#f5fbf8", cardBg: "#ffffff",
    primary: "#237a68", dark: "#17413b", accent: "#d6b45c", accentSoft: "#f1e5be",
    text: "#244c44", muted: "#627873", border: "#d7e7e2",
    banner: true, icon: "🪔", greeting: "Happy Guru Nanak Jayanti", subtitle: "Celebrate together",
    description: "A calm, warm festive presentation for a special day.",
    cta: "🪔 View Menu", specialTitle: "Favourites", specialLabel: "Special Picks", specialNote: "Good food, gratitude and togetherness.",
  },

  christmas: {
    name: "Christmas", welcomeBg: "#123c2b", menuBg: "#f8fbf6", cardBg: "#ffffff",
    primary: "#a52b2b", dark: "#123c2b", accent: "#d6b65a", accentSoft: "#f4e9bd",
    text: "#234b38", muted: "#60766a", border: "#d8e5dc",
    banner: true, icon: "🎄", greeting: "Merry Christmas", subtitle: "Christmas at Fry Nation",
    description: "Celebrate the season with delicious food and festive vibes.",
    cta: "🎄 View Christmas Menu", specialTitle: "Christmas Favourites", specialLabel: "Festive Picks", specialNote: "A little extra festive, a lot more delicious.",
  },
} as const;

const festivalSpecials = [
  { name: "Paneer Tikka", price: "₹220", note: "Charcoal grilled favourite" },
  { name: "Shahi Paneer", price: "₹210", note: "Rich festive favourite" },
  { name: "Veg Biryani", price: "₹165", note: "Aromatic basmati rice" },
  { name: "Virgin Mojito", price: "₹90", note: "Refreshing festive cooler" },
];

type ThemeKey = keyof typeof themeConfigs;

type FestivalCampaign = {
  key: Exclude<ThemeKey, "classic">;
  start: string;
  end: string;
};

const festivalSchedule: FestivalCampaign[] = [
  { key: "newYear", start: "2026-01-01", end: "2026-01-03" },
  { key: "makarSankranti", start: "2026-01-13", end: "2026-01-15" },
  { key: "vasantPanchami", start: "2026-01-22", end: "2026-01-24" },
  { key: "mahaShivratri", start: "2026-02-14", end: "2026-02-16" },
  { key: "valentines", start: "2026-02-13", end: "2026-02-15" },
  { key: "holi", start: "2026-03-02", end: "2026-03-05" },
  { key: "eid", start: "2026-03-19", end: "2026-03-21" },
  { key: "ramNavami", start: "2026-03-25", end: "2026-03-28" },
  { key: "easter", start: "2026-04-03", end: "2026-04-06" },
  { key: "buddhaPurnima", start: "2026-04-30", end: "2026-05-02" },
  { key: "bakrid", start: "2026-05-26", end: "2026-05-28" },
  { key: "muharram", start: "2026-06-25", end: "2026-06-27" },
  { key: "rakhi", start: "2026-08-27", end: "2026-08-29" },
  { key: "janmashtami", start: "2026-09-03", end: "2026-09-05" },
  { key: "ganesh", start: "2026-09-13", end: "2026-09-15" },
  { key: "navratri", start: "2026-10-11", end: "2026-10-15" },
  { key: "durgaPuja", start: "2026-10-16", end: "2026-10-19" },
  { key: "dussehra", start: "2026-10-20", end: "2026-10-21" },
  { key: "karwaChauth", start: "2026-10-28", end: "2026-10-30" },
  { key: "diwali", start: "2026-11-05", end: "2026-11-11" },
  { key: "chhath", start: "2026-11-14", end: "2026-11-17" },
  { key: "guruNanak", start: "2026-11-23", end: "2026-11-25" },
  { key: "christmas", start: "2026-12-20", end: "2026-12-26" },
  { key: "newYear", start: "2026-12-27", end: "2027-01-02" },
];

const themeAliases: Record<string, ThemeKey> = {
  classic: "classic",
  newyear: "newYear",
  makar: "makarSankranti",
  sankranti: "makarSankranti",
  vasant: "vasantPanchami",
  shivratri: "mahaShivratri",
  valentine: "valentines",
  valentines: "valentines",
  holi: "holi",
  eid: "eid",
  ramnavami: "ramNavami",
  easter: "easter",
  buddha: "buddhaPurnima",
  bakrid: "bakrid",
  muharram: "muharram",
  rakhi: "rakhi",
  janmashtami: "janmashtami",
  ganesh: "ganesh",
  navratri: "navratri",
  durga: "durgaPuja",
  durgapuja: "durgaPuja",
  dussehra: "dussehra",
  karwachauth: "karwaChauth",
  diwali: "diwali",
  chhath: "chhath",
  gurunanak: "guruNanak",
  christmas: "christmas",
};

const getLocalDateKey = () => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${today.getFullYear()}-${month}-${day}`;
};

const getAutomaticTheme = (): ThemeKey => {
  const today = getLocalDateKey();
  const activeCampaign = festivalSchedule.find(
    (campaign) => today >= campaign.start && today <= campaign.end,
  );

  return activeCampaign?.key ?? "classic";
};


const taxSettings = {

  enabled: true,

  cgst: 2.5,

  sgst: 2.5,

};



const googleReviewUrl =

  "https://www.google.com/search?sca_esv=1ef16b6696f8b5b3&sxsrf=APpeQnvYdIYBDOuzzzpF13oZTf_8x7Nb7w:1791358702519&q=fry+nation&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_ynKgjzO38CyOtpFOC3Pb2tAka8DqqgVwGG-M96X9YdSc1WBJiVcwuG1JKl8oEuRhCRV7WWHLb0kGfUrmz16yF6yz9P_rzvzBU8z7KDPD-ms5pFcpA%3D%3D&sa=X&ved=2ahUKEwiWoYOZs6eXAxVTm-EIHc-RO5YQrrQLegQIHRAA&biw=1920&bih=945&dpr=1";



export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [activeTheme, setActiveTheme] = useState<ThemeKey>("classic");
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedTheme = params.get("theme")?.toLowerCase();
    const manualTheme = requestedTheme ? themeAliases[requestedTheme] : undefined;

    setPreviewMode(params.get("preview") === "1");

    if (manualTheme) {
      setActiveTheme(manualTheme);
      return;
    }

    setActiveTheme(getAutomaticTheme());
  }, []);

  const theme = themeConfigs[activeTheme];



  const [cart, setCart] = useState<

    { name: string; price: number; quantity: number }[]

  >([]);

  const [showOrder, setShowOrder] = useState(false);

  const [orderSubmitted, setOrderSubmitted] = useState(false);



  const addToOrder = (name: string, price: string) => {

    const numericPrice = Number(price.replace("₹", ""));

    setCart((current) => {

      const existing = current.find((item) => item.name === name);

      if (existing) {

        return current.map((item) =>

          item.name === name

            ? { ...item, quantity: item.quantity + 1 }

            : item

        );

      }

      return [...current, { name, price: numericPrice, quantity: 1 }];

    });

  };



  const updateQuantity = (name: string, change: number) => {

    setCart((current) =>

      current

        .map((item) =>

          item.name === name

            ? { ...item, quantity: item.quantity + change }

            : item

        )

        .filter((item) => item.quantity > 0)

    );

  };



  const selectCategory = (id: string) => {

    setSelectedCategory(id);

    document.getElementById("menu")?.scrollIntoView({

      behavior: "smooth",

      block: "start",

    });

  };



  const visibleSections =

    selectedCategory === "all"

      ? menuSections

      : menuSections.filter((section) => section.id === selectedCategory);



  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(

    (total, item) => total + item.price * item.quantity,

    0

  );

  const cgst = taxSettings.enabled

    ? subtotal * (taxSettings.cgst / 100)

    : 0;

  const sgst = taxSettings.enabled

    ? subtotal * (taxSettings.sgst / 100)

    : 0;

  const estimatedTotal = subtotal + cgst + sgst;



  return (

    <main className="min-h-screen text-[#3a2518]" style={{ backgroundColor: theme.dark }}>

      {/* ================= WELCOME ================= */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center text-[#f5eadc]"
        style={{ backgroundColor: theme.welcomeBg }}
      >
        {theme.banner && (
          <>
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, ${theme.accent} 0 2px, transparent 3px), radial-gradient(circle at 80% 30%, ${theme.accent} 0 2px, transparent 3px), radial-gradient(circle at 30% 80%, ${theme.accent} 0 2px, transparent 3px), radial-gradient(circle at 75% 75%, ${theme.accent} 0 2px, transparent 3px)`,
                backgroundSize: "90px 90px",
              }}
            />
            <div className="absolute left-5 top-8 text-4xl opacity-80 sm:left-12">{theme.icon}</div>
            <div className="absolute right-5 top-10 text-4xl opacity-80 sm:right-12">{theme.icon}</div>
            <div className="absolute bottom-12 left-8 text-3xl opacity-60 sm:left-16">✦</div>
            <div className="absolute bottom-16 right-8 text-3xl opacity-60 sm:right-16">✦</div>
          </>
        )}

        <div className="relative z-10">
          <div className="mb-5 text-3xl tracking-[0.4em]" style={{ color: theme.accent }}>
            ✦ ✦ ✦
          </div>

          <div
            className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 text-4xl shadow-xl"
            style={{
              borderColor: theme.accent,
              backgroundColor: theme.banner ? theme.primary : "#38251a",
            }}
          >
            {theme.icon}
          </div>

          {theme.banner ? (
            <>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.35em]"
                style={{ color: theme.accent }}
              >
                Festival Special
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
                {theme.greeting}
              </h1>
              <p className="mt-3 text-xl font-medium" style={{ color: theme.accentSoft }}>
                {theme.subtitle}
              </p>
              <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/75">
                {theme.description}
              </p>
            </>
          ) : (
            <>
              <p
                className="mb-3 text-sm uppercase tracking-[0.35em]"
                style={{ color: theme.accent }}
              >
                Welcome to
              </p>
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                Fry Nation
              </h1>
              <p className="mt-2 text-lg text-[#d7c3ae]">Restro & Café</p>
              <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-[#bda996]">
                Delicious food, refreshing drinks & good vibes.
              </p>
            </>
          )}

          <a
            href="#menu"
            className="mt-9 inline-flex rounded-full px-9 py-4 font-bold shadow-xl transition hover:scale-105"
            style={{ backgroundColor: theme.accent, color: theme.dark }}
          >
            {theme.cta}
          </a>

          <p
            className="mt-8 text-xs tracking-widest"
            style={{ color: theme.banner ? theme.accentSoft : "#927963" }}
          >
            SCAN • EXPLORE • ENJOY
          </p>
        </div>
      </section>

      {/* ================= MENU ================= */}

      <section id="menu" className="px-5 py-16" style={{ backgroundColor: theme.menuBg }}>

        <div className="mx-auto max-w-3xl">

          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: theme.primary }}>
              Fry Nation
            </p>

            <h2 className="mt-3 text-4xl font-bold" style={{ color: theme.text }}>
              Our Menu
            </h2>

            <p className="mt-3 text-sm" style={{ color: theme.muted }}>
              Choose a category to explore
            </p>

            {previewMode && (
              <div className="mx-auto mt-4 max-w-xs">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: theme.muted }}>
                  Theme Preview
                </label>
                <select
                  value={activeTheme}
                  onChange={(event) => setActiveTheme(event.target.value as ThemeKey)}
                  className="w-full rounded-full border px-4 py-3 text-sm font-semibold outline-none"
                  style={{ borderColor: theme.accent, color: theme.primary, backgroundColor: theme.cardBg }}
                >
                  {(Object.keys(themeConfigs) as ThemeKey[]).map((key) => (
                    <option key={key} value={key}>
                      {themeConfigs[key].name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {theme.banner && (
              <>
                <div
                  className="relative mx-auto mt-6 max-w-2xl overflow-hidden rounded-[2rem] border-2 px-6 py-7 shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${theme.cardBg} 0%, ${theme.accentSoft} 100%)`,
                    borderColor: theme.accent,
                  }}
                >
                  <div className="pointer-events-none absolute -left-4 top-2 text-5xl opacity-25">{theme.icon}</div>
                  <div className="pointer-events-none absolute -right-4 bottom-0 text-5xl opacity-25">{theme.icon}</div>

                  <div className="relative">
                    <p className="text-2xl font-extrabold sm:text-3xl" style={{ color: theme.text }}>
                      {theme.greeting}
                    </p>
                    <p className="mt-2 text-sm font-medium" style={{ color: theme.muted }}>
                      {theme.description}
                    </p>
                    <div
                      className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full px-5 py-2 text-xs font-bold"
                      style={{ backgroundColor: theme.accentSoft, color: theme.text }}
                    >
                      ✦ Festival Mode Active ✦
                    </div>
                  </div>
                </div>

                <div
                  className="mx-auto mt-5 max-w-2xl rounded-[2rem] border-2 p-5 text-left shadow-sm"
                  style={{ backgroundColor: theme.cardBg, borderColor: theme.accent }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: theme.primary }}>
                        {theme.specialLabel}
                      </p>
                      <h3 className="mt-1 text-xl font-extrabold" style={{ color: theme.text }}>
                        {theme.icon} {theme.specialTitle}
                      </h3>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{ backgroundColor: theme.accentSoft, color: theme.text }}
                    >
                      Festival Mode
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {festivalSpecials.map((special) => (
                      <div
                        key={special.name}
                        className="flex items-center justify-between gap-3 rounded-2xl border bg-white px-4 py-3"
                        style={{ borderColor: theme.border }}
                      >
                        <div className="min-w-0">
                          <p className="font-bold" style={{ color: theme.text }}>
                            {special.name}
                          </p>
                          <p className="mt-0.5 text-xs" style={{ color: theme.muted }}>
                            {special.note}
                          </p>
                        </div>
                        <span className="shrink-0 font-extrabold" style={{ color: theme.primary }}>
                          {special.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="mx-auto mt-4 max-w-2xl rounded-2xl px-5 py-4 text-center"
                  style={{ backgroundColor: theme.dark }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: theme.accent }}>
                    ✨ {theme.name} ✨
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/90">{theme.specialNote}</p>
                </div>
              </>
            )}
          </div>

          {/* CATEGORY FILTER */}

          <div className="sticky top-0 z-20 -mx-5 px-5 py-4 backdrop-blur" style={{ backgroundColor: `${theme.menuBg}f2` }}>

            <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">

              <button

                onClick={() => selectCategory("all")}

                className="whitespace-nowrap rounded-full border px-5 py-3 text-sm font-medium shadow-sm transition"

                style={{

                  borderColor: selectedCategory === "all" ? theme.primary : theme.border,

                  backgroundColor: selectedCategory === "all" ? theme.primary : theme.cardBg,

                  color: selectedCategory === "all" ? "#ffffff" : theme.text,

                }}

              >

                🍽️ All Menu

              </button>



              {categories.map((category) => (

                <button

                  key={category.id}

                  onClick={() => selectCategory(category.id)}

                  className="whitespace-nowrap rounded-full border px-5 py-3 text-sm font-medium shadow-sm transition"

                  style={{

                    borderColor: selectedCategory === category.id ? theme.primary : theme.border,

                    backgroundColor: selectedCategory === category.id ? theme.primary : theme.cardBg,

                    color: selectedCategory === category.id ? "#ffffff" : theme.text,

                  }}

                >

                  {category.name}

                </button>

              ))}

            </div>

          </div>



          {/* ONLY SELECTED CATEGORY IS SHOWN */}

          <div className="mt-8">

            {visibleSections.map((section) => (

              <section key={section.id} className="mb-14">

                <div className="mb-5 flex items-center gap-3">

                  <div className="h-px flex-1" style={{ backgroundColor: theme.border }} />

                  {theme.banner && <span className="text-lg" style={{ color: theme.accent }}>✦</span>}

                  <h3 className="whitespace-nowrap text-xl font-bold sm:text-2xl" style={{ color: theme.text }}>

                    {section.title}

                  </h3>

                  {theme.banner && <span className="text-lg" style={{ color: theme.accent }}>✦</span>}

                  <div className="h-px flex-1" style={{ backgroundColor: theme.border }} />

                </div>



                <div className="space-y-3">

                  {section.items.map((item) => (

                    <div

                      key={item.name}

                      className="flex items-center justify-between gap-3 rounded-2xl border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5" style={{ borderColor: theme.border, backgroundColor: theme.cardBg }}

                    >

                      <div className="min-w-0">

                        <div className="flex items-center gap-2">

                          <span

                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border-2 ${

                              item.type === "veg"

                                ? "border-green-600"

                                : "border-red-600"

                            }`}

                          >

                            <span

                              className={`h-2 w-2 rounded-full ${

                                item.type === "veg"

                                  ? "bg-green-600"

                                  : "bg-red-600"

                              }`}

                            />

                          </span>

                          <h4 className="font-semibold" style={{ color: theme.text }}>

                            {item.name}

                          </h4>

                        </div>



                        {item.bestseller && (

                          <span className="mt-2 inline-block rounded-full px-2.5 py-1 text-xs font-semibold" style={{ backgroundColor: theme.accentSoft, color: theme.text }}>

                            ⭐ Bestseller

                          </span>

                        )}

                      </div>



                      <div className="flex shrink-0 flex-col items-end gap-2">

                        <span className="whitespace-nowrap font-bold" style={{ color: theme.primary }}>

                          {item.price}

                        </span>

                        <button

                          onClick={() => addToOrder(item.name, item.price)}

                          className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-95" style={{ backgroundColor: theme.primary }}

                        >

                          + Add

                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              </section>

            ))}

          </div>

        </div>

      </section>



      {/* ================= ORDER BAR ================= */}

      {cart.length > 0 && (

        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4">

          <button

            onClick={() => setShowOrder(true)}

            className="flex w-full max-w-md items-center justify-between rounded-2xl px-5 py-4 text-white shadow-2xl" style={{ backgroundColor: theme.primary }}

          >

            <div className="flex items-center gap-3">

              <span className="text-xl">🛎️</span>

              <div className="text-left">

                <p className="font-bold">My Order</p>

                <p className="text-xs text-white/70">

                  {totalItems} {totalItems === 1 ? "item" : "items"}

                </p>

              </div>

            </div>

            <span className="font-bold">₹{estimatedTotal.toFixed(0)}</span>

          </button>

        </div>

      )}



      {/* ================= ORDER SCREEN ================= */}

      {showOrder && (

        <div className="fixed inset-0 z-[100] overflow-y-auto" style={{ backgroundColor: theme.menuBg }}>

          <div className="mx-auto min-h-screen max-w-md">

            <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 text-white shadow" style={{ backgroundColor: theme.dark }}>

              <div>

                <p className="text-xs text-white/60">Fry Nation Restro & Café</p>

                <h2 className="text-xl font-bold">Your Order</h2>

              </div>

              <button

                onClick={() => setShowOrder(false)}

                className="rounded-full bg-white/10 px-3 py-2 text-lg"

                aria-label="Close order"

              >

                ✕

              </button>

            </div>



            <div className="space-y-3 p-4">

              {cart.map((item) => (

                <div key={item.name} className="rounded-2xl bg-white p-4 shadow-sm">

                  <div className="flex items-center justify-between gap-3">

                    <div className="min-w-0 flex-1">

                      <p className="font-semibold text-[#3b261a]">{item.name}</p>

                      <p className="mt-1 text-sm text-gray-500">

                        ₹{item.price} each

                      </p>

                    </div>



                    <div className="flex items-center gap-2 rounded-full bg-[#f5eee5] px-2 py-1">

                      <button

                        onClick={() => updateQuantity(item.name, -1)}

                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white font-bold"

                      >

                        −

                      </button>

                      <span className="w-5 text-center font-semibold">

                        {item.quantity}

                      </span>

                      <button

                        onClick={() => updateQuantity(item.name, 1)}

                        className="flex h-7 w-7 items-center justify-center rounded-full font-bold text-white" style={{ backgroundColor: theme.primary }}

                      >

                        +

                      </button>

                    </div>

                  </div>



                  <div className="mt-3 border-t pt-3 text-right font-bold" style={{ color: theme.primary }}>

                    ₹{item.price * item.quantity}

                  </div>

                </div>

              ))}

            </div>



            {cart.length > 0 && (

              <>

                <div className="mx-4 rounded-2xl bg-white p-5 shadow-sm">

                  <h3 className="mb-4 text-lg font-bold text-[#3b261a]">

                    Estimated Bill

                  </h3>



                  <div className="space-y-2 text-sm">

                    <div className="flex justify-between">

                      <span>Subtotal</span>

                      <span>₹{subtotal.toFixed(2)}</span>

                    </div>



                    {taxSettings.enabled && (

                      <>

                        <div className="flex justify-between">

                          <span>CGST {taxSettings.cgst}%</span>

                          <span>₹{cgst.toFixed(2)}</span>

                        </div>

                        <div className="flex justify-between">

                          <span>SGST {taxSettings.sgst}%</span>

                          <span>₹{sgst.toFixed(2)}</span>

                        </div>

                      </>

                    )}



                    <div className="my-3 border-t" />



                    <div className="flex justify-between text-lg font-bold" style={{ color: theme.primary }}>

                      <span>Estimated Total</span>

                      <span>₹{estimatedTotal.toFixed(2)}</span>

                    </div>

                  </div>



                  <p className="mt-4 text-xs leading-5 text-gray-500">

                    * Final bill may vary based on restaurant billing.

                  </p>

                </div>



                <div className="p-4">

                  <button

                    onClick={() => setOrderSubmitted(true)}

                    className="w-full rounded-2xl px-5 py-4 font-bold text-white shadow-lg transition hover:opacity-90 active:scale-[0.99]" style={{ backgroundColor: theme.primary }}

                  >

                    🛎️ Show Order to Waiter

                  </button>



                  <div className="mt-6 text-center">

                    <p className="text-sm font-medium text-[#5f4938]">

                      Enjoyed your experience? ❤️

                    </p>

                    <p className="mt-1 text-xs text-[#8a7563]">

                      Your feedback helps Fry Nation grow.

                    </p>

                    <a

                      href={googleReviewUrl}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a66b] bg-white px-5 py-3 text-sm font-semibold text-[#4b2e1f] shadow-sm transition hover:bg-[#fff8ed]"

                    >

                      ⭐ Rate us on Google

                    </a>

                  </div>

                </div>

              </>

            )}



            <div className="h-8" />

          </div>

        </div>

      )}



      {/* ================= WAITER CONFIRMATION ================= */}

      {orderSubmitted && (

        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-5">

          <div className="w-full max-w-sm rounded-3xl bg-[#f8f1e7] p-6 text-center shadow-2xl">

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">

              ✓

            </div>



            <h2 className="text-2xl font-bold text-[#3b261a]">

              Order Ready!

            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">

              Please show this screen to the waiter.

            </p>



            <div className="mt-5 rounded-2xl bg-white p-4 text-left">

              <p className="mb-3 text-sm font-semibold text-gray-500">

                ORDER SUMMARY

              </p>



              {cart.map((item) => (

                <div

                  key={item.name}

                  className="flex justify-between gap-3 py-1 text-sm"

                >

                  <span>

                    {item.name} × {item.quantity}

                  </span>

                  <span className="shrink-0 font-semibold">

                    ₹{item.price * item.quantity}

                  </span>

                </div>

              ))}



              <div className="mt-3 border-t pt-3">

                <div className="flex justify-between font-bold">

                  <span>Estimated Total</span>

                  <span>₹{estimatedTotal.toFixed(2)}</span>

                </div>

              </div>

            </div>



            <button

              onClick={() => {

                setOrderSubmitted(false);

                setShowOrder(false);

              }}

              className="mt-5 w-full rounded-2xl px-5 py-3 font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: theme.primary }}

            >

              Done

            </button>

          </div>

        </div>

      )}



      {/* ================= CUSTOMER ACTIONS ================= */}

      <section className="px-5 py-16 text-center text-[#f5eadc]" style={{ backgroundColor: theme.dark }}>

        <div className="mx-auto max-w-2xl">

          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a66b]">

            Stay Connected

          </p>

          <h2 className="mt-3 text-3xl font-bold">

            We'd love to hear from you

          </h2>

          <p className="mt-3 text-[#bda996]">

            Enjoyed your experience? Connect with us.

          </p>



          <a

            href={googleReviewUrl}

            target="_blank"

            rel="noopener noreferrer"

            className="mt-8 flex items-center justify-center gap-3 rounded-2xl px-6 py-4 font-semibold shadow-lg transition hover:-translate-y-1" style={{ backgroundColor: theme.accent, color: theme.dark }}

          >

            ⭐ Rate us on Google

          </a>



          <div className="mt-4 grid grid-cols-2 gap-3">

            <a

              href="https://maps.google.com/"

              target="_blank"

              rel="noopener noreferrer"

              className="rounded-2xl bg-[#38251a] px-4 py-4 font-medium text-[#f5eadc] transition hover:bg-[#4b3324]"

            >

              📍 Find Us

            </a>

            <a

              href="https://wa.me/919999999999"

              target="_blank"

              rel="noopener noreferrer"

              className="rounded-2xl bg-[#38251a] px-4 py-4 font-medium text-[#f5eadc] transition hover:bg-[#4b3324]"

            >

              💬 WhatsApp

            </a>

            <a

              href="tel:+919999999999"

              className="rounded-2xl bg-[#38251a] px-4 py-4 font-medium text-[#f5eadc] transition hover:bg-[#4b3324]"

            >

              📞 Call Us

            </a>

            <a

              href="https://instagram.com/"

              target="_blank"

              rel="noopener noreferrer"

              className="rounded-2xl bg-[#38251a] px-4 py-4 font-medium text-[#f5eadc] transition hover:bg-[#4b3324]"

            >

              📸 Instagram

            </a>

          </div>

        </div>

      </section>



      {/* ================= FOOTER ================= */}

      <footer className="border-t px-6 py-12 text-center text-[#f5eadc]" style={{ backgroundColor: theme.dark, borderColor: theme.primary }}>

        <h3 className="text-xl font-bold">Fry Nation Restro & Café</h3>

        <p className="mt-2 text-sm text-[#a9917c]">

          Thank you for visiting us.

        </p>



        <div className="mt-8">

          <p className="text-xs uppercase tracking-[0.25em] text-[#806a58]">

            Digital menu by

          </p>

          <a

            href="https://anryzocard.vercel.app/"

            target="_blank"

            rel="noopener noreferrer"

            className="mt-2 inline-block text-lg font-bold tracking-wide transition hover:opacity-70" style={{ color: theme.accent }}

          >

            ANRYZO ↗

          </a>

          <p className="mt-1 text-xs text-[#927963]">

            Your Business Upgraded.

          </p>

        </div>



        <p className="mt-8 text-xs text-[#705b4b]">

          © 2026 Fry Nation Restro & Café

        </p>

      </footer>

    </main>

  );

}
