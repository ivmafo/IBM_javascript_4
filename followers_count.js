let count = 0 ; 

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}
