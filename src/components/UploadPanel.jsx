import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function UploadPanel({ onComplete }) {
  const onDrop = useCallback((acceptedFiles) => {
    const imageUrls = acceptedFiles.map((file) => URL.createObjectURL(file))
    onComplete(imageUrls)
  }, [onComplete])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true,
  })

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111', color: 'white' }}>
      <div {...getRootProps()} style={{ border: '2px dashed #666', borderRadius: 16, padding: '40px 60px', textAlign: 'center', cursor: 'pointer', width: 'min(90vw, 560px)' }}>
        <input {...getInputProps()} />
        <h2 style={{ marginBottom: 12 }}>Upload your 360 images</h2>
        <p>{isDragActive ? 'Drop the images here...' : 'Drag and drop images here, or click to select files.'}</p>
      </div>
    </div>
  )
}
