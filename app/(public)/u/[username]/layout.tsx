import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Public Link in bio",
    description: "Public Link in bio"
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    )
}