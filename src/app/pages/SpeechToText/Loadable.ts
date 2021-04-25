/**
 *
 * Asynchronously loads the component for SpeechToText
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SpeechToText = lazyLoad(
  () => import('./index'),
  module => module.SpeechToText,
);
