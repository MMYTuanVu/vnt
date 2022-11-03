import { useEffect } from 'react';
import { request } from './request.js';
function Test() {
  useEffect(() => {
    request
      .get('admin/api', {
        params: {
          q: 1,
          r: 2,
          page: 3,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  return <div>xxxxxxxxxxx</div>;
}

export default Test;
