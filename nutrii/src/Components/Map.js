import React from 'react';
import { renderToString } from 'html-to-react';

const TemplateComponent1 = () => {
  return (
    <iframe
      src="/explore/basic.html" 
      title="Rendered HTML"
      width="100%"
      height="700"
    ></iframe>
  );
};

export default TemplateComponent1;
