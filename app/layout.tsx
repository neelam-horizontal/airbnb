import { Nunito } from "next/font/google";
import type { Metadata } from "next";

import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

// import SearchModal from '@/app/components/modals/SearchModal';
// import RentModal from '@/app/components/modals/RentModal';

import "./globals.css";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          {/* <SearchModal /> */}
          {/* <RentModal /> */}
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
