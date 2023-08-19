import React from 'react';

export const getOnLineStatus = () =>
  typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true;

const useNavigatorOnline = () => {
  const [status, setStatus] = React.useState(getOnLineStatus());
  return status;
};

export default useNavigatorOnline;
