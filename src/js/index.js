import '../styles/styles.scss';
import '../styles/filters.scss';
import '../styles/ticket.scss';
import { data } from './data';

const flights = data.result.flights;

// Добавление изображений логотипов перевозчиков в массив данных
flights.forEach(item => {
  if (item.flight.carrier.caption === 'Air France') {
    item.flight.carrier.logo = '../images/Air_France_logo.svg';
  }

  if (item.flight.carrier.caption === 'KLM') {
    item.flight.carrier.logo = '../images/KLM_logo.svg';
  }

  if (item.flight.carrier.caption === 'Аэрофлот - российские авиалинии') {
    item.flight.carrier.logo = '../images/Aeroflot__logo.svg';
  }

  if (item.flight.carrier.caption === 'TURK HAVA YOLLARI A.O.') {
    item.flight.carrier.logo = '../images/Turkish_Airlines_logo.svg';
  }

  if (item.flight.carrier.caption === 'Finnair Oyj') {
    item.flight.carrier.logo = '../images/Finnair_Logo.svg';
  }

  if (item.flight.carrier.caption === 'Air Baltic Corporation A/S') {
    item.flight.carrier.logo = '../images/AirBaltic_logo.svg';
  }

  if (item.flight.carrier.caption === 'Alitalia Societa Aerea Italiana') {
    item.flight.carrier.logo = '../images/Alitalia.svg';
  }

  if (item.flight.carrier.caption === 'Pegasus Hava Tasimaciligi A.S.') {
    item.flight.carrier.logo = '../images/Pegasus_Airlines_logo.svg';
  }

  if (item.flight.carrier.caption === 'Brussels Airlines') {
    item.flight.carrier.logo = '../images/Brussels_Airlines_logo.svg';
  }

  if (item.flight.carrier.caption === 'LOT Polish Airlines') {
    item.flight.carrier.logo = '../images/LOT_Polish_Airlines_logo.svg';
  }
})

console.log(flights[0]);


let departureDateBack = new Date(flights[0].flight.legs[1].segments[0].departureDate).getDay();

let arrivalDateBack = new Date(flights[0].flight.legs[1].segments[1].arrivalDate).getDate() || new Date(flights[0].flight.legs[1].segments[0].arrivalDate).getDate();

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

getArrivalMonthBack(flights[0])





const transfer = [];

// массив перелетов без пересадок
flights.forEach(item => {
  if (item.flight.legs[0].segments.length <= 1 && item.flight.legs[1].segments.length <= 1) {
    transfer.push(item)
  }
})

// console.log(transfer[0]);

// Перенос изображений и шрифтов в папку "dist"
require.context('../images', true, /\.(png|jpg|svg|gif)$/);
