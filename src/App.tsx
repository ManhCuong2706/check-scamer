import { Header } from 'client/components';
import { Footer } from 'client/components/Footer';
import { ScamDetailProvider } from 'client/contexts/ScamDetailContext';
import { Routers } from 'routers/Routers';
import { ColorModeContext, ColorModeProvider, useMode } from 'theme/Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';

function App() {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app container mx-auto'>
          <ScamDetailProvider>
            <Header />
            <Routers />
            <Footer />
          </ScamDetailProvider>
        </div>
      </ThemeProvider>
    </ColorModeProvider>
  );
}

export default App;
