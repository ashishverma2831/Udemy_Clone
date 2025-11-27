import React from 'react'
import { Button } from './components/ui/button'
import DisplayHeader from './ucomponents/displayHeader'
import CompanyBanner from './ucomponents/CompanyBanner'
import CardOne from './ucomponents/CardOne'
import CardTwo from './ucomponents/CardTwo'

const App = () => {
  return (
    <>
      <DisplayHeader />
      <CompanyBanner />
      <CardOne />
      <CardTwo />
    </>
  )
}

export default App