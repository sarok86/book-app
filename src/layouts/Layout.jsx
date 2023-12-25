import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="#">Sarok</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developted by Sarok with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
