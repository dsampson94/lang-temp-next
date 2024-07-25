'use client';

import Image from 'next/image';
import { Container } from './Container';
import backgroundImage from './images/background-faqs.jpg';

const teachers = [
    {
        name: 'Joel Ntoto',
        title: 'Founder / EFL Teacher',
        bio: 'Joel is the founder of our school and an experienced EFL teacher. He has a passion for helping students achieve their English learning goals.',
        image: '/joel.png',
        video: 'https://www.youtube.com/embed/your-video-id',
    },
    {
        name: 'Callin Ontong',
        title: 'EFL Teacher',
        bio: 'Callin is a dedicated EFL teacher with years of experience in teaching English to students of various levels. His engaging teaching style makes learning fun and effective.',
        image: '/callin.jpg',
        video: 'https://www.youtube.com/embed/your-video-id',
    },
];

export function TeachersProfiles() {
    return (
        <section id="teachers"
                 aria-label="English Teachers"
                 className="relative z-1 overflow-hidden bg-slate-50 pt-32"
        >
            <Image
                className="absolute left-1/2 top-0 max-w-none -translate-y-4/4 translate-x-[-99%]"
                src={ backgroundImage }
                alt=""
                width={ 1558 }
                height={ 946 }
                unoptimized
            />
            <Container className="relative">
                <div className="max-w-2xl text-center mx-4 sm:mx-auto">
                    <h2 className="font-display text-3xl tracking-tight text-gray-900 sm:text-4xl">
                        Meet Our English Teachers
                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-gray-700">
                        Our experienced and dedicated teachers are here to help you achieve your English learning goals.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-6  pb-2">
                    { teachers.map((teacher) => (
                        <div key={ teacher.name }
                             className="bg-white mx-4 sm:mx-auto rounded-lg shadow-lg shadow-xl p-6 flex flex-col items-center">
                            <Image
                                className="w-40 h-54 rounded-lg shadow-lg"
                                src={ teacher.image }
                                alt={ teacher.name }
                                width={ 160 }
                                height={ 160 }
                            />
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">{ teacher.name }</h3>
                            <p className="mt-1 text-md font-medium text-gray-600">{ teacher.title }</p>
                            <p className="mt-2 text-sm text-gray-700 text-center">{ teacher.bio }</p>
                            <div className="mt-4">
                                <iframe
                                    width="280"
                                    height="158"
                                    src={ teacher.video }
                                    title={ `${ teacher.name }'s Introduction Video` }
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg shadow-lg"
                                ></iframe>
                            </div>
                            <p className="mt-2 text-lg font-medium text-gray-900">85 PLN (45 minutes)</p>
                            <button
                                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                onClick={ () => alert(`Booking session with ${ teacher.name }`) }
                            >
                                Book a Session
                            </button>
                        </div>
                    )) }
                </div>
            </Container>
        </section>
    );
}
