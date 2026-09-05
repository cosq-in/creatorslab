import DigitalLabsNavbar from "@/components/design-labs/DigitalLabsNavbar";
import DigitalLabsFooter from "@/components/design-labs/DigitalLabsFooter";
import "../design-labs.css";

export default function DigitalLabsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="design-labs-theme">
            <DigitalLabsNavbar />
            <main>{children}</main>
            <DigitalLabsFooter />
        </div>
    );
}
