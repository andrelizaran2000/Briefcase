// Modules
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Paper, Stack, Typography } from '@mui/material';

// Data
import { personalDataEnglish } from '../data/personal'

import { GrayTitle } from './Common'

export default function TechnologiesContainer() {
  const { t:tCommon } = useTranslation('common')
  return (
    <Stack>
      <GrayTitle>{tCommon('titles.technologies')}</GrayTitle>
      <Grid container spacing={3}>
        {personalDataEnglish.technologies.map(({ title, icon }) => (
          <Grid item xs={6} lg={4} key={title}>
            <Paper sx={{ padding:2 }}>
              <Stack alignItems='center' rowGap={2}>
                <FontAwesomeIcon icon={icon} fontSize='36'/>
                <Typography variant='subtitle2' component='h3' textAlign='center'>
                  {title}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
