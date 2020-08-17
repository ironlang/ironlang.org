import styles from './Install.module.css'
import { Fragment } from 'react'

export function Install() {
  return (
    <Fragment>
      <div className={styles.installContainer}>
        <span>
          <span className={styles.installArgsCommand}>curl</span>{' '}
          <span className={styles.installArgsParam}>
            -sSf --tlsv1.2 --proto
          </span>{' '}
          <span className={styles.installArgsString}>'=https'</span>{' '}
          https://sh.ironlang.org{' '}
          <span className={styles.installArgsParam}>|</span>{' '}
          <span className={styles.installArgsCommand}>sh</span>
        </span>
      </div>
      <a className={styles.link}>See other installation methods</a>
    </Fragment>
  )
}
