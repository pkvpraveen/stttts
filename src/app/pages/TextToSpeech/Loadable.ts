/**
 *
 * Asynchronously loads the component for TextToSpeech
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TextToSpeech = lazyLoad(
  () => import('./index'),
  module => module.TextToSpeech,
);
