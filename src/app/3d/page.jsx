"use client";
import styles from "./3d.module.css";
import Navigation from "../components/navigation/navig";
import { useRef } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export default function About() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("open");
    navRef.current.classList.contains("open")
      ? (navRef.current.style.display = "block")
      : (navRef.current.style.display = "none");
  };

  return (
    <Fullpage>
      <main className={styles.screen}>
        <FullPageSections>
          <FullpageSection style={{ height: "100vh" }}>
            <div className={styles.fifth_screen}>
              <div className={styles.bot_part}>
                <div className={styles.ami_decoration}>
                  <div className={styles.ami_container}>
                    <p className={styles.robot_header}>
                      <span>ФОНД</span> под управлением лучших аналитиков
                    </p>
                    <button className={styles.robot_button}>
                      <span>Подробнее о Фонде</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          opacity="0.25"
                          d="M17.7635 0.736544C17.7635 0.460402 17.5396 0.236545 17.2635 0.236544L12.7635 0.236544C12.4873 0.236544 12.2635 0.460401 12.2635 0.736544C12.2635 1.01269 12.4873 1.23654 12.7635 1.23654L16.7635 1.23654L16.7635 5.23654C16.7635 5.51269 16.9873 5.73654 17.2635 5.73654C17.5396 5.73654 17.7635 5.51269 17.7635 5.23654L17.7635 0.736544ZM1.35355 17.3536L17.617 1.0901L16.9099 0.382991L0.646447 16.6464L1.35355 17.3536Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.nav_part}><Navigation /></div>
            </div>
          </FullpageSection>
        </FullPageSections>
      </main>
      <div className={styles.static}>
        <Navigation />
      </div>
    </Fullpage>
  );
}
