export default function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <section className="page-header">
            <div className="container">
                <h1 className="pixel-title">{title}</h1>
                <p className="page-subtitle">{subtitle}</p>
            </div>
        </section>
    );
}
