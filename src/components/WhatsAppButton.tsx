import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50">
      <FaWhatsapp size={24} />
    </a>
  );
}