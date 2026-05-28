"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type SubmitStatus = "idle" | "sending" | "success" | "error";
type Theme = "dark" | "light";

const years = ["Select Year", ...Array.from({ length: 64 }, (_, index) => String(2024 - index))];
const makes = [
  "Select Make", "AMC", "Acura", "Alfa", "Aston Martin", "Audi", "Bentley", "BMW", "Buick", "Cadillac", "Chevy", "Chrysler", "Citroen",
  "Daewoo", "Daihatsu", "Dodge", "Eagle", "Ferrari", "Fiat", "Ford", "Freightliner", "GMC", "Genesis", "Geo", "Honda", "Hummer", "Hyundai",
  "IH", "Infiniti", "Isuzu", "Jaguar", "Jeep", "kaiser", "Kenworth", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati",
  "Maybach", "Mazda", "McLaren", "Mercedes", "Mercury", "Mini", "Mitsubishi", "Nissan", "Oldsmobile", "peugeot", "Plymouth", "Polestar", "Pontiac",
  "Porsche", "RAM", "Renault", "Rolls-Royce", "Rover", "Saab", "Saturn", "Scion", "Seat", "Subaru", "Suzuki", "Tesla", "Toyota", "Triumph",
  "Volkswagen", "Volvo", "Yugo",
];

function normalizeMakeKey(make: string): string {
  return make.split(/[\s\-]+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

const modelsByMake: Record<string, string[]> = {
  AstonMartin: ["DB11", "DB12", "DBS", "DBX", "Vantage"],
  LandRover: ["Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Sport"],
  RollsRoyce: ["Cullinan", "Ghost", "Phantom", "Wraith"],
};

const parts = ["Choose Part", "Engine Assembly", "Transmission", "ABS Control Module", "Head Light Assembly", "Radiator", "Starter Motor"];
const engineSizes = ["Select Engine Size", "1.8L", "2.0L", "2.4L", "3.0L", "3.5L", "4.0L", "5.0L"];
const transmissions = ["Select Transmission", "2WD / Automatic Transmission", "4x4 / Automatic Transmission", "2WD / Manual Transmission", "4x4 / Manual Transmission"];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SelectField({ label, name, options, value, onChange, theme }: { label: string; name: string; options: string[]; value?: string; onChange?: (value: string) => void; theme: Theme; }) {
  const isDark = theme === "dark";
  return (
    <label className="block">
      <span className={cx("mb-1.5 block text-xs font-semibold uppercase tracking-wider", isDark ? "text-slate-300" : "text-slate-600")}>{label}</span>
      <div className="relative">
        <select
          className={cx(
            "h-11 w-full appearance-none rounded-xl border px-3.5 pr-9 text-sm outline-none transition-all duration-200",
            isDark
              ? "border-white/10 bg-slate-800/70 text-white focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20"
              : "border-slate-300 bg-white text-slate-900 focus:border-red-500 focus:ring-2 focus:ring-red-100",
          )}
          name={name}
          onChange={(event) => onChange?.(event.target.value)}
          required
          value={value}
        >
          {options.map((option, index) => (<option key={`${option}-${index}`}>{option}</option>))}
        </select>
      </div>
    </label>
  );
}

function TextField({ label, name, placeholder, type = "text", theme }: { label: string; name: string; placeholder: string; type?: string; theme: Theme; }) {
  const isDark = theme === "dark";
  return (
    <label className="block">
      <span className={cx("mb-1.5 block text-xs font-semibold uppercase tracking-wider", isDark ? "text-slate-300" : "text-slate-600")}>{label}</span>
      <input
        className={cx(
          "h-11 w-full rounded-xl border px-3.5 text-sm outline-none transition-all duration-200",
          isDark
            ? "border-white/10 bg-slate-800/70 text-white placeholder:text-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20"
            : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-100",
        )}
        name={name}
        placeholder={placeholder}
        required
        type={type}
      />
    </label>
  );
}

function VehicleFormInner({ theme }: { theme: Theme }) {
  const searchParams = useSearchParams();
  const paramMake = searchParams.get("make") ?? "";
  const paramPart = searchParams.get("part") ?? "";

  const initialMake = makes.find((m) => m.toLowerCase() === paramMake.toLowerCase()) ?? "Select Make";
  const [selectedMake, setSelectedMake] = useState(initialMake);
  const [selectedModel, setSelectedModel] = useState("Select Model");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    if (initialMake !== "Select Make") {
      setSelectedMake(initialMake);
      setSelectedModel("Select Model");
    }
  }, [initialMake]);

  const normalizedKey = normalizeMakeKey(selectedMake);
  const models = modelsByMake[normalizedKey] ?? modelsByMake[selectedMake] ?? [];
  const modelOptions = selectedMake === "Select Make" ? ["Select make first"] : ["Select Model", ...models];
  const isSending = submitStatus === "sending";
  const isDark = theme === "dark";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitStatus("sending");
    setSubmitMessage("");
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/inquiry", {
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        setSubmitStatus("error");
        setSubmitMessage(result.message ?? "Unable to send request. Please try again.");
        return;
      }
      setSubmitStatus("success");
      setSubmitMessage(result.message ?? "Your request has been sent successfully.");
      form.reset();
      setSelectedMake("Select Make");
      setSelectedModel("Select make first");
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Unable to send request. Please try again.");
    }
  }

  return (
    <form className={cx("w-full max-w-xl rounded-2xl border p-5 shadow-2xl sm:p-6", isDark ? "border-white/10 bg-slate-900/90 text-white" : "border-slate-200 bg-white text-slate-900")} onSubmit={handleSubmit} id="vehicle-selector-form">
      <div className="mb-5 text-center">
        <h2 className={cx("text-2xl font-extrabold sm:text-3xl", isDark ? "text-white" : "text-slate-900")}>Find Your Part</h2>
        <p className={cx("mt-1 text-sm", isDark ? "text-slate-400" : "text-slate-600")}>Fill in your vehicle details below</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="Year" name="year" options={years} theme={theme} />
        <SelectField label="Make" name="make" onChange={(make) => { setSelectedMake(make); setSelectedModel(make === "Select Make" ? "Select make first" : "Select Model"); }} options={makes} value={selectedMake} theme={theme} />
        <SelectField label="Model" name="model" onChange={setSelectedModel} options={modelOptions} value={selectedModel} theme={theme} />
        <SelectField label="Part" name="part" options={paramPart ? [paramPart, ...parts.filter((p) => p !== paramPart)] : parts} theme={theme} />
        <SelectField label="Engine Size" name="engineSize" options={engineSizes} theme={theme} />
        <SelectField label="Transmission" name="transmission" options={transmissions} theme={theme} />
        <TextField label="Full Name" name="fullName" placeholder="John Smith" theme={theme} />
        <TextField label="Email" name="email" placeholder="john@example.com" type="email" theme={theme} />
        <TextField label="Zip Code" name="zipCode" placeholder="12345" theme={theme} />
        <TextField label="Phone" name="phone" placeholder="(123) 456-7890" type="tel" theme={theme} />
      </div>

      <button className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 px-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5" disabled={isSending} type="submit">
        {isSending ? "Sending..." : "Find My Part Now"}
      </button>
      {submitMessage ? <div className={cx("mt-4 rounded-xl px-4 py-3 text-center text-sm font-semibold", submitStatus === "success" ? "bg-emerald-500/15 border border-emerald-500/20 text-emerald-500" : "bg-red-500/15 border border-red-500/20 text-red-500")}>{submitMessage}</div> : null}
    </form>
  );
}

function useSelectedTheme(fallback: Theme): Theme {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(fallback);

  useEffect(() => {
    const root = document.documentElement;

    function syncTheme() {
      setSelectedTheme(root.classList.contains("dark") ? "dark" : "light");
    }

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return selectedTheme;
}

export default function VehicleSelectorForm({ theme }: { theme?: Theme }) {
  const selectedTheme = useSelectedTheme(theme ?? "light");

  return (
    <Suspense fallback={<div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-500">Loading form...</div>}>
      <VehicleFormInner theme={selectedTheme} />
    </Suspense>
  );
}
