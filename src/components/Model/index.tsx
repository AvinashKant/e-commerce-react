import React from "react";

interface ModelProps {
    heading: string;
    subHeading?: string;
    handleCancel: () => void;
    handleSubmit: () => void;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}

const Model: React.FC<ModelProps> = ({
    heading,
    subHeading,
    handleCancel,
    handleSubmit,
    children,
    footer,
}) => {
    return (
        // Overlay
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            {/* Modal Box */}
            <div className="bg-white rounded-lg shadow-lg w-[380px] max-w-full">
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

export default Model;
