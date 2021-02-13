export function createFlightCard(flight) {
  let departureTimeThere = flight.flight.legs[0].segments[0].departureDate.slice(11, flights.flight.legs[0].segments[0].departureDate.length - 3);

  let arrivalTimeThere = flight.flight.legs[0].segments[1].arrivalDate.slice(11, flight.flight.legs[0].segments[1].arrivalDate.length - 3) || flight.flight.legs[0].segments[0].arrivalDate.slice(11, flight.flight.legs[0].segments[0].arrivalDate.length - 3);

  let departureTimeBack = flight.flight.legs[1].segments[0].departureDate.slice(11, flights[0].flight.legs[0].segments[0].arrivalDate.length - 3);

  let arrivalTimeBack = flight.flight.legs[1].segments[1].arrivalDate.slice(11, flights[0].flight.legs[0].segments[0].arrivalDate.length - 3) || flight.flight.legs[1].segments[0].arrivalDate.slice(11, flights[0].flight.legs[0].segments[0].arrivalDate.length - 3);

  let durationInHoursThere = '' + Math.floor(flights[0].flight.legs[0].duration / 60);

  let durationInMinutesThere = calculateMinutesThere(flight);

  let durationInHoursBack = '' + Math.floor(flights[0].flight.legs[1].duration / 60);

  let durationInMinutesBack = calculateMinutesBack(flight);

  let departureDateThere = new Date(flight.flight.legs[0].segments[0].departureDate).getDate();

  let arrivalDateThere = new Date(flight.flight.legs[0].segments[1].arrivalDate).getDate() || new Date(flight.flight.legs[0].segments[0].arrivalDate).getDate();

  let departureDateBack = new Date(flight.flight.legs[1].segments[0].departureDate).getDate();

  let arrivalDateBack = new Date(flight.flight.legs[1].segments[1].arrivalDate).getDate() || new Date(flight.flight.legs[1].segments[0].arrivalDate).getDate();

  let departureDayThere = getDepartureDayThere(flight);

  let arrivalDayThere = getArrivalDayThere(flight);

  let departureDayBack = getDepartureDayBack(flight);

  let arrivalDayBack = getArrivalDayBack(flight);

  let departureMonthThere = getDepartureMonthThere(flight);

  let arrivalMonthThere = getArrivalMonthThere(flight);

  let departureMonthBack = getDepartureMonthBack(flight);

  let arrivalMonthBack = getArrivalMonthBack(flight);

  let html = `
  <div class="aviaticket__aviaticket">
    <div class="aviaticket__header">
      <div class="aviaticket__logo">
        <img src="${flight.flight.carrier.logo}" alt="airline">
      </div>
      <div class="aviaticket__price">
        <span>${flight.price.total.amount} &#8381;</span>
        <p class="aviaticket__description">
          Стоимость для одного взрослого пассажира
        </p>
      </div>
    </div>
    <div class="aviaticket__there-container">
      <div class="aviaticket__there">
        <span class="aviaticket__sity">${flight.legs[0].segments[0].departureCity.caption},</span>
        <span class="aviaticket__airport">${flight.legs[0].segments[0].departureAirport.caption}}</span>
        <span class="aviaticket__airport-abbreviation">(${flight.legs[0].segments[0].departureAirport.uid})</span>
        <span class="aviaticket__arrow-right">&#8594;</span>
        <span class="aviaticket__sity">${flight.legs[0].segments[1].arrivalCity.caption || flight.legs[0].segments[0].arrivalCity.caption
    },</span>
        <span class="aviaticket__airport">${flight.legs[0].segments[1].arrivalAirport.caption || flight.legs[0].segments[0].arrivalAirport.caption
    }</span>
        <span class="aviaticket__airport-abbreviation">${flight.legs[0].segments[1].arrivalAirport.uid || flight.legs[0].segments[0].arrivalAirport.uid
    }</span>
      </div>
      <div class="aviaticket__time">
        <div class="aviaticket__departure-time">
          <span class="aviaticket__time-value">20:40</span>
          <span class="aviaticket__date">18</span>
          <span class="aviaticket__month">авг.</span>
          <span class="aviaticket__day">вт</span>
        </div>
        <div class="aviaticket__travel-time">
          <span class="aviaticket__watch">&#9719;</span>
          <span class="aviaticket__time-value">23 ч 35 мин</span>
        </div>
        <div class="aviaticket__arrival-time">
          <span class="aviaticket__date">19</span>
          <span class="aviaticket__month">авг.</span>
          <span class="aviaticket__day">ср</span>
          <span class="aviaticket__time-value">09:25</span>
          <span class="aviaticket__transfer-there">1 пересадка</span>
        </div>
      </div>
      <div class="aviaticket__flight">
        <p class="aviaticket__flight-text">
          Рейс выполняет:
          <span class="aviaticket__flight-carrier">LOT Polish Airlines</span>
        </p>
      </div>
    </div>
    <div class="aviaticket__back-container">
      <div class="aviaticket__back">
        <span class="aviaticket__sity">Москва,</span>
        <span class="aviaticket__airport">ШЕРЕМЕТЬЕВО</span>
        <span class="aviaticket__airport-abbreviation">(SVO)</span>
        <span class="aviaticket__arrow-right">&#8594;</span>
        <span class="aviaticket__sity">ЛОНДОН,</span>
        <span class="aviaticket__airport">Лондон, Хитроу</span>
        <span class="aviaticket__airport-abbreviation">(LHR)</span>
      </div>
      <div class="aviaticket__time">
        <div class="aviaticket__departure-time">
          <span class="aviaticket__time-value">20:40</span>
          <span class="aviaticket__date">18</span>
          <span class="aviaticket__month">авг.</span>
          <span class="aviaticket__day">вт</span>
        </div>
        <div class="aviaticket__travel-time">
          <span class="aviaticket__watch">&#9719;</span>
          <span class="aviaticket__time-value">23 ч 35 мин</span>
        </div>
        <div class="aviaticket__arrival-time">
          <span class="aviaticket__date">19</span>
          <span class="aviaticket__month">авг.</span>
          <span class="aviaticket__day">ср</span>
          <span class="aviaticket__time-value">09:25</span>
          <span class="aviaticket__transfer-back">1 пересадка</span>
        </div>
      </div>
      <div class="aviaticket__flight">
        <p class="aviaticket__flight-text">
          Рейс выполняет:
          <span class="aviaticket__flight-carrier">LOT Polish Airlines</span>
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
  let minutes = duration.slice(3, duration.length);

  return minutes;
}

// Получение значения минут в пути обратно
function calculateMinutesBack(flight) {
  let duration = '' + flight.flight.legs[1].duration / 60;
  let minutes = duration.slice(3, duration.length);

  return minutes;
}

// Получение значения дня недели вылета в пункт назначения
function getDepartureDayThere(flight) {
  const day = new Date(flight.flight.legs[0].segments[0].departureDate).getDay();
  let weekDay;

  switch (day) {
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

// Получение значения дня недели прибытия в пункт назначения
function getArrivalDayThere(flight) {
  const day = new Date(flight.flight.legs[0].segments[1].departureDate).getDay() || new Date(flight.flight.legs[0].segments[0].departureDate).getDay();
  let weekDay;

  switch (day) {
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

// Получение значения дня недели вылета в обратном направлении
function getDepartureDayBack(flight) {
  const day = new Date(flight.flight.legs[1].segments[0].departureDate).getDay() ;
  let weekDay;

  switch (day) {
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

// Получение значения дня недели прибытия в обратном направлении
function getArrivalDayBack(flight) {
  const day = new Date(flight.flight.legs[1].segments[1].departureDate).getDay() || new Date(flight.flight.legs[1].segments[0].departureDate).getDay();
  let weekDay;

  switch (day) {
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

// Получение значения месяца вылета в пункт назначения
function getDepartureMonthThere(flight) {
  const month = new Date(flight.flight.legs[0].segments[0].departureDate).getMonth();
  let monthStr;

  switch (month) {
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
      monthStr = 'дек'
      break;
  }

  return monthStr;
}

// Получение значения месяца вылета в обратном направлении
function getDepartureMonthBack(flight) {
  const month = new Date(flight.flight.legs[1].segments[0].departureDate).getMonth();
  let monthStr;

  switch (month) {
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
      monthStr = 'дек'
      break;
  }

  return monthStr;
}

// Получение значения месяца прибытия в пункт назначения
function getArrivalMonthThere(flight) {
  const month = new Date(flight.flight.legs[0].segments[1].departureDate).getMonth() || new Date(flight.flight.legs[0].segments[0].departureDate).getMonth();
  let monthStr;

  switch (month) {
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
      monthStr = 'дек'
      break;
  }

  return monthStr;
}

// Получение значения месяца возвращения в обратном направлении
function getArrivalMonthBack(flight) {
  const month = new Date(flight.flight.legs[1].segments[1].departureDate).getMonth() || new Date(flight.flight.legs[1].segments[0].departureDate).getMonth();
  let monthStr;

  switch (month) {
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
      monthStr = 'дек'
      break;
  }

  return monthStr;
}
