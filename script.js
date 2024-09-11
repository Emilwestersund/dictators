const dictators = [
    { name: "Adolf Hitler", role: "Leader of Nazi Germany", image: "last ned.webp" },
    { name: "Joseph Stalin", role: "Soviet Political Leader", image: "stalin.jpg" },
    { name: "Mao Zedong", role: "Communist Leader of China", image: "mao.jpg" },
    { name: "Saddam Hussein", role: "President of Iraq", image: "saddam.jpg" },
    { name: "Benito Mussolini", role: "Dictator of Italy", image: "benito.jpg" },
    { name: "Kim Jong-un", role: "Supreme Leader of North Korea", image: "jong.webp" },
    { name: "Pol Pot", role: "Leader of Khmer Rouge", image: "po.webp" }
];

function findDictator() {
    const input = document.getElementById('nameInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    document.getElementById('nameInput').value = '';

    const matches = dictators.filter(dictator => dictator.name.toLowerCase().includes(input));

    if (matches.length === 0) {
        resultDiv.innerHTML = '<p>No dictators found.</p>';
    } else {
        matches.forEach(dictator => {
            const dictatorDiv = document.createElement('div');
            dictatorDiv.classList.add('dictator');
            dictatorDiv.innerHTML = `
                <img src="${dictator.image}" alt="${dictator.name}">
                <p><strong>${dictator.name}</strong></p>
                <p>${dictator.role}</p>
            `;
            resultDiv.appendChild(dictatorDiv);
        });
    }
}