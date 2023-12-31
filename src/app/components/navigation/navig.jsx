import styles from "./navig.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div className={styles.navigation}>
      <div className={pathname === "/" ? styles.cell_active : styles.cell}>
        <div className={styles.cell_inside}>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.83 6.01002L13.28 0.770018C12 -0.249982 10 -0.259982 8.73002 0.760018L2.18002 6.01002C1.24002 6.76002 0.670024 8.26002 0.870024 9.44002L2.13002 16.98C2.42002 18.67 3.99002 20 5.70002 20H16.3C17.99 20 19.59 18.64 19.88 16.97L21.14 9.43002C21.32 8.26002 20.75 6.76002 19.83 6.01002ZM11.75 16C11.75 16.41 11.41 16.75 11 16.75C10.59 16.75 10.25 16.41 10.25 16V13C10.25 12.59 10.59 12.25 11 12.25C11.41 12.25 11.75 12.59 11.75 13V16Z"
              fill="white"
              fill-opacity="0.3"
            />
          </svg>
          <Link href="/" className={styles.cell_title}>
            Главная
          </Link>
        </div>
      </div>
      <div className={pathname === "/found" ? styles.cell_active : styles.cell}>
        <div className={styles.cell_inside}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.67 6.95003C21.03 4.78003 19.22 2.97003 17.05 2.33003C15.4 1.85003 14.26 1.89003 13.47 2.48003C12.52 3.19003 12.41 4.47003 12.41 5.38003V7.87003C12.41 10.33 13.53 11.58 15.73 11.58H18.6C19.5 11.58 20.79 11.47 21.5 10.52C22.11 9.74003 22.16 8.60003 21.67 6.95003Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M18.91 13.36C18.65 13.06 18.27 12.89 17.88 12.89H14.3C12.54 12.89 11.11 11.46 11.11 9.70003V6.12003C11.11 5.73003 10.94 5.35003 10.64 5.09003C10.35 4.83003 9.95002 4.71003 9.57002 4.76003C7.22002 5.06003 5.06002 6.35003 3.65002 8.29003C2.23002 10.24 1.71002 12.62 2.16002 15C2.81002 18.44 5.56002 21.19 9.01002 21.84C9.56002 21.95 10.11 22 10.66 22C12.47 22 14.22 21.44 15.71 20.35C17.65 18.94 18.94 16.78 19.24 14.43C19.29 14.04 19.17 13.65 18.91 13.36Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
          <Link href="/found" className={styles.cell_title}>
            Фонд
          </Link>
        </div>
      </div>
      <div className={pathname === "/bot" ? styles.cell_active : styles.cell}>
        <div className={styles.cell_inside}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 18V21C11 21.55 10.55 22 10 22C9.45 22 9 21.55 9 21V18H11Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M15 18V21C15 21.55 14.55 22 14 22C13.45 22 13 21.55 13 21V18H15Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M5 11V15C5 15.55 4.55 16 4 16C3.45 16 3 15.55 3 15V11C3 10.45 3.45 10 4 10C4.55 10 5 10.45 5 11Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M21 11V15C21 15.55 20.55 16 20 16C19.45 16 19 15.55 19 15V11C19 10.45 19.45 10 20 10C20.55 10 21 10.45 21 11Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M9.59998 7.60001H14.4C15.28 7.60001 16 6.88 16 6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6C8 6.88 8.71998 7.60001 9.59998 7.60001Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
          <Link href="/bot" className={styles.cell_title}>
            Торговый бот
          </Link>
        </div>
      </div>
      <div className={pathname === "/about" ? styles.cell_active : styles.cell}>
        <div className={styles.cell_inside}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 -3.92528e-07 10 -8.74228e-07C4.49 -1.35593e-06 1.35593e-06 4.49 8.74228e-07 10C3.92528e-07 15.51 4.49 20 10 20ZM10.75 14C10.75 14.41 10.41 14.75 10 14.75C9.59 14.75 9.25 14.41 9.25 14L9.25 9C9.25 8.59 9.59 8.25 10 8.25C10.41 8.25 10.75 8.59 10.75 9L10.75 14ZM9.08 5.62C9.13 5.49 9.2 5.39 9.29 5.29C9.39 5.2 9.5 5.13 9.62 5.08C9.74 5.03 9.87 5 10 5C10.13 5 10.26 5.03 10.38 5.08C10.5 5.13 10.61 5.2 10.71 5.29C10.8 5.39 10.87 5.49 10.92 5.62C10.97 5.74 11 5.87 11 6C11 6.13 10.97 6.26 10.92 6.38C10.87 6.5 10.8 6.61 10.71 6.71C10.61 6.8 10.5 6.87 10.38 6.92C10.14 7.02 9.86 7.02 9.62 6.92C9.5 6.87 9.39 6.8 9.29 6.71C9.2 6.61 9.13 6.5 9.08 6.38C9.03 6.26 9 6.13 9 6C9 5.87 9.03 5.74 9.08 5.62Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
          <Link href="/about" className={styles.cell_title}>
            О нас
          </Link>
        </div>
      </div>
      <div className={pathname === "/news" ? styles.cell_active : styles.cell}>
        <div className={styles.cell_inside}>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.98 0.06001C13.69 0.02001 13.43 0.27001 13.43 0.56001V6.58001C13.43 7.34001 12.98 8.03001 12.28 8.34001C11.58 8.64001 10.77 8.51001 10.21 7.99001L9.34 7.19001C9.15 7.01001 8.86 7.01001 8.66 7.19001L7.79 7.99001C7.43 8.33001 6.96 8.50001 6.49 8.50001C6.23 8.50001 5.97 8.45001 5.72 8.34001C5.02 8.03001 4.57 7.34001 4.57 6.58001V0.56001C4.57 0.27001 4.31 0.02001 4.02 0.06001C1.22 0.41001 0 2.30001 0 5.00001V15C0 18 1.5 20 5 20H13C16.5 20 18 18 18 15V5.00001C18 2.30001 16.78 0.41001 13.98 0.06001ZM14.5 16.75H6C5.59 16.75 5.25 16.41 5.25 16C5.25 15.59 5.59 15.25 6 15.25H14.5C14.91 15.25 15.25 15.59 15.25 16C15.25 16.41 14.91 16.75 14.5 16.75ZM14.5 12.75H10.25C9.84 12.75 9.5 12.41 9.5 12C9.5 11.59 9.84 11.25 10.25 11.25H14.5C14.91 11.25 15.25 11.59 15.25 12C15.25 12.41 14.91 12.75 14.5 12.75Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
          <Link href="/news" className={styles.cell_title}>
            Новости
          </Link>
        </div>
      </div>
      <div
        className={pathname === "/reviews" ? styles.cell_active : styles.cell}
      >
        <div className={styles.cell_inside}>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0H3C1.34 0 0 1.33 0 2.97V13.88C0 15.52 1.34 16.85 3 16.85H3.76C4.56 16.85 5.32 17.16 5.88 17.72L7.59 19.41C8.37 20.18 9.64 20.18 10.42 19.41L12.13 17.72C12.69 17.16 13.46 16.85 14.25 16.85H15C16.66 16.85 18 15.52 18 13.88V2.97C18 1.33 16.66 0 15 0ZM9.28 12.96C9.13 13.01 8.88 13.01 8.72 12.96C7.42 12.51 4.5 10.66 4.5 7.51C4.51 6.12 5.62 5 7 5C7.82 5 8.54 5.39 9 6C9.46 5.39 10.18 5 11 5C12.38 5 13.5 6.12 13.5 7.51C13.49 10.66 10.58 12.51 9.28 12.96Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
          <Link href="/reviews" className={styles.cell_title}>
            Отзывы
          </Link>
        </div>
      </div>
      <div className={pathname === "/faq" ? styles.cell_active : styles.cell}>
        <div className={styles.cell_inside}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0.429993H5C2 0.429993 0 2.42999 0 5.42999V11.43C0 14.43 2 16.43 5 16.43V18.56C5 19.36 5.89 19.84 6.55 19.39L11 16.43H15C18 16.43 20 14.43 20 11.43V5.42999C20 2.42999 18 0.429993 15 0.429993ZM10 12.6C9.58 12.6 9.25 12.26 9.25 11.85C9.25 11.44 9.58 11.1 10 11.1C10.42 11.1 10.75 11.44 10.75 11.85C10.75 12.26 10.42 12.6 10 12.6ZM11.26 8.44999C10.87 8.70999 10.75 8.87999 10.75 9.15999V9.36999C10.75 9.77999 10.41 10.12 10 10.12C9.59 10.12 9.25 9.77999 9.25 9.36999V9.15999C9.25 7.99999 10.1 7.42999 10.42 7.20999C10.79 6.95999 10.91 6.78999 10.91 6.52999C10.91 6.02999 10.5 5.61999 10 5.61999C9.5 5.61999 9.09 6.02999 9.09 6.52999C9.09 6.93999 8.75 7.27999 8.34 7.27999C7.93 7.27999 7.59 6.93999 7.59 6.52999C7.59 5.19999 8.67 4.11999 10 4.11999C11.33 4.11999 12.41 5.19999 12.41 6.52999C12.41 7.66999 11.57 8.23999 11.26 8.44999Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
          <Link href="/faq" className={styles.cell_title}>
            FAQ
          </Link>
        </div>
      </div>
      <div
        className={pathname === "/contacts" ? styles.cell_active : styles.cell}
      >
        <div className={styles.cell_inside}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M21.97 18.33C21.97 18.61 21.92 18.9 21.82 19.18C21.79 19.26 21.76 19.34 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C19.39 21.62 19.38 21.63 19.37 21.63C18.78 21.87 18.14 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C10.36 19 9.96998 18.71 9.59998 18.4L12.87 15.13C13.15 15.34 13.4 15.5 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
          <Link href="/contacts" className={styles.cell_title}>
            Контакты
          </Link>
        </div>
      </div>
      <div className={pathname === "/3d" ? styles.cell_active : styles.cell}>
        <div className={styles.big_cell_inside}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M12 6.93C9.93 6.93 8.25 8.61 8.25 10.68C8.25 12.71 9.84 14.36 11.95 14.42C11.98 14.42 12.02 14.42 12.04 14.42C12.06 14.42 12.09 14.42 12.11 14.42C12.12 14.42 12.13 14.42 12.13 14.42C14.15 14.35 15.74 12.71 15.75 10.68C15.75 8.61 14.07 6.93 12 6.93Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
          <Link href="/3d" className={styles.cell_title}>
            личный кабинет
          </Link>
        </div>
      </div>
    </div>
  );
}
