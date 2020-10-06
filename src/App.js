import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/core";

import "./App.css";

// import YoutubeForm from "./components/YoutubeForm"; // use for video 1-30
// import FormikContainer from "./components/FormikContainer"; // vid 31-38
// import LoginForm from "./components/LoginForm"; // vid 39
// import RegistrationForm from "./components/RegistrationForm"; // vid 40
import CourseEnrollmentForm from "./components/CourseEnrollmentForm";

const colors = {
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

const customTheme = extendTheme({ colors });
function App() {
  return (
    <ChakraProvider theme={customTheme} resetCSS={true}>
      <div className="App">
        <CourseEnrollmentForm />
        {/* <RegistrationForm /> Used for video 40 */}
        {/* <LoginForm /> Used for video 39 */}
        {/* <FormikContainer /> Used for videos 31-38 - form components */}
        {/* <YoutubeForm /> Used for videos 1-30 */}
      </div>
    </ChakraProvider>
  );
}

export default App;
