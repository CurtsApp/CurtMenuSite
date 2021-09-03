import Head from 'next/head'
import styles from '../styles/Home.module.css'
const menuItems = require('../media/drinks.json');

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Curt's Bar</title>
        <meta name="description" content="Curt's bar menu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Curt's Bar Menu
        </h1>

        <p className={styles.description}>
          For today's event
        </p>
        
        <div>
        {menuItems.map(item => renderMenuItem(item))}
        </div>
      </main>
    </div>
  )

  function renderMenuItem(menuItem) {
    return <div className={styles.card}>
      <h2>{menuItem.title}</h2>
      <ul>
        {menuItem.ingredients.map(ingredient => <li>{ingredient}</li>)}
      </ul>
    </div>
  }
 
}



