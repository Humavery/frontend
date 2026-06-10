"use client"
import { JSX, useState } from "react"
import { cn } from "@/humavery/libs/utilities/cn"
import styles from "@/humavery/styles/components/general/ui/ContactFormStyles.module.css"

type FormData = {
    imie: string
    nazwisko: string
    email: string
    wiadomosc: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {}

    if (!data.imie.trim()) errors.imie = "Imię jest wymagane."
    if (!data.nazwisko.trim()) errors.nazwisko = "Nazwisko jest wymagane."
    if (!data.email.trim()) {
        errors.email = "Email jest wymagany."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Podaj poprawny adres e-mail."
    }
    if (!data.wiadomosc.trim()) {
        errors.wiadomosc = "Wiadomość jest wymagana."
    } else if (data.wiadomosc.trim().length < 10) {
        errors.wiadomosc = "Wiadomość musi mieć co najmniej 10 znaków."
    }

    return errors
}

/**
 * @summary The field error component.
 * @description This component is used to display an error message for a field.
 * @param props - The properties of the field error component.
 * @param props.msg - The error message to display.
 * @returns The JSX element of the field error component.
 */
const FieldError = ({ msg }: Readonly<{ msg?: string }>): JSX.Element | null => {
    if (!msg) return null
    return msg ? (
        <p className="text-xs mt-1" style={{ color: "#ef4444" }}>
            {msg}
        </p>
    ) : null
}

/**
 * @summary The contact form component.
 * @description This component is used to display a contact form.
 * @returns The JSX element of the contact form component.
 */
const ContactForm = (): JSX.Element => {
    const [formData, setFormData] = useState<FormData>({
        imie: "",
        nazwisko: "",
        email: "",
        wiadomosc: "",
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [serverError, setServerError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    const handleSubmit = async () => {
        const newErrors = validate(formData)
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setStatus("loading")
        setServerError("")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (res.status === 429) {
                const data = await res.json()
                setServerError(data.error)
                setStatus("error")
                return
            }

            if (!res.ok) throw new Error()

            setStatus("success")
            setFormData({ imie: "", nazwisko: "", email: "", wiadomosc: "" })
        } catch {
            setServerError("Coś poszło nie tak. Spróbuj ponownie.")
            setStatus("error")
        }
    }

    if (status === "success") {
        return (
            <div
                className="w-full rounded-2xl p-10 flex flex-col items-center justify-center gap-4 text-center"
                style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1.5px solid rgba(209,213,240,0.7)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 4px 32px 0 rgba(100,110,200,0.08)",
                    minHeight: "320px",
                }}>
                <span
                    className="h-12 w-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(74,222,128,0.15)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M5 13l4 4L19 7"
                            stroke="#4ade80"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <p className="text-base font-semibold" style={{ color: "#111118" }}>
                    Wiadomość wysłana!
                </p>
                <p className="text-sm" style={{ color: "#6b6e85" }}>
                    Odezwiemy się tak szybko, jak to możliwe.
                </p>
                <button
                    className="mt-2 text-sm font-medium underline underline-offset-2"
                    style={{ color: "#6b72d8" }}
                    onClick={() => setStatus("idle")}>
                    Wyślij kolejną wiadomość
                </button>
            </div>
        )
    }

    return (
        <div
            className="w-full rounded-2xl p-8"
            style={{
                background: "rgba(255,255,255,0.55)",
                border: "1.5px solid rgba(209,213,240,0.7)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 4px 32px 0 rgba(100,110,200,0.08)",
            }}>
            {/* Imię + Nazwisko */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-sm font-medium" style={{ color: "#1a1a2e" }}>
                        Imię
                    </label>
                    <input
                        type="text"
                        name="imie"
                        placeholder="Twoje imię"
                        value={formData.imie}
                        onChange={handleChange}
                        className={cn(
                            "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition",
                            errors.imie ? styles.fieldErrorStyle : styles.fieldStyle,
                        )}
                    />
                    <FieldError msg={errors.imie} />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-sm font-medium" style={{ color: "#1a1a2e" }}>
                        Nazwisko
                    </label>
                    <input
                        type="text"
                        name="nazwisko"
                        placeholder="Twoje nazwisko"
                        value={formData.nazwisko}
                        onChange={handleChange}
                        className={cn(
                            "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition",
                            errors.nazwisko ? styles.fieldErrorStyle : styles.fieldStyle,
                        )}
                    />
                    <FieldError msg={errors.nazwisko} />
                </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 text-left mb-5">
                <label className="text-sm font-medium" style={{ color: "#1a1a2e" }}>
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Twój email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                        "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition",
                        errors.email ? styles.fieldErrorStyle : styles.fieldStyle,
                    )}
                />
                <FieldError msg={errors.email} />
            </div>

            {/* Wiadomość */}
            <div className="flex flex-col gap-1.5 text-left mb-6">
                <label className="text-sm font-medium" style={{ color: "#1a1a2e" }}>
                    Wiadomość
                </label>
                <textarea
                    name="wiadomosc"
                    placeholder="Napisz swoją wiadomość"
                    value={formData.wiadomosc}
                    onChange={handleChange}
                    rows={7}
                    className={cn(
                        "w-full rounded-xl px-4 py-3 text-sm outline-none transition resize-none",
                        errors.wiadomosc ? styles.fieldErrorStyle : styles.fieldStyle,
                    )}
                />
                <FieldError msg={errors.wiadomosc} />
            </div>

            {/* Server error */}
            {status === "error" && serverError && (
                <p
                    className="text-sm mb-4 px-4 py-3 rounded-xl"
                    style={{
                        background: "#fef2f2",
                        border: "1.5px solid #fca5a5",
                        color: "#ef4444",
                    }}>
                    {serverError}
                </p>
            )}

            {/* Submit */}
            <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full rounded-xl text-white text-sm font-medium py-3 transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed bg-blue-500">
                {status === "loading" ? "Wysyłanie…" : "Wyślij wiadomość"}
            </button>
        </div>
    )
}

export default ContactForm
