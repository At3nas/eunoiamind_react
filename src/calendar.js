
const CalendarJS = () => {
  // Array con los meses
  let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // Almacenar la fecha del computador actual
  let currentDate = new Date();

  // Almacenar el día del mes actual
  let currentDay = currentDate.getDate();

  // Almacenar el número del mes
  // Del 0 al 11: donde 0 es Enero y 11 es Diciembre
  let monthNumber = currentDate.getMonth();

  // Almacenar el año actual
  let currentYear = currentDate.getFullYear();

  // Obtener el elemento con el id dates en el documento HTML
  let dates = document.getElementById("dates");
  // Obtener el elemento con el id month en el documento HTML
  let month = document.getElementById("month");
  // Obtener el elemento con el id year en el documento HTML
  let year = document.getElementById("year");
  // Obtener el elemento con el id calendar-prev en el documento HTML
  let prevMonthDOM = document.getElementById("calendar-prev");
  // Obtener el elemento con el id calendar-next en el documento HTML
  let nextMonthDOM = document.getElementById("calendar-next");

  // Escribe dentro del id="month", el nombre del mes actual
  // Basándose en el Array creado al inicio, buscamos la posición correspondiente al
  // mes actual. Luego lo imprime dentro del elemento con el id month.
  month.textContent = monthNames[monthNumber];

  // Escribe dentro del id="year", el nombre del año actual
  year.textContent = currentYear.toString();

  prevMonthDOM.addEventListener('click', () => lastMonth());
  nextMonthDOM.addEventListener('click', () => nextMonth());

  writeMonth(monthNumber);

  // Funciones
  // Función que escribe los meses:
  function writeMonth(month) {
    for (let i = startDay(); i > 0; i--) {
      dates.innerHTML += ` <p class="month-day last-days">
            ${getTotalDays(monthNumber - 1) - (i - 1)}
        </p>`;

    }

    for (let i = 1; i <= getTotalDays(month); i++) {
      if (i === currentDay) {
        dates.innerHTML += `<p class="month-day today">${i}</p>`;
      } else {
        dates.innerHTML += `<p class="month-day">${i}</p>`;
      }
    }
  }

  // Función que calcula el total de días que tiene que escribir según el mes:
  function getTotalDays(month) {
    // Si el mes es igual a -1, sobreescribimos por 11
    if (month === -1) month = 11;
    // Los meses que tienen 31 días
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
      return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
      // Los meses que tienen 30 días
      return 30;
    } else {
      // Si es año bisiesto, Febrero tiene 29 días. En caso contrario, tiene 28
      return isLeap() ? 29 : 28;
    }

  }

  // Función que calcula si el año es bisiesto:
  function isLeap() {
    // Si el año actual no es divisible por 100 y sí es divisible por 4,
    // O es divisible entre 400
    // entonces isLeap = true (es año bisiesto)
    return ((currentYear % 100 !== 100 && currentYear % 4 === 0) || currentYear % 400 === 0);
  }

  // Función que calcula el día en el que empieza el mes:
  function startDay() {
    // Creamos variable que almacena el año actual y el mes actual. El día inicial es 1.
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay() - 1) === -1) ? 6 : start.getDay() - 1;
  }

  // Función que dibuja el mes anterior:
  function lastMonth() {
    // Si estamos en un mes distinto de Enero, le restamos 1
    if (monthNumber !== 0) {
      monthNumber--;
    } else {
      // Si estamos en Enero, entonces el mes anterior tiene que ser Diciembre (11 en el Array)
      monthNumber = 11;
      currentYear--;
    }

    setNewDate();
  }

  // Función que dibuja el mes siguiente:
  function nextMonth() {
    if (monthNumber !== 11) {
      monthNumber++;
    } else {
      monthNumber = 0;
      currentYear++;
    }
    setNewDate();
  }
  // Función que establece nueva fecha al mover el calendario:
  function setNewDate() {
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = "";
    writeMonth(monthNumber);
  }

  // console.log(currentDay+"/"+monthNumber+"/"+currentYear);
};

export default CalendarJS;