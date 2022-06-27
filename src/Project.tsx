// Modules
import { grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Grid, Paper, Stack, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

// Components
import { GrayTitle } from './components/Common';

// Data
import { projectData, ProjectData } from './data/projects'
import AppBarHome from './components/AppBarHome';

export default function Project() {

  const { projectId } = useParams()
  const [projectSelected, setProjectSelected] = useState<ProjectData>({} as ProjectData);

  useEffect(() => {
    const selectedProject = projectData.filter((_, index) => index == Number(projectId as string));
    setProjectSelected(selectedProject[0])
  }, [])

  if (!projectSelected.title) return <></>
  else {
    return (
      <>
        <AppBarHome/>
        <Stack sx={{ backgroundColor:grey[900], minHeight:{ xs:'91vh', sm:'92vh' } }}>
          <Stack sx={{ paddingY:4, paddingX:{ xs:4, md:8 }}}>
            <Grid container columnSpacing={8} rowSpacing={2}>
              <Grid item xs={12} md={6}>
                <ProjectInformation projectSelected={projectSelected}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <CarouselContainer projectSelected={projectSelected}/>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </>
    )
  }
}

function CarouselContainer ({ projectSelected }:ProjectInformationProps) {

  const [time, setTime] = useState(100)

  useEffect(() => {
    setTimeout(() => {
      setTime(4000)
    }, 100)
  }, [])
  
  if (projectSelected.images.length === 0) {
    return (
      <Stack>
        <GrayTitle>Images</GrayTitle>
        <Paper sx={{ padding:2, textAlign:'center' }}>
          <Typography variant='caption'>Images no available</Typography>
        </Paper>
      </Stack>
    )
  } else {
    return (
      <Stack>
        <GrayTitle>Images</GrayTitle>
        <Carousel changeOnFirstRender={true} interval={time}>
          {projectSelected.images.map((image) => (
            <img src={image} style={{ width:'100%' }} key={image}/>
          ))}
        </Carousel>
      </Stack>
    )
  }
}

type ProjectInformationProps = {
  projectSelected:ProjectData
}

function ProjectInformation ({ projectSelected }:ProjectInformationProps) {
  return (
    <Stack gap={2}>
      <Stack>
        <GrayTitle>{projectSelected.title}</GrayTitle>
        <Typography variant='body1' sx={{ color:'white' }}>{projectSelected.descriptionEnglish}</Typography>
      </Stack>
      <Stack>
        <GrayTitle>Technologies</GrayTitle>
        <Stack direction='row' gap={1} flexWrap='wrap'>
          {projectSelected.technologies.map((technology) => (<Paper sx={{ padding:1 }} key={technology}><Typography variant='caption'>{technology}</Typography></Paper>))}
        </Stack>
      </Stack>
      <Stack>
        <GrayTitle>Repository</GrayTitle>
        <Stack direction='row' columnGap={2}>
          {projectSelected.repos.map(({ title, to }) => (
            <a href={to} style={{ textDecoration:'none' }} key={title}>
              <Paper sx={{ padding:1 }}>
                <Typography variant='caption' >{title}</Typography>
              </Paper>
            </a>
          ))}
        </Stack>
        {
          projectSelected.repos.length === 0 
          && 
          ( 
            <Paper sx={{ padding:2, textAlign:'center' }}>
              <Typography variant='caption'>Repository no available</Typography>
            </Paper>
          )
        } 
      </Stack>
    </Stack>
  )
}

