import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // Assuming you have a textarea component

export default function ContactPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-2"><strong>Location:</strong> 123 Membley, Ruiru, Nairobi, Kenya</p>
            <p className="text-lg text-gray-600 mb-2"><strong>Phone:</strong> +254 700 000 000</p>
            <p className="text-lg text-gray-600 mb-4"><strong>Email:</strong> contact@afyacare.com</p>
            <div className="h-64 bg-gray-300 rounded-lg">
              {/* Placeholder for Google Maps */} 
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.923417652492!2d36.958392!3d-1.215424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f3c3b7f2b3f%3A0x4c2642643a4a35f6!2sMembley%20Estate!5e0!3m2!1sen!2ske!4v1683020612788!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border:0 }} 
                allowFullScreen={""} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" rows={5} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// You might need to create this Textarea component if it doesn't exist
const Textarea = (props) => (
    <textarea {...props} className={'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'}/>
)