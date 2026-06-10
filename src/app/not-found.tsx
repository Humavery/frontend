import { redirect } from "next/navigation"
import { routing } from "../libs/translations/Routing"

function NotFoundPage(): never {
    redirect(`/${routing.defaultLocale}` as never)
}

export default NotFoundPage
