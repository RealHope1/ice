// Product Data
const products = [
    {
        id: 1,
        name: "Elegant Evening Dress",
        price: 450,
        video: "images/2.mp4",
        category: "Dresses",
        description: "Stunning evening dress perfect for special occasions"
    },
    {
        id: 2,
        name: "Chic Casual Outfit",
        price: 280,
        video: "images/3.mp4",
        category: "Casual",
        description: "Comfortable yet stylish casual wear"
    },
    {
        id: 3,
        name: "Luxury Party Wear",
        price: 520,
        video: "images/4.mp4",
        category: "Party",
        description: "Stand out at any party with this exclusive piece"
    },
    {
        id: 4,
        name: "Trendy Street Style",
        price: 350,
        video: "images/5.mp4",
        category: "Street",
        description: "Modern street style with a touch of elegance"
    },
    {
        id: 5,
        name: "Classic Business Wear",
        price: 420,
        video: "images/6.mp4",
        category: "Business",
        description: "Professional attire with a sophisticated look"
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
        <div class="product-card">
            <video class="product-video" autoplay muted loop playsinline data-src="${product.video}">
                <source src="${product.video}" type="video/mp4">
            </video>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">GHS ${product.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        <i class="fas fa-shopping-bag"></i> Add to Bag
                    </button>
                    <button class="btn btn-secondary" onclick="viewProductDetails(${product.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Implement lazy loading for videos
    implementLazyLoading();
}

// Lazy Loading for Videos
function implementLazyLoading() {
    const videos = document.querySelectorAll('video[data-src]');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const source = video.querySelector('source');
                
                if (source && video.dataset.src) {
                    source.src = video.dataset.src;
                    video.load();
                    video.removeAttribute('data-src');
                }
                
                videoObserver.unobserve(video);
            }
        });
    }, {
        rootMargin: '50px'
    });

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
            errors.push('Please enter a valid Ghanaian WhatsApp number (e.g., 0247559387 or +233247559387)');
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
    
    // Create order message for the business
    const message = `🛍️ NEW ORDER - Slay With Icce\n\n📦 Items: ${orderItems}\n💰 Total: GHS ${totalPrice}\n� Customer: ${formData.fullName}\n� Delivery: ${formData.location}\n� WhatsApp: ${formData.whatsapp}\n\nPlease process this order. Customer expects delivery details soon.\n\nTimestamp: ${new Date().toLocaleString()}`;
    
    // Send to business WhatsApp number
    const businessWhatsappNumber = '233247559387';
    const whatsappUrl = `https://wa.me/${businessWhatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Also send receipt to customer
    setTimeout(() => {
        const customerMessage = `🛍️ ORDER CONFIRMATION - Slay With Icce\n\nThank you for your order!\n\n📦 Items: ${orderItems}\n💰 Total: GHS ${totalPrice}\n📍 Delivery: ${formData.location}\n\nWe'll contact you soon with delivery details.\n\n📞 Contact us: 0247559387\n📸 Instagram: @slaywithicce`;
        
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
            response = `📦 Order Status:\n\nTo check your order status, please provide:\n• Your full name\n• Order date\n• WhatsApp number used\n\nOr you can call us directly at 0247559387 for immediate assistance!`;
        }
        // Customer support responses
        else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('contact')) {
            response = `💁 Customer Support:\n\n📞 Call: 0247559387\n📸 Instagram: @slaywithicce\n👻 Snapchat: iccequeen23\n📍 Location: Kumasi, Ghana\n\nWe're available 24/7 to help you with any questions!`;
        }
        // Location responses
        else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
            response = `📍 Store Location:\n\nWe're located in Kumasi, Ghana!\n\n🏢 Visit our showroom for:\n• In-person shopping\n• Try-on sessions\n• Style consultations\n• Express pickup\n\nWorking hours: 9AM - 8PM Daily\n\nWant directions? Call us at 0247559387!`;
        }
        // Price-related responses
        else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
            response = `💰 Pricing Information:\n\nOur prices range from GHS 280 - GHS 520\n\n• Casual Wear: GHS 280-350\n• Business Wear: GHS 420\n• Party Wear: GHS 520\n• Evening Wear: GHS 450\n\nAll prices include standard delivery within Kumasi. Express delivery available for extra GHS 50.`;
        }
        // Greeting responses
        else if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
            response = `👋 Hello! Welcome to Slay With Icce!\n\nI'm here to help you find the perfect outfit. How can I assist you today?\n\nYou can ask me about:\n• 🛍️ Products & Pricing\n• 📦 Order Status\n• 💁 Customer Support\n• 📍 Store Location`;
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
        const message = "Hello! I'm interested in shopping at Slay With Icce. Can you help me with your products?";
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
