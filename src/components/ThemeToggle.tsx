import React, { ChangeEvent } from 'react';

function handleCheckBoxOnChange(evt: ChangeEvent<HTMLInputElement>) {
  let htmlEl = document.querySelector('HTML');
  if (evt.target.checked) {
    htmlEl?.classList.add('dark');
  } else {
    htmlEl?.classList.remove('dark');
  }
}
function ThemeToggle() {
  return (
    <label className="toggle ">
      <input type="checkbox" onChange={handleCheckBoxOnChange} />
      <span className="toggle__slider round"></span>
    </label>
  );
}

export default ThemeToggle;
