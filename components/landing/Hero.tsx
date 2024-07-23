'use client';

import { useEffect, useState } from 'react';
import { Container } from './Container';
import { Button } from './Button';

// Ensure TypeScript knows about the global Calendly object
declare global {
    interface Window {
        Calendly: any;
    }
}

const HeroTitle: React.FC = () => (
    <>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Talk like a{' '}
            <span className="relative whitespace-nowrap text-blue-500">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                    />
                </svg>
                <span className="relative">PRO</span>
            </span>{' '}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Join our PRO sessions and enhance your skills with expert guidance.
        </p>
    </>
);

const CalendlyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (isOpen && window.Calendly) {
            window.Calendly.initInlineWidget({
                url: 'https://calendly.com/convofreaks-info/30min',
                parentElement: document.getElementById('calendly-modal-content'),
                prefill: {},
                utm: {}
            });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg relative w-full max-w-4xl h-[90vh]">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div id="calendly-modal-content" className="h-full w-full"></div>
            </div>
        </div>
    );
};

const StripePricingModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/pricing-table.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg relative w-full max-w-4xl h-[90vh]">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={ onClose }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div
                    className="h-full w-full flex flex-row"
                    dangerouslySetInnerHTML={ {
                        __html: `
                            <stripe-pricing-table
                                pricing-table-id="prctbl_1Pfnm8Rs8KYQAOuBDL2RV1Xi"
                                publishable-key="pk_live_51Pf0kiRs8KYQAOuBjYptsqEl8WokOjRWo5FuXU6SE1gbWiKIBkjNbFvytdaufoD2iDkHXeVo5p4GD7bmtXU6oUyi00CizS0gn5"
                                class="h-full w-full"
                            ></stripe-pricing-table>
                        `,
                    } }
                />
            </div>
        </div>
    );
};

export function Hero() {
    const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
    const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);

    const handleBookFreeLesson = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsCalendlyModalOpen(true);
    };

    const handleSubscribeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsStripeModalOpen(true);
    };

    const handleCloseCalendlyModal = () => {
        setIsCalendlyModalOpen(false);
    };

    const handleCloseStripeModal = () => {
        setIsStripeModalOpen(false);
    };

    return (
        <>
            <Container className="pb-16 pt-20 text-center lg:pt-32">
                <HeroTitle />
                <div className="mt-10 flex justify-center gap-x-6">
                    <Button onClick={handleBookFreeLesson}>
                        <svg
                            aria-hidden="true"
                            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
                        >
                            <path
                                d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"
                            />
                        </svg>
                        Book a free lesson
                    </Button>
                    <Button
                        onClick={handleSubscribeClick}
                        className="bg-blue-600 text-white font-bold hover:text-white"
                        variant="outline"
                    >
                        <span className="ml-3">Subscribe</span>
                    </Button>
                </div>
            </Container>

            <CalendlyModal isOpen={isCalendlyModalOpen} onClose={handleCloseCalendlyModal} />
            <StripePricingModal isOpen={isStripeModalOpen} onClose={handleCloseStripeModal} />
        </>
    );
}
