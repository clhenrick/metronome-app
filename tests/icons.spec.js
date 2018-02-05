import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { IconWrapper, ArrowDown, ArrowUp, Play, Pause } from '../src/components/Icons';

configure({ adapter: new Adapter() });

describe('IconWrapper', () => {
  const props = {
    fillColor: '#222',
    width: 40,
    height: 40,
  };
  const children = [<path key="a" />, <path key="b" />];
  const wrapper = mount(IconWrapper(props, children));

  it('renders an svg element', () => {
    expect(wrapper.type()).toEqual('svg');
  });

  it('assigns a viewBox attribute to the svg element', () => {
    expect(wrapper.find('[viewBox="0 0 24 24"]')).toHaveLength(1);
    expect(wrapper.find('[viewBox=""]')).toHaveLength(0);
  });

  it('sets the svg element fill, width, and height attributes', () => {
    expect(wrapper.find('[fill="#222"]')).toHaveLength(1);
    expect(wrapper.find('[width=40]')).toHaveLength(1);
    expect(wrapper.find('[height=40]')).toHaveLength(1);

    expect(wrapper.find('[fill="999"]')).toHaveLength(0);
    expect(wrapper.find('[width=666]')).toHaveLength(0);
    expect(wrapper.find('[height=666]')).toHaveLength(0);
  });
});

describe('Icons', () => {
  const props = {
    fillColor: 'magenta',
    width: 40,
    height: 40,
  };
  const arrowDown = mount(<ArrowDown {...props} />);
  const arrowUp = mount(<ArrowUp {...props} />);
  const play = mount(<Play {...props} />);
  const pause = mount(<Pause {...props} />);

  it('should render an ArrowDown Icon', () => {
    expect(arrowDown.name()).toEqual('ArrowDown');
    expect(arrowDown.find('svg')).toHaveLength(1);
  });

  it('should render ArrowDown children path elements', () => {
    expect(arrowDown.find('svg').children()).toHaveLength(2);
    arrowDown
      .find('svg')
      .children()
      .forEach(node => {
        expect(node.type()).toEqual('path');
      });
  });

  it('should render an ArrowUp Icon', () => {
    expect(arrowUp.name()).toEqual('ArrowUp');
    expect(arrowUp.find('svg')).toHaveLength(1);
  });

  it('should render ArrowUp children path elements', () => {
    expect(arrowUp.find('svg').children()).toHaveLength(2);
    arrowUp
      .find('svg')
      .children()
      .forEach(node => {
        expect(node.type()).toEqual('path');
      });
  });

  it('should render an Play Icon', () => {
    expect(play.name()).toEqual('Play');
    expect(play.find('svg')).toHaveLength(1);
  });

  it('should render Play children path elements', () => {
    expect(play.find('svg').children()).toHaveLength(2);
    play
      .find('svg')
      .children()
      .forEach(node => {
        expect(node.type()).toEqual('path');
      });
  });

  it('should render an Pause Icon', () => {
    expect(pause.name()).toEqual('Pause');
    expect(pause.find('svg')).toHaveLength(1);
  });

  it('should render Pause children path elements', () => {
    expect(pause.find('svg').children()).toHaveLength(2);
    pause
      .find('svg')
      .children()
      .forEach(node => {
        expect(node.type()).toEqual('path');
      });
  });
});
