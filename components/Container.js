import styles from './Container.module.css'

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}
