import { redirect } from 'next/navigation'

export default function Index() {
  // Redirect base path to English by default
  redirect('/en')
}
