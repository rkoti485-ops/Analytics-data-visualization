document.getElementById("refresh").addEventListener("click", function () {
    this.textContent = "Updated!";
    
    setTimeout(() => {
        this.textContent = "Refresh Data";
    }, 1500);
});