// Modules
import { Typography } from '@mui/material';
import { lime } from '@mui/material/colors';

export function GrayTitle ({ children }:any) {
  return <Typography variant='h6' component='h1' sx={{ color:lime[500], mb:1 }}>{children}</Typography>
}