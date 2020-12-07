import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

// components
import ErrorsForm from "../components/errorsForm.js";

const useMountain = () => {
  const dispatch = useDispatch();
  const { mountains, errors } = useSelector((state) => state.mountains);
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
        }],
        isFetching: true
      }
    });
  }

  return { add, mountains, errors };
}

const FormAddMountain = (props) => {
  const { add, mountains, errors } = useMountain();
  
  useEffect(() => {
    // Close pop up si pas erreurs
    if (Object.keys(errors).length == 0) {
      props.popUpVisibility(!props.popUpVisibility);
    }
  }, [mountains, errors]);

  return (
    <section className="block__form-addMountain">

      <button className="cta form" onClick={add}>Ajouter une montagne</button>

      <ErrorsForm errors={errors} />

    </section>
  );
}

export default FormAddMountain;
