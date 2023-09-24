import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";

export default function App() {
  return (
    <>
      <div className="inline-flex w-full bg-zinc-50">
        <SideNav />
        <div className="w-full pl-56">
          <Navbar />
          <div className="px-8 py-4">
            <Overview />
            <Transactions />
          </div>
        </div>
      </div>
    </>
  );
}
