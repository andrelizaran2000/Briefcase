// Modules
import { grey } from '@mui/material/colors';
import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Carousel from 'react-material-ui-carousel'
import { Grid, Paper, Stack, Typography } from '@mui/material'

// Components
import { GrayTitle } from './components/Common';
import AppBarHome from './components/AppBarHome';

// Data
import { ProjectData } from './data/projects';
import { GeneralContext } from './components/containers/TranslateContainer';

export default function Project() {

  const { projectId } = useParams()
  const [projectSelected, setProjectSelected] = useState<ProjectData>({} as ProjectData);
  const { language } = useContext(GeneralContext);
  const { t } = useTranslation('projects')
  const projects:any[] = t('projects', { returnObjects:true }); 

  useEffect(() => {
    const selectedProject = projects.filter((_, index) => index == Number(projectId as string));
    setProjectSelected(selectedProject[0])
  }, [language])

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

  const [time, setTime] = useState(1000)
  const { t:tCommon } = useTranslation('common')

  useEffect(() => {
    setTimeout(() => {
      setTime(4000)
    }, 1000)
  }, [])
  
  if (projectSelected.images.length === 0) {
    return (
      <Stack>
        <GrayTitle>{tCommon('titles.images')}</GrayTitle>
        <Paper sx={{ padding:2, textAlign:'center' }}>
          <Typography variant='caption'>{tCommon('messages.no-images')}</Typography>
        </Paper>
      </Stack>
    )
  } else {
    return (
      <Stack>
        <GrayTitle>{tCommon('titles.images')}</GrayTitle>
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

  const { t:tCommon } = useTranslation('common')

  return (
    <Stack gap={2}>
      <Stack>
        <GrayTitle>{projectSelected.title}</GrayTitle>
        <Typography variant='body1' sx={{ color:'white' }}>{projectSelected.description}</Typography>
      </Stack>
      <Stack>
        <GrayTitle>{tCommon('titles.technologies')}</GrayTitle>
        <Stack direction='row' gap={1} flexWrap='wrap'>
          {projectSelected.technologies.map((technology) => (<Paper sx={{ padding:1 }} key={technology}><Typography variant='caption'>{technology}</Typography></Paper>))}
        </Stack>
      </Stack>
      <Stack>
        <GrayTitle>{tCommon('titles.repositories')}</GrayTitle>
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
              <Typography variant='caption'>{tCommon('messages.no-repo')}</Typography>
            </Paper>
          )
        } 
      </Stack>
    </Stack>
  )
}

