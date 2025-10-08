
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01FreeIcons } from '@hugeicons/core-free-icons';
import { NavLink } from "react-router";

interface CardContactProps {
    heading?: string;
    subHeading?: string;
    sideText?: string;
    link?: string;
}

const CardContact: React.FC<CardContactProps> = ({
    heading,
    subHeading,
    sideText,
    link,
}) => {
    return (
        <div className="bg-gray-100 p-6 m-4 rounded-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}

            {subHeading && <p className="text-gray-700 mt-1">{subHeading}</p>}

            <div className="flex items-center justify-between mt-4">
                {sideText && <h6 className="text-sm text-gray-600">{sideText}</h6>}

                {link && (
                    <NavLink
                        to={link}
                        className="flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600"
                    >
                        Learn more
                        <HugeiconsIcon
                            icon={ArrowRight01FreeIcons}
                            size={20}
                            color="#000000"
                            strokeWidth={1.5}
                            className="ml-1"
                        />
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default CardContact;