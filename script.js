const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchHistoryList = document.getElementById('history-list');

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

searchBtn.addEventListener('click', () => {
    const searchValue = searchInput.value.trim();
    if (searchValue && !searchHistory.includes(searchValue)) {
        addToHistory(searchValue);
        renderHistory();
    }
});

const addToHistory = (searchValue) => {
    searchHistory.push(searchValue);
    addToLocalStorage();
}

function addToLocalStorage() {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function renderHistory() {
    searchHistoryList.innerHTML = '';
    searchHistory.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        searchHistoryList.appendChild(li);
        li.classList.add('history-item');
    });
}

function clearHistory() {
    localStorage.removeItem('searchHistory');
    searchHistoryList.innerHTML = '';
    searchHistory = [];
}

renderHistory();

function darkMode() {
    document.body.classList.toggle("dark-mode");
    console.log("dark mode");
}