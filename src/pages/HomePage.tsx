import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    title: 'Physiotherapy',
    description: 'Comprehensive assessment and treatment for a wide range of musculoskeletal conditions.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d390707-e16a-40cb-b028-f2eb18d78109/service-physio-uyu72ys-1764278238891.webp',
  },
  {
    title: 'Orthopaedic Care',
    description: 'Specialized care for orthopedic injuries and post-surgery rehabilitation.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d390707-e16a-40cb-b028-f2eb18d78109/service-ortho-zzya3bg-1764278231597.webp',
  },
  {
    title: 'Sports Massage',
    description: 'Targeted massage therapy to aid muscle recovery and prevent injuries for athletes.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d390707-e16a-40cb-b028-f2eb18d78109/service-massage-5gosi8e-1764278245190.webp',
  },
];

const testimonials = [
    { name: 'John Doe', feedback: 'Amazing staff and great service. I felt better after just one session!' },
    { name: 'Jane Smith', feedback: 'The best physiotherapy clinic in town. Highly recommended!' },
    { name: 'Peter Jones', feedback: 'Professional, knowledgeable, and friendly. They really care about their patients.' },
];

const faqs = [
    { q: 'What should I expect on my first visit?', a: 'Your first visit will include a comprehensive assessment of your condition, followed by a personalized treatment plan.' },
    { q: 'Do I need a doctor\'s referral?', a: 'No, you do not need a doctor\'s referral to book an appointment with us.' },
    { q: 'What are your payment options?', a: 'We accept cash, M-Pesa, and major credit cards.' },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d390707-e16a-40cb-b028-f2eb18d78109/hero-physio-vlg040b-1764278216978.webp)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl font-bold">Your Path to Recovery and Wellness</h1>
          <p className="text-lg md:text-xl mt-4">Expert physiotherapy and orthopaedic care in Membley.</p>
          <Button asChild className="mt-8">
            <Link to="/booking">Book a Session</Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                    <img src={service.image} alt={service.title} className="rounded-t-lg h-48 w-full object-cover" />
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d390707-e16a-40cb-b028-f2eb18d78109/testimonial-bg-ydj2n6z-1764278251803.webp)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white/20 backdrop-blur-sm text-white">
                <CardContent className="pt-6">
                  <p className="italic">'{testimonial.feedback}'</p>
                  <p className="text-right font-bold mt-4">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}