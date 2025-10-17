'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
// import { none } from '@tsparticles/engine';
import { IOptions } from '@tsparticles/engine';

// https://stackoverflow.com/a/77396820/15982771 & https://github.com/tsparticles/react/#readme
export default function Background() {
  const [init, setInit] = useState(false);
  const [options, setOptions] = useState<IOptions | null>(null);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      fetch('/particles/darkMode.json')
        .then((res) => res.json())
        .then((data) => setOptions(data))
        .catch((err) => console.error('Failed to load config:', err));
    } else {
      fetch('/particles/lightMode.json')
        .then((res) => res.json())
        .then((data) => setOptions(data))
        .catch((err) => console.error('Failed to load config:', err));
    }
  }, []);

  // const particlesLoaded = (container: any): any => {
  //   console.log(container);
  // };

  if (init && options) {
    return (
      <Particles
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
