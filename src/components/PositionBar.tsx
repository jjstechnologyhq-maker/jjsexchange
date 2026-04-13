interface PositionBarProps {
  position: number;
  pct: string;
  left: number;
}

export default function PositionBar({ position, pct, left }: PositionBarProps) {
  return (
    <div className="position-bar">
      <div className="pb-left">
        <div className="pb-icon">🏆</div>
        <div>
          <div className="pb-label">Waitlist position</div>
          <div className="pb-count">Position <span>{position}</span> of 10,000</div>
        </div>
      </div>
      <div className="pb-right">
        <div className="pb-progress-wrap">
          <div className="pb-progress-fill" style={{ width: `${pct}%` }}></div>
        </div>
        <div className="pb-progress-label">{left.toLocaleString()} spots remaining</div>
      </div>
    </div>
  );
}
