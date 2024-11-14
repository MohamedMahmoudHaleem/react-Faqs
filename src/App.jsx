
import "./App.css";
import iconPlus  from './assets/images/icon-plus.svg'
import iconMin  from './assets/images/icon-minus.svg'
import iconStar  from './assets/images/icon-star.svg'

function App() {
  return (
    <>
      <div className="container">
        <div className="second-pic"></div>
        <div className="faqs">
          <header>
            <img src={iconStar} alt="star" />
            <h1>FAQs</h1>
          </header>
          <div className="q-group">
            <div className="question">
              <h4>What is Frontend Mentor, and how will it help me?</h4>
              <a className="collapse">
                <img
                  className="min"
                  src={iconMin}
                  alt="min"
                />
              </a>
            </div>
            <p className="text">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </p>
          </div>

          <div className="q-group">
            <div className="question">
              <h4>Is Frontend Mentor free?</h4>
              <a className="collapse">
                <img
                  className="min"
                  src={iconMin}
                  alt="min"
                />
              </a>
            </div>
            <p className="text">
              Yes, Frontend Mentor offers both free and premium coding
              challenges, with the free option providing access to a range of
              projects suitable for all skill levels.
            </p>
          </div>
          <div className="q-group">
            <div className="question">
              <h4>Can I use Frontend Mentor projects in my portfolio?</h4>
              <a className="collapse">
                <img
                  className="min"
                  src={iconMin}
                  alt="min"
                />
              </a>
            </div>
            <p className="text">
              Yes, you can use projects completed on Frontend Mentor in your
              portfolio. It's an excellent way to showcase your skills to
              potential employers!
            </p>
          </div>
          <div className="q-group">
            <div className="question">
              <h4>
                How can I get help if I'm stuck on a Frontend Mentor challenge?
              </h4>
              <a className="collapse">
                <img
                  className="min"
                  src={iconMin}
                  alt="plus"
                />
              </a>
            </div>
            <p className="text">
              The best place to get help is inside Frontend Mentor's Discord
              community. There's a help channel where you can ask questions and
              seek support from other community members.
            </p>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Halim</a>.
      </div>
    </>
  );
}

export default App;
