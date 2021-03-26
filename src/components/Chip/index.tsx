import { ChipContainer } from './styles';
import IconRemove from '../../images/icon-remove.svg';

interface ChipProps {
  label: string;
  onClose?: (tag: string) => void;
  onSelect?: (tag: string) => void;
}

export default function Chip({ label, onClose, onSelect }: ChipProps) {
  const handleClick = (tag: string) => {
    if (onSelect) onSelect(tag);
  };

  return (
    <ChipContainer onClick={() => handleClick(label)}>
      <span>{label}</span>
      {onClose && (
        <button className="remove" type="button" onClick={() => onClose(label)}>
          <img src={IconRemove} alt="remove" />
        </button>
      )}
    </ChipContainer>
  );
}
