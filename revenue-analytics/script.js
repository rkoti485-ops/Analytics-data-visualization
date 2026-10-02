const period = document.getElementById("period");

const totalRevenue = document.getElementById("totalRevenue");
const monthlyRevenue = document.getElementById("monthlyRevenue");
const averageRevenue = document.getElementById("averageRevenue");
const growth = document.getElementById("growth");
const growthText = document.getElementById("growthText");

const bars = [
    document.getElementById("bar1"),
    document.getElementById("bar2"),
    document.getElementById("bar3"),
    document.getElementById("bar4"),
    document.getElementById("bar5"),
    document.getElementById("bar6")
];

const labels = [
    document.getElementById("label1"),
    document.getElementById("label2"),
    document.getElementById("label3"),
    document.getElementById("label4"),
    document.getElementById("label5"),
    document.getElementById("label6")
];

const electronics = document.getElementById("electronics");
const clothing = document.getElementById("clothing");
const food = document.getElementById("food");
const others = document.getElementById("others");

const south = document.getElementById("south");
const north = document.getElementById("north");
const west = document.getElementById("west");
const east = document.getElementById("east");

const data = {
    month: {
        total: "₹8,52,400",
        monthly: "₹2,45,600",
        average: "₹85,240",
        growth: "18.5%",
        growthText: "+18.5%",
        bars: [45, 60, 50, 75, 65, 90],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        categories: ["35%", "25%", "20%", "20%"],
        regions: ["40%", "25%", "20%", "15%"]
    },

    quarter: {
        total: "₹24,75,600",
        monthly: "₹8,25,200",
        average: "₹8,25,200",
        growth: "21.3%",
        growthText: "+21.3%",
        bars: [55, 70, 65, 85, 75, 95],
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
        categories: ["40%", "23%", "22%", "15%"],
        regions: ["42%", "24%", "19%", "15%"]
    },

    year: {
        total: "₹98,45,000",
        monthly: "₹8,20,400",
        average: "₹8,20,400",
        growth: "25.7%",
        growthText: "+25.7%",
        bars: [65, 75, 70, 85, 80, 100],
        labels: ["2021", "2022", "2023", "2024", "2025", "2026"],
        categories: ["45%", "22%", "18%", "15%"],
        regions: ["45%", "23%", "18%", "14%"]
    }
};

function updateDashboard(type) {

    const selected = data[type];

    totalRevenue.textContent = selected.total;
    monthlyRevenue.textContent = selected.monthly;
    averageRevenue.textContent = selected.average;
    growth.textContent = selected.growth;
    growthText.textContent = selected.growthText;

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = selected.bars[i] + "%";
        labels[i].textContent = selected.labels[i];
    }

    electronics.textContent = selected.categories[0];
    clothing.textContent = selected.categories[1];
    food.textContent = selected.categories[2];
    others.textContent = selected.categories[3];

    south.textContent = selected.regions[0];
    north.textContent = selected.regions[1];
    west.textContent = selected.regions[2];
    east.textContent = selected.regions[3];
}

period.addEventListener("change", function () {
    updateDashboard(period.value);
});

updateDashboard("month");