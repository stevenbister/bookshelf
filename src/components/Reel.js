import { useState, useEffect, useRef } from 'react';
import Card from './Card';

const Reel = ({ array }) => {
  const ref = useRef(null);
  const [overflowClass, setOverflowClass] = useState('');

  /**
   * Handles togging the overflowing class on our element
   *
   * @param {HTMLElement} target
   */
  const toggleOverflowClass = (target) =>
    target.scrollWidth > target.clientWidth
      ? setOverflowClass('overflowing')
      : setOverflowClass('');

  // Dynamically apply a class to the reel element when it overflows the viewport.
  // This lets us add or remove some padding from the element to give the impression
  // that there is more to see.
  useEffect(() => {
    if ('ResizeObserver' in window) {
      new ResizeObserver((entries) => {
        toggleOverflowClass(entries[0].target);
      }).observe(ref.current);
    }

    if ('MutationObserver' in window) {
      new MutationObserver((entries) => {
        toggleOverflowClass(entries[0].target);
      }).observe(ref.current, { childList: true });
    }
  });

  return (
    <ul className={`reel ${overflowClass}`} ref={ref} role="list">
      {array.map(({ _id, title, slug, cover }) => (
        <li key={_id}>
          <Card title={title} slug={slug} cover={cover} />
        </li>
      ))}
    </ul>
  );
};

export default Reel;
