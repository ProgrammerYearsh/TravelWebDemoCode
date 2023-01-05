import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src="../frame-680@2x.png" />
        <div className={styles.topNav}>
          <div className={styles.navItem}>Home</div>
          <div className={styles.navItem}>Flights</div>
          <div className={styles.navItem2}>Bookings</div>
          <div className={styles.navItem3}>Hotels</div>
          <div className={styles.navItem4}>Login</div>
          <button className={styles.signUpWrapper}>
            <div className={styles.signUp}>Sign up</div>
          </button>
          <div className={styles.dropdown}>
            <div className={styles.en}>EN</div>
            <img
              className={styles.dropdownChild}
              alt=""
              src="../vector-1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.taglineWrapper}>
            <b className={styles.tagline}>
              Maybe it was predestined, and nothing we can doA
            </b>
          </div>
          <div className={styles.headingWrapper}>
            <b className={styles.heading}>Travel with family and kids</b>
          </div>
          <div className={styles.descWrapper}>
            <div
              className={styles.desc}
            >{`ideal for a family friendly holiday with endless options and adventures for all ages and discover the most invigorating 24 hours of your `}</div>
          </div>
          <div className={styles.cta}>
            <div className={styles.cta1}>
              <div className={styles.en}>About us</div>
            </div>
            <div className={styles.playDemo}>
              <img
                className={styles.playButtonIcon}
                alt=""
                src="../play-button.svg"
              />
              <div className={styles.en}>Play Demo</div>
            </div>
          </div>
        </div>
        <img
          className={styles.day66travelIcon}
          alt=""
          src="../day66travel.svg"
        />
      </div>
      <div className={styles.sectionsParent}>
        <div className={styles.sections}>SECTIONS</div>
        <b className={styles.weOfferBestServices}>We Offer Best Services</b>
        <div className={styles.frameParent1}>
          <div className={styles.categoryParent}>
            <div className={styles.category}>
              <div className={styles.categoryInner}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="../group-48.svg"
                />
              </div>
              <div className={styles.calculatedWeatherWrapper}>
                <b
                  className={styles.calculatedWeather}
                >{`Calculated Weather `}</b>
              </div>
              <div className={styles.loremIpsumDolorAmetConsecWrapper}>
                <div className={styles.loremIpsumDolorAmetConsec}>
                  <p className={styles.loremIpsumDolor}>
                    "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.category}>
              <img
                className={styles.categoryActiveChild}
                alt=""
                src="../frame-694.svg"
              />
              <div className={styles.bestFlightsWrapper}>
                <b className={styles.calculatedWeather}>Best Flights</b>
              </div>
              <div className={styles.loremIpsumDolorAmetConsecWrapper}>
                <div className={styles.loremIpsumDolorSitAmetCo}>
                  <p className={styles.loremIpsumDolor}>
                    "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.categoryGroup}>
            <div className={styles.category}>
              <img
                className={styles.categoryActiveChild}
                alt=""
                src="../frame-697.svg"
              />
              <div className={styles.calculatedWeatherWrapper}>
                <b className={styles.calculatedWeather}>Local Events</b>
              </div>
              <div className={styles.loremIpsumDolorAmetConsecWrapper}>
                <div className={styles.loremIpsumDolorSitAmetCo}>
                  <p className={styles.loremIpsumDolor}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.category2}>
              <img
                className={styles.categoryActiveChild}
                alt=""
                src="../frame-6971.svg"
              />
              <div className={styles.calculatedWeatherWrapper}>
                <b className={styles.calculatedWeather}>Local Events</b>
              </div>
              <div className={styles.loremIpsumDolorAmetConsecWrapper}>
                <div className={styles.loremIpsumDolorSitAmetCo}>
                  <p className={styles.loremIpsumDolor}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.subscribeSectionWrapper}>
        <div className={styles.subscribeSection}>
          <div className={styles.subscribeToGetInformationWrapper}>
            <div
              className={styles.subscribeToGetInformation}
            >{`Subscribe to get information, latest news and other interesting offers `}</div>
          </div>
          <div className={styles.subscribeSectionInner}>
            <div className={styles.groupParent}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="../vector-5.svg"
                />
                <div className={styles.groupItem} />
              </div>
              <div className={styles.yourEmail}>Your email</div>
            </div>
          </div>
          <div className={styles.subscribeSectionChild}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupInner} />
              <div className={styles.subscribe}>Subscribe</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.companyDescParent}>
        <div className={styles.companyDesc}>
          <div className={styles.travelWrapper}>
            <div className={styles.en}>Travel</div>
          </div>
          <div className={styles.loremIpsumDolorSitAmetCoFrame}>
            <div className={styles.loremIpsumDolorSitAmetCo2}>
              <p className={styles.loremIpsumDolor}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.navColumnsParent}>
          <div className={styles.navColumns}>
            <div className={styles.navRow}>
              <div className={styles.company}>Company</div>
              <b className={styles.about}>About</b>
              <b className={styles.about}>Careers</b>
              <b className={styles.about}>Mobile</b>
            </div>
            <div className={styles.navRow}>
              <div className={styles.company}>Contact</div>
              <b className={styles.about}>Help/FAQ</b>
              <b className={styles.about}>Affilates</b>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.groupWrapper}>
              <img className={styles.frameInner} alt="" src="../group-9.svg" />
            </div>
            <div className={styles.group9CopyWrapper}>
              <img
                className={styles.frameInner}
                alt=""
                src="../group-9-copy.svg"
              />
            </div>
            <div className={styles.group9CopyWrapper}>
              <img
                className={styles.frameInner}
                alt=""
                src="../group-9-copy-2.svg"
              />
            </div>
            <div className={styles.group9Copy3Wrapper}>
              <img
                className={styles.frameInner}
                alt=""
                src="../group-9-copy-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
