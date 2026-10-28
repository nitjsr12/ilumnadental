export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  treatment?: string;
  rating?: number;
  isPlaceholder: boolean;
};

/** Patient stories from ilumnadental.in (excerpted where shown truncated on source) */
export const testimonials: Testimonial[] = [
  {
    id: "abhishek-gowda",
    quote:
      "I just got my root canal and crown done from this clinic and it's completely painless and treatment was very smooth. Clinic does offer all the high end facilities.",
    author: "Abhishek Gowda",
    treatment: "Root canal",
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: "veerendra-palegar",
    quote:
      "I had severe tooth pain. When consulted with Dr Inchara, she examined and suggested root canal treatment. Treatment was painless, crisp and comfortable.",
    author: "Veerendra Palegar",
    treatment: "Root canal",
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: "nayana-k",
    quote:
      "I had my tooth fractured and did not want to undergo root canal treatment. What felt like a nightmare turned into a warm experience. Great experience at iLUMNA.",
    author: "Nayana K",
    treatment: "Root canal",
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: "chiranth-gowda",
    quote:
      "I had wisdom tooth removal treatment from iLUMNA healthcare. Hospital is clean and tidy. Staffs were well behaved and provided warm care. Dr Inchara and team were excellent.",
    author: "Chiranth Gowda",
    treatment: "Wisdom tooth",
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: "sandeep-rathod",
    quote:
      "I had severe pain in my jaw due to wisdom tooth. Doctors told me that it needs to be removed. I was very scared to undergo treatment — the team made the process reassuring.",
    author: "Sandeep Rathod",
    treatment: "Wisdom tooth",
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: "athmakuru-rohith",
    quote:
      "Dr Inchara is the best dentist. She treated my gum condition with so much grace. Treatment was spot on. Clinic is so clean and staff were welcoming.",
    author: "Athmakuru Rohith",
    treatment: "Gum infection",
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: "tharini-valavan",
    quote:
      "Everything was explained clearly and made sure that I was comfortable during the treatment. The staff were friendly and the overall experience was smooth.",
    author: "Tharini Valavan",
    treatment: "Painless care",
    rating: 5,
    isPlaceholder: false,
  },
];
