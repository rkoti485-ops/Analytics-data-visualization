const period = document.getElementById("period");

const retention = document.getElementById("retention");
const activeUsers = document.getElementById("activeUsers");
const churn = document.getElementById("churn");
const returning = document.getElementById("returning");

const newUsers = document.getElementById("newUsers");
const returnUsers = document.getElementById("returnUsers");
const retentionRate = document.getElementById("retentionRate");

const churnUsers = document.getElementById("churnUsers");
const churnRate = document.getElementById("churnRate");
const retainedUsers = document.getElementById("retainedUsers");

const jan1 = document.getElementById("jan1");
const jan2 = document.getElementById("jan2");
const jan3 = document.getElementById("jan3");
const jan4 = document.getElementById("jan4");

const feb1 = document.getElementById("feb1");
const feb2 = document.getElementById("feb2");
const feb3 = document.getElementById("feb3");
const feb4 = document.getElementById("feb4");

const mar1 = document.getElementById("mar1");
const mar2 = document.getElementById("mar2");
const mar3 = document.getElementById("mar3");
const mar4 = document.getElementById("mar4");

const data = {
    month: {
        retention: "72%",
        activeUsers: "7,200",
        churn: "28%",
        returning: "5,400",
        newUsers: "2,800",
        returnUsers: "5,400",
        retentionRate: "72%",
        churnUsers: "2,800",
        churnRate: "28%",
        retainedUsers: "7,200",
        cohort: [
            ["100%", "78%", "65%", "55%"],
            ["100%", "82%", "68%", "58%"],
            ["100%", "85%", "72%", "60%"]
        ]
    },

    quarter: {
        retention: "76%",
        activeUsers: "18,240",
        churn: "24%",
        returning: "13,680",
        newUsers: "5,760",
        returnUsers: "13,680",
        retentionRate: "76%",
        churnUsers: "5,760",
        churnRate: "24%",
        retainedUsers: "18,240",
        cohort: [
            ["100%", "82%", "70%", "62%"],
            ["100%", "85%", "73%", "65%"],
            ["100%", "88%", "76%", "68%"]
        ]
    },

    year: {
        retention: "81%",
        activeUsers: "48,600",
        churn: "19%",
        returning: "39,366",
        newUsers: "11,634",
        returnUsers: "39,366",
        retentionRate: "81%",
        churnUsers: "9,234",
        churnRate: "19%",
        retainedUsers: "48,600",
        cohort: [
            ["100%", "88%", "78%", "70%"],
            ["100%", "90%", "80%", "73%"],
            ["100%", "92%", "83%", "76%"]
        ]
    }
};

function updateDashboard(type) {

    const selected = data[type];

    retention.textContent = selected.retention;
    activeUsers.textContent = selected.activeUsers;
    churn.textContent = selected.churn;
    returning.textContent = selected.returning;

    newUsers.textContent = selected.newUsers;
    returnUsers.textContent = selected.returnUsers;
    retentionRate.textContent = selected.retentionRate;

    churnUsers.textContent = selected.churnUsers;
    churnRate.textContent = selected.churnRate;
    retainedUsers.textContent = selected.retainedUsers;

    jan1.textContent = selected.cohort[0][0];
    jan2.textContent = selected.cohort[0][1];
    jan3.textContent = selected.cohort[0][2];
    jan4.textContent = selected.cohort[0][3];

    feb1.textContent = selected.cohort[1][0];
    feb2.textContent = selected.cohort[1][1];
    feb3.textContent = selected.cohort[1][2];
    feb4.textContent = selected.cohort[1][3];

    mar1.textContent = selected.cohort[2][0];
    mar2.textContent = selected.cohort[2][1];
    mar3.textContent = selected.cohort[2][2];
    mar4.textContent = selected.cohort[2][3];
}

period.addEventListener("change", function () {
    updateDashboard(period.value);
});

updateDashboard("month");