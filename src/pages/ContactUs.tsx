import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, ArrowRight01FreeIcons } from '@hugeicons/core-free-icons';

const breadcrumbWrapper = ["Home", "Engineering", "Semiconductor Services & Solutions"];
import CardContact from '../components/Root/CardContact/CardContact'
export default function ContactUs() {
    return (
        <>
            <div id="breadcrumbWrapper" className="m-6 flex">
                {
                    breadcrumbWrapper.map(function (item) {
                        return (
                            <>
                                <span>{item}</span>
                                <span className="separator">
                                    <HugeiconsIcon
                                        icon={ArrowRight01Icon}
                                        size={24}
                                        color="#000000"
                                        strokeWidth={1.5}
                                    />
                                </span>
                            </>

                        );
                    })
                }

            </div>
            <div className=''>
                <div className='flex'>
                    <div className='bg-blue-100 p-6'>
                        <h1>
                            Contact us
                        </h1>
                        <p>
                            Learn more about HCLTech and how we're supercharging progress for our clients, our people and our communities.
                        </p>
                        <p>
                            Ready to get started? Let's talk.
                        </p>
                        <CardContact
                            heading="International Headquarters"
                            subHeading="HCL Technologies Ltd. | Technology Hub, SEZ Plot No. 3A, Sector 126 | Noida 201304, India"
                            sideText="Search our global locations"
                            link="/contact"
                        />
                        <CardContact
                            sideText="Investor inquiries"
                            link="/contact"
                        />
                        <CardContact
                            sideText="Partner and alliance inquiries"
                            link="/contact"
                        />
                        <CardContact
                            sideText="Report a security incident"
                            link="/contact"
                        />
                        <CardContact
                            sideText="Job and career seekers"
                            link="/contact"
                        />

                        <CardContact
                            sideText="Press and media inquiries"
                            link="/contact"
                        />
                        <CardContact
                            sideText="Procurement inquiries"
                            link="/contact"
                        />
                        <CardContact
                            sideText="Vendor helpdesk"
                            link="/contact"
                        />
                        <CardContact
                            sideText="Raise a Grievance"
                            link="/contact"
                        />
                    </div>
                    <div className='p-6 bg-white shadow'>
                        <h5>
                            To request more information about our products and services, please complete the form below.
                        </h5>
                        <div>
                            <input type="text" placeholder='Full name' />
                            <input type="text" placeholder='Busniess Email Address' />
                            <input type="text" placeholder='Organization/ Institution' />
                            <input type="text" placeholder='Phone/Mobile' />
                            <div>
                                <label htmlFor="">Country</label>
                                <select name="" id="">
                                    <option value="">India</option>
                                    <option value="">China</option>
                                    <option value="">Erope</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="">Job Title</label>
                                <select name="" id="">
                                    <option value="">CEO</option>
                                    <option value="">COO</option>
                                    <option value="">CTO</option>
                                </select>
                            </div>
                            <textarea name="" id="" rows={10} placeholder='How can we help you?*'></textarea>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}