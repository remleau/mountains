import React from "react";
import { withTranslation, Link } from '../i18n';

function CardMountain(props, { t }) {
  const {title, excerpt, image, link} = props.data;

  return (
    <Link href={link}>
      <div className="card card-mountain">

        <div className="container-image">
          <div className="image" style={{backgroundImage: "url("+ image +")"}}></div>
        </div>

        <div className="container-infos">
          <div className="title">
            {title}
          </div>
          <div className="excerpt">
            {excerpt}
          </div>
        </div>

      </div>
    </Link>
  )
}

export default withTranslation('footer')(CardMountain)