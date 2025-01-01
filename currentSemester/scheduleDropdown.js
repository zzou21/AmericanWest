const scheduleDropdownButtons = document.querySelectorAll(".scheduleDropdownButton");

scheduleDropdownButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dropdownID = button.getAttribute("data-target");
        const dropdownContent = document.getElementById(dropdownID);
        scheduleDropdownButtons.classList.toggle("active")
    })
})