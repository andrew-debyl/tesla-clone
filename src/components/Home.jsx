import Menu from "./Menu";
import HeaderBlock from "./HeaderBlock";
import Header from "./Header";
import React, { useState } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></Header>
      {isMenuOpen && <Menu />}
      <HeaderBlock />
    </div>
  );
}

export default Home;
