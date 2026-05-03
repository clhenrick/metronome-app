import { render } from '@testing-library/react';
import { IconWrapper, ArrowDown, ArrowUp, Play, Pause } from '../src/components/Icons';

describe('IconWrapper', () => {
  const props = { fillColor: '#222', width: 40, height: 40 };

  it('renders an svg element', () => {
    const { container } = render(IconWrapper(props, []));
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('sets viewBox, fill, width, height on the svg', () => {
    const { container } = render(IconWrapper(props, []));
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', '#222');
    expect(svg).toHaveAttribute('width', '40');
    expect(svg).toHaveAttribute('height', '40');
  });
});

describe('Icons', () => {
  const props = { fillColor: 'magenta', width: 40, height: 40 };

  it('renders ArrowDown with an svg and two path children', () => {
    const { container } = render(<ArrowDown {...props} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelectorAll('path')).toHaveLength(2);
  });

  it('renders ArrowUp with an svg and two path children', () => {
    const { container } = render(<ArrowUp {...props} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelectorAll('path')).toHaveLength(2);
  });

  it('renders Play with an svg and two path children', () => {
    const { container } = render(<Play {...props} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelectorAll('path')).toHaveLength(2);
  });

  it('renders Pause with an svg and two path children', () => {
    const { container } = render(<Pause {...props} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelectorAll('path')).toHaveLength(2);
  });
});
