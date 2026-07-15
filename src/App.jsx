import './App.css'
import 'react-photo-view/dist/react-photo-view.css';
import Header from './components/Header'
import ProjectOne from './components/ProjectOne'
import { PhotoProvider } from 'react-photo-view';
import ProjectTwo from './components/ProjectTwo';
import Information from './components/Information';
function App() {
  return (
      <div className="mx-auto">
        <Header />
         <PhotoProvider toolbarRender={({ rotate, onRotate }) => {
          return <svg class="PhotoView-Slider__toolbarIcon" onClick={() => onRotate(rotate - 90)} width="44" height="44" fill="white" viewBox="0 0 768 768"><path d="M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z"></path></svg>;
        }} 
        >
        
            <Information />
            <ProjectOne />
            <ProjectTwo />
         </PhotoProvider>
      </div>
  )
}

export default App
