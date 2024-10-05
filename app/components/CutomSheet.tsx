import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '~/components/ui/button'

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <motion.line
      x1='4'
      y1='6'
      x2='20'
      y2='6'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
      transition={{ duration: 0.3 }}
    />
    <motion.line
      x1='4'
      y1='18'
      x2='20'
      y2='18'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
      transition={{ duration: 0.3 }}
    />
  </svg>
)

interface CustomSheetProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const CustomSheet: React.FC<CustomSheetProps> = ({ isOpen, onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-black bg-opacity-50 z-40'
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className='fixed right-0 top-0 h-full w-64 shadow-lg z-50 p-4 bg-gradient-to-b from-green-100 to-green-300 dark:from-green-800 dark:to-green-600'
          >
            <Button
              variant='ghost'
              size='icon'
              onClick={onClose}
              className='absolute top-4 right-4 text-green-800 dark:text-green-100'
            >
              <HamburgerIcon isOpen={true} />
            </Button>
            <div className='mt-16'>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export { CustomSheet, HamburgerIcon }
