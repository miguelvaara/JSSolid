// api.js - handles all API interactions
async function fetchGroups(language) {
    const apiUrl = `https://api.finto.fi/rest/v1/yso/groups?lang=${language}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        return data.groups;
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}
