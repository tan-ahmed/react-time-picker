import { useState } from "react";
import CalendarIcon from "../../assets/calendarIcon";
import "./style.css";
import TimeSelector from "../TimeSelector/TimeSelector";

type Props = {};

const TimePicker = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const [hour, setSelectedHour] = useState<string>("");
  const [minute, setSelectedMinute] = useState<string>("");
  const [timePeriod, setSelectedTimePeriod] = useState<string>("am");

  const handleSelectedHour = (hour: string) => {
    setSelectedHour(hour);
  };

  const handleSelectedMinute = (min: string) => {
    setSelectedMinute(min);
  };

  const handleSelectedTimePeriod = (period: string) => {
    setSelectedTimePeriod(period);
  };

  return (
    <>
      <div className="input-wrapper">
        <div
          className="input-icon"
          data-testid="input-icon"
          onClick={handleOpen}
        >
          <CalendarIcon />
        </div>
        <input
          className="input-field"
          type="text"
          value={`${hour}:${minute}`}
          placeholder="Select time"
          readOnly
        />
      </div>

      {hour ? (
        <p className="my-3 text-blue-500">
          The time you have selected is: {hour}:{minute} {timePeriod}
        </p>
      ) : (
        <p className="my-3 text-red-500">
          Select a time by clicking the clock icon
        </p>
      )}

      <TimeSelector
        isOpen={isOpen}
        handleClose={handleClose}
        handleSelectedHour={handleSelectedHour}
        handleSelectedMinute={handleSelectedMinute}
        handleSelectedTimePeriod={handleSelectedTimePeriod}
      />
    </>
  );
};

export default TimePicker;
