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

document.addEventListener("DOMContentLoaded", function() {
    const menuActivator = document.getElementById("menu-activator");
    const menuSidebar = document.getElementById("menu-sidebar");
    
    // Store the original width of the menuSidebar
    const originalWidth = menuSidebar.style.width || "200px"; // Change this to the original width

    menuActivator.addEventListener("click", function() {
        // Check current width and toggle
        if (menuSidebar.style.width === "74px") {
            menuSidebar.style.width = "350px"; // Restore original width
        } else {
            menuSidebar.style.width = "74px"; // Set to 74px
        }
    });
});



function checkClassCode() {
    // Get the value of the class code input
    const classCode = document.getElementById("class-code").value.trim().toLowerCase();

    // Check the entered class code and redirect based on the code
    if (classCode === "/ping") {
        alert("ping succesful✅");
    } 
    else if (classCode === "plexy") {
        window.location.replace("classes/plmath/");
    }
    else if (classCode === "pizza") {
        window.location.replace("classes/pizzamath/");
    }
    else {
        alert("Something went wrong\nCouldn't join the class. Invalid Code. You can find codes here \n\nhttps://sites.google.com/view/goclassroomcodes/home")
        window.location.href = "index.html";
    }
}