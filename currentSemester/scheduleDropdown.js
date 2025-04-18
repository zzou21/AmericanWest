const scheduleDropdownButtons = document.querySelectorAll(".scheduleDropdownButton");

scheduleDropdownButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dropdownID = button.getAttribute("data-target");
        const dropdownContent = document.getElementById(dropdownID);
        dropdownContent.classList.toggle("active");

        const rotateCaret = button.querySelector(".caret")
        rotateCaret.classList.toggle("rotate")
    })
})