function openModal(movieTitle) {
    document.getElementById("modaltitle").innerText = movieTitle;
    document.getElementById("movieModal").style.display = movieTitle;

}
function closeModal(){
    document.getElementById("movieModal").style.display = "none";
}
