import styled from "@emotion/styled";

const Form = styled.form`
  margin: ${({ margin }) => margin || "0 auto"};
  max-width: ${({ maxWidth }) => maxWidth || "420px"};
  background: ${({ background }) => background || "transpablaent"};
  padding: ${({ padding }) => padding || "30px"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
`;

export default Form;
