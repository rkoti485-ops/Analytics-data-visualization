// Date filter interaction
const dateFilter = document.getElementById("dateFilter");

dateFilter.addEventListener("change", function () {
    const days = this.value;

    if (days === "7") {
        updateDashboard("Last 7 Days");
    } else if (days === "30") {
        updateDashboard("Last 30 Days");
    } else {
        updateDashboard("Last 90 Days");
    }
});

function updateDashboard(period) {
    const revenue = document.getElementById("revenue");
    const users = document.getElementById("users");
    const orders = document.getElementById("orders");

    if (period === "Last 7 Days") {
        revenue.textContent = "₹4,52,000";
        users.textContent = "25,430";
        orders.textContent = "3,245";
    }

    if (period === "Last 30 Days") {
        revenue.textContent = "₹12,84,500";
        users.textContent = "68,920";
        orders.textContent = "8,642";
    }

    if (period === "Last 90 Days") {
        revenue.textContent = "₹38,45,800";
        users.textContent = "1,92,430";
        orders.textContent = "25,680";
    }

    console.log("Dashboard updated:", period);
}


// Change chart data
const changeChart = document.getElementById("changeChart");

changeChart.addEventListener("click", function () {

    const bars = document.querySelectorAll(".bar");

    const newHeights = [
        Math.floor(Math.random() * 50) + 35,
        Math.floor(Math.random() * 50) + 35,
        Math.floor(Math.random() * 50) + 35,
        Math.floor(Math.random() * 50) + 35,
        Math.floor(Math.random() * 50) + 35,
        Math.floor(Math.random() * 50) + 35,
        Math.floor(Math.random() * 50) + 35
    ];

    bars.forEach((bar, index) => {
        bar.style.height = newHeights[index] + "%";
    });
});


// Notification button
const notification = document.querySelector(".notification");

notification.addEventListener("click", function () {
    alert("You have 3 new notifications.");
});


// View all button
const viewAll = document.getElementById("viewAll");

viewAll.addEventListener("click", function () {
    alert("Showing all recent activities.");
});


// Sidebar active menu
const menuItems = document.querySelectorAll(".sidebar nav a");

menuItems.forEach(item => {
    item.addEventListener("click", function (event) {

        event.preventDefault();

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        this.classList.add("active");
    });
});