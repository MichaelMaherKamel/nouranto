import { json } from '@remix-run/node'
import { useLoaderData, Link } from '@remix-run/react'
import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { db } from '~/lib/db'
import { Product, products } from '~/lib/db/schema'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'

export const meta: MetaFunction = () => {
  return [{ title: 'Nouranto Products' }, { name: 'description', content: 'Explore our range of plant-based products' }]
}

export const loader: LoaderFunction = async () => {
  const productList = await db.select().from(products)
  return json({ products: productList })
}

export default function Products() {
  const { products } = useLoaderData<typeof loader>()

  return (
    <div className='container mx-auto px-4 py-8 min-h-screen mt-4'>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100'>Our Products</h1>
          <Button asChild className='bg-green-600 hover:bg-green-700 text-white'>
            <Link to='/products/new'>
              <Plus className='mr-2 h-5 w-5' />
              Add New Product
            </Link>
          </Button>
        </div>

        {products.length === 0 ? (
          <p className='text-center text-green-700 dark:text-green-200'>
            No products available. Add some products to get started!
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map((product: Product, index: number) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='flex flex-col h-full bg-white dark:bg-green-700'>
                  <CardHeader>
                    <CardTitle className='truncate text-green-800 dark:text-green-100'>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className='flex-grow'>
                    {product.imageData && (
                      <img
                        src={`data:image/jpeg;base64,${product.imageData}`}
                        alt={product.name}
                        className='w-full h-48 object-cover mb-4 rounded'
                      />
                    )}
                    <p className='text-sm text-green-600 dark:text-green-200 line-clamp-3'>{product.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className='w-full bg-green-600 hover:bg-green-700 text-white'>
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
