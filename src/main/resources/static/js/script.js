
function openModal1(){
    // const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle);
    const modal = document.getElementById("staticBackdrop");
    const k = new bootstrap.Modal(modal);
    k.show();
   // alert("Hello");

}
function openModal2(){
    // const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle);
    const modal = document.getElementById("responseModal");
    k=new bootstrap.Modal(modal);
    k.show();
    // alert("Hello");

}

function closeModal1(){
    // const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle);
    const modal = document.getElementById("staticBackdrop");
    k=new bootstrap.Modal(modal);
    k.hide();
    // alert("Hello");

}
function closeModal2(){
    // const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle);
    const modal = document.getElementById("responseModal");
    k=new bootstrap.Modal(modal);
    k.hide();
    // alert("Hello");

}
function processResponse(){
    const wordLabel =document.getElementById("wordLabel").value;
    const wordDescription =document.getElementById("responseTextArea").value;
    if (wordLabel.length==0&& wordDescription.length==0){
        alert("Word details are Empty");
    }else {

    }
}