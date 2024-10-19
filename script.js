// Show the "Create Classroom" pop-up and overlay
document.getElementById("createClassButton").addEventListener("click", function() {
    document.getElementById("create-classroom").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

// Show the "Join Classroom" pop-up and overlay
document.getElementById("joinClassButton").addEventListener("click", function() {
    document.getElementById("join-classroom").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

function checkClassCode() {
    // Get the value of the class code input
    const classCode = document.getElementById("class-code").value.trim().toLowerCase();

    // Check the entered class code and redirect based on the code
    if (classCode === "/ping") {
        alert("ping succesful✅");
    } 
    else if (classCode === "plexy") {
        window.location.replace("classes/plmath/index.html");
    }
    else if (classCode === "pizza") {
        window.location.replace("classes/pizzamath/index.html");
    }
    else {
        alert("Something went wrong\nCouldn't join the class. Invalid Code. You can find codes here \n\nhttps://sites.google.com/view/goclassroomcodes/home")
        window.location.href = "index.html";
    }
}