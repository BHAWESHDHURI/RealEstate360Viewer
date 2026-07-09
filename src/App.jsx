import { useState } from "react";
import UploadPanel from "./components/UploadPanel";
import Viewer from "./components/Viewer";

export default function App() {
  const [roomImages, setRoomImages] = useState(null);

  return (
    <>
      {roomImages ? (
        <Viewer images={roomImages} />
      ) : (
        <UploadPanel onComplete={setRoomImages} />
      )}
    </>
  );
}