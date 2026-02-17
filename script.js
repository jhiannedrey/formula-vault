function searchFormula() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const filtered = formulas.filter(item =>
        item.name.toLowerCase().includes(input) ||
        item.description.toLowerCase().includes(input) ||
        item.use.toLowerCase().includes(input) ||
        item.keywords.some(keyword => keyword.includes(input))
    );

    displayResults(filtered);
}

function filterCategory(category) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (category === "All") {
        displayResults(formulas);
    } else {
        const filtered = formulas.filter(item => item.category === category);
        displayResults(filtered);
    }
}

function displayResults(data) {
    const resultsDiv = document.getElementById("results");

    if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No formulas found.</p>";
        return;
    }

    data.forEach(item => {
        resultsDiv.innerHTML += `
            <div class="card">
                <h3>${item.name} (${item.platform})</h3>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Description:</strong> ${item.description}</p>
                <p><strong>Use:</strong> ${item.use}</p>
                <div class="formula">${item.formula}</div>
            </div>
        `;
    });
}
