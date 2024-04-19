document.body.style.backgroundColor = "pink";

document.getElementById("loginButton").addEventListener("click", function(event) {
    
    // Prevent the default form submission
    event.preventDefault();
    
    
    // Check the precondition using the validateform function

    if (validateform()) {
         window.location.href = "cardetail.html";
    } else {
        // If condition is not met, show an alert or handle the error in some way
        alert("Please fill in valid information before proceeding.");
    }
});


// Function to validate form inputs

function validateform() {
    var username = document.forms["form1"]["username"].value;
    var email = document.forms["form1"]["email"].value;
    var password = document.forms["form1"]["password"].value;

    if (username == "") {
        alert("Please provide your username");
        return false;
    }

    if (email == "") {
        alert("Please enter valid email");
        return false;
    }

    // expression for email validation

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
        return false;
    }

    if (password == "") {
        alert("Please provide your password");
        return false;
    }

    return true;
}
function replace() {
    document.getElementById("image1").src = "image/carB.jpeg";
  }
  
  // Function to handle click event
  function clickHandler() {
    document.getElementById("para").textContent = "I am smart car";
  }
  
  // Function to handle mouseout event
  function mouseout() {
    document.getElementById("image1").src = "image/car.jpeg";
    document.getElementById("para").textContent = ""; 
  }
  
  // Adding event listeners to the image
  document.getElementById("image1").addEventListener("click", clickHandler);
  document.getElementById("image1").addEventListener("mouseover", replace);
  document.getElementById("image1").addEventListener("mouseout", mouseout);
