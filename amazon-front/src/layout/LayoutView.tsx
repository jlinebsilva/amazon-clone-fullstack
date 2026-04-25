import { Footer } from "./Footer";
import { Header } from "./Header";

export function LayoutView({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}