import { FaFacebookF, FaInstagram, FaSnapchatGhost } from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div className="fixed right-3 top-1/3 z-50 flex flex-col gap-3 text-[#c46f6b]">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#21130d] transition-colors text-xl">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#21130d] transition-colors text-xl">
        <FaInstagram />
      </a>
      <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#21130d] transition-colors text-xl">
        <FaSnapchatGhost />
      </a>
    </div>
  )
}

export default SocialIcons
