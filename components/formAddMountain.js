import React from "react";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

const useMountain = () => {
  const dispatch = useDispatch();
  const add = () => {
    dispatch({
      type: 'add/mountains',
      payload: {
        mountains: [{
          id: 6,
          title: 'mountain 6',
          excerpt: 'Petite description de la montagne',
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
          link: '/mountain/6'
        }]
      }
    });
  }

  return { add };
}

const FormAddMountain = (props) => {
  const { add } = useMountain();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <section className="block__form-addMountain">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" defaultValue={props.firstName} ref={register} />
        <input name="lastName" defaultValue={props.lastName} ref={register} />
        <button className="cta form" onClick={add}>Ajouter une montagne</button>
      </form>
    </section>
  );
}

export default FormAddMountain;
