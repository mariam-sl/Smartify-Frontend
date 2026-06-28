import Navbar from "@/shared/components/navigation/Navbar";

import Sidebar from "@/shared/components/navigation/Sidebar";

export default function App(){
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Dashboard Content</h1>
        </main>
      </div> 
    </div>
  );
}