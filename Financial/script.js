const filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", function () {

    if (filterBtn.textContent === "Last 30 Days") {

        filterBtn.textContent = "Last 7 Days";

        document.querySelector(".cards .card:nth-child(1) h2").textContent = "₹2,10,000";
        document.querySelector(".cards .card:nth-child(2) h2").textContent = "₹82,000";
        document.querySelector(".cards .card:nth-child(3) h2").textContent = "₹1,28,000";
        document.querySelector(".cards .card:nth-child(4) h2").textContent = "60.9%";

    } else {

        filterBtn.textContent = "Last 30 Days";

        document.querySelector(".cards .card:nth-child(1) h2").textContent = "₹8,50,000";
        document.querySelector(".cards .card:nth-child(2) h2").textContent = "₹3,20,000";
        document.querySelector(".cards .card:nth-child(3) h2").textContent = "₹5,30,000";
        document.querySelector(".cards .card:nth-child(4) h2").textContent = "62.4%";
    }
});


const yearSelect = document.getElementById("yearSelect");

yearSelect.addEventListener("change", function () {

    const bars = document.querySelectorAll(".bar");

    if (yearSelect.value === "2026") {

        bars[0].style.height = "55%";
        bars[1].style.height = "65%";
        bars[2].style.height = "50%";
        bars[3].style.height = "75%";
        bars[4].style.height = "68%";
        bars[5].style.height = "90%";

    }

    else if (yearSelect.value === "2025") {

        bars[0].style.height = "45%";
        bars[1].style.height = "55%";
        bars[2].style.height = "65%";
        bars[3].style.height = "60%";
        bars[4].style.height = "75%";
        bars[5].style.height = "80%";

    }

    else if (yearSelect.value === "2024") {

        bars[0].style.height = "35%";
        bars[1].style.height = "50%";
        bars[2].style.height = "45%";
        bars[3].style.height = "55%";
        bars[4].style.height = "60%";
        bars[5].style.height = "70%";
    }
});
const financialSummary = document.querySelectorAll(".summary strong");

filterBtn.addEventListener("click", function () {

    if (filterBtn.textContent === "Last 7 Days") {

        // Last 7 Days - Revenue
        financialSummary[0].textContent = "₹1,05,000";
        financialSummary[1].textContent = "₹52,000";
        financialSummary[2].textContent = "₹38,000";
        financialSummary[3].textContent = "₹15,000";

        // Last 7 Days - Expenses
        financialSummary[4].textContent = "₹18,000";
        financialSummary[5].textContent = "₹22,000";
        financialSummary[6].textContent = "₹25,000";
        financialSummary[7].textContent = "₹12,000";

    } else {

        // Last 30 Days - Revenue
        financialSummary[0].textContent = "₹4,20,000";
        financialSummary[1].textContent = "₹2,10,000";
        financialSummary[2].textContent = "₹1,45,000";
        financialSummary[3].textContent = "₹75,000";

        // Last 30 Days - Expenses
        financialSummary[4].textContent = "₹85,000";
        financialSummary[5].textContent = "₹95,000";
        financialSummary[6].textContent = "₹90,000";
        financialSummary[7].textContent = "₹50,000";
    }
});