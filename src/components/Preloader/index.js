import React from 'react'

import { usePreloader } from '../../utils'

import preloaderImage from '../../assets/preloader.svg'

import { Preloader } from './ui'

export default () => {
  const { isShown } = usePreloader()

  return (
    <Preloader isShown={isShown}>
      <img src={preloaderImage} alt="Loading..." />
    </Preloader>
  )
}
