import WingShell from "@/components/labs/WingShell";

export default function DesignLabLayout({ children }: { children: React.ReactNode }) {
    return <WingShell wing="design">{children}</WingShell>;
}
