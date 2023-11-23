document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const modal = document.getElementById('modal');

    toggleButton.addEventListener('click', function () {
        modal.classList.toggle('hidden');
    });
});
