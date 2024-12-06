const flavors = [
    { name: "Original", price: 0 },
    { name: "Garlic", price: 5 },
    { name: "Jack Daniels", price: 5 },
    { name: "Yangnyeom", price: 5 },
    { name: "Spicy BBQ", price: 5 },
    { name: "Lemon Glaze", price: 5 },
    { name: "24 Cheddar", price: 10 },
    { name: "Dark Truffle", price: 10 },
];

// Using both an object-based cart and an array-based cart for flavor selections
let cart = {}; // Object-based cart for simpler item handling
let flavorCart = []; // Array-based cart for flavor-based items

function addToCart(itemName) {
    // Adds to object-based cart
    if (cart[itemName]) {
        cart[itemName] += 1;
    } else {
        cart[itemName] = 1;
    }
    renderCart();
}

function removeFromCart(itemName) {
    // Removes from object-based cart
    if (cart[itemName]) {
        cart[itemName] -= 1;
        if (cart[itemName] === 0) {
            delete cart[itemName];
        }
    }
    renderCart();
}

function openFlavorSelection(itemName, basePrice) {
    document.getElementById("selectedItemName").innerText = itemName;
    const flavorList = document.getElementById("flavorList");
    flavorList.innerHTML = ""; // Clear existing flavors
    flavors.forEach(flavor => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <button onclick="addFlavorToCart('${itemName}', ${basePrice}, '${flavor.name}', ${flavor.price})">
                ${flavor.name} (+₱${flavor.price})
            </button>
        `;
        flavorList.appendChild(listItem);
    });
    document.getElementById("flavorModal").style.display = "flex";
}

function closeFlavorModal() {
    document.getElementById("flavorModal").style.display = "none";
}

function addFlavorToCart(itemName, basePrice, flavor, flavorPrice) {
    const existingItem = flavorCart.find(
        (item) => item.name === itemName && item.flavor === flavor
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        flavorCart.push({
            name: itemName,
            price: basePrice + flavorPrice,
            flavor: flavor,
            quantity: 1,
        });
    }
    renderCart();
    closeFlavorModal();
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ""; // Clear existing cart

    let total = 0;
    let totalItems = 0;

    // Render object-based cart
    for (const coffeeName in cart) {
        totalItems += cart[coffeeName];
        total += cart[coffeeName] * 50; // Assume a fixed price of ₱50 for object-based items

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${coffeeName}</td>
            <td>
                <div class="quantity-control">
                    <button onclick="removeFromCart('${coffeeName}')">-</button>
                    <span>${cart[coffeeName]}</span>
                    <button onclick="addToCart('${coffeeName}')">+</button>
                </div>
            </td>
            <td>₱${cart[coffeeName] * 50}</td>
            <td><button onclick="removeFromCart('${coffeeName}')">Delete</button></td>
        `;
        cartItems.appendChild(row);
    }

    // Render flavor-based cart
    flavorCart.forEach((item, index) => {
        totalItems += item.quantity;
        total += item.price * item.quantity;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name} (${item.flavor})</td>
            <td>
                <div class="quantity-control">
                    <button onclick="updateFlavorQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateFlavorQuantity(${index}, 1)">+</button>
                </div>
            </td>
            <td>₱${item.price * item.quantity}</td>
            <td><button onclick="deleteFlavorFromCart(${index})">Delete</button></td>
        `;
        cartItems.appendChild(row);
    });

    // Update total display
    document.getElementById("cartTotal").innerText = `Total (${totalItems} item${totalItems !== 1 ? "s" : ""}): ₱${total}`;
}

function updateFlavorQuantity(index, change) {
    flavorCart[index].quantity += change;
    if (flavorCart[index].quantity <= 0) {
        flavorCart.splice(index, 1); // Remove item if quantity goes to zero
    }
    renderCart();
}

function deleteFlavorFromCart(index) {
    flavorCart.splice(index, 1);
    renderCart();
}

function placeOrder() {
    if (Object.keys(cart).length === 0 && flavorCart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully!");
    cart = {};
    flavorCart = [];
    renderCart();
}




function toggleCart(forceOpen = null) {
    const cartPanel = document.getElementById("cartPanel");
    if (forceOpen === true || (forceOpen === null && !cartPanel.classList.contains("open"))) {
        cartPanel.classList.add("open");
    } else {
        cartPanel.classList.remove("open");
    }
}

function addToCart(itemName) {
    // Adds to object-based cart
    if (cart[itemName]) {
        cart[itemName] += 1;
    } else {
        cart[itemName] = 1;
    }
    renderCart();
    toggleCart(true); // Automatically open the cart
}
