import styles from './Logo.module.css'

export function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImage} src="/images/logo.svg" />
      {/* <h1>The Iron Programming Language</h1> */}
    </div>
  )
}
