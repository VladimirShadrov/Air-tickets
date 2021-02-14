import { FlightsCard } from './flightsCardComponent';

export class SortComponent {
  constructor(el, ticket, container, data) {
    this.el = el;
    this.flightCard = new FlightsCard(ticket, container, data);

    this.init();
  }

  sortInAscendingOrder() {
    const arrayInAscendingOrder = this.flightCard.data.sort((prev, next) => {
     if (+prev.flight.price.total.amount > +next.flight.price.total.amount) return 1;
     if (+prev.flight.price.total.amount < +next.flight.price.total.amount) return -1;
     return 0;
    });
    
    return arrayInAscendingOrder;
  }

  sortByDescendingOrder() {
    const arrayInAscendingOrder = this.flightCard.data.sort((prev, next) => {
      if (+prev.flight.price.total.amount > +next.flight.price.total.amount) return -1;
      if (+prev.flight.price.total.amount < +next.flight.price.total.amount) return 1;
      return 0;
     });
     
     return arrayInAscendingOrder;
   }

   sortByTime() {
    const arrayInAscendingOrder = this.flightCard.data.sort((prev, next) => {
      if (prev.flight.legs[0].duration > next.flight.legs[0].duration) return -1;
      if (prev.flight.legs[0].duration < next.flight.legs[0].duration) return 1;
      return 0;
     });
     
     return arrayInAscendingOrder;
   }

  init() {
    this.el.addEventListener('click', sortFlights.bind(this));
  }
}

function sortFlights(event) {
  event.stopPropagation();

  if (event.target.dataset.id === 'up') {
    const currentArray = this.sortInAscendingOrder();
    this.flightCard.renderFlightCard(currentArray);
  }

  if (event.target.dataset.id === 'down') {
    const currentArray = this.sortByDescendingOrder();
    this.flightCard.renderFlightCard(currentArray);
  }

  if (event.target.dataset.id === 'time') {
    const currentArray = this.sortByTime();
    this.flightCard.renderFlightCard(currentArray);
  }
}