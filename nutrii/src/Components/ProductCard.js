
'use client';
// Example with default export
import FlowbiteReact from 'flowbite-react';

// Example with named export
import { Card } from 'flowbite-react';

function Component() {
  return (
    <Card
      className="max-w-sm rounded-[2vw]"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/herobg.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}

export default Component;