"use client";
import styles from "./contacts.module.css";
import Navigation from "../components/navigation/navig";
import { useRef } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export default function Contacts() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("open");
    navRef.current.classList.contains("open")
      ? (navRef.current.style.display = "block")
      : (navRef.current.style.display = "none");
  };

  return (
    <Fullpage>
      <main className={styles.contact}>
        <FullPageSections>
          <FullpageSection style={{ height: "900px" }}>
            <div className={styles.first_screen}>
              <div className={styles.bot_part}>
                <div className={styles.bot_decorations}>
              <div className={styles.bot_view}></div>

                  <div className={styles.bot_container}>
                    <div className={styles.bot_high}>
                      <div className={styles.bot_title_block}>
                        <span className={styles.bot_title}>НАШИ КОНТАКТЫ</span>{" "}
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
                    <div className={styles.bot_low}>
                      <div className={styles.option}>
                        <p>Адрес</p>
                        <svg
                          width="14"
                          height="17"
                          viewBox="0 0 14 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="map point" opacity="0.5">
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M6.53985 0.0043268C3.16233 0.122836 0.356437 2.75793 0.0322785 6.12151C-0.0339475 6.79423 0.00439397 7.44603 0.122904 8.06995C0.122904 8.06995 0.13336 8.14315 0.168216 8.28257C0.272783 8.74964 0.429634 9.20276 0.624827 9.628C1.30451 11.2383 2.87651 13.9327 6.40391 16.8641C6.62002 17.0453 6.93721 17.0453 7.1568 16.8641C10.6842 13.9362 12.2562 11.2418 12.9394 9.62452C13.138 9.19928 13.2914 8.74964 13.396 8.27909C13.4273 8.14315 13.4413 8.06647 13.4413 8.06647C13.5215 7.6482 13.5633 7.21947 13.5633 6.78029C13.5633 2.95312 10.3949 -0.131611 6.53985 0.0043268ZM6.78036 10.1543C4.96088 10.1543 3.48648 8.67993 3.48648 6.86046C3.48648 5.04099 4.96088 3.56659 6.78036 3.56659C8.59983 3.56659 10.0742 5.04099 10.0742 6.86046C10.0742 8.67993 8.59983 10.1543 6.78036 10.1543Z"
                                fill="white"
                              />
                            </g>
                          </g>
                        </svg>
                        <span>81 Tamam Street, Cyprys</span>
                      </div>
                      <div className={styles.option}>
                        <p>E-mail</p>
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="arroba">
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M8.5 4.3871C6.23216 4.3871 4.3871 6.23216 4.3871 8.5C4.3871 10.7678 6.23216 12.6129 8.5 12.6129C9.94679 12.6129 11.2206 11.8614 11.9539 10.7288C12.4902 11.2176 13.2028 11.5161 13.9839 11.5161C15.647 11.5161 17 10.1631 17 8.5C17 3.81311 13.187 0 8.5 0C3.81305 0 0 3.81311 0 8.5C0 13.1869 3.81305 17 8.5 17C10.7704 17 12.905 16.1158 14.5104 14.5104L13.3471 13.3471C12.0524 14.6418 10.331 15.3549 8.5 15.3549C4.72026 15.3549 1.64515 12.2798 1.64515 8.5C1.64515 4.72022 4.72026 1.64515 8.5 1.64515C12.2797 1.64515 15.3549 4.72026 15.3549 8.5C15.3549 9.25594 14.7398 9.87096 13.9839 9.87096C13.228 9.87096 12.6129 9.25594 12.6129 8.50003V8.5C12.6129 6.23216 10.7678 4.3871 8.5 4.3871ZM8.5 10.9678C7.13924 10.9678 6.03224 9.86073 6.03224 8.5C6.03224 7.13927 7.1392 6.03224 8.5 6.03224C9.8608 6.03224 10.9678 7.13927 10.9678 8.5C10.9678 9.8607 9.86076 10.9678 8.5 10.9678Z"
                                fill="#FFCF52"
                              />
                            </g>
                          </g>
                        </svg>
                        <span>help@ami.finance</span>
                      </div>
                      <div className={styles.option}>
                        <p>Telegram</p>
                        <svg
                          width="20"
                          height="17"
                          viewBox="0 0 20 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Vector"
                            d="M7.84784 11.2041L7.517 15.9505C7.99034 15.9505 8.19535 15.7431 8.44118 15.4941L10.6604 13.3308L15.2588 16.7657C16.1022 17.2451 16.6964 16.9926 16.9239 15.9743L19.9423 1.54819L19.9431 1.54734C20.2106 0.275743 19.4923 -0.221504 18.6706 0.0904442L0.928504 7.01876C-0.282359 7.49816 -0.264025 8.18665 0.722666 8.4986L5.25861 9.93764L15.7947 3.21333C16.2905 2.87843 16.7414 3.06373 16.3705 3.39863L7.84784 11.2041Z"
                            fill="#429BED"
                          />
                        </svg>

                        <span>AMI Finance</span>
                      </div>
                      <button className={styles.but_button}>
                        <span className={styles.but_button_txt}>
                          Связаться с нами
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
