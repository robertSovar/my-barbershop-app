import myVideo from "../../images/first.mp4";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <section className={styles.videoSection}>
      <video controls autoPlay src={myVideo} className={styles.videoPlayer}>
        {myVideo}
      </video>
      <h1 className={styles.homePageTitle}>Alex the barber</h1>
      <p className={styles.mottoParagraph}>
        "În fiecare tăietură descopăr povestea ta. Frizerul care îți modelează
        nu doar părul, ci și încrederea în propria ta frumusețe."
      </p>
    </section>
  );
}

export default HomePage;
