import { forwardRef } from 'react';
function Image({ ...props }, ref) {
  return <img ref={ref} {...props} />;
}

export default forwardRef(Image);
