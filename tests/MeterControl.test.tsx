import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MeterControl from '../src/components/MeterControl';

describe('MeterControl', () => {
  it('renders two buttons', () => {
    render(<MeterControl meter={4} handleChange={vi.fn()} />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('calls handleChange(meter + 1) when the first (increment) button is clicked', async () => {
    const handleChange = vi.fn();
    render(<MeterControl meter={4} handleChange={handleChange} />);
    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(handleChange).toHaveBeenCalledWith(5);
  });

  it('calls handleChange(meter - 1) when the second (decrement) button is clicked', async () => {
    const handleChange = vi.fn();
    render(<MeterControl meter={4} handleChange={handleChange} />);
    await userEvent.click(screen.getAllByRole('button')[1]);
    expect(handleChange).toHaveBeenCalledWith(3);
  });
});
