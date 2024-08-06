document.addEventListener("DOMContentLoaded", function () {
    var billInput = document.getElementById("billInput");
    var usageType = document.getElementById("usageType");
    var systemSizeDiv = document.getElementById("div-system-size");
    var systemPriceDiv = document.getElementById("div-system-price");
    var annualSavingsDiv = document.getElementById("div-annual-savings");
    var energyGeneratedDiv = document.getElementById("div-energy-generated");
    var subsidyDiv = document.getElementById("div-subsidy");
    var subsidyContainer = document.getElementById("subsidyContainer");

    function updateCalculations() {
        var billAmount = parseFloat(billInput.value);
        var multiplier = usageType.value === "commercial" ? 1.2 : 1.0; // Corrected multiplier value

        if (!isNaN(billAmount)) {
            // Calculate system size, price, annual savings, and energy generated based on bill amount
            var systemSize = (billAmount / 1000).toFixed(1) + " kW";
            var price = (billAmount * 60 * multiplier).toLocaleString("en-IN", { style: "currency", currency: "INR" });
            var annualSavings = (billAmount * 12).toLocaleString("en-IN"); // Assuming annual savings = 12 * monthly bill
            var energyGenerated = (billAmount * 0.65).toFixed(0); // Assuming energy generated = 0.65 * monthly bill
            var subsidyAmount = (billAmount * 30).toLocaleString("en-IN", { style: "currency", currency: "INR" });

            // Update text content of the divs
            systemSizeDiv.textContent = "System Size: " + systemSize;
            if (usageType.value === "home") {
                systemPriceDiv.textContent = "Price: " + price + " (excluding subsidy)";
                subsidyDiv.textContent = "Subsidy: " + subsidyAmount;
                subsidyDiv.style.color = "initial";
                subsidyContainer.style.backgroundColor = "white"; // Reset background color
            } else {
                systemPriceDiv.textContent = "Price: " + price;
                subsidyDiv.textContent = "Subsidy:";
                subsidyDiv.style.color = "gray";
                subsidyContainer.style.backgroundColor = "lightGray";
            }
            annualSavingsDiv.textContent = "Annual Savings: Rs. " + annualSavings;
            energyGeneratedDiv.textContent = "Energy Generated: " + energyGenerated + " units";
        } else {
            // Clear divs if input is not a valid number
            systemSizeDiv.textContent = "System Size: ";
            systemPriceDiv.textContent = "Price:";
            annualSavingsDiv.textContent = "Annual Savings:";
            energyGeneratedDiv.textContent = "Energy Generated:";
            subsidyDiv.textContent = "Subsidy:";
            subsidyDiv.style.color = "initial";
            subsidyContainer.style.backgroundColor = "white"; // Reset background color
        }
    }

    billInput.addEventListener("input", updateCalculations);
    usageType.addEventListener("change", updateCalculations);
});
