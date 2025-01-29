"use client";
import { useState } from "react";
import { ChevronDown, Asterisk } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is cryptocurrency?",
      answer:
        "Cryptocurrency is a digital or virtual currency secured by cryptography, making it nearly impossible to counterfeit or double-spend.",
    },
    {
      question: "How do I buy cryptocurrency?",
      answer: "You can buy cryptocurrency on exchanges using fiat currency or other cryptocurrencies.",
    },
    {
      question: "Is cryptocurrency legal?",
      answer: "The legality of cryptocurrency varies by country. Check your local laws for more information.",
    },
    {
      question: "What is a blockchain?",
      answer: "A blockchain is a decentralized ledger of all transactions across a network, secured by cryptographic techniques.",
    },
    {
      question: "Are cryptocurrencies safe to use?",
      answer: "While cryptocurrencies are secure by design, users must practice good security hygiene to avoid hacks and scams.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="md:text-3xl text-xl  font-semibold text-center mb-6 text-[#000000]">Frequently Asked Questions</h1>
      <div className="md:space-y-4 space-y-2 w-full">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300  overflow-hidden w-full"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-4 py-3 text-[#000000] font-semibold bg-gray-100 hover:bg-gray-200"
            >
              {item.question}
              {activeIndex === index ? (
                <Asterisk className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-600" />
              )}
            </button>
            <div className={`w-full transition-all ${activeIndex === index ? 'max-h-screen' : 'max-h-0'} overflow-hidden bg-white`}>              
              <div className="px-4 py-3 text-gray-600">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;