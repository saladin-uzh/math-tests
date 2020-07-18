import React from 'react'

import preloaderImage from '../../assets/preloader.svg'

import { Preloader } from './ui'

export default ({ isShown }) => (
  <Preloader isShown={isShown}>
    <img src={preloaderImage} alt="Loading..." />
  </Preloader>
)
