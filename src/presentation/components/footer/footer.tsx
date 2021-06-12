import { memo } from 'react'

import Styles from './footer-styles.scss'

export const Footer = memo((): React.ReactElement => {
  return <footer className={Styles.footer} />
})
