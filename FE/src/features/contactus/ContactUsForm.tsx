import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';

export default function ContactUsForm() {
  const counties = [
    {
      text: 'Engineering',
      value: '/',
    },
    {
      text: 'Semiconductor Services & Solutions',
      value: '/',
    },
  ];
  const jobs = [
    {
      text: 'CEO',
      value: '/',
    },
    {
      text: 'CTO',
      value: '/',
    },
  ];

  return (
    <div>
      <Input type="text" placeholderText="Full name" classes="mb-2" />
      <Input type="text" placeholderText="Busniess Email Address" classes="mb-2" />
      <Input type="text" placeholderText="Organization/ Institution" classes="mb-2" />
      <Input type="text" placeholderText="Phone/Mobile" classes="mb-2" />

      <Select placeholderText="Country" values={counties} />
      <Select placeholderText="Job Title" values={jobs} />
      <textarea name="" id="" rows={10} placeholder="How can we help you?*"></textarea>
    </div>
  );
}
