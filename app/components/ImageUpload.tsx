import { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { X } from 'lucide-react'

interface ImageUploadProps {
  onChange: (file: File | null) => void
  value: File | string | null
  existingImage?: string | null
  id?: string
}

export default function ImageUpload({ onChange, value, existingImage, id }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(existingImage || null)

  useEffect(() => {
    return () => {
      if (preview && preview !== existingImage) {
        URL.revokeObjectURL(preview)
      }
    }
  }, [preview, existingImage])

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (file) {
        onChange(file)
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
      }
    },
    [onChange]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  })

  const removeImage = useCallback(() => {
    onChange(null)
    if (preview && preview !== existingImage) {
      URL.revokeObjectURL(preview)
    }
    setPreview(null)
  }, [onChange, preview, existingImage])

  const imageUrl = typeof value === 'string' ? value : preview

  return (
    <div className='relative w-[200px] h-[200px]'>
      {imageUrl ? (
        <div className='relative w-full h-full border-2 border-gray-300 rounded-lg overflow-hidden'>
          <img src={imageUrl} alt='Uploaded' className='w-full h-full object-cover' />
          <button
            onClick={removeImage}
            className='absolute top-2 right-2 bg-white rounded-full p-1 shadow-md'
            type='button'
            aria-label='Remove image'
          >
            <X className='w-4 h-4 text-gray-600' />
          </button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`w-full h-full border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer ${
            isDragActive ? 'border-primary' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} id={id} aria-label='Upload image' />
          <div className='text-center'>
            <svg
              className='mx-auto h-12 w-12 text-gray-400'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 48 48'
              aria-hidden='true'
            >
              <path
                d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p className='mt-1 text-sm text-gray-600'>
              {isDragActive ? 'Drop the image here' : 'Drag & drop or click to upload'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
