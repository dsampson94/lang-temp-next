'use client';

import Image from 'next/image';
import { Tab } from '@headlessui/react';
import backgroundImage from './images/background-features.jpg';
import { Container } from './Container';

const feature = {
    title: 'Overview Video',
    description: 'Watch our overview video to learn everything you need to run your books efficiently.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
};

export function PrimaryFeatures() {
    return (
        <section id="features" aria-label="Features for running your books"
                 className="relative overflow-hidden pb-28 pt-20 sm:py-24">
            <Image
                className="absolute w-full top-1/2 translate-y-[-42%]"
                src={ backgroundImage }
                alt=""
                width={ 2245 }
                height={ 1636 }
                unoptimized
            />
            <Container className="relative">
                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                        Experts in grammatical correction
                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-blue-100">
                        We correct common grammatical errors in class
                    </p>
                </div>
                <Tab.Group as="div" className="grid grid-cols-1 items-center gap-y-2 sm:gap-y-6">
                    <>
                        <Tab.Panels className="">
                            <Tab.Panel unmount={ false }>
                                <div
                                    className="mt-10 w-full overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20">
                                    <iframe
                                        className="w-full h-64 sm:h-96"
                                        src={ feature.videoUrl }
                                        title="Overview Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </>
                </Tab.Group>
            </Container>
        </section>
    );
}
