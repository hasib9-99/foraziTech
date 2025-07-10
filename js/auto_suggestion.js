// Auto Suggestion Feature Implementation

// Predefined list of suggestions
const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli fruit",
    "Vanilla",
    "Watermelon",
    "Xigua",
    "Yellow passion fruit",
    "Zucchini"
];

// Create suggestion box container
const suggestionBox = document.createElement("div");
suggestionBox.id = "suggestion-box";
suggestionBox.style.position = "absolute";
suggestionBox.style.border = "1px solid #ccc";
suggestionBox.style.backgroundColor = "#fff";
suggestionBox.style.zIndex = "1000";
suggestionBox.style.maxHeight = "150px";
suggestionBox.style.overflowY = "auto";
suggestionBox.style.width = "200px";
suggestionBox.style.display = "none";
document.body.appendChild(suggestionBox);

// Function to position suggestion box below the input
function positionSuggestionBox(input) {
    const rect = input.getBoundingClientRect();
    suggestionBox.style.top = rect.bottom + window.scrollY + "px";
    suggestionBox.style.left = rect.left + window.scrollX + "px";
    suggestionBox.style.width = rect.width + "px";
}

// Function to clear suggestions
function clearSuggestions() {
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";
}

// Function to show suggestions
function showSuggestions(filteredSuggestions, input) {
    clearSuggestions();
    if (filteredSuggestions.length === 0) {
        return;
    }
    filteredSuggestions.forEach((suggestion) => {
        const div = document.createElement("div");
        div.textContent = suggestion;
        div.style.padding = "5px";
        div.style.cursor = "pointer";
        div.addEventListener("mousedown", function (e) {
            e.preventDefault(); // Prevent losing focus
            input.value = suggestion;
            clearSuggestions();
        });
        div.addEventListener("mouseover", function () {
            div.style.backgroundColor = "#e0e0e0";
        });
        div.addEventListener("mouseout", function () {
            div.style.backgroundColor = "#fff";
        });
        suggestionBox.appendChild(div);
    });
    suggestionBox.style.display = "block";
}

// Event listener for input field
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("auto-suggest-input");
    if (!input) {
        console.warn("Input field with id 'auto-suggest-input' not found.");
        return;
    }
    input.setAttribute("autocomplete", "off");
    input.addEventListener("input", function () {
        const value = input.value.trim().toLowerCase();
        if (value.length === 0) {
            clearSuggestions();
            return;
        }
        const filtered = suggestions.filter((item) =>
            item.toLowerCase().startsWith(value)
        );
        positionSuggestionBox(input);
        showSuggestions(filtered, input);
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", function (e) {
        if (e.target !== input && e.target.parentNode !== suggestionBox) {
            clearSuggestions();
        }
    });
});
