import styles from '../styles/Landing.module.css'
import Button from '../src/components/base/button'
import CardAbout from '../src/components/module/CardAbout'
import Navbar from '../src/components/module/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <img src="/Mask Group.png" alt="" srcSet="" />
      <main className="container">
        <div className="row">
          <div className={[["col-6"], styles["side-left"]].join(' ')}>
            <h1>Awesome App<br /> for For Saving <span className={styles["blue-text"]}>Time</span></h1>
            <p>We bring you a mobile app for banking problems that<br /> oftenly wasting much of your times.</p>
            <Button className="blue" title="Try It Free" />
          </div>
          <div className={[["col-6"], styles["side-right"]].join(' ')}>
            <img src="/png-phone.png" alt="" srcSet="" />
          </div>
        </div>
      </main>

      <section className={styles["container-abt"]}>
        <div className="container">
          <div className={styles["section-about"]}>
            <h1><span className={styles["blue-text"]}>About</span> the Application</h1>
            <p>We have some great features from the application and it’s totally free<br /> to use by all users around the world.</p>
            <div className={styles["card-abt-section"]}>
              <CardAbout
                pict="/phone.png"
                title="24/7 Support"
                desc="We have 24/7 contact support so you can contact us whenever you want and we will respond it." />
              <CardAbout
                pict="/lock.png"
                title="Data Privacy"
                desc="We make sure your data is safe in our database and we will encrypt any data you submitted to us." />
              <CardAbout
                pict="/download.png"
                title="Easy Download"
                desc="Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store." />

            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className={[["row"], styles["part-row"]].join(' ')}>
          <div className="col-6">
            <h1>100+ <span className={styles["blue-text"]}>Trusted</span> <br /> Partners.</h1>
            <p>We have reached global level and have 100+<br /> brand partners around the globe.</p>
          </div>
          <div className={[["col-6"], styles['partner']].join(' ')}>
            <div className={styles["partner-grid"]}>
              <img src="/airbnblogo.png" alt="" />
              <img src="/canonlogo.png" alt="" />
              <img src="/delllogo.png" alt="" />
              <img src="/dropboxlogo.png" alt="" />
              <img src="/hnmlogo.png" alt="" />
              <img src="/microsoftlogo.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles["container-abt"]}>
        <div className="container">
          <div className={[["row"], styles["part-row-abt"]].join(' ')}>
            <div className={[["col-5"],styles['col-img']].join(' ')}>
              <img src="/png-phone.png" alt="" />
            </div>
            <div className={[["col-7"],styles['feat-side-right']].join(' ')}>
              <h1>All The <span className={styles["blue-text"]}>Great</span><br />Zwallet Features.</h1>
              <div className={styles["card-feature"]}>
                <h5><span className={styles["blue-text"]}>1.</span> Small Fee</h5>
                <p>We only charge 5% of every success transaction done in Zwallet app.</p>
              </div>
              <div className={styles["card-feature"]}>
                <h5><span className={styles["blue-text"]}>2.</span> Data Secured</h5>
                <p>All your data is secured properly in our system and it’s encrypted.</p>
              </div>
              <div className={styles["card-feature"]}>
                <h5><span className={styles["blue-text"]}>3.</span> User Friendly</h5>
                <p>Zwallet come up with modern and sleek design and not complicated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["container-testi"]}>
        <div className="container">
          <div className={styles["section-about"]}>
            <h1>What Users are <span className={styles["blue-text"]}>Saying</span></h1>
            <p>We have some great features from the application and it’s totally free<br /> to use by all users around the world.</p>
            <div className={styles["card-abt-section"]}>
              <CardAbout
                pict="/phone.png"
                title="Sherina Chaw"
                desc={`“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”`} />
              <CardAbout
                pict="/lock.png"
                title="Jessica Merra"
                desc={`“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”`} />
              <CardAbout
                pict="/download.png"
                title="Robert Chandler"
                desc={`“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”`}/>

            </div>
          </div>
        </div>
      </section>


      <footer className={styles.footer}>
        <h1>this is footer</h1>
      </footer>
    </div>
  )
}
