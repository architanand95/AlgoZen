import React from 'react'
import AboutItem from './AboutItem'
import Kaggle from '../../../public/kaggle.svg'
import Leetcode from '../../../public/leetcode.svg'
import GithubIcon from '../../../public/github-icon.svg'


const AboutItems = () => {
    return (
            <div className="grid grid-cols-3 ">
                <div className="flex justify-right items-right">
                    <AboutItem
                        icon={GithubIcon}
                        title={"Github"}
                        href="https://github.com/architanand95/"

                    />
                </div>
                <div className="flex justify-right items-right">
                    <AboutItem
                        icon={Kaggle}
                        title={"Kaggle"}
                        href="https://www.kaggle.com/arcanand"
                    />
                </div>
            </div>
        
    )
}

export default AboutItems