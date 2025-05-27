import styles from './TurnOnWebHero.module.css';

const TurnOnWebHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.blobContainer}>
        <div className={styles.blobVideoWrapper}>
          <video
            src="https://videocdn.cdnpk.net/videos/915f81cf-d625-4140-97c3-26a8a6063e48/horizontal/previews/clear/small.mp4?token=exp=1748347107~hmac=48f18155a8a36e0d0d1b2b9300df20969229d080647410d8b2f4655010a3274f" // Replace with actual path
            autoPlay
            loop
            muted
            playsInline
            className={styles.blobVideo}
          />
        </div>

        <h1 className={styles.title}>TurnOnWeb</h1>
        <p className={styles.subtitle}>Give Your Business A Digital Push</p>
      </div>

      <div className={styles.buttons}>
        <button className={styles.yellowButton}>Click to Connect with Our Team Now !</button>
        <button className={styles.yellowButton}>Our Happy Clients!</button>
      </div>
    </section>
  );
};

export default TurnOnWebHero;
