import styles from './Section.module.css'
import { placeholder } from '../util/placeholder'

export function Section({ data }) {
  return (
    <section id={data.id}>
      <h2>{data.title}</h2>
      <p className={styles.sectionBody}>{placeholder()}</p>
    </section>
  )
}
