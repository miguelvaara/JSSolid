// app.js

// Get references to HTML elements
const languageSelect = document.getElementById('languageSelect');
const groupsDropdown = document.getElementById('groupsDropdown');

// Function to handle the rendering of the group dropdown
function renderGroupsDropdown(groups) {
    // Clear previous options except the first default option
    groupsDropdown.innerHTML = '<option value="">-- Please select a group --</option>';

    // If no groups found, disable the dropdown
    if (groups.length === 0) {
        groupsDropdown.disabled = true;
        return;
    }

    // Enable the dropdown (this ensures it's always enabled once data is fetched)
    groupsDropdown.disabled = false;

    // Render each group as a dropdown option
    groups.forEach(group => {
        const option = document.createElement('option');
        option.value = group.uri;
        option.textContent = group.prefLabel;
        groupsDropdown.appendChild(option);
    });
}

// Function to handle language selection
async function handleLanguageSelection() {
    const selectedLanguage = languageSelect.value;
    
    // Fetch the groups based on the selected language
    const groups = await fetchGroups(selectedLanguage);

    // Render the groups in the dropdown
    renderGroupsDropdown(groups);
}

// Function to handle group selection and opening a new tab
function handleGroupSelection() {
    const selectedUri = groupsDropdown.value;
    if (selectedUri) {
        window.open(selectedUri, '_blank'); // Open the URI in a new tab
    }
}

// Attach the change event listener to the language dropdown
languageSelect.addEventListener('change', handleLanguageSelection);

// Attach the change event listener to the groups dropdown
groupsDropdown.addEventListener('change', handleGroupSelection);

// Fetch default groups for English on page load and ensure the dropdown is enabled
window.addEventListener('DOMContentLoaded', () => {
    handleLanguageSelection(); // Automatically fetches groups for the default language (English)
});
