import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <div className="text-center">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Nikhil"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <h2 className="mt-4 text-2xl font-bold">Nikhil</h2>
        <p className="text-gray-600">Web Developer & Entrepreneur</p>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">
          A passionate developer from India, specializing in website development and hosting solutions.
        </p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://discord.gg/darkhosting" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          Discord
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          LinkedIn
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          GitHub
        </a>
      </div>
    </div>
  )
}

