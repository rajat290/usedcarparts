"use client";

import { useState } from "react";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const years = [
  "Select Year",
  ...Array.from({ length: 64 }, (_, index) => String(1960 + index)),
];
const makes = ["Select Make","AMC","Acura","Alfa","Aston Martin","Audi",
               "Bentley", "BMW", "Buick", "Cadillac", "Chevy", "Chrysler", "Citroen",
               "Daewoo", "Daihatsu","Dodge", 
               "Eagle",
               "Ferrari", "Fiat", "Ford", "Freightliner", 
               "GMC","Genesis","Geo", 
               "Honda", "Hummer", "Hyundai",
               "IH", "Infiniti", "Isuzu", 
               "Jaguar", "Jeep",
               "kaiser","Kenworth", "Kia", 
               "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus",
               "Maserati","Maybach","Mazda","McLaren","Mercedes","Mercury","Mini","Mitsubishi",
               "Nissan",
               "Oldsmobile",
               "peugeot","Plymouth","Polestar","Pontiac","Porsche",
               "RAM","Renault","Rolls-Royce","Rover",
               "Saab","Saturn","Scion","Seat","Subaru","Suzuki",
               "Tesla","Toyota",
               "Volkswagen","Volvo",
               "Yugo"];
const modelsByMake: Record<string, string[]> = {
  AMC: ["Ambassador", "American", "AMX","Classic","Concord","Eagle","Gremlin","Matador","Pacer","Rebel","Rambler","Spirit","Other"],
  Acura: ["CL","CSX","EL","ILX","Integra","Legend","MDX","RDX","RL","RSX","SLX","TL","TSX","Vigor","ZDX"],
  Alfa: ["147","164 Sedan","1750","4C","Alfetta","GTV6","Giulia","Giulia 1600","Giulietta","Milano","Mito","Spider-1600","Stelvio","Tonale"],
  AstonMartin: ["DB11", "Vantage"],
  Audi: ["100", "200", "4000 2 & 4 Door Sedan", "4000 Quattro", "5000 & 5000 Quattro", "80 Series", "90 Series", "A3", "A4", "A5", "A6", "A7", "A8", "Allroad", "AllRoad A4", "AllRoad A6", "Cabriolet", "Coupe GT", "Coupe Quattro", "E-tron", "E-tron GT", "E-tron S", "Fox", "Q3", "Q4 E-tron", "Q5", "Q7", "Q8", "Q8 E tron","R8","RS3","RS4","RS5","RS6","RS7","RS E-tron GT","S4","S5","S6","S7","S8","SQ5","SQ7","SQ8","SQ8 E tron","TT", "Sport Coupe","Super 90", "V8 Quattro","RS Q8"],
  Bentley: ["Arnage", "Azure", "Bentayga", "Brooklands", "Continental","Corniche" ,"Flying Spur", "Mulsanne","Eight","Turbo R"],
  BMW: ["1M", "128i", "135i","1602","1800","228i","230i","2002","2500","2800","3","318i","320i","323i","325e","325i","328i","328i GT","330e","330i","330i GT","335i","335i GT","340i GT","428i","430i","325i","328i","330i","340i GT","428i","430i","435i","440i","524TD","525i","528e","528i","530e","530i","533i","535i","535i GT","540i","545i","550i","550i GT","630CSi","633CSi","635CSi","640i","640i GT","645Ci","650i","728","732","733i","735i","740e","740i","745e","745i","750e","750i","760i","840ci","840i","850i","ActiveE","ActiveHybrid 3","ActiveHybrid 5","ActiveHybrid 7","Alpina B6","Alpina B7","Alpina B8","Alpina XB7","I3","I4","I5","I7","I8","IX","L6","Mini Cooper","Mini Cooper Clubman","Mini Cooper Countryman","Mini Cooper Paceman","M1","M2","M3","M4","M5","M6","M8","M235i","M240i","M340i","M440i","M550i","M760i","M850i","X1","X2","X3","X3M","X4","X4M","X5","X5M","X6","X6M","X7","XM","Z3","Z4","Z8","Other"],
  Buick: ["Allure", "Apollo","Cascada","Century","Electra","Enclave","Encore","Encore GX","Envision","Envision","Envista","Limited","LaCrosse","LeSabre","Lucerne","Park Ave","Rainier","Reatta","Regal","Regal Somerset","Rendezvous","Riviera","Roadmaster","Skyhawk","Skylark","Special","Somerset","Terraza","Verano","Other"],
  Cadillac: ["Allante", "ATS","Brougham", "CT4", "CT5", "CT6", "CTS","Catera","Cimarron","Concours", "DeVille","DHS", "DTS","ELR", "Eldorado", "Escalade","Escalade-ESV", "Fleetwood","Escalade-EXT","Fleetwood","LYRIQ", "Seville", "SRX", "STS", "XLR","XT4","XT5","XT6","XTS","Other"],
  Chevy: ["Astra", "Astro","Aveo","Beretta","Full Size","Blazer","Blazer EV","S10/S15","Bolt","Bolt EUV","C2","Camaro","Caprice","Captiva Sport","Cavalier","Celebrity","Chevelle","Pickup FWD","Small Car","Citation","City Express","Cobalt","Corsa","Corsica","Corvette","Corvair","Cruze","El Camino","Epica","Equinox","HHR","Impala","Lumina Car","Express Van","Luv (See Also Isuzu Mini P-Up)","Meriva","Malibu","Metro","Monte Carlo","Monza", "Nova &Chevy II", "Nova", "Optra", "Orlando", "Prizm", "S10/S15/Sonoma", "Sonic", "Spark", "Spectrum", "Sprint", "SS", "SSR", "Suburban-10", "Suburban-20", "Suburban-30", "Suburban-1000", "Suburban-1500", "Suburban-2500", "Suburban-3500","Tahoe","Tornado","Tracker","TrailBlazer","TrailBlazer-EXT","Traverse","Trax","Truck-10 Series","Truck-20 Series","Truck-30 Series","Truck-1500 Series","Truck-2500 Series","Truck-3500 Series","Truck-Avalanche 1500","Truck-Avalanche 2500","Truck-C3100","Truck-C3600","Truck-C3800","Truck-Colorado","Truck-Forward Control","Truck-Kodiak","Truck-Luv Mini Pup","Truck-S10/S15/Sonoma","Truck-Silverado 1500","Truck-Silverado 2500","Truck-Silverado 3500","Truck-Tilt Cab","Uplander","Van 10","Van 20","Van 30","Van Express 1500","Van Express 2500","Van Express 3500","Vectra", "Vega","Venture", "Volt","Zafira", "Other"],
  Chrysler: ["300", "Pacifica"],
  Citroen: ["C3", "C4"],
  Daewoo: ["Lanos", "Nubira"],
  Daihatsu: ["Charade", "Terios"],
  Dodge: ["Charger", "Durango"],
  Eagle: ["Talon", "Summit"],
  Ferrari: ["488", "Portofino"],
  Fiat: ["500", "Panda"],
  Ford: ["F-150", "Mustang"],
  Freightliner: ["Cascadia", "M2"],
  Genesis: ["G70", "G80"],
  Geo: ["Metro", "Prizm"],
  GMC: ["Sierra", "Yukon"],
  Honda: ["Civic", "Accord"],
  Hummer: ["H2", "H3"],
  Hyundai: ["Elantra", "Santa Fe"],
  IH: ["Scout", "Travelette"],
  Infiniti: ["Q50", "QX60"],
  Isuzu: ["Ascender", "i-Series"],
  Jaguar: ["XE", "XF"],
  Jeep: ["Wrangler", "Grand Cherokee"],
  kaiser: ["Darrin", "Dragon"],
  Kenworth: ["T680", "W900"],
  Kia: ["Sorento", "Optima"],
  Lamborghini: ["Huracan", "Aventador"],
  LandRover: ["Range Rover", "Discovery"],
  Lexus: ["RX", "ES"],
  Lincoln: ["Navigator", "MKZ"],
  Lotus: ["Evora", "Exige"],
  Maserati: ["Ghibli", "Levante"],
  Maybach: ["S-Class", "G-Class"],
  Mazda: ["CX-5", "Mazda3"],
  McLaren: ["720S", "P1"],
  Mercedes: ["C-Class", "E-Class"],
  Mercury: ["Grand Marquis", "Mountaineer"],
  Mini: ["Cooper", "Countryman"],
  Mitsubishi: ["Outlander", "Lancer"],
  Nissan: ["Altima", "Rogue"],
  Oldsmobile: ["Alero", "Cutlass"],
  peugeot: ["208", "308"],
  Plymouth: ["Barracuda", "Voyager"],
  Polestar: ["Polestar 1", "Polestar 2"],
  Pontiac: ["GTO", "Grand Prix"],
  Porsche: ["911", "Cayenne"],
  RAM: ["1500", "2500"],
  Renault: ["Clio", "Megane"],
  RollsRoyce: ["Phantom", "Ghost"],
  Rover: ["Range Rover", "Discovery"],
  Saab: ["9-3", "9-5"],
  Saturn: ["Ion", "Vue"],
  Scion: ["tC", "xB"],
  Seat: ["Leon", "Ibiza"],
  Subaru: ["Outback", "Impreza"],
  Suzuki: ["Swift", "Vitara"],
  Tesla: ["Model S", "Model 3"],
  Toyota: ["Camry", "Corolla"],
  Volkswagen: ["Golf", "Passat"],
  Volvo: ["XC90", "S60"],
  Yugo: ["GV", "GVX"],   
};
const parts = ["Select Part", "Engine", "Transmission", "Alternator", "AC Compressor"];
const engineSizes = ["Select Engine Size", "2.0L", "2.4L", "3.5L", "5.0L"];
const transmissions = ["Select Transmission", "Automatic", "Manual", "CVT"];

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        className="h-12 w-full rounded-md border border-sky-800/40 bg-white px-4 text-base text-slate-950 shadow-[0_2px_0_rgba(7,89,133,0.55)] outline-none transition focus:border-cyan-200 focus:ring-2 focus:ring-cyan-100"
        name={name}
        onChange={(event) => onChange?.(event.target.value)}
        required
        value={value}
      >
        {options.map((option, index) => (
          <option key={`${option}-${index}`}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function TextField({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        className="h-12 w-full rounded-md border border-sky-800/40 bg-white px-4 text-base text-slate-950 shadow-[0_2px_0_rgba(7,89,133,0.55)] outline-none transition placeholder:text-slate-500 focus:border-cyan-200 focus:ring-2 focus:ring-cyan-100"
        name={name}
        placeholder={placeholder}
        required
        type={type}
      />
    </label>
  );
}

export default function VehicleSelectorForm() {
  const [selectedMake, setSelectedMake] = useState("Select Make");
  const [selectedModel, setSelectedModel] = useState("Select make first");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const modelOptions = [
    selectedMake === "Select Make" ? "Select make first" : "Select Model",
    ...(modelsByMake[selectedMake] ?? []),
  ];
  const isSending = submitStatus === "sending";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitStatus("sending");
    setSubmitMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/inquiry", {
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
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
    <form
      className="w-full max-w-2xl rounded-xl border border-sky-300/30 bg-[linear-gradient(180deg,#10a8ee_0%,#0878bd_58%,#07507f_100%)] p-5 shadow-2xl shadow-black/25 sm:p-6"
      onSubmit={handleSubmit}
      id="vehicle-selector-form"
    >
      <h2 className="mb-5 text-center text-3xl font-black tracking-normal text-white sm:text-4xl">
        Find Your Part Instantly
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="Year" name="year" options={years} />
        <SelectField
          label="Make"
          name="make"
          onChange={(make) => {
            setSelectedMake(make);
            setSelectedModel(make === "Select Make" ? "Select make first" : "Select Model");
          }}
          options={makes}
          value={selectedMake}
        />
        <SelectField
          label="Model"
          name="model"
          onChange={setSelectedModel}
          options={modelOptions}
          value={selectedModel}
        />
        <SelectField label="Part" name="part" options={parts} />
        <SelectField label="Engine Size" name="engineSize" options={engineSizes} />
        <SelectField label="Transmission" name="transmission" options={transmissions} />
        <TextField label="Full Name" name="fullName" placeholder="John Smith" />
        <TextField label="Email" name="email" placeholder="john@example.com" type="email" />
        <TextField label="Zip Code" name="zipCode" placeholder="12345" />
        <TextField label="Phone" name="phone" placeholder="(123) 456-7890" type="tel" />
      </div>

      <button
        className="mt-4 h-12 w-full rounded-lg bg-white px-5 text-base font-black text-slate-950 shadow-sm transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSending}
        type="submit"
      >
        {isSending ? "Sending..." : "Find My Part"}
      </button>

      {submitMessage ? (
        <p
          className={`mt-3 rounded-md px-4 py-3 text-center text-sm font-semibold ${
            submitStatus === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {submitMessage}
        </p>
      ) : null}

      <a
        className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-5 text-base font-black text-slate-950 shadow-sm transition hover:bg-blue-50"
        href="tel:8883382540"
      >
        &#9742; (888) 338-2540
      </a>

      <div className="mt-4 border-t border-white/20 pt-4 text-center text-sm text-blue-50">
        <span className="mr-2">&#9671;</span>
        Your information is secure.
      </div>
    </form>
  );
}
