'use client'
import Button from "../Button/Button";
import Container from "../Container/Container";
import Input from "../Input/Input";
import Form from "../Form/Form";
import Checkbox from "../Checkbox/Checkbox";
import DatePicker from "../DatePicker/DatePicker";
import { useForm } from "../formUtils/formUtils";

const FormInput = () => {
  const { state,handleChange, handleSubmit } = useForm();
  const { name, email, errors, password, date, } = state;

  return (
    <Container>
      <Form background="#808080" borderRadius="30px" onChange={handleChange} onSubmit={handleSubmit}>
        <h4>Welcome to Custom Form Element</h4>
        <h1>Register Page</h1> <br></br>
        {/* Input fields */}
        <Input
          required
          type="text"
          name="name"
          placeholder="Enter your Name..."
          value={name}
          onChange={handleChange}
          errors={errors}
        />
        <Input
          required
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={email}
          onChange={handleChange}
          errors={errors}
        />
        <Input
          required
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={password}
          onChange={handleChange}
          errors={errors}
        />
        {/* DatePicker fields */}
        <DatePicker
          required
          type="datetime-local"
          name="date"
          max="2023-01-01"
          min="2001-01-01"
          onChange={handleChange}
          errors={errors}
          value={date}
        />

        {/* Checkbox fields */}
        <Checkbox
        type ="checkbox"
        label="Node"
        name="node"
      />
      <Checkbox
       type ="checkbox"
        label="React"
        name="react"
        disabled
      />
      <Checkbox
       type ="checkbox"
        label="Others"
        name="others"
      />

        {/* Submit button */}
        <Button type="submit" margin="10px 0 20px 0">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default FormInput;
