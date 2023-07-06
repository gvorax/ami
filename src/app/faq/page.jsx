"use client";
import styles from "./faq.module.css";
import Navigation from "../components/navigation/navig";
import { useRef } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export default function () {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("open");
    navRef.current.classList.contains("open")
      ? (navRef.current.style.display = "block")
      : (navRef.current.style.display = "none");
  };
  return (
    <Fullpage>
      <main className={styles.faq}>
        <FullPageSections>
          <FullpageSection styles={{ height: "100vh" }}>
            <div className={styles.first_screen}>
              <div className={styles.bot_part}>
                <div className={styles.bot_decorations}>
                  <div className={styles.bot_container}>
                    <div className={styles.bot_high}>
                      <div className={styles.bot_title_block}>
                        <span className={styles.bot_title}>FAQ</span>
                      </div>
                      <div className={styles.links}>
                        <button
                          className={`${styles.link} ${styles.link_h}`}
                          onClick={showNav}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                            style={{
                              pointerEvents: "none",
                              display: "block",
                              width: "20px",
                              height: "auto",
                            }}
                          >
                            <g class="">
                              <path
                                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                                fill="#88878A"
                              ></path>
                            </g>
                          </svg>
                        </button>
                        <button className={styles.link}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                          >
                            <path
                              opacity="0.5"
                              d="M6.59199 9.22688L6.31409 13.1357C6.71169 13.1357 6.88389 12.9649 7.09039 12.7598L8.95448 10.9783L12.8171 13.807C13.5254 14.2018 14.0245 13.9939 14.2156 13.1553L16.751 1.27492L16.7517 1.27422C16.9764 0.227022 16.373 -0.182476 15.6828 0.0744224L0.77992 5.78009C-0.237174 6.17489 -0.221774 6.74189 0.607021 6.99879L4.4171 8.18388L13.2672 2.64621C13.6836 2.37041 14.0623 2.52301 13.7508 2.79881L6.59199 9.22688Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button className={styles.link}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                          >
                            <path
                              d="M12.3529 -6.10352e-05H4.11765C1.64706 -6.10352e-05 0 1.23523 0 4.11759V9.88229C0 12.7646 1.64706 13.9999 4.11765 13.9999H12.3529C14.8235 13.9999 16.4706 12.7646 16.4706 9.88229V4.11759C16.4706 1.23523 14.8235 -6.10352e-05 12.3529 -6.10352e-05ZM12.74 5.01523L10.1624 7.07406C9.61882 7.51053 8.92706 7.72465 8.23529 7.72465C7.54353 7.72465 6.84353 7.51053 6.30824 7.07406L3.73059 5.01523C3.46706 4.80112 3.42588 4.40582 3.63176 4.14229C3.84588 3.87876 4.23294 3.82935 4.49647 4.04347L7.07412 6.10229C7.7 6.60464 8.76235 6.60464 9.38824 6.10229L11.9659 4.04347C12.2294 3.82935 12.6247 3.87053 12.8306 4.14229C13.0447 4.40582 13.0035 4.80112 12.74 5.01523Z"
                              fill="white"
                              fill-opacity="0.5"
                            />
                          </svg>
                        </button>
                        <button className={styles.link}>
                          <p>RU</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="5"
                            viewBox="0 0 7 5"
                            fill="none"
                          >
                            <path
                              opacity="0.5"
                              d="M3.5 4.99994L0.468912 0.499938L6.53109 0.499939L3.5 4.99994Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className={styles.rv}>
                      <div className={styles.sliders}>
                        <svg
                          width="78"
                          height="78"
                          viewBox="0 0 78 78"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Group 112">
                            <rect
                              id="Rectangle 34"
                              opacity="0.1"
                              x="0.5"
                              y="0.5"
                              width="77"
                              height="77"
                              stroke="white"
                            />
                            <path
                              id="Arrow 1"
                              d="M23.5757 39.4243C23.3414 39.1899 23.3414 38.8101 23.5757 38.5757L27.3941 34.7574C27.6284 34.523 28.0083 34.523 28.2426 34.7574C28.477 34.9917 28.477 35.3716 28.2426 35.6059L24.8485 39L28.2426 42.3941C28.477 42.6284 28.477 43.0083 28.2426 43.2426C28.0083 43.477 27.6284 43.477 27.3941 43.2426L23.5757 39.4243ZM54 39.6H24V38.4H54V39.6Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                        <svg
                          width="78"
                          height="78"
                          viewBox="0 0 78 78"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Group 111">
                            <rect
                              id="Rectangle 34"
                              opacity="0.1"
                              x="-0.5"
                              y="0.5"
                              width="77"
                              height="77"
                              transform="matrix(-1 0 0 1 77 0)"
                              stroke="white"
                            />
                            <path
                              id="Arrow 1"
                              d="M54.4243 39.4243C54.6586 39.1899 54.6586 38.8101 54.4243 38.5757L50.6059 34.7574C50.3716 34.523 49.9917 34.523 49.7574 34.7574C49.523 34.9917 49.523 35.3716 49.7574 35.6059L53.1515 39L49.7574 42.3941C49.523 42.6284 49.523 43.0083 49.7574 43.2426C49.9917 43.477 50.3716 43.477 50.6059 43.2426L54.4243 39.4243ZM24 39.6H54V38.4H24V39.6Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className={styles.rv_text}>
                        Здесь вы можете получить ответы на самые частые вопросы
                      </p>
                    </div>
                    <div className={styles.comments}>
                      <div className={styles.com_box}>
                        <p>какИМИ видАМИ активов ВЫ управляетЕ?</p>
                        <p>
                          Идейные соображения высшего порядка, а также
                          сложившаяся структура организации позволяет выполнять
                          важные задания по разработке направлений
                          прогрессивного развития.
                        </p>
                        <p>
                          Не следует, однако забывать, что реализация намеченных
                          плановых заданий требуют от нас анализа форм развития.
                          Таким образом постоянное
                          <br />
                          <br />
                          информационно-пропагандистское обеспечение нашей
                          деятельности позволяет оценить значение.
                        </p>
                      </div>
                      <div className={styles.com_box}>
                        <p>
                          Каковы условия вступления в фонд и минимальная сумма
                          инвестиций?
                        </p>
                        <p>
                          Идейные соображения высшего порядка, а также
                          сложившаяся структура организации позволяет выполнять
                          важные задания по разработке направлений
                          прогрессивного развития.
                        </p>
                        <p>
                          Не следует, однако забывать, что реализация намеченных
                          плановых заданий требуют от нас анализа форм развития.
                          Таким образом постоянное
                          <br />
                          <br />
                          информационно-пропагандистское обеспечение нашей
                          деятельности позволяет оценить значение.
                        </p>
                      </div>
                      <div className={styles.com_box}>
                        <p>
                          Каковы условия вступления в фонд и минимальная сумма
                          инвестиций?
                        </p>
                        <p>
                          Идейные соображения высшего порядка, а также
                          сложившаяся структура организации позволяет выполнять
                          важные задания по разработке направлений
                          прогрессивного развития.
                        </p>
                        <p>
                          Не следует, однако забывать, что реализация намеченных
                          плановых заданий требуют от нас анализа форм развития.
                          Таким образом постоянное
                          <br />
                          <br />
                          информационно-пропагандистское обеспечение нашей
                          деятельности позволяет оценить значение.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.nav_part} ref={navRef}>
                <Navigation />
              </div>
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

/* 

*/
