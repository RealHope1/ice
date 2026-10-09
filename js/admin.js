// Luxe by Icce - Admin Dashboard JavaScript

// Admin credentials (in production, this should be server-side)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Current session
let currentAdmin = null;

// DOM Elements
const loginScreen = document.getElementById('adminLogin');
const dashboard = document.getElementById('adminDashboard');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

// Modal elements
const productModal = document.getElementById('productModal');
const orderModal = document.getElementById('orderModal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkSession();
    initNavigation();
    initForms();
    initModals();
});

// Check if admin is logged in
function checkSession() {
    const session = sessionStorage.getItem('luxe_admin_session');
    if (session) {
        currentAdmin = JSON.parse(session);
        showDashboard();
    }
}

// Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        currentAdmin = { username, loginTime: new Date().toISOString() };
        sessionStorage.setItem('luxe_admin_session', JSON.stringify(currentAdmin));
        showDashboard();
        loginError.textContent = '';
    } else {
        loginError.textContent = 'Invalid username or password';
    }
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.removeItem('luxe_admin_session');
    currentAdmin = null;
    hideDashboard();
});

function showDashboard() {
    loginScreen.style.display = 'none';
    dashboard.style.display = 'block';
    loadDashboardData();
}

function hideDashboard() {
    loginScreen.style.display = 'flex';
    dashboard.style.display = 'none';
    loginForm.reset();
}

// Navigation
function initNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show corresponding panel
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === tabName) {
                    panel.classList.add('active');
                }
            });

            // Load data for the tab
            if (tabName === 'overview') {
                loadOverview();
            } else if (tabName === 'products') {
                loadProducts();
            } else if (tabName === 'orders') {
                loadOrders();
            } else if (tabName === 'settings') {
                loadSettings();
            }
        });
    });
}

// Load dashboard data
function loadDashboardData() {
    loadOverview();
}

// Overview
function loadOverview() {
    const products = getProducts();
    const orders = getOrders();

    document.getElementById('totalOrders').textContent = orders.length;
    document.getElementById('publishedProducts').textContent = products.filter(p => p.published).length;
    document.getElementById('pendingOrders').textContent = orders.filter(o => 
        o.status === 'Request Received' || o.status === 'Awaiting Business Verification'
    ).length;
    document.getElementById('confirmedOrders').textContent = orders.filter(o => 
        o.status === 'Order Confirmed' || o.status === 'Processing' || 
        o.status === 'Dispatched' || o.status === 'Out for Delivery' || o.status === 'Delivered'
    ).length;
}

// Products
function loadProducts() {
    const products = getProducts();
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = '';

    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="assets/images/${product.image || '1.jpeg'}" alt="${product.name}" class="table-image"></td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td><span class="status-badge ${product.published ? 'status-published' : 'status-draft'}">${product.published ? 'Published' : 'Draft'}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-secondary btn-sm edit-product" data-id="${product.id}">Edit</button>
                    <button class="btn btn-danger btn-sm delete-product" data-id="${product.id}">Delete</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Add event listeners
    tbody.querySelectorAll('.edit-product').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            editProduct(productId);
        });
    });

    tbody.querySelectorAll('.delete-product').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            if (confirm('Are you sure you want to delete this product?')) {
                deleteProduct(productId);
            }
        });
    });
}

// Orders
function loadOrders() {
    const orders = getOrders();
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = '';

    orders.forEach(order => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><code>${order.trackingCode}</code></td>
            <td>${order.customer}</td>
            <td><span class="status-badge ${getStatusClass(order.status)}">${order.status}</span></td>
            <td>${new Date(order.createdAt).toLocaleDateString()}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-secondary btn-sm edit-order" data-id="${order.id}">Edit</button>
                    <button class="btn btn-danger btn-sm delete-order" data-id="${order.id}">Delete</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Add event listeners
    tbody.querySelectorAll('.edit-order').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.dataset.id);
            editOrder(orderId);
        });
    });

    tbody.querySelectorAll('.delete-order').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.dataset.id);
            if (confirm('Are you sure you want to delete this order?')) {
                deleteOrder(orderId);
            }
        });
    });
}

function getStatusClass(status) {
    switch (status) {
        case 'Delivered':
            return 'status-published';
        case 'Cancelled':
            return 'status-cancelled';
        default:
            return 'status-pending';
    }
}

// Settings
function loadSettings() {
    const settings = getSettings();
    document.getElementById('businessName').value = settings.businessName || '';
    document.getElementById('businessDescription').value = settings.businessDescription || '';
    document.getElementById('whatsappNumber').value = settings.whatsappNumber || '';
    document.getElementById('announcementText').value = settings.announcementText || '';
    document.getElementById('businessHours').value = settings.businessHours || '';
}

// Forms
function initForms() {
    // Product form
    document.getElementById('productForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveProduct();
    });

    // Order form
    document.getElementById('orderForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveOrder();
    });

    // Settings form
    document.getElementById('settingsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveSettings();
    });

    // Add product button
    document.getElementById('addProductBtn').addEventListener('click', () => {
        openProductModal();
    });

    // Add order button
    document.getElementById('addOrderBtn').addEventListener('click', () => {
        openOrderModal();
    });

    // Generate tracking code button
    document.getElementById('generateTrackingBtn').addEventListener('click', () => {
        generateTrackingCode();
    });
}

// Modals
function initModals() {
    // Product modal
    document.getElementById('modalOverlay').addEventListener('click', () => {
        closeProductModal();
    });
    document.getElementById('modalClose').addEventListener('click', () => {
        closeProductModal();
    });

    // Order modal
    document.getElementById('orderModalOverlay').addEventListener('click', () => {
        closeOrderModal();
    });
    document.getElementById('orderModalClose').addEventListener('click', () => {
        closeOrderModal();
    });
}

// Product CRUD
function openProductModal(product = null) {
    const form = document.getElementById('productForm');
    const title = document.getElementById('productModalTitle');

    if (product) {
        title.textContent = 'Edit Product';
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productDescription').value = product.description || '';
        document.getElementById('productImage').value = product.image || '';
        document.getElementById('productVideo').value = product.video || '';
        document.getElementById('productTags').value = product.tags ? product.tags.join(', ') : '';
        document.getElementById('productFeatured').checked = product.featured;
        document.getElementById('productNew').checked = product.new;
        document.getElementById('productPublished').checked = product.published;
    } else {
        title.textContent = 'Add Product';
        form.reset();
        document.getElementById('productId').value = '';
        document.getElementById('productPublished').checked = true;
    }

    productModal.setAttribute('aria-hidden', 'false');
}

function closeProductModal() {
    productModal.setAttribute('aria-hidden', 'true');
}

function editProduct(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    if (product) {
        openProductModal(product);
    }
}

function saveProduct() {
    const products = getProducts();
    const productId = document.getElementById('productId').value;
    
    const productData = {
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        description: document.getElementById('productDescription').value,
        image: document.getElementById('productImage').value,
        video: document.getElementById('productVideo').value,
        tags: document.getElementById('productTags').value.split(',').map(t => t.trim()).filter(t => t),
        featured: document.getElementById('productFeatured').checked,
        new: document.getElementById('productNew').checked,
        published: document.getElementById('productPublished').checked
    };

    if (productId) {
        // Update existing product
        const index = products.findIndex(p => p.id === parseInt(productId));
        if (index !== -1) {
            products[index] = { ...products[index], ...productData };
        }
    } else {
        // Add new product
        const newId = Math.max(...products.map(p => p.id), 0) + 1;
        products.push({
            id: newId,
            ...productData,
            createdAt: new Date().toISOString()
        });
    }

    localStorage.setItem('luxe_products', JSON.stringify(products));
    closeProductModal();
    loadProducts();
}

function deleteProduct(productId) {
    let products = getProducts();
    products = products.filter(p => p.id !== productId);
    localStorage.setItem('luxe_products', JSON.stringify(products));
    loadProducts();
}

// Order CRUD
function openOrderModal(order = null) {
    const form = document.getElementById('orderForm');
    const title = document.getElementById('orderModalTitle');
    const generateBtn = document.getElementById('generateTrackingBtn');

    if (order) {
        title.textContent = 'Edit Order';
        document.getElementById('orderId').value = order.id;
        document.getElementById('orderCustomer').value = order.customer;
        document.getElementById('orderPhone').value = order.phone;
        document.getElementById('orderProducts').value = order.products;
        document.getElementById('orderStatus').value = order.status;
        document.getElementById('orderNotes').value = order.notes || '';
        generateBtn.style.display = 'block';
    } else {
        title.textContent = 'Add Order';
        form.reset();
        document.getElementById('orderId').value = '';
        document.getElementById('orderStatus').value = 'Request Received';
        generateBtn.style.display = 'none';
    }

    orderModal.setAttribute('aria-hidden', 'false');
}

function closeOrderModal() {
    orderModal.setAttribute('aria-hidden', 'true');
}

function editOrder(orderId) {
    const orders = getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
        openOrderModal(order);
    }
}

function saveOrder() {
    const orders = getOrders();
    const orderId = document.getElementById('orderId').value;
    
    const orderData = {
        customer: document.getElementById('orderCustomer').value,
        phone: document.getElementById('orderPhone').value,
        products: document.getElementById('orderProducts').value,
        status: document.getElementById('orderStatus').value,
        notes: document.getElementById('orderNotes').value
    };

    if (orderId) {
        // Update existing order
        const index = orders.findIndex(o => o.id === parseInt(orderId));
        if (index !== -1) {
            orders[index] = { 
                ...orders[index], 
                ...orderData,
                updatedAt: new Date().toISOString()
            };
        }
    } else {
        // Add new order
        const newId = Math.max(...orders.map(o => o.id), 0) + 1;
        orders.push({
            id: newId,
            ...orderData,
            trackingCode: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }

    localStorage.setItem('luxe_orders', JSON.stringify(orders));
    closeOrderModal();
    loadOrders();
}

function deleteOrder(orderId) {
    let orders = getOrders();
    orders = orders.filter(o => o.id !== orderId);
    localStorage.setItem('luxe_orders', JSON.stringify(orders));
    loadOrders();
}

function generateTrackingCode() {
    const orderId = document.getElementById('orderId').value;
    if (!orderId) return;

    const orders = getOrders();
    const index = orders.findIndex(o => o.id === parseInt(orderId));
    
    if (index !== -1) {
        // Generate unique tracking code
        const code = 'LXE-' + new Date().getFullYear() + '-' + 
                     Math.random().toString(36).substring(2, 8).toUpperCase();
        
        orders[index].trackingCode = code;
        orders[index].updatedAt = new Date().toISOString();
        
        localStorage.setItem('luxe_orders', JSON.stringify(orders));
        
        alert(`Tracking code generated: ${code}\n\nPlease share this with the customer.`);
        closeOrderModal();
        loadOrders();
    }
}

// Settings
function saveSettings() {
    const settings = {
        businessName: document.getElementById('businessName').value,
        businessDescription: document.getElementById('businessDescription').value,
        whatsappNumber: document.getElementById('whatsappNumber').value,
        announcementText: document.getElementById('announcementText').value,
        businessHours: document.getElementById('businessHours').value
    };

    localStorage.setItem('luxe_settings', JSON.stringify(settings));
    alert('Settings saved successfully!');
}

// Helper functions
function getProducts() {
    return JSON.parse(localStorage.getItem('luxe_products')) || [];
}

function getOrders() {
    return JSON.parse(localStorage.getItem('luxe_orders')) || [];
}

function getSettings() {
    return JSON.parse(localStorage.getItem('luxe_settings')) || {};
}
