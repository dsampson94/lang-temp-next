import { FaWhatsapp } from 'react-icons/fa';

export function ContactSupportButton() {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-center gap-2 z-[9999]">
            <a
                href="https://wa.me/48503531792"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Contact Support"
            >
                <FaWhatsapp size={30} />
                <span className="font-medium">Contact Support</span>
            </a>
        </div>
    );
}
