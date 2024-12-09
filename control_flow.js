//
let userRole = "admin";
let accessLevel;

//
let isLoggedIn = true;
let userMessage;

//
let isAuthenticated = true;

//
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

//
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}


let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";


console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log(authenticationStatus);