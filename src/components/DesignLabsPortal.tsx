"use client";

import React from "react";

const DesignLabsPortal: React.FC = () => {
    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
            <iframe
                src="/design-labs/index.html"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Design Labs"
            />
        </div>
    );
};

export default DesignLabsPortal;
