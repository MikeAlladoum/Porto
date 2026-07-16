import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Mike Alladoum | Web3 Blockchain Developer',
  description:
    'Professional Web3 and blockchain developer. Expert in Solidity, Solana, DeFi, and smart contracts. Based in Lomé, Togo.',
  keywords: [
    'blockchain',
    'web3',
    'developer',
    'solidity',
    'solana',
    'defi',
    'smart contracts',
    'ethereum',
    'dapp',
  ],
  author: 'DJEKOURMAN ALLADOUM MIKE',
  openGraph: {
    title: 'Mike Alladoum | Web3 Blockchain Developer',
    description: 'Building secure and impactful decentralized systems for the future of Web3.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mike Alladoum | Web3 Blockchain Developer',
    description: 'Building secure and impactful decentralized systems for the future of Web3.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><text y='32' font-size='32'>💻</text></svg>" />
      </head>
      <body className="bg-neo-darker text-neo-text">
        {children}
      </body>
    </html>
  );
}
