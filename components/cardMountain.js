import React from "react";
import { withTranslation } from '../i18n';

function CardMountain(props, { t }) {
  const {title} = props.data;

  return (
    <div>
      {title}
    </div>
  )
}

export default withTranslation('footer')(CardMountain)