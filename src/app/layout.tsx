import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Tempo · práce a peníze', description: 'Osobní evidence práce, směn a cest.' };
export default function Layout({children}: Readonly<{children:React.ReactNode}>) { return <html lang="cs"><body>{children}</body></html>; }
