// Task 1

const order = {
    orderId: "1",
    itemName: "Mobile",
    price: 10000,
    isAvailable: true,
    userMembership: "Premium"
};

const processOrder = (order) => {

    if (!order.isAvailable) {
        return "Order Rejected: Item Out of Stock";
    }

    let price = order.price;

    if (order.userMembership == "Premium") {
        price = price * 0.8;
    }
    else if (order.userMembership == "Regular") {
        price = price * 0.9;
    }

    return "Order successful for " + order.itemName +
           ". Total amount to pay is $" + price;
};

const writeOutput = (text) => {
    const outputEl = document.getElementById("output");
    if (outputEl) {
        const p = document.createElement("p");
        p.textContent = text;
        outputEl.appendChild(p);
    }
};

const orderResult = processOrder(order);
writeOutput(orderResult);
console.log(orderResult);


// Task 2

const userSession = {
    username: "Bhavya",
    isAuthenticated: true,
    profile: {
        age: 20,
        role: "Editor"
    }
};

const checkAccess = (userSession) => {

    if (!userSession.isAuthenticated) {
        return "Access Denied: Please log in first";
    }

    if (userSession.profile.role == "Admin") {
        return "Access Granted: Full administrative privileges.";
    }
    else if (userSession.profile.role == "Editor") {

        if (userSession.profile.age >= 18) {
            return "Access Granted: Editor dashboard.";
        }
        else {
            return "Access Denied: Editors must be 18+.";
        }
    }
    else {
        return "Access Denied: Viewers cannot access this route.";
    }
};

const accessResult = checkAccess(userSession);
writeOutput(accessResult);
console.log(accessResult);