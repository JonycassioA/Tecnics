import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTopOnMount() {

  let location = useLocation()
  
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0
    });
  }, [location]);

  return null;
}

export default ScrollToTopOnMount
