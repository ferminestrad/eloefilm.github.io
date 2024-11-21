function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function nextModal(currentModalId, nextModalId) {
    closeModal(currentModalId);
    openModal(nextModalId);
}

function prevModal(currentModalId, prevModalId) {
    closeModal(currentModalId);
    openModal(prevModalId);
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        var modals = document.getElementsByClassName('modal');
        for (var i = 0; i < modals.length; i++) {
            modals[i].style.display = "none";
        }
    }
});
