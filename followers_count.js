let count = 0 ; 

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue();
}

function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }
  
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

//
document.addEventListener('DOMContentLoaded', () => {
    function addEventToElement(elementId, eventType, callback) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener(eventType, callback);
        } else {
            console.error(`Element with ID ${elementId} not found.`);
        }
    }

    // Ejemplo de uso:
    addEventToElement('myButton', 'click', () => {
        console.log('Button clicked!');
    }); 

    addEventToElement('moveArea', 'mousemove', function(event) {
        console.log(`Mouse coordinates - X: ${event.clientX}, Y: ${event.clientY}`);
    });
    
    addEventToElement('keyInput','keydown', function() {
        console.log('Key pressed down!');
    });

    addEventToElement('keyInput', 'keyup', function() {
        console.log('Key released!');
    });

    addEventToElement('blur', 'blur', function() {
        console.log('Input blurred');
    });

    addEventToElement('scroll', '', function() {
        console.log('Document scrolled');
    });

    addEventToElement('myForm', 'submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        console.log('Form submitted!');
    });

  });