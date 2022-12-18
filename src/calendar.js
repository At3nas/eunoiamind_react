// Array con los meses
let monthNames = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

// Almacenar la fecha del computador actual
let currentDate = new Date();

// Almacenar el día de la semana actual
let currentDay = currentDate.getDate();

// Almacenar el número del mes
// Del 0 al 11: donde 0 es Enero y 11 es Diciembre
let monthNumber = currentDate.getMonth();

// Almacenar el año actual
let currentYear = currentDate.getFullYear();

console.log("Hoy es "+currentDay+" de "+monthNumber+" del año "+currentYear);

