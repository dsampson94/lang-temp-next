import { Hero } from '../components/landing/Hero';
import { Footer } from '../components/landing/Footer';
import Header from '../components/landing/Header';
import { PrimaryFeatures } from '../components/landing/PrimaryFeatures';
import { TeachersProfiles } from '../components/landing/TeachersProfiles';
import { Faqs } from '../components/landing/Faqs';
import { ContactSupportButton } from '../components/landing/ContactSupportButton';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <PrimaryFeatures/>
                <TeachersProfiles/>
                <Faqs/>
            </main>
            <ContactSupportButton/>
            <Footer/>
            <Analytics/>
        </>
    );
}
