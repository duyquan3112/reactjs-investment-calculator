import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { validateUserInput } from "./util/investment.js";
import Errors from "./components/Errors.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 6,
    duration: 12,
  });

  function handleUserInput(key, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [key]: +newValue, // "+" prefix to convert value from type string to number, because value of input field is always string
      };
    });
  }

  const errors = validateUserInput(userInput);
  const isHasError = Object.keys(errors).length > 0;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />

      {isHasError && <Errors errors={errors} />}
      {!isHasError && <Results userInput={userInput} />}
    </>
  );
}

export default App;
