// The complete list of available powers
const ALL_POWERS = [
    "Super Strength",
    "Flight (Self-Propelled)",
    "Invisibility",
    "Telepathy (Mind Reading)",
    "Telekinesis (Moving Objects)",
    "Super Speed",
    "Time Manipulation (Minor)",
    "Force Field Generation",
    "Elemental Control (Water/Fire)",
    "Enhanced Healing Factor",
    "Shapeshifting",
    "Precognition (Seeing the Future)",
    "Energy Blasts",
    "Intangibility (Phasing)",
    "Illusion Casting"
];

const NUMBER_TO_SELECT = 3; // We want to select exactly three powers

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * @param {Array<string>} array - The array to shuffle.
 * @returns {Array<string>} The shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index before the current one
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Selects three unique powers and displays them on the page.
 */
function selectAndDisplayPowers() {
    // 1. Create a shallow copy of the powers array
    // This is important so we don't modify the original ALL_POWERS list
    let powersCopy = [...ALL_POWERS]; 
    
    // 2. Shuffle the copied array
    const shuffledPowers = shuffleArray(powersCopy);
    
    // 3. Select the first three powers from the shuffled array
    // The slice method gets the first three elements (from index 0 up to, but not including, index 3)
    const selectedPowers = shuffledPowers.slice(0, NUMBER_TO_SELECT);
    
    // 4. Get the results div from the HTML
    const resultsDiv = document.getElementById('results');
    
    // 5. Build the HTML content to display the results
    let htmlContent = '<h2>Your Chosen Powers:</h2>';
    htmlContent += '<ul class="power-list">';
    
    // Create an <li> for each selected power
    selectedPowers.forEach(power => {
        htmlContent += `<li>${power}</li>`;
    });
    
    htmlContent += '</ul>';
    
    // 6. Insert the new HTML into the results div
    resultsDiv.innerHTML = htmlContent;
}

// Wait for the entire HTML document to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the button element by its ID
    const button = document.getElementById('selectButton');
    
    // Attach the main function to the button's click event
    if (button) {
        button.addEventListener('click', selectAndDisplayPowers);
    }
});
