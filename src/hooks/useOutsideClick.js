import { useState, useEffect, useRef } from 'react';

/**
 * Watches for clicks outside of the component
 *
 *
 * @param {Boolan} initialState
 */
const useOutsideClick = (initialState) => {
  const [isComponentClicked, setIsComponentClicked] = useState(initialState);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (
      // Only fire if the target is an expandable card or it's children
      e.target.matches('[data-card="expandable"] *') &&
      ref.current &&
      !ref.current.contains(e.target)
    ) {
      setIsComponentClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return { ref, isComponentClicked, setIsComponentClicked };
};
export default useOutsideClick;
