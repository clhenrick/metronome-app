import { Play, Pause } from './Icons';

interface PlayPauseBtnProps {
  isPlaying: boolean;
  handleClick: () => void;
}

const PlayPauseBtn = ({ isPlaying, handleClick }: PlayPauseBtnProps) => (
  <button aria-label={isPlaying ? 'Pause' : 'Play'} className="PlayPauseBtn" onClick={handleClick}>
    {isPlaying ? (
      <Pause width={100} height={100} fillColor="#f93bcf" />
    ) : (
      <Play width={100} height={100} fillColor="#f93bcf" />
    )}
  </button>
);

export default PlayPauseBtn;
