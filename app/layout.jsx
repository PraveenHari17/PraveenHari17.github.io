import "./globals.css";
export const metadata = { title: "Praveen Hari — Portfolio", description: "Realtime dashboards, robotics, and IoT projects." };
export default function RootLayout({ children }) {
  return (<html lang="en"><head /><body className="antialiased">{children}</body></html>);
}
