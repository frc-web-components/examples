import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'my-boolean-box',
  styleUrl: 'my-boolean-box.css',
  shadow: true,
})
export class MyBooleanBox {

  boxElement!: HTMLDivElement;

  @Prop() value: boolean = false;
  @Prop() trueColor: string = '#00ff00';
  @Prop() falseColor: string = '#ff0000';
  @Prop() label: string = '';

  @Watch('value')
  @Watch('trueColor')
  @Watch('falseColor')
  watchColorProps() {
    this.updateColor();
  }

  componentDidLoad() {
    this.updateColor();
  }

  updateColor() {
    const backgroundColor = this.value ? this.trueColor : this.falseColor;
    this.boxElement.style.setProperty('--box-color', backgroundColor);
  }

  render() {
    return (
      <div class="box" ref={(el) => this.boxElement = el} >
        {this.label}
      </div>
    );
  }
}
