const filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", function () {

    if (filterBtn.textContent === "Last 30 Days") {

        filterBtn.textContent = "Last 7 Days";

        document.querySelector(".cards .card:nth-child(1) h2").textContent = "8";
        document.querySelector(".cards .card:nth-child(2) h2").textContent = "420K";
        document.querySelector(".cards .card:nth-child(3) h2").textContent = "3,120";
        document.querySelector(".cards .card:nth-child(4) h2").textContent = "480";

    } else {

        filterBtn.textContent = "Last 30 Days";

        document.querySelector(".cards .card:nth-child(1) h2").textContent = "24";
        document.querySelector(".cards .card:nth-child(2) h2").textContent = "1.25M";
        document.querySelector(".cards .card:nth-child(3) h2").textContent = "8,450";
        document.querySelector(".cards .card:nth-child(4) h2").textContent = "1,245";
    }
});


const campaignSelect = document.getElementById("campaignSelect");

campaignSelect.addEventListener("change", function () {

    const campaigns = document.querySelectorAll(".campaign");

    if (campaignSelect.value === "All Campaigns") {

        campaigns[0].style.display = "flex";
        campaigns[1].style.display = "flex";
        campaigns[2].style.display = "flex";
        campaigns[3].style.display = "flex";

    } else {

        campaigns.forEach(function (campaign) {
            campaign.style.display = "none";
        });

        if (campaignSelect.value === "Summer Sale") {
            campaigns[0].style.display = "flex";
        }

        if (campaignSelect.value === "New Product") {
            campaigns[1].style.display = "flex";
        }

        if (campaignSelect.value === "Festival Offer") {
            campaigns[2].style.display = "flex";
        }
    }
});

const channels = document.querySelectorAll(".channel strong");
const engagement = document.querySelectorAll(".engagement strong");

filterBtn.addEventListener("click", function () {

    if (filterBtn.textContent === "Last 7 Days") {

        // Last 7 Days - Marketing Channels
        channels[0].textContent = "42%";
        channels[1].textContent = "28%";
        channels[2].textContent = "20%";
        channels[3].textContent = "10%";

        // Last 7 Days - Engagement
        engagement[0].textContent = "7.4%";
        engagement[1].textContent = "4.8%";
        engagement[2].textContent = "9.2%";
        engagement[3].textContent = "30%";

    } else {

        // Last 30 Days - Marketing Channels
        channels[0].textContent = "38%";
        channels[1].textContent = "32%";
        channels[2].textContent = "18%";
        channels[3].textContent = "12%";

        // Last 30 Days - Engagement
        engagement[0].textContent = "6.8%";
        engagement[1].textContent = "4.2%";
        engagement[2].textContent = "8.5%";
        engagement[3].textContent = "27%";
    }
});