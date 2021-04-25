/**
 *
 * SpeechToText
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Title } from '../../components/Title';
import { P } from '../../components/P';
import {
  Button,
  EditableText,
  FileInput,
  Radio,
  RadioGroup,
} from '@blueprintjs/core';

interface Props {}

export const SpeechToText = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [source, setSource] = useState('microphone');
  const [text, setText] = useState('');
  return (
    <>
      <Helmet>
        <title>Speech To Text</title>
        <meta name="description" content="Speech to text" />
      </Helmet>
      <Title>Convert Speech to text</Title>
      <P>
        See your voice converted to text as you speak. You may also upload an
        audio file.
      </P>
      <Div>
        <RadioGroup
          inline
          label="Choose source"
          name="source"
          onChange={e => setSource(e.currentTarget.value)}
          selectedValue={source}
        >
          <Radio label="Microphone" value="microphone" />
          <Radio label="File Upload" value="file" />
        </RadioGroup>
        <TextArea>
          <EditableText
            intent="primary"
            minLines={12}
            multiline={true}
            placeholder="Text will appear here..."
            selectAllOnFocus
            value={text}
            onChange={value => setText(value)}
          />
        </TextArea>
        {source === 'microphone' ? (
          <Button icon="record" onClick={() => {}}>
            Record
          </Button>
        ) : (
          <FileInput text="Choose file..." buttonText="Browse" />
        )}
      </Div>
    </>
  );
});

const Div = styled.div`
color: ${p => p.theme.text}
display: flex;
flex-direction: column;
`;
const TextArea = styled.div`
  margin: 1rem 0;
`;
