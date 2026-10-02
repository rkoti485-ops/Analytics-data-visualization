const toggles = document.querySelectorAll(".widget-toggle");
const cards = document.querySelectorAll(".analytics-card");

const saveButton = document.getElementById("saveDashboard");
const resetButton = document.getElementById("resetDashboard");

const layoutStatus = document.getElementById("layoutStatus");


// ------------------------------------
// SHOW / HIDE DASHBOARD WIDGETS
// ------------------------------------

toggles.forEach(function (toggle) {

    toggle.addEventListener("change", function () {

        const widgetName = toggle.dataset.widget;

        const selectedCard =
            document.querySelector(
                `[data-card="${widgetName}"]`
            );

        if (toggle.checked) {

            selectedCard.classList.remove("hidden");

        } else {

            selectedCard.classList.add("hidden");

        }

        layoutStatus.textContent = "Editing";

    });

});


// ------------------------------------
// SAVE DASHBOARD LAYOUT
// ------------------------------------

saveButton.addEventListener("click", function () {

    const layout = {};

    toggles.forEach(function (toggle) {

        layout[toggle.dataset.widget] =
            toggle.checked;

    });

    localStorage.setItem(
        "dashboardLayout",
        JSON.stringify(layout)
    );

    layoutStatus.textContent =
        "Layout Saved ✓";

    saveButton.innerHTML =
        "✓ Saved";

    setTimeout(function () {

        saveButton.innerHTML =
            "✓ Save Layout";

        layoutStatus.textContent =
            "Editing";

    }, 1800);

});


// ------------------------------------
// LOAD SAVED LAYOUT
// ------------------------------------

function loadDashboardLayout() {

    const savedLayout =
        localStorage.getItem("dashboardLayout");

    if (!savedLayout) {
        return;
    }

    const layout =
        JSON.parse(savedLayout);

    toggles.forEach(function (toggle) {

        const widgetName =
            toggle.dataset.widget;

        if (
            layout[widgetName] !== undefined
        ) {

            toggle.checked =
                layout[widgetName];

            const card =
                document.querySelector(
                    `[data-card="${widgetName}"]`
                );

            if (toggle.checked) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        }

    });

}


// ------------------------------------
// RESET DASHBOARD
// ------------------------------------

resetButton.addEventListener("click", function () {

    toggles.forEach(function (toggle) {

        toggle.checked = true;

        const widgetName =
            toggle.dataset.widget;

        const card =
            document.querySelector(
                `[data-card="${widgetName}"]`
            );

        card.classList.remove("hidden");

    });


    localStorage.removeItem(
        "dashboardLayout"
    );


    layoutStatus.textContent =
        "Reset Complete ✓";


    setTimeout(function () {

        layoutStatus.textContent =
            "Editing";

    }, 1500);

});


// Load saved settings when page opens
loadDashboardLayout();