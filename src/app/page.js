import Image from "next/image";
import TradingViewWidget from "./components/tradingViewWidget";

export default function Home() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TradingViewWidget />
    </div>
  );
}
