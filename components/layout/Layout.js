import Link from 'next/link';
import styles from './Layout.module.css';

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <Link href='/'>
            <h2>Mascot Car</h2>
            <p>Choose And Buy your Car</p>
            </Link>
        </header>

        <div className={styles.container}>{children}</div>

        <footer className={styles.footer}>
            Mohamad Ghanad Next.js Project | Mascot Car &copy;
        </footer>
    </>
  )
}

export default Layout