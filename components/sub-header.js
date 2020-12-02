import Search from "./search.js";

// traduction
import { withTranslation } from '../i18n';
import { Link } from '../i18n';

const SubHeader = (props) => {
  const { title, link, t } = props;

  return (
    <div className="sub-header">
      <p className="title">
        <Link href="/">
          <a>
            <span>Accueil</span>
          </a>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <Link href={link}>
          <a>
            <span>{title}</span>
          </a>
        </Link>
      </p>

      <Search />
    </div>
  )
}

export default withTranslation('home')(SubHeader)