import type { JSX } from "react"
import CommonNavigationBarComponent from "@/humavery/components/general/layout/common/navigation/CommonNavigationBarComponent"

function LocaleNotFoundPage(): JSX.Element {
    return (
        <>
            <CommonNavigationBarComponent />
            <main className="w-full">
                <section className="w-full flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold">404</h1>
                    <p className="text-2xl">Strona nie znaleziona</p>
                </section>
            </main>
        </>
    )
}

export default LocaleNotFoundPage
