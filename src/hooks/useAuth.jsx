import React, { use } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthContext';

export const useAuth = () => {
    const authInfo = use(AuthContext);
  return authInfo;
}
