import { Link } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'
import { motion } from 'framer-motion'
import { Button } from '~/components/ui/button'
import { Users } from 'lucide-react'

export const meta: MetaFunction = () => {
  return [{ title: 'About Nouranto' }, { name: 'description', content: 'Learn more about Nouranto and our mission' }]
}

export default function About() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className='text-4xl md:text-5xl font-bold mb-8 text-green-900 dark:text-green-100'>About Nouranto</h1>
        <div className='bg-white dark:bg-green-700 rounded-lg shadow-lg p-8 mb-8'>
          <p className='text-lg mb-6 text-green-700 dark:text-green-200'>
            Welcome to Nouranto! We are dedicated to revolutionizing plant-based nutrition and creating modern,
            sustainable food experiences that nourish both body and soul.
          </p>
          <p className='text-lg mb-6 text-green-700 dark:text-green-200'>
            Our mission is to provide innovative, delicious, and nutritious plant-based products that not only satisfy
            your taste buds but also contribute to a healthier planet.
          </p>
          <p className='text-lg mb-6 text-green-700 dark:text-green-200'>
            At Nouranto, we believe that the future of food is plant-based, and we&apos;re committed to leading the way
            in this exciting journey towards a more sustainable and compassionate world.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link to='/about/team'>
            <Button size='lg' className='bg-green-600 hover:bg-green-700 text-white'>
              <Users className='mr-2 h-5 w-5' />
              Meet Our Team
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
