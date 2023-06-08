import styled from "@emotion/styled";

const StyledButton = ({
  className,
  children,
  disabled,
  onClick,
  style,
  type
}) => (
  <button
    disabled={disabled}
    type={type}
    className={className}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

const Button = styled(StyledButton)`
  background-color: #5C5CFF;
  border-radius: 20px;
  width: ${({ width }) => width || "30%"};
  padding: ${({ padding }) => padding || "10px"};
  font-size: ${({ fontSize }) => fontSize || "12px"};
  margin: ${({ margin }) => margin || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  letter-spacing: 1px;

  :hover {
    background-color: #0000FF80;
    color: #fff;
  }

  :focus {
    outline: 0;
  }
`;

export default Button;
