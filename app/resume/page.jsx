import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Resume | Justin Badua',
};

export default function ResumePage() {
  redirect('/B_Justin_Resume_2025_26.pdf');
  return null;
}

