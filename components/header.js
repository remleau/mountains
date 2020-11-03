import { Link } from '../i18n';
import Switcher from './lang-switcher';

export default function Header() {
  return (
    <header>
      <div className="logo">
        Mountains
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Switcher />
    </header>
  )
}