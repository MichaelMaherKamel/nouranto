import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@remix-run/react'

export default function AnimatedDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
    },
    open: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className='relative z-50'>
      <button onClick={toggleMenu} className='p-2 focus:outline-none fixed top-4 right-4 z-50' aria-label='Toggle menu'>
        <motion.div
          variants={iconVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
          className='w-6 h-6 relative'
        >
          <motion.span
            className='absolute h-0.5 w-6 bg-green-800 dark:bg-green-100'
            style={{ top: '50%', left: 0 }}
            animate={isOpen ? { rotate: 90, y: 0 } : { rotate: 0, y: -4 }}
          />
          <motion.span
            className='absolute h-0.5 w-6 bg-green-800 dark:bg-green-100'
            style={{ top: '50%', left: 0 }}
            animate={isOpen ? { rotate: 0, y: 0 } : { rotate: 0, y: 4 }}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-gradient-to-b from-green-100 to-green-300 dark:from-green-800 dark:to-green-600 flex items-center justify-center'
          >
            <nav className='text-center'>
              <ul className='space-y-6'>
                <li>
                  <Link
                    to='/'
                    className='text-2xl font-bold text-green-800 dark:text-green-100 hover:text-green-600 dark:hover:text-green-300'
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/products'
                    className='text-2xl font-bold text-green-800 dark:text-green-100 hover:text-green-600 dark:hover:text-green-300'
                    onClick={toggleMenu}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='text-2xl font-bold text-green-800 dark:text-green-100 hover:text-green-600 dark:hover:text-green-300'
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='text-2xl font-bold text-green-800 dark:text-green-100 hover:text-green-600 dark:hover:text-green-300'
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
