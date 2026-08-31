import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/navbar';
import './globals.css';

export const metadata = {
  title: 'WizardDex',
  description: 'Enciclopédia dos bruxos de Hogwarts',
  icons: {
    icon: '/images/logo-wizardDex.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <ToastContainer position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}