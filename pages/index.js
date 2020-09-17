import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>App Wallet</title>
        <link rel="icon" href="/app.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          APP CONSULTORIO
        </h1>
        <a className={styles.parrafo}>Estamos trabajando en una app odontologica esperala pronto...</a>
 
      </main>

      <footer className={styles.footer}>
    
          <a className={styles.text_foster}>Powered by{' jorginho Ojeda'}</a>
   
      </footer>

    </div>
  )
}
