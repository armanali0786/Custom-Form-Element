import * as React from "react";
import styled from "@emotion/styled";
import Errors from "../Errors/Errors";

const InputComponent = ({
  className,
  containerStyle,
  errors,
  disabled,
  inputStyle,
  name,
  onChange,
  placeholder,
  required,
  type,
  value,
  wrapperStyle
}) => {
  
  return (
    <div className={className} style={wrapperStyle}>
      <div className="container" style={containerStyle}>
        <input
          label={name}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          style={inputStyle}
          disabled={disabled}
        />
      </div>
      {errors && !value && required && (
        <Errors data-testid="errors">Required!</Errors>
      )}
    </div>
  );
};

const Input = styled(InputComponent)`
  height: 75px;
  position: relative;
  width: 100%;

  .container {
    width: 100%;

    :not(:hover) {
      svg {
        color: ${({ errors, value, required }) =>
          errors && !value && required ? "#e80700" : "#ccc"};
      }
    }
  }

  input {
    color: #f7f7f7;
    padding: ${({ icon }) => `15px 0 15px ${icon ? 48 : 17}px`};
    width: 100%;
    font-size: 12px;
    border: 1px solid
      ${({ errors, value, required }) =>
        errors && !value && required ? "#e80700" : "#888"};
    border-radius: 10px;
    width: 100%;
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

export default Input;
