import Image from 'next/image';
import { Container } from './Container';
import backgroundImage from './images/background-faqs.jpg';

const faqs = [
  [
    {
      question: 'Is it possible to reschedule a class?',
      answer:
          'Yes! At least 24 hours before your original scheduled lesson, click the customer support button and send us a WhatsApp message.',
    },
    {
      question: 'Can I cancel a class and get a refund?',
      answer:
          'Yes! At least 24 hours before your original scheduled lesson, click the customer support button and send us a WhatsApp message.',
    },
    {
      question: 'How long is the lesson?',
      answer:
          'Our lessons are 45 minutes long and are held on the Google Meet platform.',
    },
    {
      question: 'Can I book a lesson for my child who is younger than 13 years old?',
      answer:
          'You can book a lesson for your child if he or she is at the A2 level. We have conversation topics suitable for this profile too.',
    },
  ],
];

export function Faqs() {
  return (
      <section
          id="faq"
          aria-labelledby="faq-title"
          className="relative z-1 overflow-hidden bg-slate-50 pb-20 sm:py-32"
      >
        <Image
            className="absolute left-1/2 top-0 max-w-none -translate-y-4/4 translate-x-[-1%]"
            src={backgroundImage}
            alt=""
            width={1558}
            height={946}
            unoptimized
        />
        <Container className="relative">
          <div className="max-w-2xl mt-12 md:mt-2 lg:mx-0 mx-4 sm:mx-auto">
            <h2
                id="faq-title"
                className="font-display text-2xl tracking-tight text-slate-900 sm:text-4xl"
            >
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              If you can’t find what you’re looking for, please contact support.
            </p>
          </div>
          <ul
              role="list"
              className="mx-4 sm:mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-1"
          >
            {faqs.map((column, columnIndex) => (
                <li key={columnIndex}>
                  <ul role="list" className="flex flex-col gap-y-4">
                    {column.map((faq, faqIndex) => (
                        <li key={faqIndex}>
                          <h3 className="font-display text-md leading-7 font-semibold text-slate-900">
                            {faq.question}
                          </h3>
                          <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
                        </li>
                    ))}
                  </ul>
                </li>
            ))}
          </ul>
        </Container>
      </section>
  );
}
