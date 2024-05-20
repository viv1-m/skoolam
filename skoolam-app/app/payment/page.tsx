"use client";
import TopBanner from "../src/TopBanner";
import Footer from "../src/utils/Footer";
import PaymentPage from "../src/paymentsPage";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <PaymentPage />
      <Footer />
    </main>
  );
}
