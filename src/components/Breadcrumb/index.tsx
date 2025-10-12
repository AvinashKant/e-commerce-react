import React from "react";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, ArrowRight01FreeIcons } from '@hugeicons/core-free-icons';

interface LinkProp {
    title: string;
    href: string;
}

interface BreadcrumbProps {
    links: LinkProp[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ links }) => {
    return (
        <div className="flex  text-gray-600">
            <span>
                Home
            </span>

            <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={24}
                color="#000000"
                strokeWidth={1.5}
            />
            {
                links.map((link, index) => (
                    <>
                        <span key={index}>
                            {link.title}

                        </span>
                        {
                            index < links.length - 1 &&
                            <span>
                                <HugeiconsIcon
                                    icon={ArrowRight01Icon}
                                    size={24}
                                    color="#000000"
                                    strokeWidth={1.5}
                                />
                            </span>
                        }
                    </>
                )
                )
            }
        </div>
    )
};

export default Breadcrumb;
