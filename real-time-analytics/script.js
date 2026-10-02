let onlineUsers = 1248;
let sessions = 856;
let pageViews = 4562;
let events = 2340;

let homeUsers = 420;
let productUsers = 315;
let aboutUsers = 185;
let contactUsers = 96;

function updateNumbers() {

    onlineUsers += Math.floor(Math.random() * 11) - 5;
    sessions += Math.floor(Math.random() * 9) - 4;
    pageViews += Math.floor(Math.random() * 15);
    events += Math.floor(Math.random() * 10);

    homeUsers += Math.floor(Math.random() * 7) - 3;
    productUsers += Math.floor(Math.random() * 7) - 3;
    aboutUsers += Math.floor(Math.random() * 5) - 2;
    contactUsers += Math.floor(Math.random() * 5) - 2;

    document.getElementById("onlineUsers").textContent = onlineUsers;
    document.getElementById("sessions").textContent = sessions;
    document.getElementById("pageViews").textContent = pageViews;
    document.getElementById("events").textContent = events;

    document.getElementById("homeUsers").textContent =
        homeUsers + " users";

    document.getElementById("productUsers").textContent =
        productUsers + " users";

    document.getElementById("aboutUsers").textContent =
        aboutUsers + " users";

    document.getElementById("contactUsers").textContent =
        contactUsers + " users";
}

setInterval(updateNumbers, 3000);


const activities = [
    "User opened Home page",
    "User viewed Products",
    "User completed registration",
    "User started a session",
    "User searched for a product",
    "User visited Contact page"
];

document.getElementById("refresh").addEventListener("click", function () {

    const randomActivity =
        activities[Math.floor(Math.random() * activities.length)];

    const activity = document.createElement("div");

    activity.className = "activity";

    activity.innerHTML =
        "🟢 <span>" +
        randomActivity +
        "</span><small>Just now</small>";

    document.getElementById("activityList").prepend(activity);

});