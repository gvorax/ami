"use client";
import styles from "./review.module.css";
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
      <main className={styles.review}>
        <FullPageSections>
          <FullpageSection styles={{ height: "900px" }}>
            <div className={styles.first_screen}>
              <div className={styles.bot_part}>
                <div className={styles.bot_decorations}>
                  <div className={styles.bot_container}>
                    <div className={styles.bot_high}>
                      <div className={styles.bot_title_block}>
                        <span className={styles.bot_title}>ОТЗЫВЫ</span>
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
                        Здесь вы можете ознакомиться с актуальными отзывами
                        наших клиентов
                      </p>
                    </div>
                    <div className={styles.comments}>
                      <div className={styles.com_box}>
                        <p>
                          Идейные соображения высшего порядка, а также
                          сложившаяся структура организации позволяет выполнять
                          важные задания по разработке направлений
                          прогрессивного развития. Не следует, однако забывать,
                          что реализация намеченных плановых заданий требуют от
                          нас анализа форм развития. Таким образом постоянное
                          информационно-пропагандистское обеспечение нашей
                          деятельности позволяет оценить значение направлений
                          развития.
                          <br />
                          <br />
                          Значимость этих проблем настолько очевидна, что начало
                          повседневной работы по формированию позиции позволяет
                          оценить значение соответствующий условий активизации.
                        </p>
                        <div className={styles.com_container}>
                          <div className={styles.com_pro}>
                            <div className={styles.com_pro_img}>
                              <img src="./img/comment_profile2.png" alt="" />
                            </div>
                            <div className={styles.com_pro_name}>
                              <p>Александр Сергеевич</p>
                              <p>
                                <span>32 года, Москва</span>
                                <span>10.07.2023</span>
                              </p>
                            </div>
                          </div>
                          <svg
                            width="43"
                            height="30"
                            viewBox="0 0 43 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="quote" opacity="0.1">
                              <path
                                id="Vector"
                                d="M7.9374 19.5963C7.00194 21.9492 5.52788 24.2737 3.55768 26.5133C2.93403 27.222 2.84898 28.2424 3.35923 29.0362C3.75615 29.6598 4.40809 30 5.11679 30C5.31524 30 5.51371 29.9859 5.71216 29.915C9.87922 28.696 19.6168 24.373 19.8861 10.5108C19.9853 5.16725 16.0733 0.574893 10.9848 0.0504559C8.16423 -0.233038 5.35781 0.688215 3.27419 2.55919C1.19066 4.44436 0 7.13744 0 9.94386C0 14.6213 3.31675 18.7176 7.9374 19.5963Z"
                                fill="white"
                              />
                              <path
                                id="Vector_2"
                                d="M33.6065 0.0504559C30.8 -0.233038 27.9935 0.688215 25.91 2.55919C23.8264 4.44436 22.6357 7.13744 22.6357 9.94386C22.6357 14.6213 25.9525 18.7176 30.5732 19.5963C29.6377 21.9492 28.1636 24.2737 26.1934 26.5132C25.5698 27.2219 25.4847 28.2424 25.9951 29.0362C26.3919 29.6598 27.0439 30 27.7526 30C27.951 30 28.1494 29.9859 28.3479 29.9149C32.515 28.696 42.2526 24.373 42.5219 10.5108V10.3124C42.5219 5.05383 38.6524 0.574893 33.6065 0.0504559Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className={styles.com_box}>
                        <p>
                          Идейные соображения высшего порядка, а также
                          сложившаяся структура организации позволяет выполнять
                          важные задания по разработке направлений
                          прогрессивного развития. Не следует, однако забывать,
                          что реализация намеченных плановых заданий требуют от
                          нас анализа форм развития. Таким образом постоянное
                          информационно-пропагандистское обеспечение нашей
                          деятельности позволяет оценить значение направлений
                          развития.
                          <br />
                          <br />
                          Значимость этих проблем настолько очевидна, что начало
                          повседневной работы по формированию позиции позволяет
                          оценить значение соответствующий условий активизации.
                        </p>
                        <div className={styles.com_container}>
                          <div className={styles.com_pro}>
                            <div className={styles.com_pro_img}>
                              <img src="./img/comment_profile.png" alt="" />
                            </div>
                            <div className={styles.com_pro_name}>
                              <p>Александр Сергеевич</p>
                              <p>
                                <span>32 года, Москва</span>
                                <span>10.07.2023</span>
                              </p>
                            </div>
                          </div>
                          <svg
                            width="43"
                            height="30"
                            viewBox="0 0 43 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="quote" opacity="0.1">
                              <path
                                id="Vector"
                                d="M7.9374 19.5963C7.00194 21.9492 5.52788 24.2737 3.55768 26.5133C2.93403 27.222 2.84898 28.2424 3.35923 29.0362C3.75615 29.6598 4.40809 30 5.11679 30C5.31524 30 5.51371 29.9859 5.71216 29.915C9.87922 28.696 19.6168 24.373 19.8861 10.5108C19.9853 5.16725 16.0733 0.574893 10.9848 0.0504559C8.16423 -0.233038 5.35781 0.688215 3.27419 2.55919C1.19066 4.44436 0 7.13744 0 9.94386C0 14.6213 3.31675 18.7176 7.9374 19.5963Z"
                                fill="white"
                              />
                              <path
                                id="Vector_2"
                                d="M33.6065 0.0504559C30.8 -0.233038 27.9935 0.688215 25.91 2.55919C23.8264 4.44436 22.6357 7.13744 22.6357 9.94386C22.6357 14.6213 25.9525 18.7176 30.5732 19.5963C29.6377 21.9492 28.1636 24.2737 26.1934 26.5132C25.5698 27.2219 25.4847 28.2424 25.9951 29.0362C26.3919 29.6598 27.0439 30 27.7526 30C27.951 30 28.1494 29.9859 28.3479 29.9149C32.515 28.696 42.2526 24.373 42.5219 10.5108V10.3124C42.5219 5.05383 38.6524 0.574893 33.6065 0.0504559Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                        </div>
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
