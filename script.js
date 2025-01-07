let themeBtn = document.querySelector("#theme");

// themeBtn.addEventListener("click",()=>{
//     console.log('changing mode');
// })

let body = document.querySelector("body");

let currTheme = "light"
themeBtn.addEventListener("click", () => {
    if (currTheme === "light") {
        currTheme = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        currTheme = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currTheme);
});

/////////////////////////////////////////////////////
let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", (event) => {

    //event.preventDefault(); // Prevent form submission

    let inputs = document.querySelectorAll("input");
    let isValid = true;

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        if (inputs[i].value.trim() === "") {
            inputs[i].setAttribute("required", "true"); // Add required attribute
            isValid = false;
        } else {
            inputs[i].removeAttribute("required"); // Remove required if filled
        }

        //for email validation

        if (input.type === "email") {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                alert("Please enter a valid email address.");
            }
        }
       
    }

    if (!isValid) {
        alert("Please fill in all fields before submitting.");
        return; // Stop further execution
    }

    ////////////////////////////////////////////////////////////////////////

    let warning = prompt("Do you Want to Submit the Form? (Yes/No)");
    if(warning=="null" || warning=="" || warning=="No"|| warning === "no"|| warning ==="NO"){
        alert("form wasn't submitted");
    }
    else if(warning=="Yes" || warning == "Yes".toLowerCase() || "Yes".toUpperCase()){
        alert("Form Submitted");
    }
    else {
        alert("user cancelled the form");
    }
})