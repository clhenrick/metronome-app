import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlayPauseBtn from '../src/components/PlayPauseBtn';

describe('PlayPauseBtn', () => {
  it('renders a button with class "PlayPauseBtn"', () => {
    render(<PlayPauseBtn isPlaying={false} handleClick={vi.fn()} />);
    expect(screen.getByRole('button')).toHaveClass('PlayPauseBtn');
  });

  it('calls handleClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<PlayPauseBtn isPlaying={false} handleClick={handleClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the Play icon when isPlaying is false', () => {
    const { container } = render(<PlayPauseBtn isPlaying={false} handleClick={vi.fn()} />);
    // Play icon contains a path unique to the play triangle shape
    expect(container.querySelector('path[d="M8 5v14l11-7z"]')).toBeInTheDocument();
  });

  it('renders the Pause icon when isPlaying is true', () => {
    const { container } = render(<PlayPauseBtn isPlaying={true} handleClick={vi.fn()} />);
    // Pause icon contains a path unique to the double-bar shape
    expect(
      container.querySelector('path[d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"]')
    ).toBeInTheDocument();
  });
});
