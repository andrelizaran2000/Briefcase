// Modules
import { Grid, Paper, Stack, Typography } from '@mui/material'

// Components
import { GrayTitle } from './Common'

// Data
import { personalDataEnglish } from '../data/personal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactMeContainer () {
  return (
    <Stack>
      <GrayTitle>Contact me</GrayTitle>
      <Grid container spacing={2}>
        {personalDataEnglish.contactMe.map(({ title, icon, to }) => (
          <Grid item xs={6} md={4} key={title}>
            <a href={to}>
              <Paper sx={{ padding:2 }}>
                <Stack alignItems='center' rowGap={2}>
                  <FontAwesomeIcon icon={icon} fontSize='36'/>
                  <Typography variant='subtitle1' component='h3' textAlign='center'>{title}</Typography>
                </Stack>
              </Paper>
            </a>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
