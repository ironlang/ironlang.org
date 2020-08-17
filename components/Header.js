import styles from './Header.module.css'
import { Logo } from './Logo'
import { Install } from './Install'
import { Fragment } from 'react'

export function Header() {
  return (
    <Fragment>
      <div className={styles.headerContainer}>
        <div className={styles.headerMenu}>
          <Logo />
          <ul className={styles.headerMenuNav}>
            {/* <li>
              <a>Blog</a>
            </li> */}
            <li>
              <a
                className="primary"
                href="https://github.com/ironlang"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.banner}>
          <h1 className={styles.limitedWidth}>
            Iron is a programming language for building secure and scalable
            systems.
          </h1>
          <div className={styles.actions}>
            <Install />
          </div>
        </div>
      </div>
      <div className={styles.divider} />
    </Fragment>
  )
}
