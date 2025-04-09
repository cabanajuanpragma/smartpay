import Providers from "./(Provider)/Provider";
import styles from "./page.module.scss";

const Home = () => (
  <Providers>
    <div className={styles.main}>main page</div>
  </Providers>
);

export default Home;
