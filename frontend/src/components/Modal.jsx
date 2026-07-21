import { useEffect, useRef } from "react";

function Modal({ isOpen, onClose, title, description, maxWidth = "max-w-xl", children }) {
    const overlayRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) onClose();
    };

    return (
        <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            <div className={`w-full ${maxWidth} overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg`}>
                <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4">
                    <div>
                        <h2 className="text-sm font-semibold text-slate-900">
                            {title}
                        </h2>

                        {description && (
                            <p className="mt-0.5 text-xs text-slate-500">
                                {description}
                            </p>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        aria-label="Close dialog"
                        type="button"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                    >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M4 4l8 8M12 4l-8 8" />
                        </svg>
                    </button>
                </div>

                <div className="p-5">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
