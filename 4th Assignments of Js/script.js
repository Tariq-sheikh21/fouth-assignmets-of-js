// Function to check the type of character
function checkCharacterType() {
    // Get input character from the user
    var inputCharacter = document.getElementById("charInput").value;

    // Check if the input is null
    if (inputCharacter === null || inputCharacter === "") {
        alert("Please enter a value.");
        return;
    }

    // Check if the character is a number
    if (!isNaN(inputCharacter)) {
        document.getElementById("result").innerHTML = inputCharacter + " is a number.";
    }
     
    // Check if the character is an uppercase letter
    else if (inputCharacter.charCodeAt(0) >= 65 && inputCharacter.charCodeAt(0) <= 90) {
        document.getElementById("result").innerHTML = inputCharacter + " is an uppercase letter.";
    }
    
    // Check if the character is a lowercase letter
    else if (inputCharacter.charCodeAt(0) >= 97 && inputCharacter.charCodeAt(0) <= 122) {
        document.getElementById("result").innerHTML = inputCharacter + " is a lowercase letter.";
    }
    
    else {
        document.getElementById("result").innerHTML = inputCharacter + " is not a number, uppercase letter, or lowercase letter.";
    }
}


        // Write a JavaScript program that accept two integers anddisplay the larger

        function compareIntegers() {
            // Get input values from the user
            var num1 = parseInt(document.getElementById("num1").value);
            var num2 = parseInt(document.getElementById("num2").value);
            
            // Check and display the result
            if (num1 > num2) {
                document.getElementById("result1").innerHTML = "The larger integer is: " + num1;
            } else if (num2 > num1) {
                document.getElementById("result1").innerHTML = "The larger integer is: " + num2;
            } else {
                document.getElementById("result1").innerHTML = "Both integers are equal.";
            }
        };
        function checkNumber() {
            // Get input number from the user
            var inputNumber = document.getElementById("numberInput").value;

            // Convert the input to a number
            var number = parseFloat(inputNumber);

            // Check if the number is positive, negative, or zero
            if (isNaN(number)) {
                document.getElementById("result2").innerHTML = "Please enter a valid number.";
            } else if (number > 0) {
                document.getElementById("result2").innerHTML = number + " is a positive number.";
            } else if (number < 0) {
                document.getElementById("result2").innerHTML = number + " is a negative number.";
            } else {
                document.getElementById("result2").innerHTML = "The number is zero.";
            }
        };

        function isVowel(char) {
            const vowels = "aeiouAEIOU";
            return vowels.includes(char);
        }
    
        function checkVowel() {
            // Get input from the user
            const user_input = prompt("Enter a character:");
    
            // Check if the input is a single character
            if (user_input.length === 1) {
                const result = isVowel(user_input);
                alert(`The character '${user_input}' is a vowel: ${result}`);
            } else {
                alert("Please enter a single character.");
            }
        };

        // Password Validator

        const correctPassword = "mySecretPassword";

        function validatePassword() {
            // b. Ask user to enter his/her password
            const userPassword = document.getElementById("passwordInput").value;
    
            // c. Validate the two passwords
            if (!userPassword) {
                // i. Check if the user has entered a password
                alert("Please enter your password");
            } else if (userPassword.toLowerCase() === correctPassword.toLowerCase()) {
                // ii. Check if both passwords are the same (case-insensitive)
                alert("Correct! The password you entered matches the original password.");
            } else {
                alert("Incorrect password");
            }
        }


        // This if/else statement does not work


        var greeting;
        var hour = 13;
    
        if (hour < 18) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }
    
        // Display the greeting
        document.write("<p>" + greeting + "</p>");
      

        function displayGreeting() {
            // Get time input from the user
            const timeInput = document.getElementById("timeInput").value;
    
            // Validate if the input is a number
            if (isNaN(timeInput)) {
                alert("Please enter a valid time in 24-hour format.");
                return;
            }
    
            // Convert input to a number
            const time = parseInt(timeInput);
    
            // Determine the message based on the time
            if (time >= 0 && time < 1200) {
                alert("Good morning!");
            } else if (time >= 1200 && time < 1700) {
                alert("Good afternoon!");
            } else if (time >= 1700 && time < 2100) {
                alert("Good evening!");
            } else if (time >= 2100 && time <= 2359) {
                alert("Good night!");
            } else {
                alert("Please enter a valid time in 24-hour format.");
            }
        };