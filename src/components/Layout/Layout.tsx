import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <footer>new 2022</footer>
    </div>
  );
};
