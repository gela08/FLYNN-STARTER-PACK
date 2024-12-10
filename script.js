const flavors = [
    { name: "Original", price: 95 },
    { name: "Garlic", price: 100 },
    { name: "Jack Daniels", price:  100 },
    { name: "Yangnyeom", price: 100 },
    { name: "Yangnyeom X2", price: 100 },
    { name: "Spicy BBQ", price: 100 },
    { name: "Lemon Glaze", price: 100 },
    { name: "Yangnyeom W Garlic", price: 100 },
    { name: "24 Cheddar", price: 100 },
    { name: "Snow Cheese", price: 100 },
    { name: "Yangnyeom X2 W Garlic", price: 100 },
    { name: "Dark Truffle", price: 100 },
];

// Using both an object-based cart and an array-based cart for flavor selections
let cart = {}; // Object-based cart for simpler item handling
let flavorCart = []; // Array-based cart for flavor-based items


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

    flavorList.classList.add("flavor-grid"); // Add a grid-specific class

    flavors.forEach(flavor => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `
            <button class="flavor-button" onclick="addFlavorToCart('${itemName}', ${basePrice}, '${flavor.name}', ${flavor.price})">
                ${flavor.name} (+₱${flavor.price})
            </button>
        `;
        flavorList.appendChild(listItem);
    });
    document.getElementById("flavorModal").style.display = "flex";
}




// Initialize Original Flavor Price
function setOriginalFlavorPrice() {
    const originalFlavor = flavors.find(flavor => flavor.name === "Original"); // Find the Original flavor
    const originalPriceCell = document.getElementById("originalPrice");

    if (originalFlavor) {
        originalPriceCell.innerText = `₱${originalFlavor.price}`; // Set the price dynamically
    } else {
        originalPriceCell.innerText = "N/A"; // Fallback if not found
    }
}

// Call this function on page load to initialize the price
setOriginalFlavorPrice();



// Initialize Garlic Flavor Price
function setGarlicFlavorPrice() {
    const garlicFlavor = flavors.find(flavor => flavor.name === "Garlic"); // Find the Garlic flavor
    const garlicPriceCell = document.getElementById("garlicPrice");

    if (garlicFlavor) {
        garlicPriceCell.innerText = `₱${garlicFlavor.price}`; // Set the price dynamically
    } else {
        garlicPriceCell.innerText = "N/A"; // Fallback if not found
    }
}

// Call this function on page load to initialize the price
setGarlicFlavorPrice();


function setJackDanielsFlavorPrice() {
    const jackDanielsFlavor = flavors.find(flavor => flavor.name === "Jack Daniels"); // Find the JackDaniels flavor
    const jackDanielsPriceCell = document.getElementById("jackDanielsPrice");

    if (jackDanielsFlavor) {
        jackDanielsPriceCell.innerText = `₱${jackDanielsFlavor.price}`; // Set the price dynamically
    } else {
        jackDanielsPriceCell.innerText = "N/A"; // Fallback if not found
    }
}

// Call this function on page load to initialize the price
setJackDanielsFlavorPrice();

function setYangnyeomFlavorPrice() {
    const yangnyeomFlavor = flavors.find(flavor => flavor.name === "Yangnyeom"); // Find the Yangnyeom flavor
    const yangnyeomPriceCell = document.getElementById("yangnyeomPrice");

    if (yangnyeomFlavor) {
        yangnyeomPriceCell.innerText = `₱${yangnyeomFlavor.price}`; // Set the price dynamically
    } else {
        yangnyeomPriceCell.innerText = "N/A"; // Fallback if not found
    }
}

// Call this function on page load to initialize the price
setYangnyeomFlavorPrice();

function setYangnyeomX2FlavorPrice() {
    const yangnyeomx2Flavor = flavors.find(flavor => flavor.name === "Yangnyeom X2"); // Find the Yangnyeom X2 flavor
    const yangnyeomx2PriceCell = document.getElementById("yangnyeomX2Price");

    if (yangnyeomx2Flavor) {
        yangnyeomx2PriceCell.innerText = `₱${yangnyeomx2Flavor.price}`; // Set the price dynamically
    } else {
        yangnyeomx2PriceCell.innerText = "N/A"; // Fallback if not found
    }
}

// Call this function on page load to initialize the price
setYangnyeomX2FlavorPrice();

function setYangnyeomX2FlavorPrice() {
    const spicyBBQFlavor = flavors.find(flavor => flavor.name === "Spicy BBQ"); // Find the Spicy BBQ flavor
    const spicyBBQPriceCell = document.getElementById("spicyBBQPrice");

    if (spicyBBQFlavor) {
        spicyBBQPriceCell.innerText = `₱${spicyBBQFlavor.price}`; // Set the price dynamically
    } else {
        spicyBBQPriceCell.innerText = "N/A"; // Fallback if not found
    }
}

// Call this function on page load to initialize the price
setSpicyBBQFlavorPrice();


function setLemonGlazeFlavorPrice() {
    const lemonGlazeFlavor = flavors.find(flavor => flavor.name === "Lemon Glaze"); // Find the Lemon Glaze flavor
    const lemonGlazePriceCell = document.getElementById("lemonGlazePrice");

    if (lemonGlazeFlavor) {
        lemonGlazePriceCell.innerText = `₱${lemonGlazeFlavor.price}`; // Set the price dynamically
    } else {
        lemonGlazePriceCell.innerText = "N/A"; // Fallback if not found
    }
}

// Call this function on page load to initialize the price
setLemonGlazeFlavorPrice();

function setYangnyeomWGarlicFlavorPrice() {
    const yangnyeomWGarlicFlavor = flavors.find(flavor => flavor.name === "Yangnyeom W Garlic"); // Find the Yangnyeom W Garlic flavor
    const yangnyeomWGarlicPriceCell = document.getElementById("yangnyeomWGarlicPrice");

    if (yangnyeomWGarlicFlavor) {
        yangnyeomWGarlicPriceCell.innerText = `₱${yangnyeomWGarlicFlavor.price}`; // Set the price dynamically
    } else {
        yangnyeomWGarlicPriceCell.innerText = "N/A"; // Fallback if not found
    }
}

// Call this function on page load to initialize the price
setYangnyeomWGarlicFlavorPrice();

function set24CheddarFlavorPrice() {
    const cheddarFlavor = flavors.find(flavor => flavor.name === "24 Cheddar"); // Find the 24 Cheddar flavor
    const cheddarPriceCell = document.getElementById("24CheddarPrice");

    if (cheddarFlavor) {
        cheddarPriceCell.innerText = `₱${cheddarFlavor.price}`; // Set the price dynamically
    } else {
        cheddarPriceCell.innerText = "N/A"; // Fallback if not found
    }
}

// Call this function on page load to initialize the price
set24CheddarFlavorPrice();


//add snow cheese prices here!!!! ENDED HERE!!!!!!!!! JUST COPY THE FLAVOR PRICES ABOVE AND CHANGE 
//ALSO CHANGE THE NAME PRICE IN HTML THE "jackDanielsPrice" one so you can be able to call
//changes tom: the bg, the floating, the nav bar 





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
    toggleCart(true); // Automatically open the cart
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
        total += cart[coffeeName] * 39; // Assume a fixed price of ₱39 for object-based items

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
            <td>₱${cart[coffeeName] * 39}</td>
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

function closeCart() {
    const cartPanel = document.getElementById("cartPanel");
    cartPanel.classList.remove("open");
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
