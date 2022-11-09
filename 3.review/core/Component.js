export class Component {
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
  }

  render() {
    this.$target.innerHTML = this.template();
  }
  setup() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  template() {
    return "";
  }
  mounted() {}
  setEvent() {}
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];

    const isTarget = (target) => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
