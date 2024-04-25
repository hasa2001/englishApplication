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

function addedWordDescriptionModal(wordId) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                const text =   JSON.parse(request.responseText);
                const modal = document.getElementById("addedWordModal");
                const label =document.getElementById("addedWordModalLabel");
                const textArea =document.getElementById("addedWordDescriptionTextArea");
                c = new bootstrap.Modal(modal);
                c.show();
                label.innerText =text.word;
                textArea.value =text.description;

            }
        }
    };
    request.open("get", "http://localhost:8080/english/viewDescription?id=" + wordId, true);
    request.send();

}

function updateWordDescription(wordId) {
    alert(wordId);
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