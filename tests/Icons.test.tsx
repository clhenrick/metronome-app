import { render, isInaccessible } from '@testing-library/react';
import { Icon, type IconProps } from '../src/components/Icons';

describe('Icon component', () => {
  const props: IconProps = { name: 'arrowDown', fillColor: '#333', width: 40, height: 40 };

  it('renders an SVG element', () => {
    const { container } = render(Icon(props));
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('sets necessary SVG attributes', () => {
    const { container } = render(Icon(props));
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', '#333');
    expect(svg).toHaveAttribute('width', '40');
    expect(svg).toHaveAttribute('height', '40');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('intentionally excludes the SVG element from assistive technology', () => {
    const { container } = render(Icon(props));
    const svg = container.querySelector('svg')!;
    expect(isInaccessible(svg)).toBe(true);
  });

  it('renders SVG children for the corresponding icon name', () => {
    const { container } = render(Icon(props));
    const svg = container.querySelector('svg');
    expect(svg?.children.length).toBeTruthy();
  });
});
