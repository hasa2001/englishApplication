function openModal1() {
    // const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle);
    var modal = document.getElementById("staticBackdrop");
    b = new bootstrap.Modal(modal);
    b.show();
    // alert("Hello");

}

function openModal2() {
    // const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle);
    var modal = document.getElementById("responseModal");
    k = new bootstrap.Modal(modal);
    k.show();
    // alert("Hello");


}

function closeModal1() {
    // const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle);
    const modal = document.getElementById("staticBackdrop");
    b = new bootstrap.Modal(modal);
    b.hide();
    // alert("Hello");

}

function closeModal2() {
    // const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle);
    var modal = document.getElementById("responseModal");
    k = new bootstrap.Modal(modal);
    k.hide();
    // alert("Hello");
    console.log("close");
    // let myModal = new bootstrap.Modal(document.getElementById('responseModal'));
    // myModal.hide();


}


function processResponse() {
    const wordLabel = document.getElementById("wordLabel").value;
    const wordDescription = document.getElementById("responseTextArea").value;
    const accordion = document.getElementById("accordion");

    if (wordLabel.length == 0 | wordDescription.length == 0) {
        alert("Word details are Empty");
    } else {

        let form = new FormData();
        form.append("word", wordLabel);
        form.append("description", wordDescription);
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    // let details = request.responseText;
                    // accordion.innerHTML =details;
                    k.hide();

                }
            }
        }
        request.open("post", "http://localhost:8080/english/addNewWord", true);
        request.send(form);
    }
}

function addedWordDescriptionModal(wordId) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                const text = JSON.parse(request.responseText);
                const modal = document.getElementById("addedWordModal");
                const label = document.getElementById("addedWordModalLabel");
                const textArea = document.getElementById("addedWordDescriptionTextArea");
                const id = document.getElementById("wordId");
                c = new bootstrap.Modal(modal);
                c.show();
                label.innerText = text.word;
                textArea.value = text.description;
                id.value = text.id;

            }
        }
    };
    request.open("get", "http://localhost:8080/english/viewDescription?id=" + wordId, true);
    request.send();

}

function updateWordDescription() {
    const wordId = parseInt(document.getElementById("wordId").value);
    const textArea = document.getElementById("addedWordDescriptionTextArea").value;

    let form = new FormData();
    form.append("id", wordId);
    form.append("text", textArea);
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {

        if (request.readyState == 4) {
            if (request.status == 200) {
                alert("Update Success");
                const text = JSON.parse(request.responseText);
                textArea.innerText = text.description;

            }
        }
    }
    request.open("post", "http://localhost:8080/english/update", true);
    request.send(form);
}

function deleteWord() {
    const wordId = parseInt(document.getElementById("wordId").value);
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                c.hide();
                window.location.reload();
            }
        }
    }
    request.open("get", "http://localhost:8080/english/delete?id=" + wordId, true);
    request.send();
}

