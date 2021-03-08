function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextField = parent.nextElementSibling;

            // Check for validation
            if(input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextField);
            } else if(input.type ==='email' && validateEmail(input)) {
                nextSlide(parent, nextField);
            } else if(input.type === "password" && validateUser(input)) {
                nextSlide(parent, nextField);
            } else {
                parent.style.animation = "shake 0.5s ease";
            }
        })
    })
}

function validateUser(user) {
    if(user.value.length < 6) {
        error('rgb(189, 87, 87');
    } else {
        error('rgb(87,189,130)');
        return true;
    }
}

function validateEmail(email) {
    // const validation = /^[^\S@]+@[^\S@]+\.[^\S@]+$/;
    const validation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(validation)
    if(validation.test(email.value)) {
        error('rgb(87,189,130)');
        return true;
    } else {
        error('rgb(189, 87, 87');
    }
}

function nextSlide(parent, nextField) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextField.classList.add('active');
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();