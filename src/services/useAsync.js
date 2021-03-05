//Want this to be a custom hook to do the async stuff for all the HTTP requests if I can

import React, {useEffect, useState} from 'react';

export const useAsync = (funct, deps) => {
  const [resp, setResp] = useState();
  useEffect(() => {
    funct.then((resp) => {
      setResp(resp);
    });
  }, deps);
  return resp;
};
