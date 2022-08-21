import { Component, h, getAssetPath, Prop } from '@stencil/core';
import Button from './button';
import ButtonPad from './button-pad';
import DPad from './d-pad';
import Joystick from './joystick';

@Component({
  tag: 'xbox-controller',
  styleUrl: 'xbox-controller.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyGamepad {

  @Prop() axes: number[] = [];
  @Prop() buttonPresses: boolean[] = [];

  getAxis(index: number) {
    return this.axes[index] ?? 0;
  }

  getButton(index: number) {
    return this.buttonPresses[index] ?? false;
  }

  render() {
    return (
      <svg
        viewBox="0 0 150 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image href={getAssetPath('assets/gamepad.png')} width="150" height="100" />
        <ButtonPad 
          x={108} 
          y={-23} 
          bottomPressed={this.getButton(0)} 
          rightPressed={this.getButton(1)}
          leftPressed={this.getButton(2)}
          topPressed={this.getButton(3)}
        />
        <DPad 
          x={49} 
          y={5} 
          bottomPressed={this.getButton(13)}
          rightPressed={this.getButton(15)}
          leftPressed={this.getButton(14)}
          topPressed={this.getButton(12)}
        />
        <Button 
          x={55}
          y={-22}
          radius={3}
          pressed={this.getButton(8)}
        />
        <Button 
          x={82}
          y={-22}
          radius={3}
          pressed={this.getButton(9)}
        />
        <Joystick x={30} y={-22} xAxis={this.getAxis(0)} yAxis={this.getAxis(1)} />
        <Joystick x={88} y={5} xAxis={this.getAxis(2)} yAxis={this.getAxis(3)} />
      </svg>
    );
  }
}
