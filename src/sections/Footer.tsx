import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-red-200 text-white py-4 flex justify-center" >
      <div className="flex space-x-6">
        <a
          href="https://www.instagram.com/victtoria_correia/?igsh=MWhxZWN6Z2U3MHVvNg%3D%3D&utm_source=qr#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/victtoria-correia-3268v/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://github.com/Victtoriacorreia01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400"
        >
          <FaGithub size={40} />
        </a>
      </div>
    </footer>
  );
};