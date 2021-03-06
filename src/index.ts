import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import initBoardingAnimation from '$animations/boarding'
import initClientsAnimation from '$animations/clients'
import initConstellationAimation from '$animations/constellation'
import initGalaxiesAnimation from '$animations/galaxies'
import initHeroAnimation from '$animations/hero'
import initTunnelAnimation from '$animations/tunnel'
import initButtonComponents from '$components/button'
import initMobileMenuComponent from '$components/mobileMenu'
import createModalComponent from '$components/modal'
import appHeight from '$utils/appHeight'
import disableCursorMixBlendMode from '$utils/disableCursorMixBlendMode'

import { DrawSVGPlugin } from './plugins/DrawSVGPlugin.js'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin)

const page = window.location.pathname

function main() {
  // COMPONENTS
  initButtonComponents()
  initMobileMenuComponent()

  // HELPERS
  appHeight()

  if (page === '/') {
    // COMPONENTS
    createModalComponent()

    // ANIMATIONS
    initHeroAnimation()
    initClientsAnimation()
    initConstellationAimation()
    initTunnelAnimation()
    initGalaxiesAnimation()
    initBoardingAnimation()

    // UTILS
    disableCursorMixBlendMode()

    window.addEventListener('resize', () => {
      initBoardingAnimation()
    })
  }
}

main()
