"use client"

import { useState } from "react"

type FaqItem = {
    question: string
    answer: string
}

const FAQ_ITEMS: FaqItem[] = [
    {
        question: "Jak mogę się z wami skontaktować?",
        answer: "Możesz skontaktować się z nami poprzez formularz kontaktowy na stronie, lub bezpośrednio przez e-mail. Staramy się odpowiadać na wszystkie wiadomości w ciągu 24 godzin.",
    },
    {
        question: "Ile czasu zajmuje weryfikacja tekstu?",
        answer: "Czas weryfikacji zależy od długości tekstu. Krótkie artykuły zajmują nam do kilku sekund, a te bardziej rozbudowane do parunastu sekund.",
    },
    {
        question: "Kiedy mogę spodziewać się odpowiedzi na e-mail?",
        answer: "Standardowo odpowiadamy w ciągu 24 godzin roboczych. W większości przypadków odpowiedź przychodzi znacznie szybciej — zwykle w ciągu kilku godzin.",
    },
    {
        question: "Ile trwa weryfikacja bardzo długich dokumentów?",
        answer: "Dla obszernych raportów lub książek proces może trwać nawet kilka minut - zależnie od objętości i złożoności tekstu.",
    },
    {
        question: "Co zrobić, jeśli wynik weryfikacji jest niejednoznaczny?",
        answer: "Jeśli masz wątpliwości co do raportu, napisz do nas, a my przeanalizujemy przypadek ręcznie i udzielimy szczegółowego wyjaśnienia.",
    },
]

type AccordionItemProps = {
    question: string
    answer: string
    isOpen: boolean
    onToggle: () => void
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div
            className="rounded-2xl overflow-hidden transition-all duration-200"
            style={{
                background: isOpen ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.50)",
                border: `1.5px solid ${isOpen ? "rgba(107,114,216,0.35)" : "rgba(209,213,240,0.70)"}`,
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: isOpen ? "0 4px 24px 0 rgba(107,114,216,0.10)" : "0 2px 8px 0 rgba(100,110,200,0.05)",
            }}>
            <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={onToggle}
                aria-expanded={isOpen}>
                <span className="text-sm font-semibold leading-snug" style={{ color: "#111118" }}>
                    {question}
                </span>

                <span
                    className="flex-shrink-0 h-7 w-7 rounded-lg flex items-center justify-center transition-colors duration-200"
                    style={{ background: isOpen ? "#2b7fff" : "rgba(86, 161, 252,0.10)" }}>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        style={{
                            transition: "transform 0.25s",
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}>
                        <path
                            d="M7 1v12M1 7h12"
                            stroke={isOpen ? "#ffffff" : "#0073ff"}
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
            </button>

            <div
                style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease, opacity 0.25s ease",
                }}>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#6b6e85" }}>
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

    return (
        <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                    key={i}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === i}
                    onToggle={() => toggle(i)}
                />
            ))}
        </div>
    )
}
