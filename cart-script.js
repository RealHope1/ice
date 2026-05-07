// Cart Page Functionality
class CartPage {
    constructor() {
        this.cart = new Cart();
        this.init();
    }

    init() {
        this.renderCartItems();
        this.updateOrderSummary();
        this.setupEventListeners();
        this.checkEmptyCart();
    }

    setupEventListeners() {
        // WhatsApp payment button
        const whatsappPaymentBtn = document.getElementById('whatsappPaymentBtn');
        if (whatsappPaymentBtn) {
            whatsappPaymentBtn.addEventListener('click', () => this.handleWhatsAppPayment());
        }

        // Clear cart button
        const clearCartBtn = document.getElementById('clearCartBtn');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', () => this.handleClearCart());
        }

        // Update cart count in navigation
        this.updateCartCount();
    }

    renderCartItems() {
        const orderItems = document.getElementById('orderItems');
        if (!orderItems) return;

        if (this.cart.items.length === 0) {
            this.showEmptyCart();
            return;
        }

        orderItems.innerHTML = this.cart.items.map(item => `
            <div class="order-item" data-item-id="${item.id}">
                <div class="order-item-media">
                    ${item.image ? 
                        `<img src="${item.image}" alt="${item.name}" class="order-item-image">` :
                        `<video class="order-item-video" autoplay muted loop playsinline>
                            <source src="${item.video}" type="video/mp4">
                        </video>`
                    }
                </div>
                <div class="order-item-info">
                    <h3 class="order-item-name">${item.name}</h3>
                    <p class="order-item-price">GHS ${item.price.toFixed(2)}</p>
                    <div class="order-item-quantity">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="cartPage.updateQuantity(${item.id}, ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" onclick="cartPage.updateQuantity(${item.id}, ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <span class="order-item-total">GHS ${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
                <button class="remove-item" onclick="cartPage.removeItem(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeItem(productId);
            return;
        }

        const item = this.cart.items.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            this.cart.saveCart();
            this.renderCartItems();
            this.updateOrderSummary();
            this.updateCartCount();
        }
    }

    removeItem(productId) {
        this.cart.removeItem(productId);
        this.renderCartItems();
        this.updateOrderSummary();
        this.updateCartCount();
        this.checkEmptyCart();
        this.showNotification('Item removed from bag');
    }

    handleClearCart() {
        if (this.cart.items.length === 0) return;

        if (confirm('Are you sure you want to clear your entire bag?')) {
            this.cart.clearCart();
            this.renderCartItems();
            this.updateOrderSummary();
            this.updateCartCount();
            this.checkEmptyCart();
            this.showNotification('Bag cleared successfully');
        }
    }

    updateOrderSummary() {
        const subtotal = this.cart.getTotal();
        const itemsCount = this.cart.getItemCount();
        
        // Update items count
        const itemsCountElement = document.getElementById('itemsCount');
        if (itemsCountElement) {
            itemsCountElement.textContent = itemsCount;
        }

        // Update subtotal
        const subtotalElement = document.getElementById('subtotal');
        if (subtotalElement) {
            subtotalElement.textContent = subtotal.toFixed(2);
        }

        // Update delivery fee
        const deliveryFeeElement = document.getElementById('deliveryFee');
        if (deliveryFeeElement) {
            deliveryFeeElement.textContent = subtotal >= 300 ? 'FREE' : 'GHS 50.00';
        }

        // Calculate discount (if any)
        let discount = 0;
        if (subtotal >= 500) {
            discount = subtotal * 0.1; // 10% discount for orders over 500
        } else if (subtotal >= 300) {
            discount = subtotal * 0.05; // 5% discount for orders over 300
        }

        // Update discount
        const discountItem = document.getElementById('discountItem');
        const discountAmount = document.getElementById('discountAmount');
        if (discountItem && discountAmount) {
            if (discount > 0) {
                discountItem.style.display = 'flex';
                discountAmount.textContent = discount.toFixed(2);
            } else {
                discountItem.style.display = 'none';
            }
        }

        // Calculate total
        const deliveryFee = subtotal >= 300 ? 0 : 50;
        const total = subtotal + deliveryFee - discount;

        // Update total
        const totalElement = document.getElementById('totalAmount');
        if (totalElement) {
            totalElement.textContent = total.toFixed(2);
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.cart.getItemCount();
        }
    }

    checkEmptyCart() {
        const orderItems = document.getElementById('orderItems');
        const emptyCart = document.getElementById('emptyCart');
        
        if (this.cart.items.length === 0) {
            if (orderItems) orderItems.style.display = 'none';
            if (emptyCart) emptyCart.style.display = 'block';
        } else {
            if (orderItems) orderItems.style.display = 'flex';
            if (emptyCart) emptyCart.style.display = 'none';
        }
    }

    showEmptyCart() {
        const orderItems = document.getElementById('orderItems');
        const emptyCart = document.getElementById('emptyCart');
        
        if (orderItems) orderItems.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
    }

    handleWhatsAppPayment() {
        if (this.cart.items.length === 0) {
            this.showNotification('Your bag is empty!');
            return;
        }

        // Generate detailed order message with images
        let detailedOrderItems = '';
        this.cart.items.forEach(item => {
            detailedOrderItems += `• ${item.name} x${item.quantity} - GHS ${(item.price * item.quantity).toFixed(2)}\n`;
            if (item.image) {
                detailedOrderItems += `  📸 Image: ${window.location.origin}/${item.image}\n`;
            } else if (item.video) {
                detailedOrderItems += `  🎥 Video: ${window.location.origin}/${item.video}\n`;
            }
            detailedOrderItems += '\n';
        });

        const subtotal = this.cart.getTotal();
        const deliveryFee = subtotal >= 300 ? 0 : 50;
        let discount = 0;
        
        if (subtotal >= 500) {
            discount = subtotal * 0.1;
        } else if (subtotal >= 300) {
            discount = subtotal * 0.05;
        }
        
        const total = subtotal + deliveryFee - discount;

        const message = `💰 PAYMENT REQUEST - Icce Couture\n\n📦 ORDER DETAILS:\n${detailedOrderItems}\n💸 PAYMENT SUMMARY:\n• Subtotal: GHS ${subtotal.toFixed(2)}\n• Delivery: ${deliveryFee === 0 ? 'FREE' : `GHS ${deliveryFee.toFixed(2)}`}\n${discount > 0 ? `• Discount: -GHS ${discount.toFixed(2)}\n` : ''}• Total: GHS ${total.toFixed(2)}\n\n📞 Please contact me to arrange payment and delivery.\n\nThank you for choosing Icce Couture!`;

        const whatsappUrl = `https://wa.me/233598028565?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        this.showNotification('Opening WhatsApp for payment...');
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

// Initialize cart page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.cartPage = new CartPage();
    
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
