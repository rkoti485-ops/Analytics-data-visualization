const period = document.getElementById("period");

const visitors = document.getElementById("visitors");
const signups = document.getElementById("signups");
const purchases = document.getElementById("purchases");
const overall = document.getElementById("overall");

const signupRate = document.getElementById("signupRate");
const purchaseRate = document.getElementById("purchaseRate");

const funnelVisitors = document.getElementById("funnelVisitors");
const funnelSignups = document.getElementById("funnelSignups");
const funnelPurchases = document.getElementById("funnelPurchases");

const visitorSignup = document.getElementById("visitorSignup");
const signupPurchase = document.getElementById("signupPurchase");
const visitorPurchase = document.getElementById("visitorPurchase");

const visitorDrop = document.getElementById("visitorDrop");
const signupDrop = document.getElementById("signupDrop");
const totalDrop = document.getElementById("totalDrop");

const data = {
    month: {
        visitors: "10,000",
        signups: "4,500",
        purchases: "1,800",
        signupRate: "45% Conversion",
        purchaseRate: "40% Conversion",
        overall: "18%",
        visitorSignup: "45%",
        signupPurchase: "40%",
        visitorPurchase: "18%",
        visitorDrop: "55%",
        signupDrop: "60%",
        totalDrop: "82%"
    },

    quarter: {
        visitors: "32,000",
        signups: "15,200",
        purchases: "6,850",
        signupRate: "47.5% Conversion",
        purchaseRate: "45.1% Conversion",
        overall: "21.4%",
        visitorSignup: "47.5%",
        signupPurchase: "45.1%",
        visitorPurchase: "21.4%",
        visitorDrop: "52.5%",
        signupDrop: "54.9%",
        totalDrop: "78.6%"
    },

    year: {
        visitors: "1,25,000",
        signups: "63,750",
        purchases: "31,875",
        signupRate: "51% Conversion",
        purchaseRate: "50% Conversion",
        overall: "25.5%",
        visitorSignup: "51%",
        signupPurchase: "50%",
        visitorPurchase: "25.5%",
        visitorDrop: "49%",
        signupDrop: "50%",
        totalDrop: "74.5%"
    }
};

function updateDashboard(type) {

    const selected = data[type];

    visitors.textContent = selected.visitors;
    signups.textContent = selected.signups;
    purchases.textContent = selected.purchases;
    overall.textContent = selected.overall;

    signupRate.textContent = selected.signupRate;
    purchaseRate.textContent = selected.purchaseRate;

    funnelVisitors.textContent = selected.visitors;
    funnelSignups.textContent = selected.signups;
    funnelPurchases.textContent = selected.purchases;

    visitorSignup.textContent = selected.visitorSignup;
    signupPurchase.textContent = selected.signupPurchase;
    visitorPurchase.textContent = selected.visitorPurchase;

    visitorDrop.textContent = selected.visitorDrop;
    signupDrop.textContent = selected.signupDrop;
    totalDrop.textContent = selected.totalDrop;
}

period.addEventListener("change", function () {
    updateDashboard(period.value);
});

updateDashboard("month");