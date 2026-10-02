const filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", function () {

    if (filterBtn.textContent === "Last 30 Days") {
        filterBtn.textContent = "Last 7 Days";

        document.querySelector(".cards .card:nth-child(1) h2").textContent = "₹1,25,000";
        document.querySelector(".cards .card:nth-child(2) h2").textContent = "720";
        document.querySelector(".cards .card:nth-child(3) h2").textContent = "₹1,735";
        document.querySelector(".cards .card:nth-child(4) h2").textContent = "32";

    } else {
        filterBtn.textContent = "Last 30 Days";

        document.querySelector(".cards .card:nth-child(1) h2").textContent = "₹4,52,000";
        document.querySelector(".cards .card:nth-child(2) h2").textContent = "2,845";
        document.querySelector(".cards .card:nth-child(3) h2").textContent = "₹1,590";
        document.querySelector(".cards .card:nth-child(4) h2").textContent = "126";
    }
});


const monthSelect = document.getElementById("monthSelect");

monthSelect.addEventListener("change", function () {

    const bars = document.querySelectorAll(".bar");

    if (monthSelect.value === "6") {

        bars[0].style.height = "45%";
        bars[1].style.height = "60%";
        bars[2].style.height = "50%";
        bars[3].style.height = "75%";
        bars[4].style.height = "65%";
        bars[5].style.height = "90%";

    } else {

        bars[0].style.height = "35%";
        bars[1].style.height = "45%";
        bars[2].style.height = "55%";
        bars[3].style.height = "65%";
        bars[4].style.height = "80%";
        bars[5].style.height = "95%";
    }

});
const salesProducts = document.querySelectorAll(".product strong");
const salesCategories = document.querySelectorAll(".category strong");

filterBtn.addEventListener("click", function () {

    if (filterBtn.textContent === "Last 7 Days") {

        // Last 7 Days
        salesProducts[0].textContent = "₹24,000";
        salesProducts[1].textContent = "₹19,500";
        salesProducts[2].textContent = "₹16,000";
        salesProducts[3].textContent = "₹12,500";

        salesCategories[0].textContent = "48%";
        salesCategories[1].textContent = "27%";
        salesCategories[2].textContent = "17%";
        salesCategories[3].textContent = "8%";

    } else {

        // Last 30 Days
        salesProducts[0].textContent = "₹85,000";
        salesProducts[1].textContent = "₹72,000";
        salesProducts[2].textContent = "₹61,000";
        salesProducts[3].textContent = "₹48,000";

        salesCategories[0].textContent = "45%";
        salesCategories[1].textContent = "30%";
        salesCategories[2].textContent = "15%";
        salesCategories[3].textContent = "10%";
    }
});