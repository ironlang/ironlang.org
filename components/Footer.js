import styles from './Footer.module.css'
import { Container } from './Container'

export function Footer() {
  return (
    <footer>
      <Container>
        <p className={styles.finePrint}>
          Copyright &copy; 2020 The Iron Programming Language Project.
        </p>
      </Container>
    </footer>
  )
}
