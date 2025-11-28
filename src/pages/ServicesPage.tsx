import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
    { 
        title: 'Physiotherapy Assessment', 
        description: 'A comprehensive evaluation of your condition to create a personalized treatment plan.',
        image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d390707-e16a-40cb-b028-f2eb18d78109/service-physio-uyu72ys-1764278238891.webp' 
    },
    { 
        title: 'Orthopaedic Rehabilitation', 
        description: 'Post-operative and conservative management of orthopaedic conditions.',
        image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d390707-e16a-40cb-b028-f2eb18d78109/service-ortho-zzya3bg-1764278231597.webp' 
    },
    { 
        title: 'Sports Injury Management', 
        description: 'Treatment and rehabilitation of sports-related injuries to get you back in the game.',
        image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d390707-e16a-40cb-b028-f2eb18d78109/service-massage-5gosi8e-1764278245190.webp' 
    },
    { title: 'Back and Neck Pain Treatment', description: 'Specialized programs to alleviate and manage back and neck pain.' },
    { title: 'Joint Mobilization', description: 'Hands-on techniques to improve joint movement and reduce pain.' },
    { title: 'Exercise Therapy', description: 'Prescription of specific exercises to improve strength, flexibility, and function.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                {service.image && <img src={service.image} alt={service.title} className="rounded-t-lg h-48 w-full object-cover" />}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}