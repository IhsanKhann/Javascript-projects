import { countryList } from "./code.js";

const dropDowns = document.querySelectorAll(".select-container select");
const BaseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/`;
const ExchangeBtn = document.getElementById("ExchangeBtn");
const input = document.querySelector("input");

// ✅ 1. Fill dropdowns and set defaults
for (let select of dropDowns) {
    for (let code in countryList) {
        const newOption = document.createElement("option");
        newOption.value = code;
        newOption.innerText = code;

        // Set default selections
        if (select.name === "from" && code === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && code === "PKR") {
            newOption.selected = true;
        }

        select.appendChild(newOption);
    }

    // ✅ Update flag on change
    select.addEventListener("change", (e) => {
        updateFlag(e.target);
    });

    // ✅ Also update flag on page load
    updateFlag(select);
}

// ✅ 2. Flag update function
function updateFlag(element) {
    const newCode = element.value;
    const countryCode = countryList[newCode];
    const img = element.parentElement.querySelector("img");

    if (img && countryCode) {
        img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    }
}

// ✅ 3. Exchange Rate fetch logic
async function ExchangeRates(event) {
    event.preventDefault();

    const fromSelect = document.querySelector('select[name="from"]');
    const toSelect = document.querySelector('select[name="to"]');

    const FromCurrency = fromSelect.value;
    const ToCurrency = toSelect.value;
    let Amount = parseFloat(input.value);

    if (Amount < 0 || isNaN(Amount)) {
        Amount = 1;
        input.value = 1;
    }

    const url = `${BaseURL}${FromCurrency.toLowerCase()}.json`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const rate = data[FromCurrency.toLowerCase()][ToCurrency.toLowerCase()];
        const result = Amount * rate;

        const ExchangeRate = document.getElementById("ExchangeRate");
        ExchangeRate.innerText = `${Amount} ${FromCurrency} = ${result.toFixed(3)} ${ToCurrency}`;
    } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
    }
}

// ✅ 4. Only add the click event once!
ExchangeBtn.addEventListener("click", ExchangeRates);

// learning:
// DOM , import and export, how apis work, how to use value. 
// how to add options to the select using javaScript
// eventSelectors.

