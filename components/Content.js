import Scrollspy from 'react-scrollspy'
import styles from './Content.module.css'
import { Container } from './Container'
import { Section } from './Section'

export function Content() {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'installation', title: 'Installation' },
    { id: 'hello-world', title: 'Hello, world!' },
    { id: 'types', title: 'Types' },
    { id: 'functions', title: 'Functions' },
    { id: 'protocols', title: 'Protocols' },
    { id: 'modules', title: 'Modules' },
  ]

  return (
    <div className={styles.background}>
      <Container>
        <div className={styles.contentContainer}>
          <div>
            <Scrollspy
              className={styles.sidebar}
              items={sections.map((section) => section.id)}
              currentClassName="sectionCurrent"
              scrolledPastClassName="sectionScrolledPast"
            >
              {sections.map((section) => (
                <li className={styles.sectionTitle}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </Scrollspy>
          </div>

          <div>
            {sections.map((section) => (
              <Section data={section} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
