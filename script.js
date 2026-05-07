// Enhanced Product Data from SHOP IMG folder with Classical Names
const products = [
    {
        id: 1,
        name: "Imperial Elegance",
        price: 340,
        image: "SHOP IMG/340.jpeg",
        category: "Noble Collection",
        description: "An exquisite piece crafted for the discerning fashion connoisseur",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        reviews: 127
    },
    {
        id: 2,
        name: "Channel Heritage Sneakers",
        price: 450,
        image: "SHOP IMG/A CHANNEL SNEAKERS 38 - 42 ₵450 - ₵600.jpeg",
        category: "Royal Footwear",
        description: "Authentic Channel heritage sneakers, a testament to timeless luxury",
        inStock: true,
        sizes: ["38", "39", "40", "41", "42"],
        rating: 4.9,
        reviews: 89
    },
    {
        id: 3,
        name: "Majestic Zipper Couture Jacket",
        price: 300,
        image: "SHOP IMG/A LUXE ZR ZIPPER BUMPER JACKET Size S M L FIT XL PRICE CHANNEL SNEAKERS 38 - 42 ₵300 - ₵400.jpeg",
        category: "Imperial Outerwear",
        description: "A majestic zipper jacket embodying sophisticated craftsmanship",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 156
    },
    {
        id: 4,
        name: "Supreme Imperial Crown",
        price: 1000,
        image: "SHOP IMG/A ₵1000.jpeg",
        category: "Crown Jewels",
        description: "The pinnacle of luxury fashion, reserved for true royalty",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 5.0,
        reviews: 203
    },
    {
        id: 5,
        name: "Imperial Air Force Burgundy",
        price: 450,
        image: "SHOP IMG/B nike AF1 CRUSH BURGUNDY SIZE 38-45 IN BOX ₵450-₵600.jpeg",
        category: "Royal Footwear",
        description: "Imperial Air Force edition in rich burgundy, fit for nobility",
        inStock: true,
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        rating: 4.8,
        reviews: 267
    },
    {
        id: 6,
        name: "Regal Zipper Masterpiece",
        price: 300,
        image: "SHOP IMG/C LUXE ZR ZIPPER BUMPER JACKET Size S M L FIT XL PRICE CHANNEL SNEAKERS 38 - 42 ₵300 - ₵400.jpeg",
        category: "Imperial Outerwear",
        description: "A regal zipper jacket designed for the modern aristocrat",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        reviews: 94
    },
    {
        id: 7,
        name: "Imperial Air Force Legacy",
        price: 450,
        image: "SHOP IMG/C nike AF1 CRUSH BURGUNDY SIZE 38-45 IN BOX ₵450- ₵600.jpeg",
        category: "Royal Footwear",
        description: "Imperial Air Force legacy edition with original imperial packaging",
        inStock: true,
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        rating: 4.9,
        reviews: 178
    },
    {
        id: 8,
        name: "Channel Royal Classic",
        price: 450,
        image: "SHOP IMG/CHANNEL SNEAKERS 38 - 42 ₵450 - ₵600.jpeg",
        category: "Royal Footwear",
        description: "Channel Royal Classic sneakers, a timeless statement of elegance",
        inStock: true,
        sizes: ["38", "39", "40", "41", "42"],
        rating: 4.7,
        reviews: 145
    },
    {
        id: 9,
        name: "Imperial Air Force Elite",
        price: 450,
        image: "SHOP IMG/D nike AF1 CRUSH BURGUNDY SIZE 38-45 IN BOX ₵450.jpeg",
        category: "Royal Footwear",
        description: "Imperial Air Force Elite edition with premium imperial box",
        inStock: true,
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        rating: 4.8,
        reviews: 234
    },
    {
        id: 10,
        name: "Noble Zipper Sovereign",
        price: 300,
        image: "SHOP IMG/LUXE ZR ZIPPER BUMPER JACKET Size S M L FIT XL PRICE CHANNEL SNEAKERS 38 - 42 ₵300 - ₵400.jpeg",
        category: "Imperial Outerwear",
        description: "Noble zipper sovereign jacket with exquisite detailing",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 112
    },
    {
        id: 11,
        name: "Royal Messenger Collection",
        price: 185,
        video: "SHOP IMG/all size ₵185.mp4",
        category: "Messenger Exclusive",
        description: "Exclusive royal messenger collection, available in all noble sizes",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        reviews: 89
    },
    {
        id: 12,
        name: "Royal Messenger Elite",
        price: 189,
        video: "SHOP IMG/all size ₵189.mp4",
        category: "Messenger Exclusive",
        description: "Premium royal messenger exclusive piece",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 76
    },
    {
        id: 13,
        name: "Royal Messenger Supreme",
        price: 199,
        video: "SHOP IMG/all size ₵199.mp4",
        category: "Messenger Exclusive",
        description: "Supreme royal messenger exclusive fashion",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        reviews: 103
    },
    {
        id: 14,
        name: "Royal Messenger Imperial",
        price: 200,
        video: "SHOP IMG/all size ₵200.mp4",
        category: "Messenger Exclusive",
        description: "Imperial royal messenger collection piece",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 67
    },
    {
        id: 15,
        name: "Royal Messenger Sovereign",
        price: 210,
        video: "SHOP IMG/all size ₵210.mp4",
        category: "Messenger Exclusive",
        description: "Sovereign royal messenger fashion piece",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        reviews: 92
    },
    {
        id: 16,
        name: "Imperial Messenger Crown",
        price: 290,
        video: "SHOP IMG/all size ₵290.mp4",
        category: "Imperial Collection",
        description: "High-end imperial messenger crown collection",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: 145
    },
    {
        id: 17,
        name: "Imperial Messenger Noble",
        price: 310,
        video: "SHOP IMG/all size ₵310.mp4",
        category: "Imperial Collection",
        description: "Noble imperial messenger fashion piece",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 118
    },
    {
        id: 18,
        name: "Imperial Messenger Royal",
        price: 320,
        video: "SHOP IMG/all size ₵320.mp4",
        category: "Imperial Collection",
        description: "Royal imperial messenger premium piece",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        reviews: 167
    },
    {
        id: 19,
        name: "Imperial Messenger Supreme",
        price: 350,
        video: "SHOP IMG/all size ₵350.mp4",
        category: "Imperial Collection",
        description: "Supreme imperial messenger crown item",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: 189
    },
    {
        id: 20,
        name: "Imperial Air Force Heritage",
        price: 450,
        image: "SHOP IMG/nike AF1 CRUSH BURGUNDY SIZE 38-45 IN BOX ₵450 -₵600.jpeg",
        category: "Royal Footwear",
        description: "Imperial Air Force heritage edition with original imperial packaging",
        inStock: true,
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        rating: 4.8,
        reviews: 298
    },
    {
        id: 21,
        name: "Noble Fashion Estate",
        price: 250,
        image: "SHOP IMG/₵ 250 -₵ 350.jpeg",
        category: "Noble Estate",
        description: "Noble fashion estate piece with imperial value",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        reviews: 134
    },
    {
        id: 22,
        name: "Imperial Crown Legacy",
        price: 1000,
        image: "SHOP IMG/₵1000 (2).jpeg",
        category: "Crown Jewels",
        description: "Exclusive imperial crown legacy fashion piece",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 5.0,
        reviews: 245
    },
    {
        id: 23,
        name: "Imperial Crown Heritage",
        price: 1000,
        image: "SHOP IMG/₵1000.jpeg",
        category: "Crown Jewels",
        description: "Premium imperial crown heritage fashion item",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: 198
    },
    {
        id: 24,
        name: "Royal Trendsetter",
        price: 190,
        image: "SHOP IMG/₵190 (2).jpeg",
        category: "Royal Vanguard",
        description: "Royal trendsetter piece at noble price",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 87
    },
    {
        id: 25,
        name: "Royal Vanguard",
        price: 190,
        image: "SHOP IMG/₵190 (3).jpeg",
        category: "Royal Vanguard",
        description: "Popular royal vanguard fashion piece",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        reviews: 92
    },
    {
        id: 26,
        name: "Royal Vanguard Elite",
        price: 190,
        image: "SHOP IMG/₵190 (4).jpeg",
        category: "Royal Vanguard",
        description: "Elite royal vanguard fashion item",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 103
    },
    {
        id: 27,
        name: "Royal Vanguard Supreme",
        price: 190,
        image: "SHOP IMG/₵190 (5).jpeg",
        category: "Royal Vanguard",
        description: "Supreme royal vanguard fashion collection",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 78
    },
    {
        id: 28,
        name: "Royal Vanguard Heritage",
        price: 190,
        image: "SHOP IMG/₵190.jpeg",
        category: "Royal Vanguard",
        description: "Heritage royal vanguard bestselling fashion item",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        reviews: 156
    },
    {
        id: 29,
        name: "Imperial Messenger Noble",
        price: 220,
        video: "SHOP IMG/₵220 all size.mp4",
        category: "Imperial Collection",
        description: "Noble imperial messenger exclusive item",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 124
    },
    {
        id: 30,
        name: "Noble Fashion Manor",
        price: 269,
        image: "SHOP IMG/₵269 -₵ 370 (2).jpeg",
        category: "Noble Estate",
        description: "Stylish noble fashion manor with imperial value",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        reviews: 98
    },
    {
        id: 31,
        name: "Noble Fashion Palace",
        price: 269,
        image: "SHOP IMG/₵269 -₵ 370 (3).jpeg",
        category: "Noble Estate",
        description: "Premium noble fashion palace collection item",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 87
    },
    {
        id: 32,
        name: "Noble Fashion Castle",
        price: 269,
        image: "SHOP IMG/₵269 -₵ 370 (4).jpeg",
        category: "Noble Estate",
        description: "Stylish noble fashion castle piece",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        reviews: 112
    },
    {
        id: 33,
        name: "Noble Fashion Kingdom",
        price: 269,
        image: "SHOP IMG/₵269 -₵ 370.jpeg",
        category: "Noble Estate",
        description: "Premium noble fashion kingdom item",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        reviews: 134
    },
    {
        id: 34,
        name: "Imperial Noble Crown",
        price: 350,
        image: "SHOP IMG/₵350 - ₵450.jpeg",
        category: "Imperial Collection",
        description: "Imperial noble crown collection with noble pricing",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        reviews: 189
    },
    {
        id: 35,
        name: "Royal Sovereign Exclusive",
        price: 450,
        video: "SHOP IMG/₵450.mp4",
        category: "Sovereign Exclusive",
        description: "Royal sovereign exclusive premium item",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: 203
    },
    {
        id: 36,
        name: "Imperial Noble Diamond",
        price: 879,
        image: "SHOP IMG/₵879 - ₵1000.jpeg",
        category: "Crown Jewels",
        description: "Imperial noble diamond fashion piece",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: 167
    },
    {
        id: 37,
        name: "Imperial Noble Platinum",
        price: 999,
        image: "SHOP IMG/₵999.jpeg",
        category: "Crown Jewels",
        description: "Imperial noble platinum fashion item",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        rating: 5.0,
        reviews: 234
    }
];

// Cart Management
class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }

    loadCart() {
        const savedCart = localStorage.getItem('slayWithIcceCart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    saveCart() {
        localStorage.setItem('slayWithIcceCart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.showNotification('Item added to bag!');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    clearCart() {
        this.items = [];
        this.saveCart();
    }

    updateCartUI() {
        // Update cart count
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.getItemCount();
        }

        // Update cart items
        this.renderCartItems();
        
        // Update cart total
        const cartTotal = document.getElementById('cartTotal');
        if (cartTotal) {
            cartTotal.textContent = this.getTotal().toFixed(2);
        }
    }

    renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    <i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>Your bag is empty</p>
                </div>
            `;
            return;
        }

        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <video class="cart-item-image" autoplay muted loop playsinline>
                    <source src="${item.video}" type="video/mp4">
                </video>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">GHS ${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="quantity-btn" onclick="cart.removeItem(${item.id})" style="background: #ff6b6b; color: white;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(45deg, #D4AF37, #FBE7A1);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize Cart
const cart = new Cart();

// Product Rendering
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;

    productGrid.innerHTML = products.map(product => `
        <div class="product-card enhanced-card" onclick="window.location.href='shop.html'" style="cursor: pointer;">
            <div class="product-media">
                ${product.image ? 
                    `<img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">` :
                    `<video class="product-video" autoplay muted loop playsinline>
                        <source src="${product.video}" type="video/mp4">
                    </video>`
                }
                <div class="product-badges">
                    ${!product.inStock ? '<span class="badge out-of-stock">Out of Stock</span>' : ''}
                    ${product.rating >= 4.8 ? '<span class="badge premium">Premium</span>' : ''}
                    ${product.price >= 500 ? '<span class="badge luxury">Luxury</span>' : ''}
                </div>
                <div class="product-overlay">
                    <div class="quick-actions">
                        <button class="quick-view-btn" onclick="event.stopPropagation(); quickViewProduct(${product.id})" title="Quick View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="quick-add-btn" onclick="event.stopPropagation(); cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})" title="Add to Cart">
                            <i class="fas fa-shopping-bag"></i>
                        </button>
                        <button class="wishlist-btn" onclick="event.stopPropagation(); addToWishlist(${product.id})" title="Add to Wishlist">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">GHS ${product.price.toFixed(2)}</span>
                    ${product.price >= 500 ? '<span class="price-badge">Best Value</span>' : ''}
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="event.stopPropagation(); cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})" ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-bag"></i>
                        ${product.inStock ? 'Add to Bag' : 'Out of Stock'}
                    </button>
                    <button class="btn-buy-now" onclick="event.stopPropagation(); buyNowProduct(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-bolt"></i>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Implement lazy loading for videos
    implementLazyLoading();
}

// Helper Functions for Home Page
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

function quickViewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Create quick view modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="quick-view-content">
            <button class="close-quick-view" onclick="this.closest('.quick-view-modal').remove()">
                <i class="fas fa-times"></i>
            </button>
            <div class="quick-view-media">
                ${product.image ? 
                    `<img src="${product.image}" alt="${product.name}">` :
                    `<video autoplay muted loop playsinline>
                        <source src="${product.video}" type="video/mp4">
                    </video>`
                }
            </div>
            <div class="quick-view-info">
                <h2>${product.name}</h2>
                <div class="quick-view-rating">
                    ${renderStars(product.rating)}
                    <span>(${product.reviews} reviews)</span>
                </div>
                <p class="quick-view-price">GHS ${product.price.toFixed(2)}</p>
                <p class="quick-view-description">${product.description}</p>
                <div class="quick-view-actions">
                    <button class="btn-add-cart-large" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')}); this.closest('.quick-view-modal').remove();">
                        <i class="fas fa-shopping-bag"></i> Add to Bag
                    </button>
                    <button class="btn-buy-now-large" onclick="window.location.href='shop.html'">
                        <i class="fas fa-bolt"></i> View Details
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 100);
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get wishlist from localStorage
    let wishlist = JSON.parse(localStorage.getItem('slayWithIcceWishlist') || '[]');
    
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('slayWithIcceWishlist', JSON.stringify(wishlist));
        cart.showNotification('Added to wishlist!');
    } else {
        wishlist = wishlist.filter(id => id !== productId);
        localStorage.setItem('slayWithIcceWishlist', JSON.stringify(wishlist));
        cart.showNotification('Removed from wishlist');
    }
}

function buyNowProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Clear cart and add this product
    cart.clearCart();
    cart.addItem(product);
    
    // Redirect to shop for checkout
    window.location.href = 'shop.html';
}

// Lazy Loading for Videos
function implementLazyLoading() {
    const videos = document.querySelectorAll('video[data-src]');
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const src = video.getAttribute('data-src');
                if (src) {
                    video.src = src;
                    video.removeAttribute('data-src');
                    video.load();
                }
                observer.unobserve(video);
            }
        });
    });

    videos.forEach(video => videoObserver.observe(video));
    videos.forEach(video => {
        videoObserver.observe(video);
    });
}

// View Product Details
function viewProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Create modal for product details
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${product.name}</h3>
                <button class="close-btn" onclick="closeProductModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <video style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;" autoplay muted loop playsinline>
                    <source src="${product.video}" type="video/mp4">
                </video>
                <p style="font-size: 1.1rem; margin-bottom: 1rem;">${product.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <span style="font-size: 1.5rem; font-weight: 600; color: #D4AF37;">GHS ${product.price.toFixed(2)}</span>
                    <span style="background: #f0f0f0; padding: 5px 15px; border-radius: 20px; font-size: 0.9rem;">${product.category}</span>
                </div>
                <button class="btn btn-primary" style="width: 100%;" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')}); closeProductModal();">
                    <i class="fas fa-shopping-bag"></i> Add to Bag
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Close Product Modal
function closeProductModal() {
    const modal = document.querySelector('.modal:not(#checkoutModal)');
    if (modal) {
        modal.remove();
    }
}

// Cart Drawer Management
function setupCartDrawer() {
    const cartBtn = document.getElementById('cartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartDrawer);
    }

    if (closeCart) {
        closeCart.addEventListener('click', closeCartDrawer);
    }
}

function openCart() {
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('active');
}

function closeCartDrawer() {
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('active');
}

// Checkout Modal Management
function setupCheckoutModal() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeModal = document.getElementById('closeModal');
    const checkoutForm = document.getElementById('checkoutForm');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', openCheckoutModal);
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeCheckoutModal);
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
}

function openCheckoutModal() {
    if (cart.items.length === 0) {
        cart.showNotification('Your bag is empty!');
        return;
    }

    const checkoutModal = document.getElementById('checkoutModal');
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const summaryTotal = document.getElementById('summaryTotal');

    if (orderSummaryItems) {
        orderSummaryItems.innerHTML = cart.items.map(item => `
            <div class="summary-item">
                <span>${item.name} x${item.quantity}</span>
                <span>GHS ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }

    if (summaryTotal) {
        summaryTotal.textContent = cart.getTotal().toFixed(2);
    }

    if (checkoutModal) {
        checkoutModal.classList.add('active');
        closeCartDrawer();
    }
}

function closeCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.classList.remove('active');
    }
}

// Input Validation and Sanitization
function sanitizeInput(input) {
    return input
        .trim()
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/javascript:/gi, '') // Remove potential JavaScript
        .replace(/on\w+=/gi, ''); // Remove potential event handlers
}

function validateForm(formData) {
    const errors = [];

    if (!formData.fullName || formData.fullName.length < 2) {
        errors.push('Please enter a valid full name');
    }

    if (!formData.location || formData.location.length < 5) {
        errors.push('Please enter a valid delivery location');
    }

    if (!formData.whatsapp) {
        errors.push('WhatsApp number is required');
    } else {
        const cleanWhatsapp = formData.whatsapp.replace(/\s/g, '');
        if (!/^(\+?233\d{9}|0\d{9})$/.test(cleanWhatsapp)) {
            errors.push('Please enter a valid Ghanaian WhatsApp number (e.g., 0598028565 or +233598028565)');
        }
    }

    return errors;
}

// WhatsApp Checkout Integration
function handleCheckout(e) {
    e.preventDefault();

    const formData = {
        fullName: sanitizeInput(document.getElementById('fullName').value),
        location: sanitizeInput(document.getElementById('location').value),
        whatsapp: sanitizeInput(document.getElementById('whatsapp').value)
    };

    const errors = validateForm(formData);
    if (errors.length > 0) {
        cart.showNotification(errors[0]);
        return;
    }

    // Generate WhatsApp message
    const orderItems = cart.items.map(item => `${item.name} x${item.quantity}`).join(', ');
    const totalPrice = cart.getTotal().toFixed(2);
    
    // Create detailed order items with images
    let detailedItems = '';
    cart.items.forEach(item => {
        detailedItems += `• ${item.name} x${item.quantity} - GHS ${(item.price * item.quantity).toFixed(2)}\n`;
        if (item.image) {
            detailedItems += `  📸 Image: ${window.location.origin}/${item.image}\n`;
        } else if (item.video) {
            detailedItems += `  🎥 Video: ${window.location.origin}/${item.video}\n`;
        }
        detailedItems += '\n';
    });
    
    // Create order message for the business with product images
    const message = `� NEW ORDER - Icce Couture\n\n📦 ORDER DETAILS:\n${detailedItems}💰 TOTAL: GHS ${totalPrice}\n👤 Customer: ${formData.fullName}\n📍 Delivery: ${formData.location}\n📱 WhatsApp: ${formData.whatsapp}\n\nPlease process this order. Customer expects delivery details soon.\n\nTimestamp: ${new Date().toLocaleString()}`;
    
    // Send to business WhatsApp number
    const businessWhatsappNumber = '233598028565';
    const whatsappUrl = `https://wa.me/${businessWhatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Also send receipt to customer with product images
    setTimeout(() => {
        let customerItems = '';
        cart.items.forEach(item => {
            customerItems += `• ${item.name} x${item.quantity} - GHS ${(item.price * item.quantity).toFixed(2)}\n`;
            if (item.image) {
                customerItems += `  📸 View: ${window.location.origin}/${item.image}\n`;
            }
        });
        
        const customerMessage = `� ORDER CONFIRMATION - Icce Couture\n\nThank you for your exquisite order!\n\n📦 YOUR ITEMS:\n${customerItems}\n💰 Total: GHS ${totalPrice}\n📍 Delivery: ${formData.location}\n\nWe'll contact you soon with delivery details.\n\n📞 Contact us: 0598028565\n📸 Instagram: @iccecouture`;
        
        // Clean customer WhatsApp number
        let customerWhatsappNumber = formData.whatsapp.replace(/\s/g, '');
        if (customerWhatsappNumber.startsWith('0')) {
            customerWhatsappNumber = '233' + customerWhatsappNumber.substring(1);
        } else if (!customerWhatsappNumber.startsWith('+233')) {
            customerWhatsappNumber = '+233' + customerWhatsappNumber.replace(/^\+/, '');
        }
        
        const customerWhatsappUrl = `https://wa.me/${customerWhatsappNumber.replace('+', '')}?text=${encodeURIComponent(customerMessage)}`;
        window.open(customerWhatsappUrl, '_blank');
    }, 2000);

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Clear cart after successful order
    cart.clearCart();
    closeCheckoutModal();
    
    // Show success message
    cart.showNotification('Order sent! Check WhatsApp for confirmation. Thank you!');

    // Reset form
    document.getElementById('checkoutForm').reset();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupCartDrawer();
    setupCheckoutModal();

    // Add smooth scroll behavior for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(212, 175, 55, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.1)';
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
            closeCheckoutModal();
            closeCartDrawer();
        }
    });

    // Performance optimization: Preload critical videos
    const heroVideo = document.querySelector('.hero-video video');
    if (heroVideo) {
        heroVideo.load();
    }
});

// WhatsApp Chat Bot Functionality
class WhatsAppChatBot {
    constructor() {
        this.isOpen = false;
        this.businessNumber = '233247559387';
        this.setupEventListeners();
    }

    setupEventListeners() {
        const chatButton = document.getElementById('chatButton');
        const chatCloseBtn = document.getElementById('chatCloseBtn');
        const chatSendBtn = document.getElementById('chatSendBtn');
        const chatInput = document.getElementById('chatInput');
        const whatsappConnectBtn = document.getElementById('whatsappConnectBtn');

        if (chatButton) {
            chatButton.addEventListener('click', () => this.toggleChat());
        }

        if (chatCloseBtn) {
            chatCloseBtn.addEventListener('click', () => this.closeChat());
        }

        if (chatSendBtn) {
            chatSendBtn.addEventListener('click', () => this.sendMessage());
        }

        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }

        if (whatsappConnectBtn) {
            whatsappConnectBtn.addEventListener('click', () => this.connectToWhatsApp());
        }
    }

    toggleChat() {
        const chatWindow = document.getElementById('chatWindow');
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        const chatWindow = document.getElementById('chatWindow');
        chatWindow.classList.add('active');
        this.isOpen = true;
    }

    closeChat() {
        const chatWindow = document.getElementById('chatWindow');
        chatWindow.classList.remove('active');
        this.isOpen = false;
    }

    sendMessage() {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim();
        
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        
        // Clear input
        chatInput.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Simulate bot response
        setTimeout(() => {
            this.hideTypingIndicator();
            this.generateBotResponse(message);
        }, 1000 + Math.random() * 1000);
    }

    addMessage(message, sender) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${this.escapeHtml(message)}</p>
            </div>
            <div class="message-time">${currentTime}</div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    showTypingIndicator() {
        const chatMessages = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator active';
        typingDiv.id = 'typingIndicator';
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    generateBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let response = '';

        // Product-related responses
        if (lowerMessage.includes('product') || lowerMessage.includes('browse') || lowerMessage.includes('shop')) {
            response = `🛍️ Our Featured Collection:\n\n• Elegant Evening Dress - GHS 450\n• Chic Casual Outfit - GHS 280\n• Luxury Party Wear - GHS 520\n• Trendy Street Style - GHS 350\n• Classic Business Wear - GHS 420\n\nAll items are available for immediate delivery! Would you like to know more about any specific item?`;
        }
        // Order status responses
        else if (lowerMessage.includes('order') || lowerMessage.includes('status') || lowerMessage.includes('delivery')) {
            response = `📦 Order Status:\n\nTo check your order status, please provide:\n• Your full name\n• Order date\n• WhatsApp number used\n\nOr you can call us directly at 0598028565 for immediate assistance!`;
        }
        // Customer support responses
        else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('contact')) {
            response = `💁 Customer Support:\n\n📞 Call: 0598028565\n📸 Instagram: @slaywithicce\n👻 Snapchat: iccequeen23\n📍 Location: Kumasi, Ghana\n\nWe're available 24/7 to help you with any questions!`;
        }
        // Location responses
        else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
            response = `📍 Store Location:\n\nWe're located in Kumasi, Ghana!\n\n🏢 Visit our showroom for:\n• In-person shopping\n• Try-on sessions\n• Style consultations\n• Express pickup\n\nWorking hours: 9AM - 8PM Daily\n\nWant directions? Call us at 0598028565!`;
        }
        // Price-related responses
        else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
            response = `💰 Pricing Information:\n\nOur prices range from GHS 280 - GHS 520\n\n• Casual Wear: GHS 280-350\n• Business Wear: GHS 420\n• Party Wear: GHS 520\n• Evening Wear: GHS 450\n\nAll prices include standard delivery within Kumasi. Express delivery available for extra GHS 50.`;
        }
        // Greeting responses
        else if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
            response = `👋 Welcome to Icce Couture!\n\nI'm here to help you discover your perfect style. How may I assist you today?\n\nYou can inquire about:\n• � Exclusive Collections\n• 📦 Order Status\n• 💁 Personal Styling\n• 📍 Boutique Location`;
        }
        // Thanks responses
        else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
            response = `😊 You're welcome! We're always happy to help.\n\nIs there anything else I can assist you with today? Remember, we offer free delivery within Kumasi for orders above GHS 300!`;
        }
        // Default response with options
        else {
            response = `I'd be happy to help you! Here are some options:\n\n🛍️ Browse our latest collection\n📦 Check order status\n💁 Get customer support\n📍 Find our store location\n\nWhat would you like to know more about?`;
        }

        this.addMessage(response, 'bot');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    connectToWhatsApp() {
        const message = "Hello! I'm interested in shopping at Icce Couture. Can you help me with your exclusive collections?";
        const whatsappUrl = `https://wa.me/${this.businessNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Quick reply function for global access
function sendQuickReply(message) {
    if (window.chatBot) {
        const chatInput = document.getElementById('chatInput');
        chatInput.value = message;
        window.chatBot.sendMessage();
    }
}

// Initialize Chat Bot
const chatBot = new WhatsAppChatBot();

// Export for global access
window.cart = cart;
window.viewProductDetails = viewProductDetails;
window.closeProductModal = closeProductModal;
window.chatBot = chatBot;
window.sendQuickReply = sendQuickReply;
