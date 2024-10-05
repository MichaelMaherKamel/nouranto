import { useState } from 'react'
import { Form, useNavigation, Link } from '@remix-run/react'
import { json, redirect, unstable_parseMultipartFormData, unstable_createMemoryUploadHandler } from '@remix-run/node'
import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node'
import { db } from '~/lib/db'
import { products } from '~/lib/db/schema'
import { z } from 'zod'
import ImageUpload from '~/components/ImageUpload'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { nanoid } from 'nanoid'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export const meta: MetaFunction = () => {
  return [
    { title: 'Create New Product - Nouranto' },
    { name: 'description', content: 'Add a new plant-based product to our catalog' },
  ]
}

const createProductSchema = z.object({
  name: z.string().min(1, 'Product name is required').max(255, 'Product name is too long'),
  description: z.string().optional(),
})

export const action = async ({ request }: ActionFunctionArgs) => {
  const uploadHandler = unstable_createMemoryUploadHandler({
    maxPartSize: 5_000_000, // 5 MB
  })
  const formData = await unstable_parseMultipartFormData(request, uploadHandler)

  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const image = formData.get('image') as File | null

  const validationResult = createProductSchema.safeParse({ name, description })

  if (!validationResult.success) {
    return json({ errors: validationResult.error.flatten().fieldErrors }, { status: 400 })
  }

  let imageData = null
  if (image instanceof File && image.size > 0) {
    const imageBuffer = await image.arrayBuffer()
    const base64Image = Buffer.from(imageBuffer).toString('base64')
    imageData = base64Image
  }

  try {
    await db.insert(products).values({
      id: nanoid(),
      name,
      description,
      imageData,
    })

    return redirect('/products')
  } catch (error) {
    console.error('Error creating product:', error)
    return json({ error: 'Failed to create product' }, { status: 500 })
  }
}

export default function CreateProductForm() {
  const navigation = useNavigation()
  const [image, setImage] = useState<File | null>(null)

  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className='container mx-auto px-4 py-8 mt-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='max-w-2xl mx-auto p-6 bg-white dark:bg-green-700 rounded-lg shadow-md'
      >
        <h1 className='text-3xl font-bold mb-6 text-center text-green-800 dark:text-green-100'>Create New Product</h1>
        <Form method='post' encType='multipart/form-data' className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-green-700 dark:text-green-200 mb-1'>
              Product Name
            </label>
            <Input
              type='text'
              id='name'
              name='name'
              className='w-full bg-green-50 dark:bg-green-600 text-green-800 dark:text-green-100'
              required
            />
          </div>
          <div>
            <label htmlFor='description' className='block text-sm font-medium text-green-700 dark:text-green-200 mb-1'>
              Description
            </label>
            <Textarea
              id='description'
              name='description'
              className='w-full bg-green-50 dark:bg-green-600 text-green-800 dark:text-green-100'
              rows={4}
            />
          </div>
          <div>
            <label htmlFor='image' className='block text-sm font-medium text-green-700 dark:text-green-200 mb-1'>
              Product Image
            </label>
            <ImageUpload onChange={(file) => setImage(file)} value={image} id='image' />
            {image && (
              <input
                type='file'
                name='image'
                hidden
                ref={(ref) => {
                  if (ref) {
                    const dataTransfer = new DataTransfer()
                    dataTransfer.items.add(image)
                    ref.files = dataTransfer.files
                  }
                }}
              />
            )}
          </div>

          <Button type='submit' disabled={isSubmitting} className='w-full bg-green-600 hover:bg-green-700 text-white'>
            {isSubmitting ? 'Creating...' : 'Create Product'}
          </Button>
        </Form>
        <div className='mt-4'>
          <Link
            to='/products'
            className='text-green-600 hover:text-green-800 dark:text-green-300 dark:hover:text-green-100 flex items-center'
          >
            <ArrowLeft className='mr-2 h-5 w-5' />
            Back to Products
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
