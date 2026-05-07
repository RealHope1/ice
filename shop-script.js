// Shop Page Functionality
class ShopPage {
    constructor() {
        this.cart = new Cart();
        this.filteredProducts = [...products];
        this.currentCategory = 'all';
        this.currentSort = 'default';
        this.init();
    }

    init() {
        this.renderProducts();
        this.populateCategories();
        this.updateStats();
        this.setupEventListeners();
        this.setupCartDrawer();
        this.setupCheckoutModal();
    }

    setupEventListeners() {
        // Category filter
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentCategory = e.target.value;
                this.filterAndSortProducts();
            });
        }

        // Sort filter
        const sortFilter = document.getElementById('sortFilter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.filterAndSortProducts();
            });
        }

        // Reset filters
        const resetFilters = document.getElementById('resetFilters');
        if (resetFilters) {
            resetFilters.addEventListener('click', () => this.resetAllFilters());
        }
    }

    populateCategories() {
        const categoryFilter = document.getElementById('categoryFilter');
        if (!categoryFilter) return;

        const categories = [...new Set(products.map(p => p.category))];
        
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    updateStats() {
        const totalProducts = document.getElementById('totalProducts');
        const totalCategories = document.getElementById('totalCategories');
        
        if (totalProducts) {
            totalProducts.textContent = products.length;
        }
        
        if (totalCategories) {
            const categories = [...new Set(products.map(p => p.category))];
            totalCategories.textContent = categories.length;
        }
    }

    filterAndSortProducts() {
        // Filter by category
        if (this.currentCategory === 'all') {
            this.filteredProducts = [...products];
        } else {
            this.filteredProducts = products.filter(p => p.category === this.currentCategory);
        }

        // Sort products
        switch (this.currentSort) {
            case 'price-low':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Keep original order (featured)
                break;
        }

        this.renderProducts();
    }

    resetAllFilters() {
        this.currentCategory = 'all';
        this.currentSort = 'default';
        
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        
        if (categoryFilter) categoryFilter.value = 'all';
        if (sortFilter) sortFilter.value = 'default';
        
        this.filterAndSortProducts();
    }

    renderProducts() {
        const productsGrid = document.getElementById('shopProductsGrid');
        const emptyProducts = document.getElementById('emptyProducts');
        
        if (!productsGrid) return;

        if (this.filteredProducts.length === 0) {
            productsGrid.style.display = 'none';
            if (emptyProducts) emptyProducts.style.display = 'block';
            return;
        }

        productsGrid.style.display = 'grid';
        if (emptyProducts) emptyProducts.style.display = 'none';

        productsGrid.innerHTML = this.filteredProducts.map(product => `
            <div class="product-card enhanced-card" data-product-id="${product.id}">
                <div class="product-media">
                    ${product.image ? 
                        `<img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">` :
                        `<video autoplay muted loop playsinline class="product-video">
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
                            <button class="quick-view-btn" onclick="shopPage.quickView(${product.id})" title="Quick View">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="quick-add-btn" onclick="shopPage.addToCart(${product.id})" title="Add to Cart">
                                <i class="fas fa-shopping-bag"></i>
                            </button>
                            <button class="wishlist-btn" onclick="shopPage.addToWishlist(${product.id})" title="Add to Wishlist">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        ${this.renderStars(product.rating)}
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        <span class="current-price">GHS ${product.price.toFixed(2)}</span>
                        ${product.price >= 500 ? '<span class="price-badge">Best Value</span>' : ''}
                    </div>
                    <div class="product-sizes">
                        <span class="sizes-label">Sizes:</span>
                        <div class="sizes-list">
                            ${product.sizes.map(size => `<span class="size-tag">${size}</span>`).join('')}
                        </div>
                    </div>
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="shopPage.addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                            <i class="fas fa-shopping-bag"></i>
                            ${product.inStock ? 'Add to Bag' : 'Out of Stock'}
                        </button>
                        <button class="btn-buy-now" onclick="shopPage.buyNow(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                            <i class="fas fa-bolt"></i>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderStars(rating) {
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

    quickView(productId) {
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
                        ${this.renderStars(product.rating)}
                        <span>(${product.reviews} reviews)</span>
                    </div>
                    <p class="quick-view-price">GHS ${product.price.toFixed(2)}</p>
                    <p class="quick-view-description">${product.description}</p>
                    <div class="quick-view-sizes">
                        <h4>Select Size:</h4>
                        <div class="size-selector">
                            ${product.sizes.map(size => `
                                <button class="size-option" data-size="${size}">${size}</button>
                            `).join('')}
                        </div>
                    </div>
                    <div class="quick-view-actions">
                        <button class="btn-add-cart-large" onclick="shopPage.addToCart(${product.id}); this.closest('.quick-view-modal').remove();">
                            <i class="fas fa-shopping-bag"></i> Add to Bag
                        </button>
                        <button class="btn-buy-now-large" onclick="shopPage.buyNow(${product.id}); this.closest('.quick-view-modal').remove();">
                            <i class="fas fa-bolt"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('active'), 100);
    }

    addToWishlist(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Get wishlist from localStorage
        let wishlist = JSON.parse(localStorage.getItem('slayWithIcceWishlist') || '[]');
        
        if (!wishlist.includes(productId)) {
            wishlist.push(productId);
            localStorage.setItem('slayWithIcceWishlist', JSON.stringify(wishlist));
            this.cart.showNotification('Added to wishlist!');
        } else {
            wishlist = wishlist.filter(id => id !== productId);
            localStorage.setItem('slayWithIcceWishlist', JSON.stringify(wishlist));
            this.cart.showNotification('Removed from wishlist');
        }
    }

    buyNow(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Clear cart and add this product
        this.cart.clearCart();
        this.cart.addItem(product);
        
        // Open checkout modal directly
        this.openCheckoutModal();
    }

    addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            this.cart.addItem(product);
            this.animateAddToCart(productId);
        }
    }

    animateAddToCart(productId) {
        const productCard = document.querySelector(`[data-product-id="${productId}"]`);
        const cartBtn = document.getElementById('cartBtn');
        
        if (productCard && cartBtn) {
            // Create flying item effect
            const flyingItem = document.createElement('div');
            flyingItem.className = 'flying-item';
            flyingItem.style.cssText = `
                position: fixed;
                width: 30px;
                height: 30px;
                background: linear-gradient(45deg, #D4AF37, #FBE7A1);
                border-radius: 50%;
                z-index: 10000;
                pointer-events: none;
                transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            `;
            
            const productRect = productCard.getBoundingClientRect();
            const cartRect = cartBtn.getBoundingClientRect();
            
            flyingItem.style.left = productRect.left + productRect.width / 2 + 'px';
            flyingItem.style.top = productRect.top + productRect.height / 2 + 'px';
            
            document.body.appendChild(flyingItem);
            
            setTimeout(() => {
                flyingItem.style.left = cartRect.left + cartRect.width / 2 + 'px';
                flyingItem.style.top = cartRect.top + cartRect.height / 2 + 'px';
                flyingItem.style.transform = 'scale(0)';
                flyingItem.style.opacity = '0';
            }, 100);
            
            setTimeout(() => {
                if (flyingItem.parentNode) {
                    flyingItem.parentNode.removeChild(flyingItem);
                }
            }, 900);
        }
    }

    setupCartDrawer() {
        const cartBtn = document.getElementById('cartBtn');
        const closeCart = document.getElementById('closeCart');
        const cartOverlay = document.getElementById('cartOverlay');

        if (cartBtn) {
            cartBtn.addEventListener('click', () => this.openCartDrawer());
        }

        if (closeCart) {
            closeCart.addEventListener('click', () => this.closeCartDrawer());
        }

        if (cartOverlay) {
            cartOverlay.addEventListener('click', () => this.closeCartDrawer());
        }
    }

    openCartDrawer() {
        const cartDrawer = document.getElementById('cartDrawer');
        if (cartDrawer) {
            cartDrawer.classList.add('open');
            this.renderCartItems();
        }
    }

    closeCartDrawer() {
        const cartDrawer = document.getElementById('cartDrawer');
        if (cartDrawer) {
            cartDrawer.classList.remove('open');
        }
    }

    renderCartItems() {
        const cartItems = document.getElementById('cartItems');
        if (!cartItems) return;

        if (this.cart.items.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart-message">
                    <i class="fas fa-shopping-bag"></i>
                    <p>Your bag is empty</p>
                </div>
            `;
            return;
        }

        cartItems.innerHTML = this.cart.items.map(item => `
            <div class="cart-item" data-item-id="${item.id}">
                <div class="cart-item-media">
                    ${item.image ? 
                        `<img src="${item.image}" alt="${item.name}" class="cart-item-image">` :
                        `<video autoplay muted loop playsinline class="cart-item-video">
                            <source src="${item.video}" type="video/mp4">
                        </video>`
                    }
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">GHS ${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="shopPage.updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="shopPage.updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="remove-item" onclick="shopPage.removeFromCart(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        this.updateCartTotal();
    }

    updateQuantity(productId, newQuantity) {
        this.cart.updateQuantity(productId, newQuantity);
        this.renderCartItems();
    }

    removeFromCart(productId) {
        this.cart.removeItem(productId);
        this.renderCartItems();
    }

    updateCartTotal() {
        const cartTotal = document.getElementById('cartTotal');
        if (cartTotal) {
            cartTotal.textContent = this.cart.getTotal().toFixed(2);
        }
    }

    setupCheckoutModal() {
        const checkoutBtn = document.getElementById('checkoutBtn');
        const closeModal = document.getElementById('closeModal');
        const checkoutForm = document.getElementById('checkoutForm');

        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.openCheckoutModal());
        }

        if (closeModal) {
            closeModal.addEventListener('click', () => this.closeCheckoutModal());
        }

        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => this.handleCheckout(e));
        }
    }

    openCheckoutModal() {
        if (this.cart.items.length === 0) {
            this.cart.showNotification('Your bag is empty!');
            return;
        }

        const modal = document.getElementById('checkoutModal');
        if (modal) {
            modal.classList.add('open');
            this.renderOrderSummary();
        }
    }

    closeCheckoutModal() {
        const modal = document.getElementById('checkoutModal');
        if (modal) {
            modal.classList.remove('open');
        }
    }

    renderOrderSummary() {
        const orderSummaryItems = document.getElementById('orderSummaryItems');
        const summaryTotal = document.getElementById('summaryTotal');
        
        if (!orderSummaryItems) return;

        orderSummaryItems.innerHTML = this.cart.items.map(item => `
            <div class="summary-item">
                <span>${item.name} x${item.quantity}</span>
                <span>GHS ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');

        if (summaryTotal) {
            summaryTotal.textContent = this.cart.getTotal().toFixed(2);
        }
    }

    handleCheckout(e) {
        e.preventDefault();

        const formData = {
            fullName: sanitizeInput(document.getElementById('fullName').value),
            location: sanitizeInput(document.getElementById('location').value),
            whatsapp: sanitizeInput(document.getElementById('whatsapp').value)
        };

        const errors = validateForm(formData);
        if (errors.length > 0) {
            this.cart.showNotification(errors[0]);
            return;
        }

        this.sendWhatsAppOrder(formData);
    }

    sendWhatsAppOrder(formData) {
        const orderItems = this.cart.items.map(item => `${item.name} x${item.quantity}`).join(', ');
        const totalPrice = this.cart.getTotal().toFixed(2);
        
        // Create order message with product images
        let message = `🛍️ NEW ORDER - Slay With Icce\n\n📦 Items: ${orderItems}\n💰 Total: GHS ${totalPrice}\n👤 Customer: ${formData.fullName}\n📍 Delivery: ${formData.location}\n📱 WhatsApp: ${formData.whatsapp}\n\n`;
        
        // Add product images to message
        message += `🖼️ Product Images:\n`;
        this.cart.items.forEach(item => {
            if (item.image) {
                message += `• ${item.name}: ${window.location.origin}/${item.image}\n`;
            } else if (item.video) {
                message += `• ${item.name}: ${window.location.origin}/${item.video}\n`;
            }
        });
        
        message += `\nPlease process this order. Customer expects delivery details soon.\n\nTimestamp: ${new Date().toLocaleString()}`;
        
        // Send to business WhatsApp number
        const businessWhatsappNumber = '233598028565';
        const whatsappUrl = `https://wa.me/${businessWhatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Clear cart after successful order
        this.cart.clearCart();
        this.closeCheckoutModal();
        this.closeCartDrawer();
        
        // Show success message
        this.cart.showNotification('Order sent! Check WhatsApp for confirmation. Thank you!');

        // Reset form
        document.getElementById('checkoutForm').reset();
    }
}

// Global function for reset filters
function resetAllFilters() {
    if (window.shopPage) {
        window.shopPage.resetAllFilters();
    }
}

// Initialize shop page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.shopPage = new ShopPage();
    
    // Initialize chat bot
    if (typeof WhatsAppChatBot !== 'undefined') {
        window.chatBot = new WhatsAppChatBot();
    }
});

// Export for global access
window.sendQuickReply = function(message) {
    if (window.chatBot) {
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            chatInput.value = message;
            window.chatBot.sendMessage();
        }
    }
};
