import { Icon } from './Icons';

interface PlayPauseBtnProps {
  isPlaying: boolean;
  handleClick: () => void;
}

const PlayPauseBtn = ({ isPlaying, handleClick }: PlayPauseBtnProps) => (
  <button aria-label={isPlaying ? 'Pause' : 'Play'} className="PlayPauseBtn" onClick={handleClick}>
    {isPlaying ? (
      <Icon name="pause" width={100} height={100} fillColor="#f93bcf" />
    ) : (
      <Icon name="play" width={100} height={100} fillColor="#f93bcf" />
    )}
  </button>
);

export default PlayPauseBtn;
