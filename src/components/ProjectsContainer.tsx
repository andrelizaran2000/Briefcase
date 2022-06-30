// Modules
import { Box } from '@mui/system'
import { useTranslation } from 'react-i18next';
import { grey, lime } from '@mui/material/colors';
import { Grid, Paper, Stack, Typography } from '@mui/material'

// Components
import { GrayTitle } from './Common'

// Data
import { useNavigate } from 'react-router-dom';


export default function ProjectsContainer() {

  const navigate = useNavigate();
  const { t:tCommon } = useTranslation('common')
  const { t:tProjects } = useTranslation('projects')
  const projects:any[] = tProjects('projects', { returnObjects:true });

  return (
    <Stack>
      <GrayTitle>{tCommon('titles.projects')}</GrayTitle>
      <Grid container spacing={3}>
        {projects.map(({ title, description, technologies, id }) => (
         <Grid item md={6} lg={4} key={title} sx={{ width:'100%' }}>
            <Stack 
              sx={{ border:2, borderColor:'white', borderRadius:2, color:'white', alignItems:'center', textAlign:'center', justifyContent:'center' }}
              style={{ cursor:'pointer' }} 
              onClick={() => navigate(`/project/${id}`)}
            >
              <Box sx={{ backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center', width:'100%', paddingY:2 }}>
                <Typography variant='h6' component='h4' color={grey[900]}>{title}</Typography>
              </Box>
              <Stack sx={{ padding:2, rowGap:2 }}>
                <Typography variant='body2'>{description}</Typography>
                <Stack direction='row' gap={1} flexWrap='wrap' justifyContent='center'>
                  {technologies.map((technology:any) => (
                  <Paper sx={{ padding:1, backgroundColor:lime[700] }} key={technology}>
                    <Typography variant='caption' sx={{ color:'white' }}>{technology}</Typography>
                  </Paper>
                  ))}
                </Stack>
              </Stack>
            </Stack>
         </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
