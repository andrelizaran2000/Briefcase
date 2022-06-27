// Modules
import { grey } from '@mui/material/colors';
import { Grid, Stack } from '@mui/material';

// Components
import AboutMeContainer from './components/AboutMeContainer';
import TechnologiesContainer from './components/TechnologiesContainer';
import ProjectsContainer from './components/ProjectsContainer';
import ContactMeContainer from './components/ContactMeContainer';
import AppBarHome from './components/AppBarHome';

export default function App() {
  return (
    <>
      <AppBarHome/>
      <Stack sx={{ backgroundColor:grey[900], minHeight:'100vh' }}>
        <Stack spacing={2} sx={{ paddingY:4, paddingX:{ xs:4, md:8 }}}>
          <Grid container columnSpacing={8} rowSpacing={2}>
            <Grid item xs={12} md={6}>
              <AboutMeContainer/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TechnologiesContainer/>
            </Grid>
          </Grid>
          <ProjectsContainer/>
          <ContactMeContainer/>
        </Stack>
      </Stack>
    </>
  )
}