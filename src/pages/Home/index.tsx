import react , { Fragment } from 'react';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { AiOutlineFileDone } from 'react-icons/ai';
import { MdSmsFailed } from 'react-icons/md';

export default function Home() {

    return (
        <Fragment>
            <Menu />
            <SectionOne >
                <div className="shadow-box">
                </div>
                {window.innerWidth > 763 ? <BlackSvgContainer /> : <HomePagePhone />}
                <ParticlesComponents />
            </SectionOne>
            <SectionTwo >
                {window.innerWidth > 763 ?
                    <div className="shadow-box-two" id="shadow-box-two">
                        <Slider /> 
                    </div>
                    : null 
                }
            </SectionTwo>
            <SectionThree >
                <header>
                    <h1>Certifications</h1>
                </header>
                <div className="certifications-container">
                    <div className="image">
                        <img src="https://user-images.githubusercontent.com/30997178/158071495-6929e045-2e4f-4219-949d-c34bdce92092.png" />
                    </div>
                    <div className="description">
                        <h1>CSS</h1>
                        <pre><h3>HackerRank</h3></pre>
                        <a target="_blank" href="/hhh"><span className="proved">LinkedIn <AiOutlineFileDone size={20} color={"#ffffff"} /></span></a>
                    </div>
                </div>
                
                <div style={{flexDirection:"row-reverse"}} className="certifications-container">
                    <div className="image">
                        <img src="https://user-images.githubusercontent.com/30997178/158071495-6929e045-2e4f-4219-949d-c34bdce92092.png" />
                    </div>
                    <div className="description">
                        <h1>CSS</h1>
                        <pre><h3>HackerRank</h3></pre>
                        <a target="_blank" href="/hhh"><span style={{backgroundColor:"red"}} className="proved">LinkedIn <MdSmsFailed size={20} color={"#ffffff"} /></span></a>
                    </div>
                </div>
            </SectionThree>
            <style jsx="true">{`
                .section-one {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    align-items: center;
                    margin: 0 auto 0 0;
                    overflow: hidden;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: -1;
                }
                .section-one-leftSide {
                    position: relative;
                }
                .section-one-leftSide-center {
                    position: absolute;
                    top: 40%;
                    left: 20%;
                    transform: translateY(-40%);
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                .section-one-leftSide-center div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .section-one-leftSide-center div:nth-child(2) {
                    margin-left: 100px;
                }
                .section-one-leftSide-center div svg {
                    width: auto;
                    height: 100px;
                }
                .section-one-leftSide-center div h1 {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #38AE1B;
                    margin: 0;
                    font-weight: 200;
                }
                .section-one-leftSide-center div h3 {
                    font-size: 1rem;
                    font-weight: bold;
                    color: #38AE1B;
                    font-weight: 500;
                    height: 7px;
                }
                .shadow-box {
                    width: 100%;
                    height: auto;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.05);
                }

                @media (max-width: 768px) {
                    .section-one-leftSide {
                        display: none;
                    }
                }
            `}</style>
            <style jsx="true">{`
                .section-two {
                    width: 100%;
                    min-height: 70vh;
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;
                    margin: 0 auto 0 0;
                    overflow: hidden;
                    margin-top: 100vh;
                    background-color: #1C1C1C;
                }
                .shadow-box-two {
                    width: 100%;
                    height: auto;
                    min-height: 70vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;
                }
                .shadow-box-two h1 {
                    font-size: 2rem;
                    font-weight: 300;
                    color: #38AE1B;
                    width: 95%;
                    text-align: start;
                    padding : 0 0 0 5%;
                }

                @media (max-width: 768px) {
                    .section-two {
                        display: none;
                    }
                }
            `}</style>
            <style jsx="true">{`
                    a {
                        text-decoration: none;
                    }
                    .section-three {
                        width: 100%;
                        height: auto;
                        min-height: 100vh;
                        background-color: #ffffff;
                        dsiplay: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: start;
                    }
                    header {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }
                    .certifications-container {
                        width: 100%;
                        height: 70vh;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin: 50px auto 0 0;
                        position: relative;
                    }
                    .image {
                        width: 50%;
                        height: 70vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .image img {
                        width: 95%;
                        height: auto;
                    }
                    .description {
                        width: 50%;
                        height: 70vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                    }
                    .proved {
                        width: 97%;
                        font-size: 15px;
                        padding: 1%;
                        background-color: #38AE1B;
                        color: white;
                        position: absolute;
                        position: absolute;
                        right: 50%;
                        bottom: 15px;
                        transform: translateX(50%);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        cursor: pointer;

                        transition: 0.3s ease-in-out;

                        margin: auto auto 0 0;
                    }

                    @media (max-width: 768px) {
                        .certifications-container {
                            flex-direction: column !important;
                        }
                    }
`}
            </style>
        </Fragment>
    )
}

// Page Sections
const SectionOne = (props:any) => <div className="section-one">
    {props.children}
</div>;
const SectionTwo = (props:any) => <div className="section-two">
    {props.children}
</div>
const SectionThree = (props:any) => <div className="section-three">
    {props.children}
</div>

// Menu 
const Menu = (props:any) => {

// Manage the pc menu
    const [isPcMenuOpened, setIsPcMenuOpened] = react.useState(false);
    document.onkeyup = function(event) {
        if (event.keyCode === 27 ){
            setIsPcMenuOpened(!isPcMenuOpened);
        }
    }

    return (
        <Fragment>
            <div className="pc-menu-container" style={isPcMenuOpened ? {left: "0%"} : {left:"-100%"}}>
            <ul>
                <li>Home</li>
                <li><a href="#shadow-box-two">Projects</a></li>
                <li>About me</li>
                <li>Contact me</li>
            </ul>
            </div>
            <style jsx="true">{`
                .pc-menu-container {
                    width: 88%;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: -100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #1C1C1C;
                    overflow: hidden;
                    transition: left 0.5s ease-in-out;
                    z-index: 9;
                }
                .pc-menu-container ul {
                    line-height: 60px;
                    list-style: none;
                }
                .pc-menu-container ul li {
                    font-size: 1.5rem;
                    font-weight: 200;
                    color: #38AE1B;
                    cursor: pointer;
                }
                .pc-menu-container ul li:hover {
                    color: #fff;
                }
            `}</style>
        </Fragment>
    )
}

// Slider
const Slider = (props:any) => {
    

    react.useEffect(() => { 
        let swiper = new Swiper('.swiper', {
            effect: 'coverflow',
            slidesPerView: 'auto',
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
          direction: 'horizontal',
        });
      }, [])
    let data = [
        {
            name: 'blaaaaaaa',
            image: 'https://firebasestorage.googleapis.com/v0/b/personalpage-4ff71.appspot.com/o/projects%2FurlCutter%2FImage.png?alt=media&token=f0737c50-644c-4fe9-9f47-9fd0b81702c2',
            description: 'gdsgsdfgerfdhbedhethethethtrhbtrhbtrhbtrhbtrdhbrtfhbrtfhbtrhbrthbrthbrtghbrthbrthbrthbrthbrbrtgbrtbtgbrtgfhbrtbrtgfhbrtdbrtdbrtdfhbrtbrtbrbrdhbrdthbrtdhbrtt',
        },
        {
            name: 'blaaaaaaa',
            image: 'https://firebasestorage.googleapis.com/v0/b/personalpage-4ff71.appspot.com/o/projects%2Falgeria%20cosmos%20-%20news%2FImage.png?alt=media&token=135b2ba4-8b92-416f-9c01-74ed08ad44db',
            description: 'gdsgsdfgerfdhbedhethethethtrhbtrhbtrhbtrhbtrdhbrtfhbrtfhbtrhbrthbrthbrtghbrthbrthbrthbrthbrbrtgbrtbtgbrtgfhbrtbrtgfhbrtdbrtdbrtdfhbrtbrtbrbrdhbrdthbrtdhbrtt',
        },
        {
            name: 'blaaaaaaa',
            image: 'https://firebasestorage.googleapis.com/v0/b/personalpage-4ff71.appspot.com/o/projects%2Fcandies-shop1%2FImage.png?alt=media&token=5234fbc0-c401-4317-8b63-1f42c6e3ba9c',
            description: 'gdsgsdfgerfdhbedhethethethtrhbtrhbtrhbtrhbtrdhbrtfhbrtfhbtrhbrthbrthbrtghbrthbrthbrthbrthbrbrtgbrtbtgbrtgfhbrtbrtgfhbrtdbrtdbrtdfhbrtbrtbrbrdhbrdthbrtdhbrtt',
        },
    ]



    return (
        <Fragment>
        <h1>Projects</h1>
            <div className="swiper">
                <div className="swiper-wrapper">
                    {
                        data.map((item:any, index:number) => {
                            return (
                                <div className="swiper-slide">
                                    <img src={item.image}></img>
                                    <div className="projectDataContainer">
                                        <h1>{item.name}</h1>
                                        <p>
                                            {item.description},<a target="_blank" href="https://petacode.tk">see</a>
                                        </p>
                                    </div>
                                </div>  
                            )
                        })
                    }                 
                </div>
            </div>
            <style jsx="true">{`
                .swiper-slide {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: start;
                    margin: 50px 0 0 0;
                }
                .swiper-slide img{
                    width: 50%;
                    height: auto;
                    object-fit: cover;
                    padding: 5%;
                    border-radius: 5px;
                    border: 1px solid #38AE1B;
                }

                .projectDataContainer {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;
                }

                .projectDataContainer p{
                    word-wrap: break-word;
                    max-width: 30vw;
                    color: #38AE1B;
                }


                @media (max-width: 768px) {
                    .swiper-slide {
                        flex-direction: column;
                        align-items: center;
                    }
                    .swiper-slide img {
                        width: 80%;
                    }
                    .projectDataContainer {
                        width: 100%;
                    }
                    .projectDataContainer p {
                        max-width: 30vw;
                        background-color: #1C1C1C;
                    }
                }
            `}</style>
        </Fragment>
    )
}


// Black Svg - only show for pc users
class BlackSvgContainer extends react.Component {
  render() {
      return (
        <div className="section-one-leftSide">
            <svg style={{filter: "drop-shadow(15px 5px 50px rgb(0 0 0 / 2.4))"}} xmlns="http://www.w3.  org/2000/svg" width={1080} height={1200} viewBox="0 0 1391 1080"><path d="M0,0H1391L579.2,    1078.8,0,1080Z" fill="#1c1c1c"/><path d="M1,1V1079l577.7-1.2L1389,1H1M0,0H1391L579.2,1078.8,    0,1080Z" fill="#707070"/></svg>
            <div className="section-one-leftSide-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="261.43" height="189.648" viewBox="0 0 261.43 189.648"><g transform="translate(1.395 1.97)"><line y2="222" transform="translate(184.973 164.758) rotate(124)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line y2="230" transform="translate(195.848 153) rotate(124)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line x1="170.787" y1="114.869" transform="translate(0 58.086)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line x1="160.056" y1="108.283" transform="translate(0.732 76.672)" fill="none" stroke="#38ae1b" strokeWidth="5"/><path d="M0,0V156.5" transform="translate(132.036 183.332) rotate(124)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line y2="110" transform="translate(106.653 184.304) rotate(124)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line y2="245" transform="translate(209.21 143.92) rotate(124)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line x1="175.028" y2="136.749" transform="translate(81.759 30.955)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line x1="183.623" y2="142.959" transform="translate(68.164 15.955)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line y2="203" transform="translate(256.373 50.004) rotate(52)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line x1="153.728" y2="117.59" transform="translate(104.787 67.365)" fill="none" stroke="#38ae1b" strokeWidth="5"/><path d="M0,0V158.521" transform="translate(256.324 88.113) rotate(52)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line x1="91.618" y2="72.401" transform="translate(157.787 112.554)" fill="none" stroke="#38ae1b" strokeWidth="5"/><line y2="245" transform="translate(249.405) rotate(52)" fill="none" stroke="#38ae1b" strokeWidth="5"/></g></svg>
                    <h3>the moon wing</h3>
                </div>
                <div>
                    <h3>chafik afroune</h3>
                    <h1>Freelancer</h1>
                </div>
            </div>
        </div>
      )
  }
}
// Animated blob - only show for phones and tablets users
class HomePagePhone extends react.Component {
    render() {
        return (
            <Fragment>
                <div className="mainContainer">
                    <h1>Chafik Afroune</h1>
                    <h3>Freelancer</h3>
                    <pre><p>!  mobile version is not available yet , soon</p></pre>
                </div>
                <style jsx="true">
                    {`
                        .mainContainer {
                            width: 100%;
                            height: 100vh;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                        }
                        .mainContainer h1 {
                            font-size: 2rem;
                            font-weight: bold;
                            color: #38AE1B;
                            margin: 0;
                            font-weight: 200;
                        }
                        .mainContainer h3 {
                            font-size: 1rem;
                            font-weight: bold;
                            color: #38AE1B;
                            font-weight: 500;
                            height: 7px;
                        }
                        .mainContainer p {
                            font-size: .7rem;
                            color: red;
                            position: absolute;
                            top: 5px;
                            left: 5px;
                        }
                    `}
                </style>
            </Fragment>
        )
    }
}





// Particles
class ParticlesComponents extends react.Component {
  render() {
    const particlesInit = async (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
    };


    return(
      <Fragment>
        <div className="ParticlesContainer">
        <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{ position: "absolute" }}
            height="95%"
            width="95%"
            options={require("./../../statics/particlesjs-config")}
        />  
        </div>
        <style jsx="true">{`
          .ParticlesContainer {
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;
            z-index: -1;
          }
        `}</style>
      </Fragment>
    )
  }
}