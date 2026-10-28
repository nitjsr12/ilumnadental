export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

/** FAQs from ilumnadental.in */
export const faqs: FaqItem[] = [
  {
    id: "treatments",
    question: "What dental treatments do you offer?",
    answer:
      "We offer comprehensive dental care including preventive dentistry, implants, root canal treatment, restorative dentistry, orthodontics, gum care, cosmetic dentistry, and oral surgery.",
  },
  {
    id: "visits",
    question: "How often should I visit the dentist?",
    answer:
      "Regular dental visits are generally recommended every six months, though your dentist may suggest a different schedule based on your individual oral health needs.",
  },
  {
    id: "comfort",
    question: "Are dental treatments comfortable and safe?",
    answer:
      "Yes. We use modern techniques, advanced technology, and careful treatment planning to provide safe, precise, and comfortable dental care for every patient.",
  },
  {
    id: "book",
    question: "How can I book an appointment?",
    answer:
      "Call +91 74114 11069, message us on WhatsApp, or use the appointment form on this website. Our team will help you schedule a visit at iLUMNA Dental, Jayanagar.",
  },
  {
    id: "location",
    question: "Where is the clinic located?",
    answer:
      "iLUMNA Dental is at 40, 32nd Cross Rd, 7th Block, Jayanagar, Bengaluru, Karnataka 560070. Clinic hours: daily, 9:30 AM – 10:00 PM.",
  },
];
