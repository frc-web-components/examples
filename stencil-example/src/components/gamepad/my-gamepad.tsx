import { Component, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'my-gamepad',
  styleUrl: 'my-gamepad.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyGamepad {


  render() {
    return (
      <div>
        <img src={getAssetPath('assets/gamepad.png')} />
      </div>
    );
  }
}
