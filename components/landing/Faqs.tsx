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
          className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
      >
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
                id="faq-title"
                className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
            >
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              If you can’t find what you’re looking for, please contact support.
            </p>
          </div>
          <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-1"
          >
            {faqs.map((column, columnIndex) => (
                <li key={columnIndex}>
                  <ul role="list" className="flex flex-col gap-y-8">
                    {column.map((faq, faqIndex) => (
                        <li key={faqIndex}>
                          <h3 className="font-display text-lg leading-7 text-slate-900">
                            {faq.question}
                          </h3>
                          <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
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
