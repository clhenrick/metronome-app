import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlayPauseBtn from '../src/components/PlayPauseBtn';
import { Play, Pause } from '../src/components/Icons';

configure({ adapter: new Adapter() });

describe('PlayPauseBtn', () => {
  const props = {
    isPlaying: false,
    handleClick: jest.fn(),
  };
  const wrapper = mount(<PlayPauseBtn {...props} />);

  it('has the correct props', () => {
    expect(wrapper.props()).toHaveProperty('isPlaying');
    expect(wrapper.props()).toHaveProperty('handleClick');
  });

  it('has the class name "PlayPauseBtn"', () => {
    expect(wrapper.find('button').hasClass('PlayPauseBtn')).toEqual(true);
  });

  it('calls `handleClick` on a click event', () => {
    wrapper.find('button').simulate('click');
    expect(props.handleClick).toBeCalled();
  });

  it('renders a Play icon component when `isPlaying` is false', () => {
    expect(wrapper.find(Play)).toHaveLength(1);
  });

  it('renders a Pause icon component when `isPlaying` is true', () => {
    wrapper.setProps({ isPlaying: true });
    expect(wrapper.find(Pause)).toHaveLength(1);
  });
});
