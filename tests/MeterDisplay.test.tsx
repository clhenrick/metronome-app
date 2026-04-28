import { render } from '@testing-library/react';
import MeterDisplay from '../src/components/MeterDisplay';

describe('MeterDisplay', () => {
  it('renders the current meter as "N / 4"', () => {
    const { container } = render(<MeterDisplay meter={4} />);
    expect(container.querySelector('p')).toHaveTextContent('4 / 4');
  });

  it('reflects an updated meter value after re-render', () => {
    const { container, rerender } = render(<MeterDisplay meter={4} />);
    rerender(<MeterDisplay meter={5} />);
    expect(container.querySelector('p')).toHaveTextContent('5 / 4');
  });
});
