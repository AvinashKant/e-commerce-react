import React from "react";

interface PanelProps {
    heading: string;
    subHeading?: string;
    handleCancel: () => void;
    handleSubmit?: () => void;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({
    heading,
    subHeading,
    handleCancel,
    handleSubmit,
    children,
    footer,
}) => {
    return (
        // Overlay
        <div className="absolute right-0 top-0 h-dvh">
            {/* Modal Box */}
            <div className="bg-white rounded-sm shadow-2xl w-[480px]">
                {/* Header */}
                <div className="flex justify-between items-start border-b px-4 py-3">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">{heading}</h2>
                        {subHeading && (
                            <p className="text-sm text-gray-600 mt-1">{subHeading}</p>
                        )}
                    </div>
                    <button
                        onClick={handleCancel}
                        className="text-gray-500 hover:text-gray-800 text-xl font-bold leading-none"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                {/* Body */}
                <div className="px-4 py-4 text-gray-700">{children}</div>

                {/* Footer */}
                <div className="border-t px-4 py-3 flex justify-end gap-2">
                    {footer ? (
                        footer // 👈 custom footer from props
                    ) : (
                        <>
                            <button
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleSubmit}>
                                Confirm
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Panel;
