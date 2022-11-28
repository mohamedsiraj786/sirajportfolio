import { useEffect, useState } from 'react'
import {
    faAndroid,
  faAngular,
  faAppStore,
  faCss3,
  faFacebook,
  faGitAlt,
  faGithub,
  faHtml5,
  faInstagram,
  faJsSquare,
  faLinkedin,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBug, faMobile } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')



  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faInstagram} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAndroid} color="#93F748" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faFacebook} color="#4888F7" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGithub} color="#000000" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBug} color="#FFFBFB" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faLinkedin} color="#0957F4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
