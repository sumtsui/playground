import { useState } from 'react';

function Button() {
  const [bgColor, setBgColor] = useState('yellow');

  console.log('Button');

  return (
    <button
      onClick={() =>
        setBgColor((prev) => (prev === 'yellow' ? 'orange' : 'yellow'))
      }
      style={{ backgroundColor: bgColor }}
    >
      Click
    </button>
  );
}

export default Button;
