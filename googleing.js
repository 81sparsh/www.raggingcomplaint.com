
document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.querySelector(".s-input");
    var suggestionsContainer = document.querySelector(".suggestions-container");

    // Predefined suggestions
    var predefinedSuggestions = ["michael dhiman", "xxx", "snehail", "ragging complaint", "fuck off"];

    // Event listener for click on the search input field
    searchInput.addEventListener("click", function () {
        showSuggestionsDropdown();
        updateSuggestions();
    });

    // Event listener for keypress on the search input field
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission
            searchAndRedirect();
        }
    });

    // Event listener for click on the suggestions dropdown
    suggestionsContainer.addEventListener("click", function (event) {
        // Handle the click on the suggestion dropdown
        var clickedItem = event.target;
        if (clickedItem.classList.contains("suggestion-item")) {
            selectSuggestion(clickedItem.textContent);
            searchAndRedirect(); // Continue the operation after selecting a suggestion
        }
    });

    // Event listener to close the dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            hideSuggestionsDropdown();
        }
    });

    // Function to show the suggestion dropdown
    function showSuggestionsDropdown() {
        suggestionsContainer.style.display = "block";
    }

    // Function to hide the suggestion dropdown
    function hideSuggestionsDropdown() {
        suggestionsContainer.style.display = "none";
    }

    // Function to update suggestions based on user input
    function updateSuggestions() {
        var searchTerm = searchInput.value.trim().toLowerCase();
        var filteredSuggestions = predefinedSuggestions.filter(function (suggestion) {
            return suggestion.toLowerCase().includes(searchTerm);
        });

        // Display suggestions in the container
        renderSuggestions(filteredSuggestions);
    }

    // Function to render suggestions in the container
    function renderSuggestions(suggestions) {
        suggestionsContainer.innerHTML = "";

        suggestions.forEach(function (suggestion) {
            var suggestionItem = document.createElement("div");
            suggestionItem.className = "suggestion-item";

            // Add clock and cross symbols to each suggestion
            suggestionItem.innerHTML = "<span style='float:left; padding-right: 5px;'>🕒</span>" + suggestion + "<span style='float:right;'>✖</span>";

            suggestionItem.onclick = function () {
                selectSuggestion(suggestion);
            };

            suggestionsContainer.appendChild(suggestionItem);
        });
    }

    // Function to handle selecting a suggestion
    function selectSuggestion(suggestion) {
        // Extract text without clock and cross symbols
        var suggestionText = suggestion.replace("🕒", "").replace("✖", "");
        searchInput.value = suggestionText;
        hideSuggestionsDropdown();
    }

    // Function to handle search and redirection
    function searchAndRedirect() {
        var searchTerm = searchInput.value.trim();

        if (predefinedSuggestions.includes(searchTerm)) {
            // Use predefined redirects for specific search terms
            var redirectURL = getRedirectURL(searchTerm);
            window.location.href = redirectURL;
            hideSuggestionsDropdown();
        } else {
            // Default redirection if no specific match
            var defaultRedirectURL = "go3.html?q=" + encodeURIComponent(searchTerm);
            window.location.href = defaultRedirectURL;
            hideSuggestionsDropdown();
        }
    }
    function getRedirectURL(searchTerm) {
        var lowerCaseSearchTerm = searchTerm.toLowerCase();
        var redirectURL;
    
        switch (lowerCaseSearchTerm) {
            case "michael dhiman":
            case "michael jackson":
            case "michael dhi":
                redirectURL = "go1.html";
                break;
            case "hello":
                redirectURL = "foo.html";
                break;
            case "e":
                redirectURL = "emojicam.html";
                break;
            case "xxx":
                redirectURL = "go2.html";
                break;
            case "snehail":
            case "snehail devrani":
                redirectURL = "go4.html";
                break;
            case "ragging complaint":
            case "ragging":
                redirectURL = "comp1.html";
                break;
            
            default:
                redirectURL = "go3.html?q=" + encodeURIComponent(searchTerm);
                break;
        }
    
        return redirectURL;
    }
    
    
});