import { useRef } from 'react'
import type { MetaFunction } from '@remix-run/node'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { ArrowRight, Leaf, Zap, Shield } from 'lucide-react'
import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import nouranto from '~/images/nouranto.webp'

export const meta: MetaFunction = () => {
  return [
    { title: 'Nouranto - Plant-Based Nutrition' },
    { name: 'description', content: 'Discover innovative plant-based products at Nouranto' },
  ]
}

export default function LandingPage() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='container mx-auto px-4 py-16 text-center'
      >
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <h1 className='text-4xl md:text-6xl font-bold text-green-900 dark:text-green-100 mb-6'>
              Nourish Your Body, Nurture Your Soul
            </h1>
            <p className='text-xl text-green-700 dark:text-green-200 mb-8'>
              Discover the perfect balance of nutrition and taste with Nouranto&apos;s innovative plant-based products.
            </p>
            <Link to={'/products'}>
              <Button size='lg' className='bg-green-600 hover:bg-green-700 text-white'>
                Explore Our Products <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </Link>
          </div>
          <motion.div
            className='md:w-1/2'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={nouranto} alt='Nouranto plant-based products' className='rounded-lg shadow-lg' />
          </motion.div>
        </div>
      </motion.section>

      <section ref={featuresRef} id='features' className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-green-900 dark:text-green-100 mb-12'>
            Why Choose Nouranto?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='h-full'
              >
                <Card className='bg-green-50 dark:bg-green-700 h-full flex flex-col'>
                  <CardHeader>
                    <CardTitle className='flex items-center text-green-700 dark:text-green-200'>
                      {feature.icon}
                      <span className='ml-2'>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='flex-grow'>
                    <CardDescription className='text-green-600 dark:text-green-300'>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        ref={aboutRef}
        id='about'
        className='container mx-auto px-4 py-16'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-green-900 dark:text-green-100 mb-6'>About Nouranto</h2>
          <p className='text-green-700 dark:text-green-200 mb-8'>
            At Nouranto, we believe in the power of plant-based nutrition to transform lives and protect our planet. Our
            mission is to create delicious, sustainable food products that nourish both body and soul, while promoting a
            healthier lifestyle for all.
          </p>
          <Link to={'/about'}>
            <Button
              variant='outline'
              className='text-green-700 hover:text-green-900 dark:text-green-200 dark:hover:text-green-100'
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </motion.section>

      <section ref={contactRef} id='contact' className='py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-green-900 dark:text-green-100 mb-6'>Ready to Start Your Journey?</h2>
          <p className='text-green-700 dark:text-green-200 mb-8'>
            Join the Nouranto family and discover a world of delicious, nutritious plant-based options.
          </p>
          <Link to={'/contact'}>
            <Button size='lg' className='bg-green-600 hover:bg-green-700 text-white'>
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

const features = [
  {
    title: '100% Plant-Based',
    description:
      'Our products are made entirely from plant-based ingredients, ensuring a sustainable and ethical choice for conscious consumers.',
    icon: <Leaf className='h-6 w-6' />,
  },
  {
    title: 'Nutrient-Rich',
    description:
      'Packed with essential vitamins and minerals, our foods provide the nourishment your body needs to thrive.',
    icon: <Zap className='h-6 w-5' />,
  },
  {
    title: 'Allergen-Friendly',
    description:
      'We carefully craft our products to be free from common allergens, making them safe for a wide range of dietary needs.',
    icon: <Shield className='h-6 w-6' />,
  },
]
