function submitMessage() {
    const messageBox = document.getElementById('message');
    const displayArea = document.getElementById('displayArea');

    if (messageBox.value.trim() != '') {
        const messagePara = document.createElement('p');
        messagePara.innerText = messageBox.value;
        displayArea.appendChild(messagePara);
        
        messageBox.value = ''; // Clear the textarea after message is added
    } else {
        alert('Please write something sweet before sending!');
    }
}
