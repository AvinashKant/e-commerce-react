import Breadcrumb from '../ui-library/Breadcrumb';
import ContactUsForm from '../features/contactus/ContactUsForm';
const Links = [
  {
    title: 'Engineering',
    href: '/',
  },
  {
    title: 'Semiconductor Services & Solutions',
    href: '/',
  },
];
import CardContact from '../components/Root/CardContact/CardContact';

export default function ContactUs() {
  return (
    <>
      <Breadcrumb links={Links} />
      <div className="flex h-screen justify-between">
        <div className="flex-1 bg-blue-100 sm:p-8 md:p-16 lg:pl-32 lg:pr-32 overflow-y-auto">
          <h1 className="text-3xl mt-6 mb-6">Contact us</h1>
          <p className="text-2xl mb-6 ">
            Learn more about HCLTech and how we're supercharging progress for our clients, our
            people and our communities.
          </p>
          <p className="text-2xl  mb-6 ">Ready to get started? Let's talk.</p>
          <CardContact
            heading="International Headquarters"
            subHeading="HCL Technologies Ltd. | Technology Hub, SEZ Plot No. 3A, Sector 126 | Noida 201304, India"
            sideText="Search our global locations"
            link="/contact"
          />
          <CardContact sideText="Investor inquiries" link="/contact" />
          <CardContact sideText="Partner and alliance inquiries" link="/contact" />
          <CardContact sideText="Report a security incident" link="/contact" />
          <CardContact sideText="Job and career seekers" link="/contact" />

          <CardContact sideText="Press and media inquiries" link="/contact" />
          <CardContact sideText="Procurement inquiries" link="/contact" />
          <CardContact sideText="Vendor helpdesk" link="/contact" />
          <CardContact sideText="Raise a Grievance" link="/contact" />
        </div>
        <div className="flex-1 p-6 bg-white shadow">
          <h1 className="text-3xl mt-6 mb-6">
            To request more information about our products and services, please complete the form
            below.
          </h1>
          <ContactUsForm />
        </div>
      </div>
    </>
  );
}
