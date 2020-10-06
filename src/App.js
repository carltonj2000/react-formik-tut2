import React from "react";

import "./App.css";

// import YoutubeForm from "./components/YoutubeForm"; // use for video 1-30
// import FormikContainer from "./components/FormikContainer"; // vid 31-39
//import LoginForm from "./components/LoginForm"; // vid 40
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      {/* <LoginForm /> Used for video 40 */}
      {/* <FormikContainer /> Used for videos 31-39 - form components */}
      {/* <YoutubeForm /> Used for videos 1-30 */}
    </div>
  );
}

export default App;
