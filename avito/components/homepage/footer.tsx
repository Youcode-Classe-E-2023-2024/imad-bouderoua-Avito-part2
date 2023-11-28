export default function Footer(){
    return (
        
    <div className="mt-auto mt-20 bg-gray-800 text-white p-8 text-center">
          <p className="mb-4">Connect with us on social media:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-white transition duration-300">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-white transition duration-300">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-white transition duration-300">Instagram</a>
          </div>
          <p className="mt-4">&copy; 2023 Your Company. All rights reserved.</p>
    </div>
    )
}