import * as React from 'react';
import { render } from '@testing-library/react';

import { TextToSpeech } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<TextToSpeech  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TextToSpeech />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
