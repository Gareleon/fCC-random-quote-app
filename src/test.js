import { useEffect } from "react";

const TestRunner = () => {
  useEffect(() => {
    // Make sure to run the tests after your app is fully loaded.
    window.FCC.runTests();
  }, []);

  return null; // We don't need to render anything
};

export default TestRunner;
