import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Resume | Justin Badua',
};

export default function ResumePage() {
  redirect('/Justin Badua Resume 2025-26.pdf');
  return null;
}

