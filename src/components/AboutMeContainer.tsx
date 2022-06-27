// Modules
import GamesIcon from '@mui/icons-material/Games';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupIcon from '@mui/icons-material/Group';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material'

// Data
import { personalDataEnglish } from '../data/personal'

// Components
import { GrayTitle } from './Common'
import { grey } from '@mui/material/colors';

export default function AboutMeContainer() {
  return (
    <Stack spacing={2} sx={{ color:'white' }}>
      <Stack>
        <GrayTitle>About me</GrayTitle>
        <Typography variant='body1' textAlign='justify'>{personalDataEnglish.description}</Typography>
      </Stack>
      <Stack>
        <GrayTitle>Hobbies</GrayTitle>
        <HobbiesContainer/>
      </Stack>
      <Stack>
        <GrayTitle>Languages</GrayTitle>
        <LanguagesContainer/>
      </Stack>
      <Stack>
        <GrayTitle>CV</GrayTitle>
        <Paper sx={{ padding:2, alignSelf:'start', cursor:'pointer' }}>
          <Typography variant='subtitle2'>CV</Typography>
        </Paper> 
      </Stack>
    </Stack>
  )
}

function HobbiesContainer () {
  return (
    <List sx={{ width: '100%' }}>
    {personalDataEnglish.hobbies.map(( hobby, index ) => (
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
  )
}

function LanguagesContainer () {
  return (
    <List sx={{ width: '100%' }}>
      {personalDataEnglish.languages.map((language) => (
        <ListItem key={language}>
          <Avatar>
            <LanguageIcon/>
          </Avatar>
          <ListItemText 
            primary={language} 
            // @ts-ignore
            secondary={<Typography type="body2" style={{ color: grey[700] }}>Native</Typography>} 
            sx={{ paddingLeft:2 }}
          />
        </ListItem>
      ))}
    </List>
  )
}