import { Component } from "../core/Component.js";

export class Counter extends Component {
  setup() {
    this.$state = { counter: 0 };
  }
  template() {
    const { counter, counterColor } = this.$state;
    return `
    <div id="value" style="color:${counterColor}">${counter}</div>
    <button type="button" class="down">내리기</button>
    <button type="button" class="reset">초기화</button>
    <button type="button" class="up">올리기</button>
    `;
  }
  setEvent() {
    this.addEvent("click", ".down", ({ target }) => {
      let { counter, counterColor } = this.$state;
      counter--;
      if (counter < 0) {
        counterColor = "blue";
      } else if (counter === 0) {
        counterColor = "black";
      }
      this.setState({ counter, counterColor });
    });

    this.addEvent("click", ".up", ({ target }) => {
      let { counter, counterColor } = this.$state;
      counter++;
      if (counter > 0) {
        counterColor = "red";
      } else if (counter === 0) {
        counterColor = "black";
      }
      this.setState({ counter, counterColor });
    });

    this.addEvent("click", ".reset", ({ target }) => {
      let { counter, counterColor } = this.$state;
      counter = 0;
      if (counter == 0) {
        counterColor = "black";
      }
      this.setState({ counter, counterColor });
    });
  }
}
