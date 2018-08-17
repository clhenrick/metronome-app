import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MeterControl from '../src/components/MeterControl';

configure({ adapter: new Adapter() });

describe('MeterControl', () => {
  const props = {
    meter: 4,
    handleChange: jest.fn(),
  };
  const wrapper = mount(<MeterControl {...props} />);

  it('has correct props', () => {
    expect(wrapper.props()).toHaveProperty('meter');
    expect(typeof wrapper.prop('meter')).toBe('number');
    expect(wrapper.props()).toHaveProperty('handleChange');
    expect(typeof wrapper.prop('handleChange')).toBe('function');
  });

  it('has two buttons', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });
});
