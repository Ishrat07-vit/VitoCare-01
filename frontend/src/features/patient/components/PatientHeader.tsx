import { Bell, UserCircle } from "lucide-react";

const PatientHeader = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <h1 className="text-xl font-bold text-green-700">VitoCare</h1>
        <p className="text-xs text-gray-500">Patient Portal</p>
      </div>

      <div className="flex items-center gap-5">
        <button
          type="button"
          className="relative rounded-full p-2 text-gray-600 hover:bg-gray-100"
        >
          <Bell size={21} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100"
        >
          <UserCircle size={28} className="text-gray-600" />

          <span className="hidden text-sm font-medium text-gray-700 sm:block">
            Patient
          </span>
        </button>
      </div>
    </header>
  );
};

export default PatientHeader;