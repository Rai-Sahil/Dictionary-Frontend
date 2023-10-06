function searchDefinition() {
    const word = document.getElementById('searchInput').value;

    if (!word) {
        document.getElementById('searchResult').textContent = 'Please enter a word to search.';
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://disctionary-backend.onrender.com/api/definitions?word=${word}`, true);

    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.found) {
                    document.getElementById('searchResult').textContent = `Word: ${word}\nDefinition: ${response.definition}\nRequest #: ${response.numberOfRequest}`;
                } else {
                    document.getElementById('searchResult').textContent = `Word '${word}' not found.\nRequest #: ${response.numberOfRequest}`;
                }
            } else {
                document.getElementById('searchResult').textContent = 'Error: ' + xhr.status;
            }
        }
    };

    xhr.send();
}