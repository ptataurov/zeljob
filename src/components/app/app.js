import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './app.scss'
import Nav from '../nav/nav'
import Footer from '../footer/footer'
import HomePage from '../pages//home-page/home-page'
import VacancyPage from '../pages/vacancy-page/vacancy-page'
import PublishPage from '../pages/publish-page/publish-page'
import NotFoundPage from '../not-found/not-found'

const App = () => {
  return (
    <div className="app d-flex flex-column align-items-center">
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/vacancy/:id" component={VacancyPage} />
        <Route path="/publish" component={PublishPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
