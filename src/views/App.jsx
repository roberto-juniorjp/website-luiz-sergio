import styles from "./App.module.css";
import Menu from "../components/Menu";
import Map from "../components/Map";
import Header from "../components/Header";
import Activities from "../components/Activities";
import Footer from "../components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Activities />
        <Menu />
      </div>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
