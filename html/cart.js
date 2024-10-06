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

window.onload = loadCartItems;
