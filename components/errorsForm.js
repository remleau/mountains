import React from "react";

const ErrorsForm = (props) => {
  const { errors } = props;

  return (
    <React.Fragment>
      {
        Object.keys(errors).length > 0 ? 
          <div className="block__errors">
            {Object.keys(errors).map(function (key) {
              return <p key={key}>{errors[key]}</p>
            })}
          </div>
        : ''
      }
    </React.Fragment>
  );
}

export default ErrorsForm;
