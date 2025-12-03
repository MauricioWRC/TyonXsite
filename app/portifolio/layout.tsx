import "../globals.css";
import { MeuHeaderPortfolio } from "../components/header_portifolio";


export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MeuHeaderPortfolio />
      {children}
    </>
  );
}
