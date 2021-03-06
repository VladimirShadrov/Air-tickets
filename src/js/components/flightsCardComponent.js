import { createFlightCard } from '../helpers/flightCard';

export class FlightsCard {
  constructor(el, container, data) {
    this.el = el;
    this.container = container;
    this.cardValue = 2;
    this.data = data;
    this.init();
    this.renderFlightCard(this.data);
  }

  renderFlightCard(data) {
    let currentFlightsArray = data.slice(0, this.cardValue);
    this.container.innerHTML = '';
    
    currentFlightsArray.forEach(item => {
      const html = createFlightCard(item);
      this.container.insertAdjacentHTML('beforeend', html);
    });
  }

  init() {
    this.el.addEventListener('click', showFlightsCard.bind(this));
  }
}

function showFlightsCard(event) {
  if (event.target.classList.contains('show-more')) {
    this.cardValue += 2;
    this.renderFlightCard(this.data);
  }
}