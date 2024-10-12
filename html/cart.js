function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartHTML = '';
    let total = 0;
    
    cart.forEach((product, index) => {
        cartHTML += `
        <div class="cart-item">
            <p>${product.name}</p>
            <p>Price: ₹${product.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        </div>
        `;
        total += product.price;
    });
    
    document.getElementById('cart-items').innerHTML = cartHTML;
    document.getElementById('cart-total').innerText = `₹${total}`;
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems(); // Reload cart items
}


function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Create an order summary
    let orderSummary = "Order Summary:\n";
    let totalPrice = 0;
    let productCount = {};

    cart.forEach(product => {
        totalPrice += product.price;
        if (productCount[product.name]) {
            productCount[product.name].count++;
        } else {
            productCount[product.name] = { price: product.price, count: 1 };
        }
    });

    for (const [name, info] of Object.entries(productCount)) {
        orderSummary += `${name} x ${info.count} - Price: ₹${info.price * info.count}\n`;
    }

    orderSummary += `Total Price: ₹${totalPrice}\n`;

    // Redirect to WhatsApp with order summary
    const whatsappNumber = "+918848291939";
    const message = encodeURIComponent(orderSummary);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
}



window.onload = loadCartItems;
