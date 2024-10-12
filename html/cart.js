function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartHTML = '';
    let total = 0;
    
    cart.forEach((product, index) => {
        cartHTML += `
        <div class="cart-item">
            <p>${product.name}</p>
            <p>Price: $${product.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        </div>
        `;
        total += product.price;
    });
    
    document.getElementById('cart-items').innerHTML = cartHTML;
    document.getElementById('cart-total').innerText = total;
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems(); // Reload cart items
}


function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let orderSummary = 'Order Summary:\n\n';
    let total = 0;

    cart.forEach((product) => {
        orderSummary += `Product: ${product.name}, Price: $${product.price}\n`;
        total += product.price;
    });

    orderSummary += `\nTotal: $${total}\n`;

    // Replace 'YOUR_WHATSAPP_NUMBER' with your actual WhatsApp number
    const whatsappNumber = '+918848291939'; // Example: '1234567890'
    const encodedMessage = encodeURIComponent(orderSummary);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
}


window.onload = loadCartItems;
