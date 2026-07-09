import { useState } from 'react'
import UploadPanel from './components/UploadPanel'
import Viewer from './components/Viewer'

export default function App() {
  const [images, setImages] = useState(null)

  return images ? <Viewer images={images} /> : <UploadPanel onComplete={setImages} />
}
