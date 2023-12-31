let clicks = 0;
let manualClickValue = 1;
let manualClickUpgradeCost = 10;
let autoClickUpgradeCost = 50;
let autoClickLevel = 0;
let autoClickValue = 1;
let autoClickInterval;

document.getElementById('clickButton').addEventListener('click', () => {
    clicks += manualClickValue;
    updateClickCount();
    disableAutoClickerTemporarily();
});

document.getElementById('upgradeManual').addEventListener('click', () => {
    if (clicks >= manualClickUpgradeCost) {
        clicks -= manualClickUpgradeCost;
        manualClickUpgradeCost *= 2;
        manualClickValue *= 2;
        updateClickCount();
        alert('Manual click upgraded!');
    } else {
        alert('Not enough clicks to upgrade!');
    }
});

document.getElementById('upgradeAuto').addEventListener('click', () => {
    if (clicks >= autoClickUpgradeCost) {
        clicks -= autoClickUpgradeCost;
        autoClickUpgradeCost *= 2;
        autoClickLevel++;
        autoClickValue *= 2;
        updateClickCount();
        alert('Autoclicker upgraded!');
        startAutoClicker();
    } else {
        alert('Not enough clicks to upgrade!');
    }
});

function updateClickCount() {
    document.getElementById('clickCount').textContent = `Clicks: ${clicks}`;
}

function startAutoClicker() {
    if (autoClickInterval) {
        clearInterval(autoClickInterval);
    }
    autoClickInterval = setInterval(() => {
        clicks += autoClickValue;
        updateClickCount();
    }, 1000);
}

function disableAutoClickerTemporarily() {
    clearInterval(autoClickInterval);
}


