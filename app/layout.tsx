// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }











// import Dashboardlayout from "./dashboard/Dashboardlayout";
// import type { Metadata } from "next";
// import localFont from "next/font/local";
// // import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {/* <Dashboardlayout>{children}</Dashboardlayout> */}
//         {children}
//       </body>
//     </html>
//   );
// }

"use client";
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider
import './globals.css'; // Import global styles
import { usePathname } from 'next/navigation';
import DashboardLayout from './dashboard/Dashboardlayout';



interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();
  console.log('Current pathname:', pathname);
if(pathname.startsWith('/admin')){
  return (
  <html lang="en"> {/* Required html tag */}
  
    <body> {/* Required body tag */}
     
       <DashboardLayout>
        {children}
        </DashboardLayout>
    </body>
  </html>)
}
  return (
    <html lang="en"> {/* Required html tag */}
      <body> {/* Required body tag */}
       
         
          {children}
        
      </body>
    </html>
  );
}