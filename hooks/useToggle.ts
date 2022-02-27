import { useState } from 'react';

export default function useToggle(
  initialState: boolean,
): [boolean, () => void, typeof setState] {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(!state);
  return [state, toggle, setState];
}
