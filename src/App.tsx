import { useState } from "react";

/* ============================================================
   Seunbloom Chic - Online Fashion Catalog
   A beautiful, mobile-first e-commerce catalog for ordering via WhatsApp.
   ============================================================ */

// WhatsApp base URL - change the phone number here if needed
const WHATSAPP_BASE = "https://wa.me/2349054955242";

// Product data - Replace image URLs with actual product photos
const products = [
  {
    id: 1,
    name: "The Bloom Summer Dress",
    price: "₦15,000",
    // Replace with actual product image
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    description: "Elegant floral summer dress",
  },
  {
    id: 2,
    name: "Rose Petal Blouse Set",
    price: "₦12,500",
    // Replace with actual product image
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
    description: "Chic casual set for everyday wear",
  },
  {
    id: 3,
    name: "Midnight Glam Gown",
    price: "₦25,000",
    // Replace with actual product image
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
    description: "Stunning evening wear",
  },
  {
    id: 4,
    name: "Soft Knit Cardigan",
    price: "₦9,500",
    // Replace with actual product image
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cead0e2?auto=format&fit=crop&w=600&q=80",
    description: "Cozy layered piece",
  },
  {
    id: 5,
    name: "Velvet Wrap Skirt",
    price: "₦11,000",
    // Replace with actual product image
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj9a?auto=format&fit=crop&w=600&q=80",
    description: "Luxurious textured skirt",
  },
  {
    id: 6,
    name: "Classic Linen Jumpsuit",
    price: "₦18,000",
    // Replace with actual product image
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
    description: "Effortless one-piece style",
  },
];

// Generate WhatsApp order link for a product
function getOrderLink(productName: string): string {
  const encodedName = encodeURIComponent(productName);
  return `${WHATSAPP_BASE}?text=Hello%20Seunbloom,%20I%20want%20to%20order%20the%20${encodedName}`;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-body text-gray-900 bg-white min-h-screen">
      {/* ========== HEADER / NAVIGATION ========== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="font-display text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Seunbloom <span className="text-rose-400">Chic</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-gray-700 hover:text-rose-400 transition-colors">Home</a>
              <a href="#collection" className="text-sm font-medium text-gray-700 hover:text-rose-400 transition-colors">Collection</a>
              <a href="#how-to-order" className="text-sm font-medium text-gray-700 hover:text-rose-400 transition-colors">How to Order</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-rose-400 transition-colors">Contact</a>
              <a
                href="#collection"
                className="inline-flex items-center px-4 py-2 bg-rose-400 text-white text-sm font-semibold rounded-full hover:bg-rose-500 transition-colors shadow-md"
              >
                <i className="fas fa-shopping-bag mr-2"></i>
                Shop Now
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-rose-50 transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 animate-fade-in-up">
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <i className="fas fa-home mr-3 text-rose-400"></i>Home
                </a>
                <a
                  href="#collection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <i className="fas fa-th mr-3 text-rose-400"></i>Collection
                </a>
                <a
                  href="#how-to-order"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <i className="fas fa-clipboard-list mr-3 text-rose-400"></i>How to Order
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-400 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <i className="fas fa-envelope mr-3 text-rose-400"></i>Contact
                </a>
                <a
                  href="#collection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mx-3 mt-2 inline-flex items-center justify-center px-4 py-3 bg-rose-400 text-white font-semibold rounded-full hover:bg-rose-500 transition-colors shadow-md"
                >
                  <i className="fas fa-shopping-bag mr-2"></i>
                  Shop Now
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {/* Replace this image URL with your actual brand photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Effortless Style,
            <br />
            <span className="text-rose-300">Delivered to You.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Explore the latest trends from our TikTok feed. Browse our exclusive collection and order directly via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#collection"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-rose-400 text-white text-lg font-semibold rounded-full hover:bg-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <i className="fas fa-eye mr-2"></i>
              View Collection
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              Chat With Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#collection" className="text-white/70 hover:text-white transition-colors">
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>

      {/* ========== COLLECTION / PRODUCT GRID ========== */}
      <section id="collection" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 bg-rose-100 text-rose-500 text-sm font-semibold rounded-full mb-4">
              ✨ New Arrivals
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Collection
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Handpicked styles for the modern woman. Each piece is curated to make you feel confident and beautiful.
            </p>
          </div>

          {/* Product Grid - 2 columns on mobile, 3 on tablet, 3 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Replace image src with actual product photos */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 line-clamp-1">{product.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-rose-500">
                      {product.price}
                    </span>
                    <span className="text-xs text-yellow-600 font-medium">
                      <i className="fas fa-star mr-1"></i>Trending
                    </span>
                  </div>

                  {/* WhatsApp Order Button */}
                  <a
                    href={getOrderLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-3 py-2.5 sm:px-4 sm:py-3 bg-green-500 text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-green-600 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <i className="fab fa-whatsapp mr-2 text-base sm:text-lg"></i>
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-10 md:mt-14">
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-rose-400 text-rose-500 font-semibold rounded-full hover:bg-rose-400 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-whatsapp mr-2 text-lg"></i>
              Request More Styles
            </a>
          </div>
        </div>
      </section>

      {/* ========== HOW TO ORDER SECTION ========== */}
      <section id="how-to-order" className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
              🛍️ Simple & Easy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How To Order
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Getting your favorite styles is as easy as 1-2-3!
            </p>
          </div>

          {/* 3-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-rose-100 rounded-full flex items-center justify-center group-hover:bg-rose-400 group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-search text-3xl text-rose-400 group-hover:text-white transition-colors"></i>
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white text-sm font-bold rounded-full mb-4">
                1
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">Browse the Collection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scroll through our curated selection of trendy, affordable pieces. Find something you love!
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                <i className="fab fa-whatsapp text-3xl text-green-500 group-hover:text-white transition-colors"></i>
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white text-sm font-bold rounded-full mb-4">
                2
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">Click 'Order via WhatsApp'</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tap the green WhatsApp button on any item you want. We'll receive your order instantly!
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-truck text-3xl text-yellow-600 group-hover:text-white transition-colors"></i>
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white text-sm font-bold rounded-full mb-4">
                3
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">Confirm & Receive</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Confirm your details, size, and delivery address with us. We'll get it to you fast!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS / TRUST SECTION ========== */}
      <section className="py-12 md:py-16 bg-rose-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-rose-400 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-rose-400 mb-2">⭐ 4.9/5</div>
              <div className="text-sm text-gray-600 font-medium">Customer Rating</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-rose-400 mb-2">24hrs</div>
              <div className="text-sm text-gray-600 font-medium">Fast Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER / FINAL CTA ========== */}
      <footer id="contact" className="bg-gray-900 text-white">
        {/* Final CTA */}
        <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-rose-400">Bloom</span>?
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              Don't wait — your perfect outfit is just one message away. Chat with us now and let's get you styled!
            </p>

            {/* Big WhatsApp CTA Button */}
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-5 bg-green-500 text-white text-lg md:text-xl font-bold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              <i className="fab fa-whatsapp mr-3 text-2xl"></i>
              Chat with Seunbloom Chic Now
            </a>

            {/* Social Links */}
            <div className="mt-10 flex items-center justify-center space-x-6">
              <a
                href="https://tiktok.com/@seunbloomchic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-400 transition-colors duration-300"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              <a
                href="https://instagram.com/seunbloomchic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>

            {/* TikTok follow note */}
            <p className="mt-8 text-gray-400 text-sm">
              <i className="fab fa-tiktok mr-2 text-rose-400"></i>
              Follow us on TikTok for daily styles!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 <span className="font-display font-semibold text-gray-400">Seunbloom Chic</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Made with <i className="fas fa-heart text-rose-400"></i> for fashion lovers
          </p>
        </div>
      </footer>

      {/* ========== FLOATING WHATSAPP BUTTON ========== */}
      <a
        href={WHATSAPP_BASE}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce"
        style={{ animationDuration: "2s" }}
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl md:text-4xl"></i>
      </a>
    </div>
  );
}
