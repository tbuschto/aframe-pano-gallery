import * as aframe from 'aframe';
import {string, stringArray, entity} from './check';

aframe.registerComponent('gallery', {
  schema: {type: 'asset'},
  async init() {
    const path = string(this.data);
    const data = stringArray(await (await fetch(path + '/data.json')).json())
      .map(image => path + '/' + image);
    const skyBox = entity(this.el.querySelector('a-sky'));
    skyBox.setAttribute('src', data[0]);
  }
});
