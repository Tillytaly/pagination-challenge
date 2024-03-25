import { useState } from 'react';

import { TUseTogglerTuple } from './types';
export function useToggler(initialState: boolean = false): TUseTogglerTuple {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => setIsOn((state) => !state);

  return [isOn, toggle];
}
