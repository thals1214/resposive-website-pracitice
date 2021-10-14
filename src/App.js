import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import Contents from "./Contents.js";
import Footer from "./Footer.js";
import Loading from "./Loading.js";

function App() {
  const [loading, setLoading] = useState(true);

  const Load = () => {
    setTimeout(setLoading, 3000);
  };

  useEffect(() => {
    Load();
  });

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Contents />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
