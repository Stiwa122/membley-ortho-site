export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">About AfyaCare Clinic</h1>
          <p className="text-lg text-gray-700 mb-4">
            AfyaCare Clinic is a leading physiotherapy and orthopaedic center located in the heart of Membley. Our mission is to provide the highest quality care to our patients, helping them to recover from injuries, manage chronic conditions, and improve their overall quality of life.
          </p>
          <p className="text-lg text-gray-700">
            Our team of experienced and dedicated professionals uses the latest techniques and technologies to deliver personalized treatment plans tailored to each individual\'s needs. We are committed to creating a welcoming and supportive environment where our patients can feel comfortable and confident in their journey to recovery.
          </p>
        </div>
        <div>
          <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d390707-e16a-40cb-b028-f2eb18d78109/about-clinic-115ru38-1764278224311.webp" alt="AfyaCare Clinic Interior" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}