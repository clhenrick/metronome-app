import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MeterDisplay from '../src/components/MeterDisplay';

configure({ adapter: new Adapter() });

describe('MeterDisplay', () => {
  const props = {
    meter: 4,
  };
  const wrapper = mount(<MeterDisplay meter={props.meter} />);

  it('has correct props', () => {
    expect(wrapper.props()).toHaveProperty('meter');
    expect(wrapper.prop('meter')).toBeDefined();
    expect(typeof wrapper.props().meter).toEqual('number');
    expect(wrapper.prop('meter')).toBeGreaterThan(0);
  });

  it('renders the meter value', () => {
    expect(wrapper.text()).toEqual('4 / 4');
  });

  it('displays the new meter value when it has changed', () => {
    wrapper.setProps({ meter: 5 });
    expect(wrapper.text()).toEqual('5 / 4');
  });
});
