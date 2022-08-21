import { Component, h, getAssetPath } from '@stencil/core';
import ButtonPad from './button-pad';
import Joystick from './joystick';

@Component({
  tag: 'my-gamepad',
  styleUrl: 'my-gamepad.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyGamepad {


  render() {
    return (
      <svg
        viewBox="0 0 150 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image href={getAssetPath('assets/gamepad.png')} width="150" height="100" />
        <ButtonPad x={107} y={-22} leftPressed rightPressed />
        <ButtonPad x={49} y={5} topPressed bottomPressed />
        <Joystick x={30} y={-22} xAxis={1} yAxis={0} />
        <Joystick x={88} y={5} xAxis={0} yAxis={-.5} />
      </svg>
    );
  }
}
