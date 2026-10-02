const dateFilter = document.getElementById("dateFilter");
const categoryFilter = document.getElementById("categoryFilter");
const regionFilter = document.getElementById("regionFilter");

const applyFilter = document.getElementById("applyFilter");
const resetFilter = document.getElementById("resetFilter");

const filterResult = document.getElementById("filterResult");


// Apply Filters
applyFilter.addEventListener("click", function () {

    const dateText =
        dateFilter.options[dateFilter.selectedIndex].text;

    const categoryText =
        categoryFilter.options[categoryFilter.selectedIndex].text;

    const regionText =
        regionFilter.options[regionFilter.selectedIndex].text;


    filterResult.textContent =
        `Showing data for ${dateText}, ${categoryText}, and ${regionText}.`;


    // Small visual feedback
    applyFilter.innerHTML =
        `<span>Filters Applied</span><span>✓</span>`;


    setTimeout(function () {

        applyFilter.innerHTML =
            `<span>Apply Filters</span><span class="arrow">→</span>`;

    }, 1500);

});


// Reset Filters
resetFilter.addEventListener("click", function () {

    dateFilter.value = "7";
    categoryFilter.value = "all";
    regionFilter.value = "all";


    filterResult.textContent =
        "Showing data for all categories and all regions.";


    applyFilter.innerHTML =
        `<span>Apply Filters</span><span class="arrow">→</span>`;

});


// Filter change interaction
dateFilter.addEventListener("change", function () {

    console.log("Date filter changed:", dateFilter.value);

});

categoryFilter.addEventListener("change", function () {

    console.log("Category filter changed:", categoryFilter.value);

});

regionFilter.addEventListener("change", function () {

    console.log("Region filter changed:", regionFilter.value);

});