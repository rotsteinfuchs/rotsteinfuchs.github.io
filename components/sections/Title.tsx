import styles from "./Title.module.css";

export function Title() {
  return (
    <section>
      <div>
        <div className={styles.title}>
          <h1 className={styles.outline}> Hi, I&apos;m Rotsteinfuchs.</h1>
          <h1>
            Hi, I&apos;m <span className={styles.highlight}>Rotsteinfuchs</span>
            .
          </h1>
          <h1 className={styles.outline}> Hi, I&apos;m Rotsteinfuchs.</h1>
        </div>
      </div>
    </section>
  );
}
