async function fetchSynthesisTable() {
    const response = await fetch('f:\\python\\a_block\\toml\\syn_table.toml');
    const tomlText = await response.text();
    const synthesisTable = toml.parse(tomlText);
    displaySynthesisTable(synthesisTable);
}

function displaySynthesisTable(synthesisTable) {
    const tableBody = document.querySelector('#synthesis-table tbody');
    for (const [item, details] of Object.entries(synthesisTable)) {
        const row = document.createElement('tr');

        const itemName = document.createElement('td');
        itemName.textContent = item;
        row.appendChild(itemName);

        const materials = document.createElement('td');
        materials.textContent = details[0].join(', ');
        row.appendChild(materials);

        const materialQuantities = document.createElement('td');
        materialQuantities.textContent = details[1].join(', ');
        row.appendChild(materialQuantities);

        const synthesisQuantity = document.createElement('td');
        synthesisQuantity.textContent = details[2];
        row.appendChild(synthesisQuantity);

        const synthesisLocation = document.createElement('td');
        synthesisLocation.textContent = details[3];
        row.appendChild(synthesisLocation);

        tableBody.appendChild(row);
    }
}

window.onload = fetchSynthesisTable;