import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Hero />
        <section style={{ height: "30vh", background: "rgba(255,0,0,.4)" }}>
          featured
        </section>
        <section>banner</section>
        <section>explore the collection</section>
        <section>banner</section>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
