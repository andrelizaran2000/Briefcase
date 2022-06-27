// Modules
import { 
  BrowserRouter ,
  Routes,
  Route
} from 'react-router-dom';
import App from '../App';
import Project from '../Project';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<App/>}/>
        <Route path="/project/:projectId" element={<Project/>}/>
        <Route path="*" element={<main>There is no page</main>}/>
      </Routes>
    </BrowserRouter>
  )
}
