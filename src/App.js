import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { Switch, Route } from "react-router-dom";
import ForecastPage from "./pages/ForecastPage";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path = "/forecast/:city" component={ForecastPage}/>
      </Switch>
    </div>
  );
}

export default App;
