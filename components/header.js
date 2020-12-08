import { Link } from '../i18n';
import Switcher from './lang-switcher';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div className="logo">
        <h1>Mountains</h1>
      </div>
      
      <nav>
        <p className="menu-title">Menu principal</p>
        <ul>
          <li className={router.pathname == "/" ? "actif" : ""}>
            <Link href="/">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/about" ? "actif" : ""}>
            <Link href="/about">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>About</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <p className="menu-title">Menu secondaire</p>
        <ul>
          <li className={router.pathname == "/settings" ? "actif" : ""}>
            <Link href="/settings">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Settings</span>
              </a>
            </Link>
          </li>
        </ul>
        <Switcher />
      </nav>
    </header>
  )
}