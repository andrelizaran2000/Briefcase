// Module
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AppBarHome () {

  const navigate = useNavigate();
  const {t, i18n} = useTranslation('common');

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
          <Button variant='contained' color='error'>{t('change-language')}</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
