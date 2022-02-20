import {FaHashtag} from 'react-icons/fa'

function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer className="footer p-10 bg-gray-700 text-neutral-content footer-center">
            <div>
                <FaHashtag className='text-5xl'/>
            </div>
            <p>Copyright &copy; {footerYear}. All rights reserved.</p>
        </footer>
    )
}

export default Footer
