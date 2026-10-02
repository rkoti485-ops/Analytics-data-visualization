document.getElementById("update").addEventListener("click", function () {

    // Top cards
    const sales = Math.floor(Math.random() * 20000) + 115000;
    const orders = Math.floor(Math.random() * 500) + 2200;
    const customers = Math.floor(Math.random() * 1000) + 8000;
    const conversion = (Math.random() * 3 + 5).toFixed(1);

    // Performance score
    const score = Math.floor(Math.random() * 15) + 70;

    // Key Metrics
    const orderValue = Math.floor(Math.random() * 500) + 1000;
    const retention = Math.floor(Math.random() * 15) + 65;
    const monthlyGrowth = (Math.random() * 8 + 14).toFixed(1);
    const satisfaction = Math.floor(Math.random() * 8) + 88;

    // Performance Overview
    const salesTarget = Math.floor(Math.random() * 15) + 75;
    const customerGrowth = Math.floor(Math.random() * 15) + 60;
    const orderCompletion = Math.floor(Math.random() * 8) + 88;


    // Update top cards
    document.getElementById("sales").textContent =
        "₹" + sales.toLocaleString();

    document.getElementById("orders").textContent =
        orders.toLocaleString();

    document.getElementById("customers").textContent =
        customers.toLocaleString();

    document.getElementById("conversion").textContent =
        conversion + "%";


    // Update performance score
    document.getElementById("score").textContent =
        score + "%";


    // Update Key Metrics
    document.getElementById("orderValue").textContent =
        "₹" + orderValue.toLocaleString();

    document.getElementById("retention").textContent =
        retention + "%";

    document.getElementById("monthlyGrowth").textContent =
        monthlyGrowth + "%";

    document.getElementById("satisfaction").textContent =
        satisfaction + "%";


    // Update Performance Overview
    document.getElementById("salesTarget").textContent =
        salesTarget + "%";

    document.getElementById("customerGrowth").textContent =
        customerGrowth + "%";

    document.getElementById("orderCompletion").textContent =
        orderCompletion + "%";

});