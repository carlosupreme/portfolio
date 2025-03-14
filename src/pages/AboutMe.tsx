import BulletTitle from "../components/BulletTitle.tsx";
import me from "../assets/me-1.jpg";
import {TypeAnimation} from "react-type-animation";
import 'react-slideshow-image/dist/styles.css'
import {Slide} from "react-slideshow-image";
import LearningJourney from "../components/LearningJourney.tsx";


export default function AboutMe() {
    return (
        <div className="dark:text-dark-font flex flex-col gap-5 px-4">
            <BulletTitle text={"About me"}/>

            <div className="text-lg w-full flex flex-col justify-center">
                <h1 className="dark:text-white font-semibold text-3xl mb-3">Hi, I'm Carlos Sosa</h1>
                <h4 className="text-justify leading-relaxed">
                    A Computer Systems Engineering student with a great passion for web application development.
                    <br/>
                    I love learning new technologies and honing my skills in the areas I'm already familiar with. I've
                    had the privilege of working on projects that have positively impacted my community.
                    <br/>
                    I highly value teamwork, as I am sociable and dedicated to the projects I am involved in.
                </h4>
            </div>

            <section className="dark:bg-dark-bg-section p-4 w-full flex flex-col gap-4 rounded-xl mb-2">
                <img src={me} alt="Carlos Sosa" className="w-full h-96 object-cover rounded-xl"/>
            </section>

            <TypeAnimation
                sequence={[
                    'I love swimming',
                    2000,
                    'I love running',
                    2000,
                    'I love music',
                    2000,
                    'I love writing',
                    2000
                ]}
                wrapper="h2"
                speed={25}
                className="text-3xl font-semibold dark:text-white"
                repeat={Infinity}
            />

            <HobbiesSlide/>

            <h1 className="dark:text-white font-semibold text-3xl mb-3">My learning journey</h1>


            <LearningJourney/>


        </div>
    )
}

function HobbiesSlide() {
    const images = [
        "https://plus.unsplash.com/premium_photo-1664475361436-e37f6f2ba407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1587287503374-f6f3d7e90da4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1680600465525-cac186590261?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664285637075-7bd8abe6d26f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <Slide
            arrows={false}
            duration={3000}
            onChange={function noRefCheck() {
            }}
            onStartChange={function noRefCheck() {
            }}
            transitionDuration={500}
            cssClass="rounded-xl mb-2"
        >
            <div className="each-slide-effect">
                <div style={{'backgroundImage': `url(${images[0]})`}} className="bg-cover h-96"></div>
            </div>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': `url(${images[1]})`}} className="bg-cover bg-center h-96"></div>
            </div>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': `url(${images[2]})`}} className="bg-cover bg-center h-96"></div>
            </div>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': `url(${images[3]})`}} className="bg-cover bg-center h-96"></div>
            </div>
        </Slide>
    );
};