import { Link } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'
import { motion } from 'framer-motion'
import { Button } from '~/components/ui/button'
import { ArrowLeft, User } from 'lucide-react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Nouranto Team' },
    { name: 'description', content: "Meet the talented individuals behind Nouranto's success" },
  ]
}

const teamMembers = [
  { name: 'John Doe', position: 'CEO' },
  { name: 'Jane Smith', position: 'CTO' },
  { name: 'Mike Johnson', position: 'Lead Developer' },
  { name: 'Sarah Brown', position: 'UX Designer' },
]

export default function Team() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className='text-4xl md:text-5xl font-bold mb-8 text-green-900 dark:text-green-100'>Our Team</h1>
        <div className='bg-white dark:bg-green-700 rounded-lg shadow-lg p-8 mb-8'>
          <p className='text-lg mb-6 text-green-700 dark:text-green-200'>
            Meet the talented individuals who make Nouranto great. We&apos;re a diverse group of professionals
            passionate about plant-based nutrition, sustainability, and creating exceptional food experiences.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className='bg-green-50 dark:bg-green-600 p-4 rounded-lg shadow'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='flex items-center'>
                  <User className='h-10 w-10 text-green-600 dark:text-green-300 mr-4' />
                  <div>
                    <h2 className='text-xl font-semibold text-green-800 dark:text-green-100'>{member.name}</h2>
                    <p className='text-green-600 dark:text-green-300'>{member.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link to='/about'>
            <Button
              size='lg'
              variant='outline'
              className='text-green-700 hover:text-green-900 dark:text-green-200 dark:hover:text-green-100'
            >
              <ArrowLeft className='mr-2 h-5 w-5' />
              Back to About
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
