// Importing React Module
import React from "react";

// Importing LeftSide, RIght and Footer containers
import LeftSide from "./containers/LeftSide";
import RightSide from "./containers/RightSide";
import Footer from "./components/Footer";

// App container function
function App() {
  return (
    // Some inline styling and classes. 
      <div className="content margin-top" style={{ maxWidth: "1400px" }}>
          {/* The 3 main containers are called here */}
          <LeftSide />
          <RightSide />
          <Footer />
      </div>
  );
}

// Export the App container. This goes to index.js
export default App;
