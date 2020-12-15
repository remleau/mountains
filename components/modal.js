import React, { useState, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef((props, ref) => {
  const { title } = props;
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    }
  });

  const open = () => {
    setDisplay(true)
  }

  const close = () => {
    setDisplay(false);
  }

  return (
    <section ref={ref} className={"block__modal " + (display ? 'block' : 'hidden')}>

      <div className="flex items-center justify-between pb-4">

        {title ?
          <div className="title">
            <h1>{title}</h1>
          </div>
        : ''}

        <button onClick={() => setDisplay(false)} className="cta close">
          <span>Fermer</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>

      <div>{props.children}</div>

    </section>
  );
});

export default Modal;