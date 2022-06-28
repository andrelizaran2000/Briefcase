// Module
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

// Contexts
import { GeneralContext } from './containers/TranslateContainer';

export default function AppBarHome () {

  const navigate = useNavigate();
  const {t} = useTranslation('common');
  const { setLanguage, language } = useContext(GeneralContext);

  function toggleLanguage () {
    (language === 'es') ? setLanguage('en') : setLanguage('es');
  }

  return (
    <>
      <AppBar 
        position="static" 
        sx={{ backgroundColor:grey[800], paddingX:{ xs:2, md:5 }}}
      >
        <Toolbar sx={{ minHeight:{ xs:'9vh', sm:'8vh', display:'flex', justifyContent:'space-between' } }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ cursor:'pointer', paddingRight:4 }} 
            onClick={() => navigate('/')}
          >AL</Typography>
          <Button variant='contained' color='error' onClick={toggleLanguage}>{t('change-language')}</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
