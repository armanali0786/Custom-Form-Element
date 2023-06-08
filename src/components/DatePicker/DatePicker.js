import React, { useState } from "react";
import Errors from "../Errors/Errors";
import styled from "@emotion/styled";

const DatePickerComponent = ({
  className,
  containerStyle,
  errors,
  sx,
  name,
  onChange,
  required,
  type,
  value,
  max,
  min
}) => {
  const [dateError, setDateError] = useState(false);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

    if (required && !selectedDate) {
      setDateError(true);
    } else if (max && selectedDate > max) {
      setDateError(true);
    } else if (min && selectedDate < min) {
      setDateError(true);
    } else {
      setDateError(false);
    }

    onChange(event);
  };

  return (
    <div className={className}>
      <div className="container" style={containerStyle}>
        <input
          type={type}
          name={name}
          onChange={handleDateChange}
          value={value}
          style={sx}
          max={max}
          min={min}
        />
      </div>
      {errors && dateError && <Errors data-testid="errors">Invalid date!</Errors>}
    </div>
  );
};

const DatePicker = styled(DatePickerComponent)`
  // your styles here
  height: 65px;
  position: relative;
  width: 100%;

  .container {
    width: 100%;
  }

  input {
    color: #f7f7f7;
    padding: ${({ icon }) => `12px 0 12px ${icon ? 48 : 17}px`};
    width: 100%;
    font-size: 12px;
    border: 1px solid
      ${({ errors, value, required }) =>
        errors && !value && required ? "#e80700" : "#888"};
    border-radius: 10px;
    transition: border, color 0.2s ease-in-out;
    background: transparent;

    :-webkit-autofill {
      -webkit-text-fill-color: #fff;
      box-shadow: 0 0 0px 1000px #222b36 inset;

      :focus {
        box-shadow: 0 0 0px 1000px #266798 inset;
      }
    }

    ::placeholder {
      color: #ccc;
    }

    :hover {
      border: 1px solid #ccc;
    }

    :focus {
      outline: 0;
      border: 1px solid #ccc;
      background: #266798;
    }
  }
`;

export default DatePicker;

