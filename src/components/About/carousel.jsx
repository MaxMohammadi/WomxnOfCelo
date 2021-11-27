import damn from '../../images/damn.PNG';
import first from '../../images/first.png';
import second from '../../images/second.png';
import third from '../../images/third.png';
import fourth from '../../images/fourth.png';

var React = require("react");
var Coverflow = require("react-coverflow");

let fn = function () {
  /* do you want */
};

const Carousel = (props) => {
  return (
    <Coverflow
      width={900}
      height={900}
      displayQuantityOfSide={1}
      navigation={false}
      enableHeading={true}
      enableScroll={true}
      clickable={true}
    >
      <div
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
      >
        <img
          src={damn}
          style={{ display: "block", width: "100%"}}
        />
      </div>
      <img
        src={first}      
      />
      <img
        src={second}
      />
      <img
        src={third}
      />
      <img
        src={fourth}
      />
    </Coverflow>
  );
};

export default Carousel;
