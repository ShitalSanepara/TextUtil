import React from 'react'

export default function Enable() {
  return (
    <div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck1"
          autocomplete="off"
        />
        <label className="btn btn-outline-primary" for="btncheck1">
          Checkbox 1
        </label>
      </div>
    </div>
  );
}
