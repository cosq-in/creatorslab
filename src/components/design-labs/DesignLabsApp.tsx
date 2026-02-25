"use client";

import { useState } from "react";
import { CompanyLanding } from "./CompanyLanding";
import { Portfolio } from "./Portfolio";
import { ProjectSubmission } from "./ProjectSubmission";
import { CareersPage } from "./CareersPage";

type Page = "home" | "portfolio" | "submit-project" | "careers";

export default function DesignLabsApp() {
    const [currentPage, setCurrentPage] = useState<Page>("home");

    const handleNavigate = (page: string) => {
        setCurrentPage(page as Page);
    };

    const handleBackToHome = () => {
        setCurrentPage("home");
    };

    return (
        <div className="design-labs-theme min-h-screen bg-white">
            {currentPage === "home" && <CompanyLanding onNavigate={handleNavigate} />}
            {currentPage === "portfolio" && <Portfolio onBack={handleBackToHome} />}
            {currentPage === "submit-project" && <ProjectSubmission onBack={handleBackToHome} />}
            {currentPage === "careers" && <CareersPage onBack={handleBackToHome} />}
        </div>
    );
}
