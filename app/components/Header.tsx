import { useState } from 'react'
import { Link } from '@remix-run/react'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from 'lucide-react'
import { Button } from '~/components/ui/button'
import AnimatedDropdownMenu from '~/components/AnimatedDropDownMenu'

function NavButton({ label, onClick, isActive }: { label: string; onClick: () => void; isActive: boolean }) {
  return (
    <Button
      onClick={onClick}
      variant={'ghost'}
      size={'sm'}
      className={`relative z-10 rounded-full ${
        isActive
          ? 'text-green-800 dark:text-green-100'
          : 'text-green-700 hover:text-green-900 dark:text-green-200 dark:hover:text-green-100'
      }`}
    >
      {label}
    </Button>
  )
}

export default function Header() {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const scrollTo = (tabName: string) => {
    const element = document.getElementById(tabName)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setActiveTab(tabName)
  }

  return (
    <header className='fixed top-0 left-0 right-0 bg-green-100 dark:bg-green-800 z-50'>
      <div className='container mx-auto px-4 py-4'>
        <nav className='flex items-center justify-between'>
          <Link to='/' className='flex items-center'>
            <svg
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='120px'
              height='64px'
              viewBox='0 0 817.545 223.703'
              enableBackground='new 0 0 817.545 223.703'
              xmlSpace='preserve'
              className='mr-2'
            >
              <g>
                <g>
                  <g transform='translate(0, 15)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#95C93D'
                      d='M764.438,39.911h22.881c6.849,0,12.437,6.759,12.437,15.052
                      v12.884c0,8.259-5.588,15.04-12.437,15.04h-22.881c-6.862,0-12.449-6.781-12.449-15.04V54.963
                      C751.989,46.67,757.576,39.911,764.438,39.911z M756.766,25.499h38.231c11.435,0,20.812,11.313,20.812,25.137v21.54
                      c0,13.822-9.377,25.118-20.812,25.118h-38.231c-11.452,0-20.813-11.296-20.813-25.118v-21.54
                      C735.953,36.812,745.313,25.499,756.766,25.499z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#95C93D'
                      d='M614.558,26.403h48.722c8.299,0,15.085,9.354,15.085,20.759
                      v49.823h-14.466V54.997c0-7.12-4.229-12.91-9.388-12.91h-30.322c-5.175,0-9.399,5.79-9.399,12.91v42.128h-15.322V47.162
                      C599.467,35.758,606.258,26.403,614.558,26.403z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#95C93D'
                      d='M505.377,24.705h-21.529c-9.678,0-17.601,9.689-17.601,21.536
                      v51.996h15.78V50.229c0-5.256,3.513-9.579,7.824-9.579h15.525V24.705z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#95C93D'
                      d='M319.896,39.911h22.88c6.861,0,12.454,6.759,12.454,15.052
                      v12.884c0,8.259-5.593,15.04-12.454,15.04h-22.88c-6.844,0-12.449-6.781-12.449-15.04V54.963
                      C307.447,46.67,313.052,39.911,319.896,39.911z M312.228,25.499h38.222c11.452,0,20.811,11.313,20.811,25.137v21.54
                      c0,13.822-9.359,25.118-20.811,25.118h-38.222c-11.457,0-20.811-11.296-20.811-25.118v-21.54
                      C291.417,36.812,300.771,25.499,312.228,25.499z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#95C93D'
                      d='M221.722,26.403h48.728c8.305,0,15.092,9.354,15.092,20.759
                      v49.823h-14.472V54.997c0-7.12-4.219-12.91-9.394-12.91h-30.328c-5.163,0-9.394,5.79-9.394,12.91v42.128h-15.317V47.162
                      C206.636,35.758,213.435,26.403,221.722,26.403z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#95C93D'
                      d='M443.72,97.294h-48.715c-8.305,0-15.103-9.333-15.103-20.737
                      V26.705h14.477v42.012c0,7.1,4.219,12.905,9.377,12.905h30.333c5.181,0,9.399-5.806,9.399-12.905V26.572h15.334v49.984
                      C458.822,87.961,452.031,97.294,443.72,97.294z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#95C93D'
                      d='M693.665,6.062h15.369v17.416
                      c0.904-1.413,1.825-2.794,2.759-4.058c3.998-5.535,8.866-6.971,14.176-7.557c7.069-0.794,12.257-0.835,18.8-4.463
                      c-0.012,5.953-1.066,11.545-3.274,16.721c-4.398,10.332-11.504,16-20.857,17.867c-3.692,0.74-7.615,0.835-11.603,0.335v54.971
                      h-15.369V42.162h-9.272v-15.44h9.272V6.062z'
                    />
                    <path
                      fill='#FFFFFF'
                      d='M715.769,32.125c-0.278,0.231-0.684,0.138-0.869-0.227c-0.187-0.359-0.104-0.847,0.196-1.073
                      c0.325-0.266,0.719-0.584,1.078-0.868c1.595-1.286,2.893-2.343,4.95-3.042h0.017h0.029l0.006-0.02
                      c0.725-0.241,1.419-0.458,2.099-0.642c2.3-0.656,4.711-1.38,6.774-3.061h0.006c0.469-0.394,0.955-0.777,1.454-1.146
                      c1.112-0.875,2.242-1.739,3.228-2.778c0.261-0.29,0.667-0.254,0.898,0.072c0.221,0.318,0.186,0.827-0.074,1.095
                      c-1.062,1.112-2.221,2.038-3.38,2.909c-0.469,0.376-0.932,0.758-1.378,1.117l-0.035,0.017c-2.278,1.855-4.799,2.581-7.193,3.28
                      c-0.724,0.21-1.431,0.425-2.057,0.632l-0.058,0.02c-1.854,0.642-3.101,1.641-4.579,2.827
                      C716.545,31.521,716.209,31.787,715.769,32.125z'
                    />

                    <path
                      fill='none'
                      stroke='#FFFFFF'
                      strokeWidth='1.8841'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit='2.613'
                      d='
                      M715.769,32.125c-0.278,0.231-0.684,0.138-0.869-0.227c-0.187-0.359-0.104-0.847,0.196-1.073
                      c0.325-0.266,0.719-0.584,1.078-0.868c1.595-1.286,2.893-2.343,4.95-3.042h0.017h0.029l0.006-0.02
                      c0.725-0.241,1.419-0.458,2.099-0.642c2.3-0.656,4.711-1.38,6.774-3.061h0.006c0.469-0.394,0.955-0.777,1.454-1.146
                      c1.112-0.875,2.242-1.739,3.228-2.778c0.261-0.29,0.667-0.254,0.898,0.072c0.221,0.318,0.186,0.827-0.074,1.095
                      c-1.062,1.112-2.221,2.038-3.38,2.909c-0.469,0.376-0.932,0.758-1.378,1.117l-0.035,0.017c-2.278,1.855-4.799,2.581-7.193,3.28
                      c-0.724,0.21-1.431,0.425-2.057,0.632l-0.058,0.02c-1.854,0.642-3.101,1.641-4.579,2.827
                      C716.545,31.521,716.209,31.787,715.769,32.125z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#95C93D'
                      d='M533.225,61.049h44.531v14.599c0,2.683-2.746,4.875-6.125,4.875
                      h-38.406c-3.373,0-6.137-2.192-6.137-4.875V65.9C527.088,63.239,529.852,61.049,533.225,61.049z M526.623,45.18h50.131
                      c0.023-3.812,0.729-4.137-2.452-4.195l-24.131-0.335V25.482h24.375c12.577,0,19.959,6.982,19.959,19.697v30.735
                      c0,11.27-7.308,20.509-16.284,20.509h-51.598c-8.96,0-16.29-9.239-16.29-20.509V65.678
                      C510.333,54.401,517.663,45.18,526.623,45.18z'
                    />
                  </g>
                  <g>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#95C93D'
                      d='M87.442,0c48.292,0,87.446,43.952,87.446,98.146
                      c0,54.211-39.154,98.163-87.446,98.163C39.154,196.309,0,152.356,0,98.146C0,43.952,39.154,0,87.442,0z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      fill='#FFFFFF'
                      d='M59.572,76.33l0.295-0.381c0.046-0.133,0.081-0.302,0.093-0.512
                      c-4.289-9.363-16.141-16.545-24.161-23.909c4.439,9.596,18.203,15.298,23.454,24.872C59.363,76.4,59.485,76.366,59.572,76.33z
                       M71.458,69.701h56.934c9.691,0,17.635,11.33,17.635,25.159v60.386h-16.904v-50.887c0-8.613-4.944-15.66-10.982-15.66H82.701
                      c-6.039,0-10.977,7.047-10.977,15.66v51.061H53.822V94.86c0-4.156,0.725-8.11,1.988-11.563
                      c-11.127-1.455-20.833-5.047-25.059-21.971c-1.704-6.751-2.186-13.127-1.727-20.416l10.652,4.306
                      c7.082,3.454,14.245,6.429,19.206,14.054c2.365,3.615,3.987,8.106,4.219,13.445C65.593,70.797,68.445,69.701,71.458,69.701z'
                    />
                  </g>
                  <polygon
                    fill='#95C93D'
                    stroke='#95C93D'
                    strokeWidth='1.8841'
                    strokeMiterlimit='2.613'
                    points='202.556,134.488 
                    816.603,134.408 816.603,140.868 202.556,140.967 		'
                  />
                </g>
              </g>
            </svg>
            <span className='sr-only'>Nouranto</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-2 bg-green-200 dark:bg-green-700 p-1 rounded-full relative'>
            <AnimatePresence>
              {activeTab && (
                <motion.div
                  className='absolute inset-0 bg-white dark:bg-green-600 rounded-full'
                  layoutId='activeTab'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </AnimatePresence>
            <NavButton label='Features' onClick={() => scrollTo('features')} isActive={activeTab === 'features'} />
            <NavButton label='About' onClick={() => scrollTo('about')} isActive={activeTab === 'about'} />
            <NavButton label='Contact' onClick={() => scrollTo('contact')} isActive={activeTab === 'contact'} />
          </div>
          <User className='hidden md:block text-green-800 dark:text-green-100' />

          {/* Mobile Navigation */}
          <div className='md:hidden'>
            <AnimatedDropdownMenu />
          </div>
        </nav>
      </div>
    </header>
  )
}
