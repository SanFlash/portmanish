import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"Manish Kumar Mishra | Admin • Liaison Officer • Project Coordinator",description:"Professional portfolio of Manish Kumar Mishra, an administration, liaison and project coordination professional with experience in renewable energy project operations.",openGraph:{title:"Manish Kumar Mishra",description:"Admin • Liaison Officer • Project Coordinator",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}