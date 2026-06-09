"use client"

import { useState } from "react"
import Link from "next/link"

type FaqItem = {
    question: string
    answer: string
}

const FAQ_ITEMS: FaqItem[] = [
    {
        question: "Jak mogę się z wami skontaktować?",
        answer: "Możesz skontaktować się z nami poprzez formularz kontaktowy na stronie, bezpośrednio przez e-mail lub telefonicznie w godzinach pracy. Staramy się odpowiadać na wszystkie wiadomości w ciągu 24 godzin.",
    },
    {
        question: "Ile czasu zajmuje realizacja projektu?",
        answer: "Czas realizacji zależy od złożoności projektu. Proste strony realizujemy w 1–2 tygodnie, bardziej rozbudowane w 4–8 tygodni. Dokładny harmonogram ustalamy indywidualnie na etapie wyceny.",
    },
    {
        question: "Czy oferujecie wsparcie po zakończeniu projektu?",
        answer: "Tak, oferujemy pakiety wsparcia technicznego i utrzymania obejmujące aktualizacje, drobne poprawki oraz monitoring. Szczegóły omawiamy podczas pierwszego spotkania.",
    },
    {
        question: "Jakie technologie wykorzystujecie?",
        answer: "Pracujemy głównie w Next.js, TypeScript i Tailwind CSS. Stack dobieramy do potrzeb projektu — zawsze stawiamy na sprawdzone, nowoczesne rozwiązania.",
    },
    {
        question: "Czy mogę zobaczyć wcześniejsze realizacje?",
        answer: "Oczywiście! Portfolio dostępne jest w sekcji Realizacje. Chętnie pokażemy dodatkowe case studies podczas bezpłatnej konsultacji wstępnej.",
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
                    style={{ background: isOpen ? "#6b72d8" : "rgba(107,114,216,0.10)" }}>
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
                            stroke={isOpen ? "#ffffff" : "#6b72d8"}
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
        <section className="w-full py-24 px-4 bg-white flex flex-col items-center">
            <div className="w-full max-w-[720px]">
                {/* Badge */}
                <div className="flex justify-center mb-7">
                    <span
                        className="inline-flex items-center rounded-full px-4 py-1.5 text-sm"
                        style={{
                            background: "rgba(255,255,255,0.55)",
                            border: "1.5px solid rgba(209,213,240,0.80)",
                            color: "#4b4e6a",
                            backdropFilter: "blur(6px)",
                        }}>
                        Często zadawane pytania
                    </span>
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-center mb-4" style={{ color: "#111118" }}>
                    Masz pytania?
                </h2>

                <p
                    className="text-sm text-center leading-relaxed mb-10 max-w-[460px] mx-auto"
                    style={{ color: "#6b6e85" }}>
                    Zebraliśmy odpowiedzi na najczęściej zadawane pytania. Jeśli nie znajdziesz tu odpowiedzi —{" "}
                    <Link href="/kontakt" className="font-semibold" style={{ color: "#111118" }}>
                        napisz do nas
                    </Link>
                    .
                </p>

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
            </div>
        </section>
    )
}
