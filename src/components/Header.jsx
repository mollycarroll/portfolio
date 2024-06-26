import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);
 
  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };
 
  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }
 
    window.addEventListener('scroll', handleScrollEvent);
 
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);


  return (
    <div style={{ marginTop: sticky.offset }}>
      <div className="header">
        <h1>Molly Carroll</h1>
        <p>software engineer</p>
      </div>
 
      <div id="sticky-header" className={`navbar${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
        <Link to="/"><button>Home</button></Link>
        <a href="https://linktr.ee/mollycarroll"><button>Linktree</button></a>
        <a href="https://linktr.ee/mollycarroll?lt_utm_source=lt_share_link#269501911"><button>Resume</button></a>
        <a href="https://www.github.com/mollycarroll"><button>GitHub</button></a>
        <a href="mailto:mollyajcarroll@gmail.com" className="right"><button>Contact</button></a>
      </div>
    </div>
  );
}

export default Header;
