import Container from "@/shared/components/layout/Container";
import Button from "@/shared/components/ui/Button";
import NavLink from "./NavLink";

export default function Navbar(){
    return (
        <header className="border-b bg-white">
            <Container className="flex h-16 items-center justify-between">
                <div className="text-lg font-bold text-slate-900">Smartify</div>
                <nav className="flex items-center gap-6">
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </nav>
                <div className="flex items-center gap-3">
                    <NavLink to="/login">Login</NavLink>
                    <Button size="sm">Get Started</Button>
                </div>
            </Container>
        </header>
    )
}