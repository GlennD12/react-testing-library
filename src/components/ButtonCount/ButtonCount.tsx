import { useState } from "react";

export const ButtonCount = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        type="submit"
        onClick={() => {
          setCount(count + 1);
        }}
        className="w-16 rounded-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Increment
      </button>

      <strong>{count}</strong>
    </>
  );
};
