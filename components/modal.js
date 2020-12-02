import React from "react";

const Modal = (props) => {

  const { title } = props;

  const setModalVisibility = () => {
    return props.controlVisibility(!props.visibility);
  }

  return (
    <section className={"block__modal " + (props.visibility ? 'block' : 'hidden')}>

      <div className="flex items-center justify-between pb-4">

        {
          title ?
            <div className="title">
              <h1>{title}</h1>
            </div>
          : ''
        }

        <button onClick={() => setModalVisibility()} className="cta close">
          <span>Fermer</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>

      {props.children}

    </section>
  );
}

export default Modal;
