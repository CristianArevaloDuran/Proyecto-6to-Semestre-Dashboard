import Nav from "../components/Nav"

export default function DashboardLayout({children}) {
    return (
        <main id="dashboard">
            <Nav />
            <section id="dashboard-content">
                {children}
            </section>
        </main>
    )
}