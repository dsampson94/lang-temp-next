import { Hero } from '../components/landing/Hero';
import { Footer } from '../components/landing/Footer';
import Header from '../components/landing/Header';
import { PrimaryFeatures } from '../components/landing/PrimaryFeatures';
import { TeachersProfiles } from '../components/landing/TeachersProfiles';
import { Faqs } from '../components/landing/Faqs';
import { Testimonials } from '../components/landing/Testimonials';
import { ContactSupportButton } from '../components/landing/ContactSupportButton';
import Image from 'next/image';
import backgroundImage from '../components/landing/images/background-faqs.jpg';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <PrimaryFeatures />
                <TeachersProfiles />
                {/*<SecondaryFeatures />*/}
                {/*<CallToAction />*/}
                {/*<Pricing />*/}
                {/*<Testimonials />*/}
                <Faqs />
            </main>
            <ContactSupportButton />
            <Footer />
        </>
    );
}
