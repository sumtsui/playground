import React from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

const StyledWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledErrorMsg = styled.div`
  color: red;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm({
    // resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  console.log("errors", errors);
  // console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledWrapper>
        {/* register your input into the hook by invoking the "register" function */}
        <label>
          Name
          <input
            name="name"
            // defaultValue="test"
            ref={register({ required: true, maxLength: 20 })}
          />
        </label>

        {/* include validation with required or other standard HTML validation rules */}
        <label>
          Email
          <input
            name="email"
            ref={register({
              required: true,
              pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
        </label>
        {/* errors will return when field validation fails  */}
        <StyledErrorMsg>
          {errors.name?.type === "maxLength" && <span>Name is too long</span>}
          {errors.name?.type === "required" && <span>Name is required</span>}
          {errors.email?.type === "pattern" && <span>Email is invalid</span>}
          {errors.email?.type === "required" && <span>Email is required</span>}
        </StyledErrorMsg>

        <input type="submit" />
      </StyledWrapper>
    </form>
  );
}
