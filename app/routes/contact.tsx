import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Label } from '~/components/ui/label'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Contact Us - Nouranto' },
    { name: 'description', content: 'Get in touch with Nouranto for any inquiries about our plant-based products.' },
  ]
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formState)
    // Reset form after submission
    setFormState({ name: '', email: '', message: '' })
    // You might want to show a success message to the user here
  }

  return (
    <div className='container mx-auto px-4 py-16'>
      <motion.h1
        className='text-4xl font-bold text-center text-green-800 dark:text-green-100 mb-12'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <div className='grid md:grid-cols-2 gap-12'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We&apos;d love to hear from you!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' name='name' value={formState.name} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type='submit' className='w-full bg-green-600 hover:bg-green-700 text-white'>
                  Send Message <Send className='ml-2 h-4 w-4' />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Here&apos;s how you can reach us</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center'>
                <Phone className='h-5 w-5 text-green-600 mr-3' />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center'>
                <Mail className='h-5 w-5 text-green-600 mr-3' />
                <span>contact@nouranto.com</span>
              </div>
              <div className='flex items-center'>
                <MapPin className='h-5 w-5 text-green-600 mr-3' />
                <span>123 Green Street, Eco City, EC 12345</span>
              </div>
            </CardContent>
          </Card>

          <Card className='mt-8'>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
