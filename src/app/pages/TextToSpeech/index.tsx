/**
 *
 * TextToSpeech
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Title } from '../../components/Title';
import { P } from '../../components/P';
import { Button, EditableText } from '@blueprintjs/core';

interface Props {}

export const TextToSpeech = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [text, setText] = useState('');

  return (
    <>
      <Helmet>
        <title>Text to Speech</title>
        <meta name="description" content="text to speech" />
      </Helmet>
      <Title>Convert Text to Speech</Title>
      <P>See your text converted to voice.</P>
      <Div>
        <TextArea>
          <EditableText
            intent="primary"
            minLines={12}
            multiline={true}
            placeholder="Enter your text here..."
            selectAllOnFocus
            value={text}
            onChange={value => setText(value)}
          />
        </TextArea>
        <Button icon="volume-up" onClick={() => {}}>
          Listen
        </Button>
      </Div>
    </>
  );
});

const Div = styled.div``;
const TextArea = styled.div`
  margin: 1rem 0;
`;
