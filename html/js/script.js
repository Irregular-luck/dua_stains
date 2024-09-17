document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your purchase!');
    });
});
// Add event listener to review form submit button
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var reviewText = document.getElementById('review-text').value;
    var rating = document.getElementById('rating').value;
    
    // Create a new review object
    var review = {
      name: name,
      reviewText: reviewText,
      rating: rating
    };
    
    // Add the review to the review list
    addReview(review);
    
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('review-text').value = '';
    document.getElementById('rating').value = '';
  });
  
  // Function to add a review to the review list
  function addReview(review) {
    var reviewList = document.querySelector('.review-list');
    var reviewHTML = `
      <li>
        <h3>${review.name}</h3>
        <p>${review.reviewText}</p>
        <p>Rating: ${review.rating} stars</p>
      </li>
    `;
    reviewList.innerHTML += reviewHTML;
  }
  
  // Add event listener to contact form submit button
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.querySelector('#contact-form input[name="name"]').value;
    var email = document.querySelector('#contact-form input[name="email"]').value;
    var message = document.querySelector('#contact-form textarea').value;
    
    // Create a new contact object
    var contact = {
      name: name,
      email: email,
      message: message
    };
    
    // Send the contact information to the server (not implemented)
    console.log(contact);
    
    // Clear the form fields
    document.querySelector('#contact-form input[name="name"]').value = '';
    document.querySelector('#contact-form input[name="email"]').value = '';
    document.querySelector('#contact-form textarea').value = '';
  });
  
  // Add event listener to buy buttons
  var buyButtons = document.querySelectorAll('.buy-btn');
  buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the product information
      var product = button.parentNode;
      var productName = product.querySelector('h3').textContent;
      var productPrice = product.querySelector('p').textContent;
      
      // Create a new order object
      var order = {
        productName: productName,
        productPrice: productPrice
      };
      
      // Add the order to the cart (not implemented)
      console.log(order);
    });
  });
  const whatsappIcon = document.querySelector('.whatsapp-icon');