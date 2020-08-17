import Link from 'next/link'
import styles from './Logo.module.css'

export function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
        <a>
          <img className={styles.logoImage} src="/images/logo.svg" />
        </a>
      </Link>
    </div>
  )
}
