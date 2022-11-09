import { Card } from "./components/Card.js";
import { Component } from "./core/Component.js";
import getData from "./api/getData.js";

export class App extends Component {
  async setup() {
    this.state = { cardData: await getData(0), counter: 0 };
    this.render();
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  template() {
    return `<main>
    <section class="container">
      <!-- title -->
      <div class="title">
        <h2>our reviews</h2>
        <div class="underline"></div>
      </div>
      <!-- review -->
      <article data-component="item-appender" class="review">
      </article>
    </section>
  </main>`;
  }

  mounted() {
    const { cardData, counter } = this.state;
    const { changeCard } = this;
    const $itemAppender = this.$target.querySelector('[data-component="item-appender"]');

    new Card($itemAppender, { cardData, counter, changeCard: changeCard.bind(this) });
  }

  async changeCard(index) {
    const cardData = await getData(index);
    this.setState({ cardData, counter: index });
  }
}
