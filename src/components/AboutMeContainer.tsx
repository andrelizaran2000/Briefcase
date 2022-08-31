// Modules
import { 
  Avatar, 
  List, 
  ListItem, 
  ListItemText, 
  Paper, 
  Stack, 
  Typography 
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import GamesIcon from '@mui/icons-material/Games';
import GroupIcon from '@mui/icons-material/Group';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

// Components
import { GrayTitle } from './Common'

export default function AboutMeContainer() {
  return (
    <Stack spacing={2} sx={{ color:'white' }}>
      <DescriptionContainer/>
      <HobbiesContainer/>        
      <LanguagesContainer/>
      <CvContainer/>
    </Stack>
  )
}

function DescriptionContainer () {
  const { t:tCommon } = useTranslation('common')
  const { t:tPersonal } = useTranslation('personal')
  return (
    <Stack>
      <GrayTitle>{tCommon('titles.about-me')}</GrayTitle>
      <Typography variant='body1'>{tPersonal('description')}</Typography>
    </Stack>
  )
}

function HobbiesContainer () {
  const { t:tCommon } = useTranslation('common')
  const { t:tPersonal } = useTranslation('personal')
  const hobbies:any[] = tPersonal('hobbies', { returnObjects:true });
  return (
    <Stack>
      <GrayTitle>{tCommon('titles.hobbies')}</GrayTitle>
      <List sx={{ width: '100%' }}>
        {hobbies.map(( hobby, index ) => (
          <ListItem key={hobby}>
            <Avatar>
              {index === 0 && <GamesIcon/>}
              {index === 1 && <ComputerIcon/>}
              {index === 2 && <GroupIcon/>}
              {index === 3 && <MusicNoteIcon/>}
            </Avatar>
            <ListItemText primary={hobby} sx={{ paddingLeft:2 }}/>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

function LanguagesContainer () {
  const { t:tCommon } = useTranslation('common')
  const { t:tPersonal } = useTranslation('personal')
  const languages:any[] = tPersonal('languages', { returnObjects:true });
  return (
    <Stack>
      <GrayTitle>{tCommon('titles.languages')}</GrayTitle>
      <List sx={{ width: '100%' }}>
        {languages.map(({ title, level }) => (
          <ListItem key={title}>
            <Avatar>
              <LanguageIcon/>
            </Avatar>
            <ListItemText
              primary={title}
              // @ts-ignore
              secondary={<Typography type="body2" style={{ color: grey[700] }}>{level}</Typography>}
              sx={{ paddingLeft:2 }}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}

function CvContainer () {
  const {t} = useTranslation('common')
  return (
    <Stack>
      <GrayTitle>{t('titles.cv')}</GrayTitle>
        <Stack direction='row' columnGap={2}>
          <a href="https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/CV%20Es.pdf?alt=media&token=a011e62a-c24d-417e-81c4-a64da06d9801">
            <Paper sx={{ padding:2, paddingY:1, cursor:'pointer' }}>
              <Typography variant='subtitle2'>CV Es</Typography>
            </Paper>
          </a>
          <a href="https://firebasestorage.googleapis.com/v0/b/portafolio-572d2.appspot.com/o/CV%20En.pdf?alt=media&token=be8f1362-90cb-464c-bc89-df2c749fc06f">
            <Paper sx={{ paddingX:2, paddingY:1, cursor:'pointer' }}>
              <Typography variant='subtitle2'>CV En</Typography>
            </Paper>
          </a>
        </Stack>
    </Stack>
  )
}