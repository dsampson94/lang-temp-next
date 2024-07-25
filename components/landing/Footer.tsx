import Link from 'next/link';
import { Container } from './Container';
import Image from 'next/image';
import aplicaLogo from '../../public/convofreaks.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
    return (
        <footer id="contact" className="bg-slate-50 relative px-2 z-1 min-w-full sm:mx-auto">
            <Container>
                <div className="pt-8">
                    <div className="flex items-center justify-center">
                        <Image src={ aplicaLogo } alt="Logo" width={ 160 } height={ 160 } className="rounded-lg"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-12 py-8">
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-gray-900">About Us</h3>
                        <p className="mt-2 mx-4 text-sm text-gray-700">
                            We are an online English school that helps individuals improve conversational and business
                            English for everyday scenarios.
                        </p>
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-gray-900">Contact Us</h3>
                        <p className="mt-2 text-sm text-gray-700">
                            <a href="tel:+48501345039" className="hover:underline">+48 501 345 039</a>
                            <br/>
                            <a href="mailto:info@convofreaks.com" className="hover:underline">info@convofreaks.com</a>
                        </p>
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-gray-900">Information</h3>
                        <p className="mt-2 text-sm text-gray-700">
                            <Link href="/terms" className="hover:underline text-gray-700 hover:text-gray-900 transition">
                                Terms and Conditions
                            </Link>
                            <br/>
                            <Link href="/privacy" className="hover:underline text-gray-700 hover:text-gray-900 transition">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-gray-900">Connect with Us</h3>
                        <div className="mt-4 flex justify-center lg:justify-start gap-6">
                            <Link href="https://facebook.com/convofreaks" target="_blank" aria-label="Facebook"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaFacebook size={ 24 }/>
                            </Link>
                            <Link href="https://x.com/convofreaks" target="_blank" aria-label="X"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaXTwitter size={ 24 }/>
                            </Link>
                            <Link href="https://instagram.com/convofreaks" target="_blank" aria-label="Instagram"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaInstagram size={ 24 }/>
                            </Link>
                            <Link href="https://tiktok.com/@convofreaks" target="_blank" aria-label="Tiktok"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaTiktok size={ 24 }/>
                            </Link>
                            <Link href="https://linkedin.com/company/convofreaks" target="_blank" aria-label="LinkedIn"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaLinkedin size={ 24 }/>
                            </Link>
                            <Link href="https://www.youtube.com/@convofreaks" target="_blank" aria-label="YouTube"
                                  className="text-gray-700 hover:text-gray-900 transition">
                                <FaYoutube size={ 24 }/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="border-t border-slate-400/10 py-10 flex flex-col items-center sm:flex-row-reverse sm:justify-between">
                    <p className="text-sm text-slate-500 sm:mt-0">
                        Copyright &copy; { new Date().getFullYear() } Convo Freaks. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
