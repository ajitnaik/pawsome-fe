// import FindPet from './[locale]/components/findpet/FindPet'
// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <FindPet />
//     </main>
//   )
// }


import {redirect} from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/en');
}