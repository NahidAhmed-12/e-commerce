/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // এটা থিম টগল (Dark/Light) করার জন্য খুব গুরুত্বপূর্ণ
  theme: {
    extend: {
      colors: {
        // এখানে আপনি চাইলে আপনার ব্র্যান্ড কালার কাস্টমাইজ করতে পারেন
        primary: "#ea580c", // orange-600 এর হেক্স কোড (মেইন কালার)
        secondary: "#f97316", // orange-500 (সেকেন্ডারি কালার)
      },
      fontFamily: {
        // Navbar এ যে স্টাইলিশ ফন্ট ব্যবহার হয়েছে তার জন্য
        signature: ["Great Vibes", "cursive"], 
      },
    },
  },
  plugins: [],
}