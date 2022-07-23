import React from "react";
import Header from "../Header/Header";
import style from './Hero.module.css'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.left}>
                <Header/>

                {/* the best ad*/}
                <div className={style.the_best_ad}>
                    <div></div>
                    <span>The beautiful stars in the sky</span>
                </div>

                {/*hero heading*/}
                <div className={style.hero_text}>
                    <div>
                        <span className='stroke_text'>burning </span>
                        <span>with the</span>
                    </div>
                    <div>
                        <span>silence</span>
                    </div>
                    <div>
                        <span>
                            don't forget to break away from the hustle and bustle of the world and look up
                        </span>
                    </div>
                </div>
                {/*figures*/}
                <div className={style.figures}>
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className={style.hero_buttons}> 
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            
            {/* RIGHT */}
            <div className={style.right}>
                <button className="btn">Join Now</button>

                <div className={style.heart_rate}>
                    <img src={heart} />   
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* hero images */}
                <img src={hero_image} className={style.hero_image} />
                <img src={hero_image_back} className={style.hero_image_back}/>

            </div>
        </div>
    )
}

export default Hero;