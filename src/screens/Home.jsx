import { NavLink } from "react-router-dom";
import "../styles/home.css";
import Articles from "./articles";
import Three from "../assets/third.webp";
import Four from "../assets/fourth.webp";
import Five from "../assets/fifth.webp";
import Six from "../assets/sixth.webp";
import Seven from "../assets/seventh.webp";
import Mtn from "../assets/mtn.webp";
import Time from "../assets/time.png";
import Comment from "../assets/comment.png";
import One from "../assets/first.webp";
import Two from "../assets/second.webp"

function Home() {
  return (
    <div className="home">
      <main>
        <div className="boxes">
          <Articles />
        </div>

        <div className="side">
          <div className="recent-box">
            <nav>
              {/* <p><NavLink>Recent</NavLink></p>
                <p><NavLink>Popular</NavLink></p>
                <p><NavLink>Comments</NavLink></p> */}
              <ul>
                <li>
                  <NavLink className="black">Recent</NavLink>
                </li>
                <li>
                  <NavLink>Popular</NavLink>
                </li>
                <li>
                  <NavLink>Comments</NavLink>
                </li>
              </ul>
            </nav>
            <div>
              <section className="recent">
                <div className="recent-image">
                  <img src={Three} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>
                      Athene Network Review – How to mine ATH Coin, Legit or
                      Scam?
                    </h2>
                    <div>
                      <p>
                        <span>
                          <img src={Time} />
                        </span>
                        1 day ago
                      </p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="recent">
                <div className="recent-image">
                  <img src={Four} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>
                    How to get 4.77gb with just N200 on MTN
                    </h2>
                    <div>
                      <p>
                        <span>
                          <img src={Time} />
                        </span>
                        1 day ago
                      </p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="recent">
                <div className="recent-image">
                  <img src={Five} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>Emberfund Review – How to get free $30 Bitcoin monthly, Legit or Scam?
                    </h2>
                    <div>
                      <p>
                        <span>
                          <img src={Time} />
                        </span>
                        1 day ago
                      </p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="recent">
                <div className="recent-image">
                  <img src={Six} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>
                    Palmpay Win Diamonds Giveaway – Earn from a share of 300 Million
                    </h2>
                    <div>
                        <img src={Time}/>
                      <p>1 day ago</p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="recent">
                <div className="recent-image">
                  <img src={Seven} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>
                    FMCPAY App – How to get 2,500 FMC ($1.25) & up to $20
                    </h2>
                    <div>
                      <p>
                        <span>
                          <img src={Time} />
                        </span>
                        1 day ago
                      </p>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>

          <div className="modified-box">
            <nav>
              <h1>Last modified</h1>
              <img src={Comment} />
            </nav>
            <div>
                <section>
                    <img src={One}/>
                    <h1>Athene Network Review – How to mine ATH Coin, Legit or Scam?</h1>
                    
                    {/* <div className="modified-foot">
                      <img src={Time} />
                      <p>1 day ago</p>
                    </div> */}
                </section>
                <section>
                    <img src={Mtn}/>
                    <h1>How To Activate MTN mPulse Education Data Plan Tunneled With Vpn</h1>
                    
                    {/* <div className="modified-foot">
                      <img src={Time} />
                      <p>1 day ago</p>
                    </div> */}
                </section>
                <section>
                    <img src={Two}/>
                    <h1>Ice Review – Everything you need to know about Ice Mining</h1>
                    
                    {/* <div className="modified-foot">
                      <img src={Time} />
                      <p>1 day ago</p>
                    </div> */}
                </section>
                <section>
                    <img src={Four}/>
                    <h1>How to get 4.77gb with just N200 on MTN</h1>
                    
                    {/* <div className="modified-foot">
                      <img src={Time} />
                      <p>1 day ago</p>
                    </div> */}
                </section>
            </div>
          </div>
<br /><br />
          <div className="recent-box">
            <nav id="dummy">
                <h1>Popular Posts</h1>
                <img src={Comment} />
              {/* <p><NavLink>Recent</NavLink></p>
                <p><NavLink>Popular</NavLink></p>
                <p><NavLink>Comments</NavLink></p> */}
              {/* <ul>
                <li>
                  <NavLink>Recent</NavLink>
                </li>
                <li>
                  <NavLink>Popular</NavLink>
                </li>
                <li>
                  <NavLink>Comments</NavLink>
                </li>
              </ul> */}
            </nav>
            <div>
              <section className="recent">
                <div className="recent-image">
                  <img src={Three} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>
                      Athene Network Review – How to mine ATH Coin, Legit or
                      Scam?
                    </h2>
                    <div>
                      <p>
                        <span>
                          <img src={Time} />
                        </span>
                        1 day ago
                      </p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="recent">
                <div className="recent-image">
                  <img src={Four} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>
                    How to get 4.77gb with just N200 on MTN
                    </h2>
                    <div>
                      <p>
                        <span>
                          <img src={Time} />
                        </span>
                        1 day ago
                      </p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="recent">
                <div className="recent-image">
                  <img src={Five} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>Emberfund Review – How to get free $30 Bitcoin monthly, Legit or Scam?
                    </h2>
                    <div>
                      <p>
                        <span>
                          <img src={Time} />
                        </span>
                        1 day ago
                      </p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="recent">
                <div className="recent-image">
                  <img src={Six} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>
                    Palmpay Win Diamonds Giveaway – Earn from a share of 300 Million
                    </h2>
                    <div>
                        <img src={Time}/>
                      <p>1 day ago</p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="recent">
                <div className="recent-image">
                  <img src={Seven} alt="" />{" "}
                </div>
                <div>
                  <section className="news-preview">
                    <h2>
                    FMCPAY App – How to get 2,500 FMC ($1.25) & up to $20
                    </h2>
                    <div>
                      <p>
                        <span>
                          <img src={Time} />
                        </span>
                        1 day ago
                      </p>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>

          <div className="most-box">
            <nav>
                <h1>Most Viewed</h1>
                <img src={Comment} />
            </nav>
            <div>
              <section>
                <p>08/01/2024</p>
                <h1>How to activate Free MTN 300mb Daily Data using VPN</h1>
              </section>
              <section>
                <p>08/01/2024</p>
                <h1>myMTN App – Get free 50gb Data on your MTN Sim</h1>
              </section>
              <section>
                <p>08/01/2024</p>
                <h1>How To Activate MTN mPulse Education Data Plan Tunneled With Vpn</h1>
              </section>
              <section>
                <p>08/01/2024</p>
                <h1>Luno Wallet – Get N3,500 in Bitcoin for Registration & Referral</h1>
              </section>
              <section>
                <p>08/01/2024</p>
                <h1>Noah Global – Get free $3 & up to $20 USDT</h1>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
