export function createFlightCard(flight) {
  let departureTimeThere = flight.flight.legs[0].segments[0].departureDate.slice(11, flight.flight.legs[0].segments[0].departureDate.length - 3);

  let arrivalTimeThere = flight.flight.legs[0].segments[1].arrivalDate.slice(11, flight.flight.legs[0].segments[1].arrivalDate.length - 3) || flight.flight.legs[0].segments[0].arrivalDate.slice(11, flight.flight.legs[0].segments[0].arrivalDate.length - 3);

  let departureTimeBack = flight.flight.legs[1].segments[0].departureDate.slice(11, flight.flight.legs[0].segments[0].arrivalDate.length - 3);

  let arrivalTimeBack = flight.flight.legs[1].segments[1].arrivalDate.slice(11, flight.flight.legs[0].segments[0].arrivalDate.length - 3) || flight.flight.legs[1].segments[0].arrivalDate.slice(11, flight.flight.legs[0].segments[0].arrivalDate.length - 3);

  let durationInHoursThere = '' + Math.floor(flight.flight.legs[0].duration / 60);

  let durationInMinutesThere = calculateMinutesThere(flight);

  let durationInHoursBack = '' + Math.floor(flight.flight.legs[1].duration / 60);

  let durationInMinutesBack = calculateMinutesBack(flight);

  let departureDateThere = new Date(flight.flight.legs[0].segments[0].departureDate).getDate();

  let arrivalDateThere = new Date(flight.flight.legs[0].segments[1].arrivalDate).getDate() || new Date(flight.flight.legs[0].segments[0].arrivalDate).getDate();

  let departureDateBack = new Date(flight.flight.legs[1].segments[0].departureDate).getDate();

  let arrivalDateBack = new Date(flight.flight.legs[1].segments[1].arrivalDate).getDate() || new Date(flight.flight.legs[1].segments[0].arrivalDate).getDate();

  let departureDayThereNumberCode = new Date(flight.flight.legs[0].segments[0].departureDate).getDay();
  let departureDayThere = getWeekDay(departureDayThereNumberCode);

  let arrivalDayThereNumberCode = new Date(flight.flight.legs[0].segments[1].departureDate).getDay() || new Date(flight.flight.legs[0].segments[0].departureDate).getDay();
  let arrivalDayThere = getWeekDay(arrivalDayThereNumberCode);

  let departureDayBackNumberCode = new Date(flight.flight.legs[1].segments[0].departureDate).getDay() ;
  let departureDayBack = getWeekDay(departureDayBackNumberCode);

  let arrivalDayBackNumberCode = new Date(flight.flight.legs[1].segments[1].departureDate).getDay() || new Date(flight.flight.legs[1].segments[0].departureDate).getDay();
  let arrivalDayBack = getWeekDay(arrivalDayBackNumberCode);

  let departureMonthThereNumberCode = new Date(flight.flight.legs[0].segments[0].departureDate).getMonth();
  let departureMonthThere = getFlightMonth(departureMonthThereNumberCode);

  let arrivalMonthThereNumberCode = new Date(flight.flight.legs[0].segments[1].departureDate).getMonth() || new Date(flight.flight.legs[0].segments[0].departureDate).getMonth();
  let arrivalMonthThere = getFlightMonth(arrivalMonthThereNumberCode);

  let departureMonthBackNumberCode = new Date(flight.flight.legs[1].segments[0].departureDate).getMonth();
  let departureMonthBack = getFlightMonth(departureMonthBackNumberCode);

  let arrivalMonthBackNumberCode = new Date(flight.flight.legs[1].segments[1].departureDate).getMonth() || new Date(flight.flight.legs[1].segments[0].departureDate).getMonth();
  let arrivalMonthBack = getFlightMonth(arrivalMonthBackNumberCode);

  let html = `
  <div class="aviaticket__aviaticket">
    <div class="aviaticket__header">
      <div class="aviaticket__logo">
        <img src="${flight.flight.carrier.logo}" alt="airline">
      </div>
      <div class="aviaticket__price">
        <span>${flight.flight.price.total.amount} &#8381;</span>
        <p class="aviaticket__description">
          Стоимость для одного взрослого пассажира
        </p>
      </div>
    </div>
    <div class="aviaticket__there-container">
      <div class="aviaticket__there">
        <span class="aviaticket__sity">${flight.flight.legs[0].segments[0].departureCity.caption},</span>
        <span class="aviaticket__airport">${flight.flight.legs[0].segments[0].departureAirport.caption}</span>
        <span class="aviaticket__airport-abbreviation">(${flight.flight.legs[0].segments[0].departureAirport.uid})</span>
        <span class="aviaticket__arrow-right">&#8594;</span>
        <span class="aviaticket__sity">${flight.flight.legs[0].segments[1].arrivalCity.caption || flight.flight.legs[0].segments[0].arrivalCity.caption
    },</span>
        <span class="aviaticket__airport">${flight.flight.legs[0].segments[1].arrivalAirport.caption || flight.flight.legs[0].segments[0].arrivalAirport.caption
    }</span>
        <span class="aviaticket__airport-abbreviation">(${flight.flight.legs[0].segments[1].arrivalAirport.uid || flight.flight.legs[0].segments[0].arrivalAirport.uid
    })</span>
      </div>
      <div class="aviaticket__time">
        <div class="aviaticket__departure-time">
          <span class="aviaticket__time-value">${departureTimeThere}</span>
          <span class="aviaticket__date">${departureDateThere}</span>
          <span class="aviaticket__month">${departureMonthThere}</span>
          <span class="aviaticket__day">${departureDayThere}</span>
        </div>
        <div class="aviaticket__travel-time">
          <span class="aviaticket__watch">&#9719;</span>
          <span class="aviaticket__time-value">${durationInHoursThere} ч ${durationInMinutesThere} мин</span>
        </div>
        <div class="aviaticket__arrival-time">
          <span class="aviaticket__date">${arrivalDateThere}</span>
          <span class="aviaticket__month">${arrivalMonthThere}</span>
          <span class="aviaticket__day">${arrivalDayThere}</span>
          <span class="aviaticket__time-value">${arrivalTimeThere}</span>
          <span class="aviaticket__transfer-there">1 пересадка</span>
        </div>
      </div>
      <div class="aviaticket__flight">
        <p class="aviaticket__flight-text">
          Рейс выполняет:
          <span class="aviaticket__flight-carrier">${flight.flight.carrier.caption}</span>
        </p>
      </div>
    </div>
    <div class="aviaticket__back-container">
      <div class="aviaticket__back">
        <span class="aviaticket__sity">${flight.flight.legs[1].segments[0].departureCity.caption},</span>
        <span class="aviaticket__airport">${flight.flight.legs[1].segments[0].departureAirport.caption}</span>
        <span class="aviaticket__airport-abbreviation">(${flight.flight.legs[1].segments[0].departureAirport.uid})</span>
        <span class="aviaticket__arrow-right">&#8594;</span>
        <span class="aviaticket__sity">${flight.flight.legs[1].segments[1].arrivalCity.caption || flight.flight.legs[1].segments[0].arrivalCity.caption},</span>
        <span class="aviaticket__airport">${flight.flight.legs[1].segments[1].arrivalAirport.caption || flight.flight.legs[1].segments[0].arrivalAirport.caption}</span>
        <span class="aviaticket__airport-abbreviation">(${flight.flight.legs[1].segments[1].arrivalAirport.uid || flight.flight.legs[1].segments[0].arrivalAirport.uid})</span>
      </div>
      <div class="aviaticket__time">
        <div class="aviaticket__departure-time">
          <span class="aviaticket__time-value">${departureTimeBack}</span>
          <span class="aviaticket__date">${departureDateBack}</span>
          <span class="aviaticket__month">${departureMonthBack}</span>
          <span class="aviaticket__day">${departureDayBack}</span>
        </div>
        <div class="aviaticket__travel-time">
          <span class="aviaticket__watch">&#9719;</span>
          <span class="aviaticket__time-value">${durationInHoursBack} ч ${durationInMinutesBack} мин</span>
        </div>
        <div class="aviaticket__arrival-time">
          <span class="aviaticket__date">${arrivalDateBack}</span>
          <span class="aviaticket__month">${arrivalMonthBack}</span>
          <span class="aviaticket__day">${arrivalDayBack}</span>
          <span class="aviaticket__time-value">${arrivalTimeBack}</span>
          <span class="aviaticket__transfer-back">1 пересадка</span>
        </div>
      </div>
      <div class="aviaticket__flight">
        <p class="aviaticket__flight-text">
          Рейс выполняет:
          <span class="aviaticket__flight-carrier">${flight.flight.carrier.caption}</span>
        </p>
      </div>
    </div>
    <button class="aviaticket__btn">выбрать</button>
  </div>
`;

  return html;
}

// Получение значения минут в пути в пункт назначения
function calculateMinutesThere(flight) {
  let duration = '' + flight.flight.legs[0].duration / 60;
  let minutes = duration.slice(3, 5 || duration.length);

  return minutes;
}

// Получение значения минут в пути обратно
function calculateMinutesBack(flight) {
  let duration = '' + flight.flight.legs[1].duration / 60;
  let minutes = duration.slice(3, 5 || duration.length);

  return minutes;
}

// Получение дня недели
function getWeekDay(day) {
  const dayNumberCode = day;
  let weekDay;

  switch (dayNumberCode) {
    case 0:
      weekDay = 'вскр'
      break;
    case 1:
      weekDay = 'пн'
      break;
    case 2:
      weekDay = 'вт'
      break;
    case 3:
      weekDay = 'ср'
      break;
    case 4:
      weekDay = 'чт'
      break;
    case 5:
      weekDay = 'пт'
      break;
    default:
      weekDay = 'сб'
      break;
  }

  return weekDay;
}

// Получение месяца
function getFlightMonth(monts) {
  const monthNumberCode = monts;
  let monthStr;

  switch (monthNumberCode) {
    case 0:
      monthStr = 'янв.'
      break;
    case 1:
      monthStr = 'фев.'
      break;
    case 2:
      monthStr = 'мар.'
      break;
    case 3:
      monthStr = 'апр.'
      break;
    case 4:
      monthStr = 'май'
      break;
    case 5:
      monthStr = 'июн.'
      break;
    case 6:
      monthStr = 'июл.'
      break;
    case 7:
      monthStr = 'авг.'
      break;
    case 8:
      monthStr = 'сен.'
      break;
    case 9:
      monthStr = 'окт.'
      break;
    case 10:
      monthStr = 'ноя.'
      break;
    default:
      monthStr = 'дек.'
      break;
  }

  return monthStr;
}

