import { Outlet } from "react-router-dom";

import Navbar from "@/shared/components/navigation/Navbar";
import Footer from "@/shared/components/navigation/Footer";

export default function PublicLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50">

            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
                <Navbar />
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
}