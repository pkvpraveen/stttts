/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { SpeechToText } from './pages/SpeechToText/Loadable';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { useSelector } from 'react-redux';
import { selectThemeDarkOrLight } from '../styles/theme/slice/selectors';
import { TextToSpeech } from './pages/TextToSpeech/Loadable';
import { PageWrapper } from 'app/components/PageWrapper';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home/Loadable';

export function App() {
  const { i18n } = useTranslation();
  const theme = useSelector(selectThemeDarkOrLight);
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Speech Synthesis"
        defaultTitle="Speech Synthesis"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A speech synthesis tool" />
      </Helmet>
      <NavBar />
      <PageWrapper className={theme === 'dark' ? 'bp3-dark' : ''}>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/stt'}
            component={SpeechToText}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tts'}
            component={TextToSpeech}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </PageWrapper>
      <GlobalStyle />
    </BrowserRouter>
  );
}
