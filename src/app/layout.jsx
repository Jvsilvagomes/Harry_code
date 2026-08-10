import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/reactToastify.css';
import Navbar from '../components/navbar';
import './globals.css';

export const metadata = {
    title: 'WizzardDex',
    descripition: 'Enciclopédia dos Bruxos'
};

export default function RootLayout({ children }){
    return (
        <html lang="pt-BR">
            <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans">
                    <Navbar />
                    <main className="flex-1 container mx-auto p-6">{children}</main>
                    <ToastContainer position="bottom-right" theme="dark"/>
            </body>
        </html>
    );
}