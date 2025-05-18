// script.js

function submitOrder(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form values
    const email = document.querySelector('input[type="email"]').value;
    const quantity = document.querySelector('input[type="number"]').value;
    const address = document.querySelector('input[type="text"]').value;

    // Basic validation
    if (!email || !quantity || !address) {
        alert('Please fill out all fields.');
        return;
    }

    if (quantity <= 0) {
        alert('Quantity must be greater than zero.');
        return;
    }

    // If validation passes, display success message
    alert('Order submitted successfully!');
}

// Add event listener to the order button
document.querySelector('.order_btn').addEventListener('click', submitOrder);