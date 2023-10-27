import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Links from "@/components/Links/page";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });
import style from "./layout.module.css";

export const metadata: Metadata = {
	title: "Retro Board",
	description: "Petite retro board pour les équipes de dev",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className={style.container}>
					<Links />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
