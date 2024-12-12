// definicion de la sala
const FILAS = 5 ; 
const COLUMNAS = 4 ;

// inicializacion de matriz
const theatherSeats = generateSeat(FILAS , COLUMNAS) ; 
console.log(theatherSeats);
// dibuja matriz 
drawMat(FILAS, COLUMNAS);

// actualiza gridColumns
updateGridColumns(COLUMNAS);





//funcion para reservar una sección

//genera la matriz
function generateSeat(rows, columns) {
    const seat = [];
    for (let i = 0; i < rows; i++) {
        seat[i] = [];
        for (let j = 0; j < columns; j++) {
            seat[i][j] = 'O';
        }
    }
    return seat;
}



// muestra el array 
function drawMat(rows, columns){
    let seatHTML = '';
    let k = 0 ;  // contador para generar letras de la A a la Z para las secciones
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            k += 1; 
            //seat[i][j] = k ;         
            seatHTML += `<div class="seat available" onclick="bookSeat(${i},${j})">A${k}</div>`;  // genera el HTML para mostrar el chart        
        }
    }
    document.getElementById('seating-chart').innerHTML = seatHTML;
}

// modifica gridContainer 
function updateGridColumns(columns) {
    const gridContainer = document.getElementById('seating-chart');
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 70px)`;
        //grid-template-columns: repeat(10,70px);
}



function bookSeat(row, column){
    
    if(theatherSeats[row][column] ==='O') 
    {
        theatherSeats[row][column] = 'X' ; 
        updateSeatStatus(row, column,'booked' );
        console.log(`Seat ${row},${column} booked!`) ;
    } 
    else 
    {
        console.log(`Seat ${row},${column} is already booked!`) ;
    }
}


function updateSeatStatus(row, column, status){
    // implementar codigo para actualizar el estado de la sección en el backend
    const seats = document.getElementsByClassName('seat');
    let index = 0 ; 
    index = (row * COLUMNAS) + column ; 
    console.log(index);  // muestra el indice de la sección en el array
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add(status);  // agrega el estado al div de la sección
}


function bookRandomSeat() {
    const availableSeats = [];

    for (let i = 0; i < theatherSeats.length; i++) {
        for (let j = 0; j < theatherSeats[i].length; j++) {
            if (theatherSeats[i][j] === 'O') {
                availableSeats.push({ row: i, column: j });
            }
        }
    }
    
    if (availableSeats.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSeats.length);
        const { row, column } = availableSeats[randomIndex];
        bookSeat(row, column);
        console.log(`Randomly booked seat ${row},${column}`);                
    } else {
        console.log('All seats are booked'); 
    }
}
        


