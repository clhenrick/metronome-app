import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as Icons from '../src/components/Icons';

configure({ adapter: new Adapter() });

describe('IconWrapper', () => {
  const props = {
    fillColor: '#222',
    width: 40,
    height: 40,
  };
  const children = [<path key="a" />, <path key="b" />];
  // const svg = Icons.IconWrapper(props, children);
  const wrapper = mount(Icons.IconWrapper(props, children));

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

// TO DO: tests for Icons...
