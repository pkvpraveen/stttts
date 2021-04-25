/**
 *
 * Home
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Link } from 'app/components/Link';

interface Props {}

export const Home = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Page>
      <Link to={'/tts'} className="bp3-button bp3-large" role="button">
        Text to speech
      </Link>
      <Link to={'/stt'} className="bp3-button bp3-large" role="button">
        Speech to text
      </Link>
    </Page>
  );
});

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  a {
    margin-right: 1rem;
  }
`;
