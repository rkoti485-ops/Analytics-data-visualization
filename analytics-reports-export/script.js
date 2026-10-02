const reportType = document.getElementById("reportType");
const reportPeriod = document.getElementById("reportPeriod");
const exportFormat = document.getElementById("exportFormat");

const generateReport = document.getElementById("generateReport");

const exportCsv = document.getElementById("exportCsv");
const exportJson = document.getElementById("exportJson");

const reportTitle = document.getElementById("reportTitle");
const reportInfo = document.getElementById("reportInfo");

const notification = document.getElementById("notification");


// ------------------------------------
// REPORT DATA
// ------------------------------------

const reportData = [
    {
        metric: "Revenue",
        current: "₹8,52,400",
        previous: "₹7,18,500",
        growth: "+18.5%"
    },
    {
        metric: "Users",
        current: "25,430",
        previous: "22,620",
        growth: "+12.4%"
    },
    {
        metric: "Orders",
        current: "3,245",
        previous: "2,955",
        growth: "+9.8%"
    },
    {
        metric: "Conversion",
        current: "7.8%",
        previous: "5.7%",
        growth: "+2.1%"
    }
];


// ------------------------------------
// REPORT TYPE NAMES
// ------------------------------------

const reportNames = {

    business: "Business Overview",

    sales: "Sales Analytics",

    marketing: "Marketing Analytics",

    financial: "Financial Analytics",

    customer: "Customer Analytics"

};


// ------------------------------------
// PERIOD NAMES
// ------------------------------------

const periodNames = {

    7: "Last 7 Days",

    30: "Last 30 Days",

    90: "Last 90 Days",

    365: "Last Year"

};


// ------------------------------------
// SHOW NOTIFICATION
// ------------------------------------

function showNotification(message) {

    notification.textContent = message;

    notification.classList.add("show");

    setTimeout(function () {

        notification.classList.remove("show");

    }, 2500);

}


// ------------------------------------
// GENERATE REPORT
// ------------------------------------

generateReport.addEventListener(
    "click",
    function () {

        const selectedReport =
            reportNames[reportType.value];

        const selectedPeriod =
            periodNames[reportPeriod.value];


        reportTitle.textContent =
            selectedReport;


        reportInfo.textContent =
            `${selectedReport} • ${selectedPeriod}`;


        generateReport.innerHTML =
            "<span>Report Generated</span><span>✓</span>";


        showNotification(
            `${selectedReport} generated successfully.`
        );


        setTimeout(function () {

            generateReport.innerHTML =
                "<span>Generate Report</span><span>→</span>";

        }, 1800);

    }
);


// ------------------------------------
// CSV EXPORT
// ------------------------------------

exportCsv.addEventListener(
    "click",
    function () {

        let csvContent =
            "Metric,Current,Previous,Growth\n";


        reportData.forEach(function (item) {

            csvContent +=
                `${item.metric},${item.current},${item.previous},${item.growth}\n`;

        });


        const blob =
            new Blob(
                [csvContent],
                {
                    type: "text/csv;charset=utf-8;"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "analytics-report.csv";


        link.click();


        URL.revokeObjectURL(url);


        showNotification(
            "CSV report exported successfully."
        );

    }
);


// ------------------------------------
// JSON EXPORT
// ------------------------------------

exportJson.addEventListener(
    "click",
    function () {

        const jsonData =
            JSON.stringify(
                reportData,
                null,
                2
            );


        const blob =
            new Blob(
                [jsonData],
                {
                    type: "application/json"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "analytics-report.json";


        link.click();


        URL.revokeObjectURL(url);


        showNotification(
            "JSON report exported successfully."
        );

    }
);


// ------------------------------------
// REPORT TYPE CHANGE
// ------------------------------------

reportType.addEventListener(
    "change",
    function () {

        const selectedReport =
            reportNames[reportType.value];


        reportTitle.textContent =
            selectedReport;

    }
);


// ------------------------------------
// PERIOD CHANGE
// ------------------------------------

reportPeriod.addEventListener(
    "change",
    function () {

        const selectedReport =
            reportNames[reportType.value];

        const selectedPeriod =
            periodNames[reportPeriod.value];


        reportInfo.textContent =
            `${selectedReport} • ${selectedPeriod}`;

    }
);