import Modal from "../Modal/Modal";
import { createNumberArray } from "../../utils/helpers";
import "./style.css";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  handleSelectedHour: (hour: string) => void;
  handleSelectedMinute: (min: string) => void;
  handleSelectedTimePeriod: (period: string) => void;
};

const TimeSelector = ({
  isOpen,
  handleClose,
  handleSelectedHour,
  handleSelectedMinute,
  handleSelectedTimePeriod,
}: Props) => {
  const hours = createNumberArray(11);
  const minutes = createNumberArray(59);

  const timePeriods = ["am", "pm"];

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div className="selector-wrapper">
        <div className="selector-col" data-testid="selector-hours">
          {hours.map((hour) => (
            <button key={hour} onClick={() => handleSelectedHour(hour)}>
              {hour}
            </button>
          ))}
        </div>
        <div className="selector-col">
          {minutes.map((min) => (
            <button key={min} onClick={() => handleSelectedMinute(min)}>
              {min}
            </button>
          ))}
        </div>
        <div className="selector-col" data-testid="selector-period">
          {timePeriods.map((period) => (
            <button
              key={period}
              onClick={() => handleSelectedTimePeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default TimeSelector;
