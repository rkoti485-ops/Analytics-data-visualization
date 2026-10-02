const revenueData = {

    monthly: {
        values: [32000, 38000, 42000, 35000, 46000, 52000],

        total: "₹2,45,000",
        average: "₹40,833",
        highest: "₹52,000",
        growth: "18.2%",

        sources: ["₹1,20,000", "₹75,000", "₹50,000"]
    },

    quarterly: {
        values: [85000, 105000, 125000, 145000],

        total: "₹4,60,000",
        average: "₹1,15,000",
        highest: "₹1,45,000",
        growth: "22.5%",

        sources: ["₹2,20,000", "₹1,40,000", "₹1,00,000"]
    },

    yearly: {
        values: [180000, 220000, 245000, 290000, 340000],

        total: "₹12,75,000",
        average: "₹2,55,000",
        highest: "₹3,40,000",
        growth: "26.4%",

        sources: ["₹6,20,000", "₹3,80,000", "₹2,75,000"]
    }

};

function createChart(period) {

    const chart = document.getElementById("chart");

    chart.innerHTML = "";

    revenueData[period].values.forEach(function(value) {

        const bar = document.createElement("div");

        bar.className = "bar";

        bar.style.height = (value / 2000) + "px";

        bar.title = "Revenue: ₹" + value.toLocaleString();

        chart.appendChild(bar);

    });
}

document.getElementById("period").addEventListener("change", function() {

    const period = this.value;

    const data = revenueData[period];

    document.getElementById("totalRevenue").textContent =
        data.total;

    document.getElementById("averageRevenue").textContent =
        data.average;

    document.getElementById("highestRevenue").textContent =
        data.highest;

    document.getElementById("growth").textContent =
        data.growth;

    document.getElementById("onlineSales").textContent =
        data.sources[0];

    document.getElementById("subscriptions").textContent =
        data.sources[1];

    document.getElementById("services").textContent =
        data.sources[2];

    createChart(period);

});

createChart("monthly");