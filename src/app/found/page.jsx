"use client";
import styles from "./found.module.css";
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
      <main className={styles.found}>
        <FullPageSections>
          <FullpageSection style={{ height: "900px" }}>
            <div className={styles.first_screen}>
              <div className={styles.bot_part}>
                <div className={styles.bot_decorations}>
                  <div className={styles.bot_container}>
                    <div className={styles.bot_high}>
                      <div className={styles.bot_title_block}>
                        <span className={styles.bot_title}>
                          ФОНД <br />{" "}
                          <span className={styles.bot_subtitle}>
                            {" "}
                            AMI FINANCE
                          </span>
                        </span>{" "}
                        <br />
                        <span className={styles.bot_title_2}>
                          Управление вашими активами от профессиональных
                          аналитиков и трейдеров
                        </span>
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
                            <g className="">
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
                    <div className={styles.bot_low}>
                      <div className={styles.option}>
                        <button className={styles.option_btn}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="vuesax/bold/shield-tick">
                              <g id="vuesax/bold/shield-tick_2">
                                <path
                                  id="Vector"
                                  d="M18.5398 4.11994L13.0398 2.05994C12.4698 1.84994 11.5398 1.84994 10.9698 2.05994L5.4698 4.11994C4.4098 4.51994 3.5498 5.75994 3.5498 6.88994V14.9899C3.5498 15.7999 4.0798 16.8699 4.7298 17.3499L10.2298 21.4599C11.1998 22.1899 12.7898 22.1899 13.7598 21.4599L19.2598 17.3499C19.9098 16.8599 20.4398 15.7999 20.4398 14.9899V6.88994C20.4498 5.75994 19.5898 4.51994 18.5398 4.11994ZM15.4798 9.71994L11.1798 14.0199C11.0298 14.1699 10.8398 14.2399 10.6498 14.2399C10.4598 14.2399 10.2698 14.1699 10.1198 14.0199L8.5198 12.3999C8.2298 12.1099 8.2298 11.6299 8.5198 11.3399C8.8098 11.0499 9.2898 11.0499 9.5798 11.3399L10.6598 12.4199L14.4298 8.64993C14.7198 8.35993 15.1998 8.35993 15.4898 8.64993C15.7798 8.93993 15.7798 9.42994 15.4798 9.71994Z"
                                  fill="white"
                                  fill-opacity="0.2"
                                />
                              </g>
                            </g>
                          </svg>
                        </button>
                        <span className={styles.option_txt}>
                          ДИВЕРСИФИКАЦИЯ <br />
                          РИСКОВ
                        </span>
                      </div>
                      <div className={styles.option}>
                        <button className={styles.option_btn}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="vuesax/bold/wallet-add">
                              <g id="vuesax/bold/wallet-add_2">
                                <g id="wallet-add">
                                  <path
                                    id="Vector"
                                    d="M5 14.9999C2.79 14.9999 1 16.7899 1 18.9999C1 19.7499 1.21 20.4599 1.58 21.0599C2.27 22.2199 3.54 22.9999 5 22.9999C6.46 22.9999 7.73 22.2199 8.42 21.0599C8.79 20.4599 9 19.7499 9 18.9999C9 16.7899 7.21 14.9999 5 14.9999ZM6.49 19.7299H5.75V20.5099C5.75 20.9199 5.41 21.2599 5 21.2599C4.59 21.2599 4.25 20.9199 4.25 20.5099V19.7299H3.51C3.1 19.7299 2.76 19.3899 2.76 18.9799C2.76 18.5699 3.1 18.2299 3.51 18.2299H4.25V17.5199C4.25 17.1099 4.59 16.7699 5 16.7699C5.41 16.7699 5.75 17.1099 5.75 17.5199V18.2299H6.49C6.9 18.2299 7.24 18.5699 7.24 18.9799C7.24 19.3899 6.91 19.7299 6.49 19.7299Z"
                                    fill="white"
                                    fill-opacity="0.2"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M21.5 12.4999H19C17.9 12.4999 17 13.3999 17 14.4999C17 15.5999 17.9 16.4999 19 16.4999H21.5C21.78 16.4999 22 16.2799 22 15.9999V12.9999C22 12.7199 21.78 12.4999 21.5 12.4999Z"
                                    fill="white"
                                    fill-opacity="0.2"
                                  />
                                  <path
                                    id="Vector_3"
                                    d="M16.5292 5.39994C16.8292 5.68994 16.5792 6.13994 16.1592 6.13994L7.87923 6.12994C7.39923 6.12994 7.15923 5.54994 7.49923 5.20994L9.24923 3.44994C10.7292 1.97994 13.1192 1.97994 14.5992 3.44994L16.4892 5.35994C16.4992 5.36994 16.5192 5.38994 16.5292 5.39994Z"
                                    fill="white"
                                    fill-opacity="0.2"
                                  />
                                  <path
                                    id="Vector_4"
                                    d="M21.8694 18.6599C21.2594 20.7199 19.4994 21.9999 17.0994 21.9999H10.5994C10.2094 21.9999 9.95938 21.5699 10.1194 21.2099C10.4194 20.5099 10.6094 19.7199 10.6094 18.9999C10.6094 15.9699 8.13938 13.4999 5.10938 13.4999C4.34938 13.4999 3.60938 13.6599 2.92938 13.9599C2.55938 14.1199 2.10938 13.8699 2.10938 13.4699V11.9999C2.10938 9.27994 3.74938 7.37994 6.29938 7.05994C6.54938 7.01994 6.81937 6.99994 7.09937 6.99994H17.0994C17.3594 6.99994 17.6094 7.00994 17.8494 7.04994C19.8694 7.27994 21.3294 8.50994 21.8694 10.3399C21.9694 10.6699 21.7294 10.9999 21.3894 10.9999H19.0994C16.9294 10.9999 15.2094 12.9799 15.6794 15.2299C16.0094 16.8699 17.5294 17.9999 19.1994 17.9999H21.3894C21.7394 17.9999 21.9694 18.3399 21.8694 18.6599Z"
                                    fill="white"
                                    fill-opacity="0.2"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <span className={styles.option_txt}>
                          СТАБИЛЬНЫЙ <br />
                          ДОХОД
                        </span>
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

          <FullpageSection style={{ height: "900px" }}>
            <div className={styles.second_screen}>
              <div className={styles.bot_part}>
                <div className={styles.second_decoration}>
                  <div className={styles.coin_decoration}>
                    <div className={styles.coin_block}>
                      <div className={styles.coin_top}>
                        <div className={styles.coin_title_block}>
                          <span className={styles.coin_title}>
                            НЕ НУЖНО РАЗБИРАТЬСЯ В КРИПТОВАЛЮТЕ И БЫТЬ ОПЫТНЫМ
                            ТРЕЙДЕРОМ
                          </span>
                        </div>
                        <div className={styles.coin_text_container}>
                          <span className={styles.coin_txt}>
                            Доверьте это команде профессиональных аналитиков с
                            опытом более 10 лет
                          </span>
                        </div>
                      </div>
                      <div className={styles.coin_low}>
                        <button className={styles.coin_button}>
                          <span className={styles.coin_button_txt}>
                            Подключиться к фонду
                          </span>
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
                </div>
              </div>
              <div className={styles.nav_part}>{/* <Navigation /> */}</div>
            </div>
          </FullpageSection>

          <FullpageSection
            style={{
              height: "900px",
            }}
          >
            <div className={styles.third_screen}>
              {/* <div className={styles.bot_view}></div> */}
              <div className={styles.bot_part}>
                <div className={`${styles.second_decoration}`}>
                  <div className={styles.coin_decoration}>
                    <div className={styles.coin_block}>
                      <div className={styles.coin_top}>
                        <div className={styles.coin_title_block}>
                          <span className={styles.coin_title}>
                            НЕ НУЖНО РАЗБИРАТЬСЯ В КРИПТОВАЛЮТЕ И БЫТЬ ОПЫТНЫМ
                            ТРЕЙДЕРО
                          </span>
                        </div>
                        <div className={styles.coin_text_container}>
                          <span className={styles.coin_txt}>
                            Доверьте это команде профессиональных аналитиков с
                            опытом более 10 лет
                          </span>
                        </div>
                      </div>
                      <div className={styles.coin_low}>
                        <button className={styles.coin_button}>
                          <span className={styles.coin_button_txt}>
                            Подключиться к фонду
                          </span>
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
                </div>
              </div>
              <div className={styles.nav_part}>{/* <Navigation />*/}</div>
            </div>
          </FullpageSection>

          <FullpageSection style={{ height: "900px" }}>
            <div className={styles.fourth_screen}>
              <div className={styles.bot_part}>
                <div className={styles.second_decoration}>
                  <div className={styles.coin_decoration}>
                    <div className={styles.coin_block}>
                      <div className={styles.coin_top}>
                        <div className={styles.coin_title_block}>
                          <span className={styles.coin_title}>
                            Диверсификация инвестиций обеспечивает вложение
                            <br />
                          </span>
                          <span className={styles.coin_subtitle}>
                            БЕЗ РИСКОВ
                          </span>
                        </div>
                        <div className={styles.coin_text_container}>
                          <span
                            className={styles.coin_txt}
                            style={{ color: "#fff" }}
                          >
                            Наша команда аналитиков соберет сбалансированный и
                            устойчивый портфель
                          </span>
                        </div>
                      </div>
                      <div className={styles.coin_low}>
                        <button className={styles.coin_button}>
                          <span className={styles.coin_button_txt}>
                            Подключиться к фонду
                          </span>
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
                </div>
              </div>
              <div className={styles.nav_part}>
                <Navigation />{" "}
              </div>
            </div>
          </FullpageSection>

          <FullpageSection style={{ height: "900px" }}>
            <div className={styles.fiveth_screen}>
              <div className={styles.bot_part}>
                <div className={styles.digit_decoration}>
                  <div className={styles.digit_container}>
                    <div className={styles.digit_text_block}>
                      <span className={styles.digit_text}>ТОРГОВЫЙ БОТ</span>{" "}
                      <br />
                      <span className={styles.digit_text}>
                        AMI FINANCE
                      </span>{" "}
                      <br />
                      <span className={styles.digit_text}>В ЦИФРАХ</span>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>256%</p>
                        <div className={styles.digit_crit}>
                          <svg
                            style={{ opacity: "0.6" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                          >
                            <path
                              d="M29.0546 0.083374H11.9455C4.51379 0.083374 0.083374 4.51379 0.083374 11.9455V29.0342C0.083374 36.4863 4.51379 40.9167 11.9455 40.9167H29.0342C36.4659 40.9167 40.8963 36.4863 40.8963 29.0546V11.9455C40.9167 4.51379 36.4863 0.083374 29.0546 0.083374ZM14.5996 30.5042C14.5996 31.0759 14.1505 31.525 13.5788 31.525H7.88254C7.31087 31.525 6.86171 31.0759 6.86171 30.5042V21.0717C6.86171 19.7855 7.90296 18.7442 9.18921 18.7442H13.5788C14.1505 18.7442 14.5996 19.1934 14.5996 19.765V30.5042ZM24.3588 30.5042C24.3588 31.0759 23.9096 31.525 23.338 31.525H17.6417C17.07 31.525 16.6209 31.0759 16.6209 30.5042V11.8025C16.6209 10.5163 17.6621 9.47504 18.9484 9.47504H22.0517C23.338 9.47504 24.3792 10.5163 24.3792 11.8025V30.5042H24.3588ZM34.1384 30.5042C34.1384 31.0759 33.6892 31.525 33.1175 31.525H27.4213C26.8496 31.525 26.4005 31.0759 26.4005 30.5042V23.2563C26.4005 22.6846 26.8496 22.2355 27.4213 22.2355H31.8109C33.0971 22.2355 34.1384 23.2767 34.1384 24.563V30.5042Z"
                              fill="white"
                            />
                          </svg>
                          <p className={styles.digit_crit_txt}>
                            ЕЖЕМЕСЯЧНАЯ <br /> ДОХОДНОСТЬ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>100%</p>
                        <p className={styles.digit_crit_txt}>
                          ЗАЩИТА <br /> КАПИТАЛА
                        </p>
                      </div>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>20</p>
                        <p className={styles.digit_crit_txt}>
                          ЕЖЕМЕСЯЧНАЯ <br /> ДОХОДНОСТЬ
                        </p>
                      </div>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>84%</p>
                        <p className={styles.digit_crit_txt}>
                          ЗАШИТА КАПИТАЛА <br /> КАПИТАЛА
                        </p>
                      </div>
                    </div>
                    <div className={styles.digit_block}>
                      <div className={styles.digit_block_container}>
                        <p className={styles.digit_header}>1041</p>
                        <p className={styles.digit_crit_txt}>
                          ЕЖЕМЕСЯЧНАЯ <br /> ДОХОДНОСТЬ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.nav_part}>
                <Navigation />
              </div>
            </div>
          </FullpageSection>

          <FullpageSection style={{ height: "100vh" }}>
            <div className={styles.sixth_screen}>
              <div className={styles.fourth_scheme}>
                <div className={styles.bot_part}>
                  <div className={styles.button_block}>
                    <img
                      className={styles.button_img}
                      src="./img/button.png"
                      alt="button"
                    />
                    <img
                      className={styles.button_on_f}
                      src="./img/btn-on1.png"
                      alt="btn"
                    />
                    <img
                      className={styles.button_on_s}
                      src="./img/btn-on2.png"
                      alt="btn"
                    />

                    <img
                      src="./img/black_hand.png"
                      alt="Robot hand"
                      className={styles.but_on_hand}
                    />
                  </div>

                  <div className={styles.but_decoration}>
                    <div className={styles.but_container}>
                      <p className={styles.but_header}>
                        ПОДКЛЮЧИТЬСЯ К ТОРГОВОМУ БОТУ AMI FINANCE
                      </p>
                      <button className={styles.but_button}>
                        <span className={styles.but_button_txt}>НАЧАТЬ</span>
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
                <div className={styles.nav_part}>
                  <Navigation />{" "}
                </div>
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

{
  /*
  
  
          <FullpageSection style={{ height: "100vh" }}>
            <div className={styles.fourth_screen}>
              <div className={styles.fourth_scheme}>
                <div className={styles.bot_part}>
                  <div className={styles.button_block}>
                    <img
                      className={styles.button_img}
                      src="./img/button.png"
                      alt="button"
                    />
                    <img
                      className={styles.button_on_f}
                      src="./img/btn-on1.png"
                      alt="btn"
                    />
                    <img
                      className={styles.button_on_s}
                      src="./img/btn-on2.png"
                      alt="btn"
                    />

                    <img
                      src="./img/robot_hand.png"
                      alt="Robot hand"
                      className={styles.but_on_hand}
                    />
                  </div>

                  <div className={styles.but_decoration}>
                    <div className={styles.but_container}>
                      <p className={styles.but_header}>
                        ПОДКЛЮЧИТЬСЯ К ТОРГОВОМУ БОТУ AMI FINANCE
                      </p>
                      <button className={styles.but_button}>
                        <span className={styles.but_button_txt}>НАЧАТЬ</span>
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
                <div className={styles.nav_part}>{/* <Navigation /> </div>
                </div>
                </div>
              </FullpageSection>
 


              <FullpageSection style={{ height: "100vh" }}>
            <div className={styles.fiveth_screen}>
              <div className={styles.bot_part}>
                <div className={styles.bot_decorations}>
                  <div className={styles.bot_container}>
                    <h1 className={styles.bot_text_fon}>
                      Подключение фонда в 3 шага:
                    </h1>
                    <div className={styles.bot_flex}>
                      <div className={styles.bot_flex_item}>
                        <div className={styles.bot_number}>
                          <img src="./img/01.png" alt="" />
                          <img src="./img/img1.png" alt="" />
                          <p>Регистрация в личном кабинете</p>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="71"
                          viewBox="0 0 8 71"
                          fill="none"
                        >
                          <path
                            opacity="0.2"
                            d="M4.35355 70.3536C4.15829 70.5488 3.84171 70.5488 3.64645 70.3536L0.464466 67.1716C0.269204 66.9763 0.269204 66.6597 0.464466 66.4645C0.659728 66.2692 0.976311 66.2692 1.17157 66.4645L4 69.2929L6.82843 66.4645C7.02369 66.2692 7.34027 66.2692 7.53553 66.4645C7.7308 66.6597 7.7308 66.9763 7.53553 67.1716L4.35355 70.3536ZM4.5 0L4.5 70H3.5L3.5 0L4.5 0Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className={styles.bot_flex_item}>
                        <div className={styles.bot_number}>
                          <img src="./img/02.png" alt="" />
                          <img src="./img/img2.png" alt="" />
                          <p>Пополнение баланса</p>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="71"
                          viewBox="0 0 8 71"
                          fill="none"
                        >
                          <path
                            opacity="0.2"
                            d="M4.35355 70.3536C4.15829 70.5488 3.84171 70.5488 3.64645 70.3536L0.464466 67.1716C0.269204 66.9763 0.269204 66.6597 0.464466 66.4645C0.659728 66.2692 0.976311 66.2692 1.17157 66.4645L4 69.2929L6.82843 66.4645C7.02369 66.2692 7.34027 66.2692 7.53553 66.4645C7.7308 66.6597 7.7308 66.9763 7.53553 67.1716L4.35355 70.3536ZM4.5 0L4.5 70H3.5L3.5 0L4.5 0Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className={styles.bot_flex_item}>
                        <div className={styles.bot_number}>
                          <img src="./img/03.png" alt="" />
                          <img src="./img/img3.png" alt="" />
                          <p>Регистрация в личном кабинете</p>
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="40"
                          viewBox="0 0 36 40"
                          fill="none"
                        >
                          <path
                            opacity="0.2"
                            d="M0.146446 35.8536C-0.0488167 35.6583 -0.0488167 35.3417 0.146446 35.1464L3.32843 31.9645C3.52369 31.7692 3.84027 31.7692 4.03553 31.9645C4.2308 32.1597 4.2308 32.4763 4.03553 32.6716L1.20711 35.5L4.03553 38.3284C4.2308 38.5237 4.2308 38.8403 4.03553 39.0355C3.84027 39.2308 3.52369 39.2308 3.32843 39.0355L0.146446 35.8536ZM35.5 36L0.5 36L0.5 35L35.5 35L35.5 36Z"
                            fill="white"
                          />
                          <path opacity="0.2" d="M35 0V35" stroke="white" />
                        </svg>
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
           */
}
