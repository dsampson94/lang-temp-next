'use client';

import { useEffect } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { FaBook, FaRegComments, FaRegFileAlt, FaRegLightbulb, FaRegSmileBeam, FaUserGraduate } from 'react-icons/fa';

declare global {
    interface Window {
        Calendly: any;
    }
}

const HeroTitle: React.FC = () => (
    <>
        <h1 className="mx-2 sm:mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Talk like a{ ' ' }
            <span className="relative whitespace-nowrap text-blue-500">
                <span className="relative">pro</span>
            </span>{ ' ' }
        </h1>
        <p className="mx-4 sm:mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            We are an online language school offering conversational and business English classes for A2 - C2 adults
            and teenagers with qualified native teachers from South Africa.
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
                <div id="calendly-modal-content" className="h-full w-full"></div>
            </div>
        </div>
    );
};

const benefits = [
    {
        title: 'Tailor-made Topics',
        description: 'We create new tailor-made topics for each student\'s profile every lesson.',
        icon: <FaRegFileAlt size={ 40 } className="text-blue-500"/>,
    },
    {
        title: 'Grammatical Corrections',
        description: 'We provide grammatical corrections.',
        icon: <FaBook size={ 40 } className="text-blue-500"/>,
    },
    {
        title: 'Pronunciation Corrections',
        description: 'We provide pronunciation corrections.',
        icon: <FaRegComments size={ 40 } className="text-blue-500"/>,
    },
    {
        title: 'Learn New Words',
        description: 'We teach new words.',
        icon: <FaRegLightbulb size={ 40 } className="text-blue-500"/>,
    },
    {
        title: 'New Expressions',
        description: 'We teach new expressions.',
        icon: <FaRegSmileBeam size={ 40 } className="text-blue-500"/>,
    },
    {
        title: 'Personalized Attention',
        description: 'Receive personalized attention to enhance your learning experience.',
        icon: <FaUserGraduate size={ 40 } className="text-blue-500"/>,
    },
];

export function Hero() {
    return (
        <>
            <Container className="pb-16 pt-20 text-center lg:pt-32">
                <HeroTitle/>
                <div className="mt-10 flex justify-center gap-x-6">
                    <Button href="#teachers"
                            variant="outline"
                            className="border-2 border-blue-500"
                    >
                        <svg
                            aria-hidden="true"
                            className="h-3 w-3 mr-2 flex-none fill-blue-600 group-active:fill-current"
                        >
                            <path
                                d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"
                            />
                        </svg>
                        Book now
                    </Button>
                </div>
            </Container>

            <Container className="pb-16 pt-10">
                <h2 className="font-display text-3xl tracking-tight text-center text-slate-900 sm:text-4xl">
                    Benefits of our lessons
                </h2>
                <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 mx-2">
                    { benefits.map((benefit) => (
                        <li key={ benefit.title }
                            className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
                            { benefit.icon }
                            <h3 className="mt-4 text-md font-bold text-gray-900">{ benefit.title }</h3>
                            <p className="mt-2 text-sm text-gray-700">{ benefit.description }</p>
                        </li>
                    )) }
                </ul>
            </Container>

        </>
    );
}
