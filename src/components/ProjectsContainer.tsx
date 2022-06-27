// Modules
import { Box } from '@mui/system'
import { Grid, Paper, Stack, Typography } from '@mui/material'

// Components
import { GrayTitle } from './Common'

// Data
import { projectData } from '../data/projects' 
import { useNavigate } from 'react-router-dom';
import { lime } from '@mui/material/colors';

export default function ProjectsContainer() {

  const navigate = useNavigate();

  return (
    <Stack>
      <GrayTitle>Projects</GrayTitle>
      <Grid container spacing={3}>
        {projectData.map(({ title, descriptionEnglish, technologies, id }) => (
         <Grid item md={6} lg={4} key={title} sx={{ width:'100%' }}>
            <Stack 
              sx={{ border:2, borderColor:'white', borderRadius:2, padding:2, color:'white', alignItems:'center', textAlign:'center', justifyContent:'center' }}
              style={{ minHeight:140, cursor:'pointer' }} 
              rowGap={2}
              onClick={() => navigate(`/project/${id}`)}
            >
              <Typography variant='h6' component='h4'>{title}</Typography>
              <Typography variant='body2'>{descriptionEnglish}</Typography>
              <Stack direction='row' gap={1} flexWrap='wrap' justifyContent='center'>
                {technologies.map((technology) => (
                <Paper sx={{ padding:1, backgroundColor:lime[700] }} key={technology}>
                  <Typography variant='caption' sx={{ color:'white' }}>{technology}</Typography>
                </Paper>
                ))}
              </Stack>
            </Stack>
         </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
