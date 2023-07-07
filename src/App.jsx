import { useRef } from "react";
import "./App.css";
import Scroll from "./Scroll";

function App() {
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);
  const refSection4 = useRef(null);

  //Definiamo la funzione che mi gestisce lo scroll fino all'ultima pagina, pur non sappendo in anticipo quante pagine sono
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  //Defniamo una funzione che gestisce lo scroll in base in riferimento a cui puntiamo quando clickiamo un bottone

  const scrollDown = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  console.log(refSection3);

  return (
    <div className="App">
      <Scroll />
      <button className="scroll-bottom-btn" onClick={scrollToBottom}>
        Scroll to Bottom
      </button>
      <div className="scroll-btns">
        <button className="scroll-btn" onClick={() => scrollDown(refSection2)}>
          Section 2
        </button>
        <button className="scroll-btn" onClick={() => scrollDown(refSection3)}>
          Section 3
        </button>
        <button className="scroll-btn" onClick={() => scrollDown(refSection4)}>
          Section 4
        </button>
      </div>

      <div className="section section1">1</div>
      <div ref={refSection2} className="section section2">
        2
      </div>
      <div ref={refSection3} className="section section3">
        3
      </div>
      <div ref={refSection4} className="section section4">
        4
      </div>
      <div className="section section5">5</div>
    </div>
  );
}

export default App;
