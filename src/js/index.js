import '../styles/styles.scss';
import '../styles/filters.scss';
import '../styles/ticket.scss';
import { data } from './data';
import { FlightsCard } from './components/flightsCardComponent';
import { SortComponent } from './components/sortComponents';


const flights = data.result.flights;
const flightsCardBlock = document.querySelector('.aviaticket');
const flightsCardContainer = document.querySelector('.aviaticket__wrapper');
const sortBlock = document.querySelector('.aviatickets');


// Добавление изображений логотипов перевозчиков в массив данных
flights.forEach(item => {
  if (item.flight.carrier.caption === 'Air France') {
    item.flight.carrier.logo = './images/Air_France_logo.svg';
  }
  
  if (item.flight.carrier.caption === 'KLM') {
    item.flight.carrier.logo = './images/KLM_logo.svg';
  }
  
  if (item.flight.carrier.caption === 'Аэрофлот - российские авиалинии') {
    item.flight.carrier.logo = './images/Aeroflot__logo.svg';
  }
  
  if (item.flight.carrier.caption === 'TURK HAVA YOLLARI A.O.') {
    item.flight.carrier.logo = './images/Turkish_Airlines_logo.svg';
  }
  
  if (item.flight.carrier.caption === 'Finnair Oyj') {
    item.flight.carrier.logo = './images/Finnair_Logo.svg';
  }
  
  if (item.flight.carrier.caption === 'Air Baltic Corporation A/S') {
    item.flight.carrier.logo = './images/AirBaltic_logo.svg';
  }
  
  if (item.flight.carrier.caption === 'Alitalia Societa Aerea Italiana') {
    item.flight.carrier.logo = './images/Alitalia.svg';
  }
  
  if (item.flight.carrier.caption === 'Pegasus Hava Tasimaciligi A.S.') {
    item.flight.carrier.logo = './images/Pegasus_Airlines_logo.svg';
  }
  
  if (item.flight.carrier.caption === 'Brussels Airlines') {
    item.flight.carrier.logo = './images/Brussels_Airlines_logo.svg';
  }
  
  if (item.flight.carrier.caption === 'LOT Polish Airlines') {
    item.flight.carrier.logo = './images/LOT_Polish_Airlines_logo.svg';
  }
});


new FlightsCard(flightsCardBlock, flightsCardContainer, flights);
new SortComponent(sortBlock, flightsCardBlock, flightsCardContainer, flights);







const transfer = [];

// массив перелетов без пересадок
flights.forEach(item => {
  if (item.flight.legs[0].segments.length <= 1 && item.flight.legs[1].segments.length <= 1) {
    transfer.push(item)
  }
})


// Перенос изображений и шрифтов в папку "dist"
require.context('../images', true, /\.(png|jpg|svg|gif)$/);
