import * as React from "react";
import './App.scss';

import { Background } from "./components/Background/Background.tsx";
import { WeatherForm } from "./components/WeatherForm/WeatherForm.tsx";

function App() {
  return (
    <Background>
      <WeatherForm />
    </Background>
  );
}

export default App;

