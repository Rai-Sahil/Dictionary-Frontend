function addDefinition() {
    const word = document.getElementById('wordInput').value;
    const definition = document.getElementById('definitionInput').value;

    if (!word || !definition) {
        document.getElementById('storeResult').textContent = 'Please fill in both fields.';
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://disctionary-backend.onrender.com/api/definitions', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('storeResult').textContent = JSON.parse(xhr.responseText).message;
            } else {
                document.getElementById('storeResult').textContent = 'Error: ' + xhr.status;
            }
        }
    };

    const data = JSON.stringify({ word, definition });
    xhr.send(data);
}