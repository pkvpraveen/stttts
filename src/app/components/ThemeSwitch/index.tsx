import * as React from 'react';
import { FormLabel } from 'app/components/FormLabel';
import styled from 'styled-components/macro';
import { themeActions } from 'styles/theme/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'styles/theme/utils';
import { ThemeKeyType } from 'styles/theme/slice/types';
import { selectThemeKey } from 'styles/theme/slice/selectors';
import { Radio, RadioGroup } from '@blueprintjs/core';
import { FormEvent } from 'react';

export function ThemeSwitch() {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleThemeChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value as ThemeKeyType;
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  return (
    <Wrapper>
      <RadioGroup
        inline
        label="Choose theme"
        name="theme"
        onChange={handleThemeChange}
        selectedValue={theme}
      >
        <Radio label="System theme" value="system" />
        <Radio label="Light" value="light" />
        <Radio label="Dark" value="dark" />
      </RadioGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${FormLabel} {
    margin-bottom: 0.625rem;
  }
`;
