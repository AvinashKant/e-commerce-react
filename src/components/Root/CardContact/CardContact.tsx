
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
        <div className="bg-white p-6 mt-6 mb-6 rounded-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            {subHeading && <p className="text-gray-700 mt-1">{subHeading}</p>}
            <div className="flex justify-between">
                <div className='flex-1'>
                    {sideText && <h6 className="text-gray-600">{sideText}</h6>}
                </div>
                <div className='flex-1 justify-center'>
                    {link && (
                        <div className='flex justify-end'>
                            <NavLink
                                to={link}
                                className="flex text-sm font-semibold text-gray-900 hover:text-blue-600"
                            >
                                Learn more
                            </NavLink>

                            <HugeiconsIcon
                                icon={ArrowRight01FreeIcons}
                                size={20}
                                color="#000000"
                                strokeWidth={1.5}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default CardContact;