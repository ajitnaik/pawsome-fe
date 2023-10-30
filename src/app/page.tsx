import FindPet from './components/findpet/FindPet'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <FindPet />
    </main>
  )
}
