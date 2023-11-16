let cartItems = [];

function addToCart(productId, price) {
    let product = document.getElementById(productId);

    // Add item to cart
    cartItems.push({
        id: productId,
        price: price
    });

    // Display item in the cart
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById('cart-items');
    let totalDisplay = document.getElementById('total');
    let total = 0;

    // Clear existing items in the cart
    cartList.innerHTML = '';

    // Display each item in the cart
    cartItems.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.id}: Rs${item.price}`;
        cartList.appendChild(listItem);

        // Calculate total cost
        total += item.price;
    });

    // Display the total cost
    totalDisplay.textContent = total;
}