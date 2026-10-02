const data = {
    7: {
        numbers: ["25,430", "18,250", "1,240", "8,540"],
        distribution: [72, 18, 10]
    },

    30: {
        numbers: ["28,760", "20,940", "2,480", "10,320"],
        distribution: [70, 20, 10]
    },

    90: {
        numbers: ["34,850", "25,680", "4,120", "13,450"],
        distribution: [68, 22, 10]
    }
};

const charts = {
    weekly: [120, 145, 168, 190, 215, 238, 254],
    monthly: [185, 207, 231, 254],
    yearly: [120, 135, 148, 162, 178, 190, 205, 218, 231, 240, 247, 254]
};

document.getElementById("period").addEventListener("change", function () {

    const values = data[this.value];

    document.getElementById("total").textContent = values.numbers[0];
    document.getElementById("active").textContent = values.numbers[1];
    document.getElementById("newUsers").textContent = values.numbers[2];
    document.getElementById("returning").textContent = values.numbers[3];

    document.getElementById("activePercent").textContent =
        values.distribution[0] + "%";

    document.getElementById("newPercent").textContent =
        values.distribution[1] + "%";

    document.getElementById("returningPercent").textContent =
        values.distribution[2] + "%";

    document.getElementById("activeBar").style.width =
        values.distribution[0] + "%";

    document.getElementById("newBar").style.width =
        values.distribution[1] + "%";

    document.getElementById("returningBar").style.width =
        values.distribution[2] + "%";
});

function createChart(type) {

    const chart = document.getElementById("chart");

    chart.innerHTML = "";

    charts[type].forEach(function (value) {

        const bar = document.createElement("div");

        bar.className = "bar";

        bar.style.height = value + "px";

        bar.title = value * 100 + " users";

        chart.appendChild(bar);
    });
}

document.querySelectorAll(".chart-btn").forEach(function (button) {

    button.addEventListener("click", function () {

        document.querySelectorAll(".chart-btn").forEach(function (btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        createChart(this.dataset.chart);
    });
});

const activityNames = [
    "New user registered",
    "User logged in",
    "User completed profile",
    "Returning user visited",
    "User viewed analytics"
];

document.getElementById("refresh").addEventListener("click", function () {

    const random =
        activityNames[Math.floor(Math.random() * activityNames.length)];

    const activity = document.createElement("div");

    activity.className = "activity";

    activity.innerHTML =
        "👤 <span>" + random + "</span>" +
        "<small>Just now</small>";

    document.getElementById("activities").prepend(activity);
});

createChart("weekly");