import React from 'react';
import { useForm } from 'react-hook-form';

const Example = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="username"
        ref={register({
          validate: (value) => value !== 'admin' || 'Nice try!'
        })}
      />
      {errors.username && errors.username.message}

      <button type="submit">Submit</button>
    </form>
  );
};
export default Example;
