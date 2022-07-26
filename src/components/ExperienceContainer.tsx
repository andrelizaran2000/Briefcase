// Modules
import { Grid, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next'

// Components
import { GrayTitle } from './Common'

export default function ExperienceContainer() {

  const { t:tCommon } = useTranslation('common');
  const { t:tPersonal } = useTranslation('personal');
  const experiences:any[] = tPersonal('experience', { returnObjects:true });

  return (
    <Stack>
      <GrayTitle>{tCommon('titles.experience')}</GrayTitle>
      <Grid container spacing={3}>
        {experiences.map(({ title, subtitle, period }, index) => (
          <Grid item md={6} lg={4} key={index} sx={{ width:'100%' }}>
            <Stack 
              sx={{ border:2, borderColor:'white', borderRadius:2, color:'white', alignItems:'center', textAlign:'center', justifyContent:'center' }}
              style={{ cursor:'pointer' }} 
            >
              <Box sx={{ backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center', width:'100%', paddingY:2 }}>
                <Typography variant='h6' component='h4' color={grey[900]}>{title}</Typography>
              </Box>
              <Stack sx={{ padding:2, rowGap:2 }}>
                <Typography variant='body2'>{subtitle} / {period}</Typography>
              </Stack>
            </Stack>
         </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
