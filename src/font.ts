import { Roboto } from 'next/font/google'

export const roboto = Roboto({
    weight: ['400', '500', '700'],  // Define the desired font weights
    subsets: ['latin'],             // Define the character sets you need (e.g., Latin)
    style: ['normal', 'italic'],
    display: 'swap'          // Whether you want to use variable fonts (optional)
  });