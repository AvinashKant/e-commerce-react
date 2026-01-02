import { useLocation, Navigate } from 'react-router';

import localStorageObj from '../services/LocalStorageService';

export function redirectToPath(path: string) {
  const location = useLocation();
  return <Navigate to={`/${path}`} state={{ from: location }} replace />;
}

export function isAuthenticated() {
  if (localStorageObj.getAccessToken() != null) {
    return true;
  }
  return false;
}

export function ifNotAuthenticated() {
  if (localStorageObj.getAccessToken() == null) {
    return true;
  }
  return false;
}

export function getAccessToken() {
  return localStorageObj.getAccessToken();
}
