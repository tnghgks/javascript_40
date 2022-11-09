import { Component } from "../core/Component.js";

export class Card extends Component {
  setup() {
    this.render();
  }

  template() {
    const { cardData } = this.$props;

    return `
        <div class="img-container">
            <img src="${cardData.img}" id="person-img" alt="" />
        </div>
      <h4 id="author">${cardData.name}</h4>
      <p id="job">${cardData.job}</p>
      <p id="info">
        ${cardData.text}
      </p>
      <!-- prev next buttons-->
      <div class="button-container">
        <button class="prev-btn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <!-- random button -->
      <button class="random-btn">surprise me</button>`;
  }

  setEvent() {
    let { changeCard, counter } = this.$props;

    this.addEvent("click", ".prev-btn", (event) => {
      if (counter <= 0) {
        counter = 3;
      } else {
        counter--;
      }
      changeCard(counter);
    });

    this.addEvent("click", ".next-btn", (event) => {
      if (counter >= 3) {
        counter = 0;
      } else {
        counter++;
      }
      changeCard(counter);
    });

    this.addEvent("click", ".random-btn", (event) => {
      counter = Math.floor(Math.random() * 4);
      changeCard(counter);
    });
  }
}
