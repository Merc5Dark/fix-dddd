import React from 'react'

import projectStyles from '.style.module.css'
import styles from './dashboard.module.css'

const Dashboard = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['dashboard']}>
        <div className={styles['content-frame']}>
          <div className={styles['topbar']}>
            <div className={styles['input']}>
              <div className={styles['label']}>
                <span
                  className={` ${styles['text']} ${projectStyles['body-small-regular-condensed']} `}
                >
                  <span>Search Item</span>
                </span>
              </div>
              <div className={styles['input-field']}>
                <input
                  type="text"
                  placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                  className={styles['input-area']}
                />
              </div>
            </div>
          </div>
          <div className={styles['content-area']}>
            <div className={styles['row01']}>
              <div className={styles['item-card']}>
                <div className={styles['product-image']}>
                  <div className={styles['product-image01']}>
                    <img src alt="ImageI449" className={styles['image']} />
                  </div>
                </div>
                <div className={styles['content']}>
                  <span
                    className={` ${styles['text02']} ${projectStyles['body-normal-medium-normal']} `}
                  >
                    <span>Apple Watch</span>
                  </span>
                  <span
                    className={` ${styles['text04']} ${projectStyles['body-small-regular-condensed']} `}
                  >
                    <span>Series 5 SE</span>
                  </span>
                  <div className={styles['action']}>
                    <span
                      className={` ${styles['text06']} ${projectStyles['body-normal-medium-normal']} `}
                    >
                      <span>$ 529.99</span>
                    </span>
                    <button className={styles['button']}>
                      <img
                        src="/iconi449-t45.svg"
                        alt="IconI449"
                        className={styles['icon']}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles['item-card1']}>
                <div className={styles['product-image02']}>
                  <div className={styles['product-image03']}>
                    <img src alt="ImageI451" className={styles['image01']} />
                  </div>
                </div>
                <div className={styles['content1']}>
                  <span
                    className={` ${styles['text08']} ${projectStyles['body-normal-medium-normal']} `}
                  >
                    <span>Sony ZX330BT</span>
                  </span>
                  <span
                    className={` ${styles['text10']} ${projectStyles['body-small-regular-condensed']} `}
                  >
                    <span>Light Grey</span>
                  </span>
                  <div className={styles['action1']}>
                    <span
                      className={` ${styles['text12']} ${projectStyles['body-normal-medium-normal']} `}
                    >
                      <span>$ 39.99</span>
                    </span>
                    <button className={styles['button1']}>
                      <img
                        src="/iconi451-kfs.svg"
                        alt="IconI451"
                        className={styles['icon01']}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles['item-card2']}>
                <div className={styles['product-image04']}>
                  <div className={styles['product-image05']}>
                    <img src alt="ImageI452" className={styles['image02']} />
                  </div>
                </div>
                <div className={styles['content2']}>
                  <span
                    className={` ${styles['text14']} ${projectStyles['body-normal-medium-normal']} `}
                  >
                    <span>Iphone 11</span>
                  </span>
                  <span
                    className={` ${styles['text16']} ${projectStyles['body-small-regular-condensed']} `}
                  >
                    <span>Serious Black</span>
                  </span>
                  <div className={styles['action2']}>
                    <span
                      className={` ${styles['text18']} ${projectStyles['body-normal-medium-normal']} `}
                    >
                      <span>$ 619.99</span>
                    </span>
                    <button className={styles['button2']}>
                      <img
                        src="/iconi452-y8dp.svg"
                        alt="IconI452"
                        className={styles['icon02']}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles['item-card3']}>
                <div className={styles['product-image06']}>
                  <div className={styles['product-image07']}>
                    <img src alt="ImageI478" className={styles['image03']} />
                  </div>
                </div>
                <div className={styles['content3']}>
                  <span
                    className={` ${styles['text20']} ${projectStyles['body-normal-medium-normal']} `}
                  >
                    <span>Iphone 11</span>
                  </span>
                  <span
                    className={` ${styles['text22']} ${projectStyles['body-small-regular-condensed']} `}
                  >
                    <span>Subway Blue</span>
                  </span>
                  <div className={styles['action3']}>
                    <span
                      className={` ${styles['text24']} ${projectStyles['body-normal-medium-normal']} `}
                    >
                      <span>$ 619.99</span>
                    </span>
                    <button className={styles['button3']}>
                      <img
                        src="/iconi478-rknh.svg"
                        alt="IconI478"
                        className={styles['icon03']}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['row02']}>
              <div className={styles['item-card4']}>
                <div className={styles['product-image08']}>
                  <div className={styles['product-image09']}>
                    <img src alt="ImageI454" className={styles['image04']} />
                  </div>
                </div>
                <div className={styles['content4']}>
                  <span
                    className={` ${styles['text26']} ${projectStyles['body-normal-medium-normal']} `}
                  >
                    <span>Iphone 11</span>
                  </span>
                  <span
                    className={` ${styles['text28']} ${projectStyles['body-small-regular-condensed']} `}
                  >
                    <span>Product RED</span>
                  </span>
                  <div className={styles['action4']}>
                    <span
                      className={` ${styles['text30']} ${projectStyles['body-normal-medium-normal']} `}
                    >
                      <span>$ 619.99</span>
                    </span>
                    <button className={styles['button4']}>
                      <img
                        src="/iconi454-ek6c.svg"
                        alt="IconI454"
                        className={styles['icon04']}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles['item-card5']}>
                <div className={styles['product-image10']}>
                  <div className={styles['product-image11']}>
                    <img src alt="ImageI480" className={styles['image05']} />
                  </div>
                </div>
                <div className={styles['content5']}>
                  <span
                    className={` ${styles['text32']} ${projectStyles['body-normal-medium-normal']} `}
                  >
                    <span>Iphone 11</span>
                  </span>
                  <span
                    className={` ${styles['text34']} ${projectStyles['body-small-regular-condensed']} `}
                  >
                    <span>Milky White</span>
                  </span>
                  <div className={styles['action5']}>
                    <span
                      className={` ${styles['text36']} ${projectStyles['body-normal-medium-normal']} `}
                    >
                      <span>$ 619.99</span>
                    </span>
                    <button className={styles['button5']}>
                      <img
                        src="/iconi480-h9j.svg"
                        alt="IconI480"
                        className={styles['icon05']}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles['item-card6']}>
                <div className={styles['product-image12']}>
                  <div className={styles['product-image13']}>
                    <img src alt="ImageI133" className={styles['image06']} />
                  </div>
                </div>
                <div className={styles['content6']}>
                  <span
                    className={` ${styles['text38']} ${projectStyles['body-normal-medium-normal']} `}
                  >
                    <span>Iphone 13</span>
                  </span>
                  <span
                    className={` ${styles['text40']} ${projectStyles['body-small-regular-condensed']} `}
                  >
                    <span>Product RED</span>
                  </span>
                  <div className={styles['action6']}>
                    <span
                      className={` ${styles['text42']} ${projectStyles['body-normal-medium-normal']} `}
                    >
                      <span>$ 619.99</span>
                    </span>
                    <button className={styles['button6']}>
                      <img
                        src="/iconi133-7ad5.svg"
                        alt="IconI133"
                        className={styles['icon06']}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles['item-card7']}>
                <div className={styles['product-image14']}>
                  <div className={styles['product-image15']}>
                    <img src alt="ImageI133" className={styles['image07']} />
                  </div>
                </div>
                <div className={styles['content7']}>
                  <span
                    className={` ${styles['text44']} ${projectStyles['body-normal-medium-normal']} `}
                  >
                    <span>Iphone 14</span>
                  </span>
                  <span
                    className={` ${styles['text46']} ${projectStyles['body-small-regular-condensed']} `}
                  >
                    <span>Product RED</span>
                  </span>
                  <div className={styles['action7']}>
                    <span
                      className={` ${styles['text48']} ${projectStyles['body-normal-medium-normal']} `}
                    >
                      <span>$ 619.99</span>
                    </span>
                    <button className={styles['button7']}>
                      <img
                        src="/iconi133-keh.svg"
                        alt="IconI133"
                        className={styles['icon07']}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/line17413-j8eq.svg"
          alt="Line17413"
          className={styles['line1']}
        />
        <div className={styles['bag-area']}>
          <div className={styles['title']}>
            <span
              className={` ${styles['text50']} ${projectStyles['subtitle-normal-medium-normal']} `}
            >
              <span>Bag</span>
            </span>
          </div>
          <div className={styles['bag-items']}>
            <div className={styles['row']}>
              <div className={styles['bag-item']}>
                <div className={styles['product-image16']}>
                  <img src alt="ImageI736" className={styles['image08']} />
                </div>
              </div>
              <div className={styles['bag-item1']}>
                <div className={styles['product-image17']}>
                  <img src alt="ImageI736" className={styles['image09']} />
                </div>
              </div>
              <div className={styles['bag-item2']}>
                <div className={styles['product-image18']}>
                  <img src alt="ImageI737" className={styles['image10']} />
                </div>
              </div>
            </div>
            <div className={styles['row1']}>
              <div className={styles['bag-item3']}>
                <div className={styles['product-image19']}>
                  <img src alt="ImageI739" className={styles['image11']} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['cta']}>
            <button className={styles['button8']}>
              <img
                src="/iconi740-axel.svg"
                alt="IconI740"
                className={styles['icon08']}
              />
              <span
                className={` ${styles['text52']} ${projectStyles['body-normal-medium-normal']} `}
              >
                <span>View Bag</span>
              </span>
            </button>
          </div>
        </div>
        <div className={styles['navbar']}>
          <div className={styles['nav-links-top']}>
            <div className={styles['logo']}>
              <div className={styles['group1']}>
                <img
                  src="/unioni248-1k0q.svg"
                  alt="UnionI248"
                  className={styles['union']}
                />
                <img
                  src
                  alt="Rectangle3I248"
                  className={styles['rectangle3']}
                />
                <img
                  src
                  alt="Rectangle2I248"
                  className={styles['rectangle2']}
                />
              </div>
            </div>
            <div className={styles['menu-icon']}>
              <img
                src="/iconi248-d0h8.svg"
                alt="IconI248"
                className={styles['icon09']}
              />
            </div>
            <div className={styles['nav-link']}>
              <img
                src="/iconi248-tt5.svg"
                alt="IconI248"
                className={styles['icon10']}
              />
            </div>
            <div className={styles['nav-link1']}>
              <img
                src="/iconi248-kjkd.svg"
                alt="IconI248"
                className={styles['icon11']}
              />
            </div>
          </div>
          <div className={styles['nav-link-bottom']}>
            <div className={styles['nav-link2']}>
              <img
                src="/iconi248-doug.svg"
                alt="IconI248"
                className={styles['icon12']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
