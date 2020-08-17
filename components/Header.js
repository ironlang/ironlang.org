import styles from './Header.module.css'
import { Container } from './Container'
import { Logo } from './logo'
import { Install } from './Install'
import { Fragment } from 'react'

export function Header() {
  return (
    <Fragment>
      <div className={styles.headerGrid}>
        <Logo />
        <div>
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
