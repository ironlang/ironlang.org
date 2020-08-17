import Scrollspy from 'react-scrollspy'
import ReactMarkdown from 'react-markdown'
import styles from './Content.module.css'
import { Container } from './Container'
import { Logo } from './Logo'

export function Content({ sections }) {
  return (
    <div className={styles.background}>
      <Container>
        <div className={styles.contentContainer}>
          <div>
            <div className={styles.sidebar}>
              <Logo />
              <Scrollspy
                items={sections.map((section) => section.data.id)}
                currentClassName="sectionCurrent"
                scrolledPastClassName="sectionScrolledPast"
              >
                {sections.map((section) => (
                  <li className={styles.sectionTitle}>
                    <a href={`#${section.data.id}`}>{section.data.title}</a>
                  </li>
                ))}
              </Scrollspy>
            </div>
          </div>

          <div>
            {sections.map((section) => (
              <section
                key={section.data.id}
                className={styles.contentSection}
                id={section.data.id}
              >
                <ReactMarkdown
                  source={section.content}
                  renderers={{
                    link({ href, children, ...props }) {
                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="primary"
                          {...props}
                        >
                          {children}
                        </a>
                      )
                    },
                  }}
                />
              </section>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
