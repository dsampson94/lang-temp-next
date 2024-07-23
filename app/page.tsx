import { Hero } from '../components/landing/Hero';
import { Footer } from '../components/landing/Footer';
import Header from '../components/landing/Header';
import { Pricing } from '../components/landing/Pricing';

export default function Home() {
    return (
        <>
            <Header isLoggedIn={false}/>
            <main>
                <Hero/>
                {/*<PrimaryFeatures />*/ }
                {/*<SecondaryFeatures />*/ }
                {/*<CallToAction />*/ }
                <Pricing />
                {/*<Faqs />*/ }
            </main>
            <Footer/>
        </>
    );
}
