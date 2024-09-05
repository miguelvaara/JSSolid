// ui.js - responsible for UI rendering and DOM manipulation
function renderDropdown(dropdown, items, defaultOptionText = '-- Please select --') {
    dropdown.innerHTML = `<option value="">${defaultOptionText}</option>`;
    if (items.length === 0) dropdown.disabled = true;
    else {
        dropdown.disabled = false;
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.uri;
            option.textContent = item.prefLabel;
            dropdown.appendChild(option);
        });
    }
}
