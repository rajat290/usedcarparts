"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const years = [
  "Select Year",
  ...Array.from({ length: 64 }, (_, index) => String(2024 - index)),
];

const makes = [
  "Select Make", "AMC", "Acura", "Alfa", "Aston Martin", "Audi",
  "Bentley", "BMW", "Buick", "Cadillac", "Chevy", "Chrysler", "Citroen",
  "Daewoo", "Daihatsu", "Dodge",
  "Eagle",
  "Ferrari", "Fiat", "Ford", "Freightliner",
  "GMC", "Genesis", "Geo",
  "Honda", "Hummer", "Hyundai",
  "IH", "Infiniti", "Isuzu",
  "Jaguar", "Jeep",
  "kaiser", "Kenworth", "Kia",
  "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus",
  "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes", "Mercury", "Mini", "Mitsubishi",
  "Nissan",
  "Oldsmobile",
  "peugeot", "Plymouth", "Polestar", "Pontiac", "Porsche",
  "RAM", "Renault", "Rolls-Royce", "Rover",
  "Saab", "Saturn", "Scion", "Seat", "Subaru", "Suzuki",
  "Tesla", "Toyota", "Triumph",
  "Volkswagen", "Volvo",
  "Yugo",
];

// Normalize key: remove spaces, hyphens, lowercase first char kept, then PascalCase
function normalizeMakeKey(make: string): string {
  return make
    .split(/[\s\-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

const modelsByMake: Record<string, string[]> = {
  AMC: ["Ambassador", "American", "AMX", "Classic", "Concord", "Eagle", "Gremlin", "Matador", "Pacer", "Rebel", "Rambler", "Spirit", "Other"],
  Acura: ["CL", "CSX", "EL", "ILX", "Integra", "Legend", "MDX", "RDX", "RL", "RSX", "SLX", "TL", "TSX", "Vigor", "ZDX"],
  Alfa: ["147", "164 Sedan", "1750", "4C", "Alfetta", "GTV6", "Giulia", "Giulia 1600", "Giulietta", "Milano", "Mito", "Spider-1600", "Stelvio", "Tonale"],
  AstonMartin: ["DB11", "DB12", "DBS", "DBX", "Vantage"],
  Audi: ["100", "200", "4000 2 & 4 Door Sedan", "4000 Quattro", "5000 & 5000 Quattro", "80 Series", "90 Series", "A3", "A4", "A5", "A6", "A7", "A8", "Allroad", "AllRoad A4", "AllRoad A6", "Cabriolet", "Coupe GT", "Coupe Quattro", "E-tron", "E-tron GT", "E-tron S", "Fox", "Q3", "Q4 E-tron", "Q5", "Q7", "Q8", "Q8 E tron", "R8", "RS3", "RS4", "RS5", "RS6", "RS7", "RS E-tron GT", "S4", "S5", "S6", "S7", "S8", "SQ5", "SQ7", "SQ8", "SQ8 E tron", "TT", "Sport Coupe", "Super 90", "V8 Quattro", "RS Q8"],
  Bentley: ["Arnage", "Azure", "Bentayga", "Brooklands", "Continental", "Corniche", "Flying Spur", "Mulsanne", "Eight", "Turbo R"],
  BMW: ["1M", "128i", "135i", "1602", "1800", "228i", "230i", "2002", "2500", "2800", "3", "318i", "320i", "323i", "325e", "325i", "328i", "328i GT", "330e", "330i", "330i GT", "335i", "335i GT", "340i GT", "428i", "430i", "435i", "440i", "524TD", "525i", "528e", "528i", "530e", "530i", "533i", "535i", "535i GT", "540i", "545i", "550i", "550i GT", "630CSi", "633CSi", "635CSi", "640i", "640i GT", "645Ci", "650i", "728", "732", "733i", "735i", "740e", "740i", "745e", "745i", "750e", "750i", "760i", "840ci", "840i", "850i", "ActiveHybrid 3", "ActiveHybrid 5", "ActiveHybrid 7", "Alpina B6", "Alpina B7", "Alpina B8", "Alpina XB7", "I3", "I4", "I5", "I7", "I8", "IX", "L6", "M1", "M2", "M3", "M4", "M5", "M6", "M8", "M235i", "M240i", "M340i", "M440i", "M550i", "M760i", "M850i", "X1", "X2", "X3", "X3M", "X4", "X4M", "X5", "X5M", "X6", "X6M", "X7", "XM", "Z3", "Z4", "Z8", "Other"],
  Buick: ["Allure", "Apollo", "Cascada", "Century", "Electra", "Enclave", "Encore", "Encore GX", "Envision", "Envista", "LaCrosse", "LeSabre", "Lucerne", "Park Ave", "Rainier", "Reatta", "Regal", "Rendezvous", "Riviera", "Roadmaster", "Skyhawk", "Skylark", "Special", "Terraza", "Verano", "Other"],
  Cadillac: ["Allante", "ATS", "Brougham", "CT4", "CT5", "CT6", "CTS", "Catera", "Cimarron", "DeVille", "DHS", "DTS", "ELR", "Eldorado", "Escalade", "Escalade-ESV", "Escalade-EXT", "Fleetwood", "LYRIQ", "Seville", "SRX", "STS", "XLR", "XT4", "XT5", "XT6", "XTS", "Other"],
  Chevy: ["Astro", "Aveo", "Beretta", "Blazer", "Blazer EV", "Bolt", "Bolt EUV", "Camaro", "Caprice", "Captiva Sport", "Cavalier", "Cobalt", "Colorado", "Corvette", "Cruze", "El Camino", "Equinox", "HHR", "Impala", "Malibu", "Monte Carlo", "Nova", "Silverado 1500", "Silverado 2500", "Silverado 3500", "Sonic", "Spark", "Suburban-1500", "Suburban-2500", "Tahoe", "TrailBlazer", "Traverse", "Trax", "Volt", "Other"],
  Chrysler: ["200", "300", "300M", "Aspen", "Cirrus", "Concorde", "Crossfire", "Imperial", "LeBaron", "LHS", "New Yorker", "Pacifica", "PT Cruiser", "Sebring", "Town & Country", "Voyager", "Other"],
  Citroen: ["Citroen"],
  Daewoo: ["Lanos", "Leganza", "Nubira"],
  Daihatsu: ["Charade", "Hijet", "Rocky"],
  Dodge: ["Avenger", "Caliber", "Caravan", "Challenger", "Charger", "Dakota", "Dart", "Durango", "Hornet", "Journey", "Neon", "Nitro", "Ram 1500", "Ram 2500", "Ram 3500", "Viper", "Other"],
  Eagle: ["2000 GTX", "Premier", "Summit", "Talon", "Vision"],
  Ferrari: ["Ferrari"],
  Fiat: ["124 Spider", "500", "500X", "Other"],
  Ford: ["Aerostar", "Bronco", "Bronco Sport", "C-Max", "Contour", "Crown Vic", "E Transit", "Ecosport", "Edge", "Escape", "Escort", "Excursion", "Expedition", "Explorer", "F-150", "F-150 Lightning", "F-250 Super Duty", "F-350 Super Duty", "F-450 Super Duty", "Fiesta", "Flex", "Focus", "Freestyle", "Fusion", "GT", "Maverick", "Mustang", "Mustang Mach E", "Probe", "Ranger", "Taurus", "Thunderbird", "Transit 150", "Transit 250", "Transit 350", "Transit Connect", "Windstar", "Other"],
  Freightliner: ["Freightliner"],
  Genesis: ["G70", "G80", "G90", "GV60", "GV70", "GV80"],
  Geo: ["Metro", "Prizm", "Spectrum", "Storm", "Tracker"],
  GMC: ["Acadia", "Canyon", "Envoy", "Jimmy", "Safari Van", "Sierra 1500", "Sierra 2500", "Sierra 3500", "Sonoma", "Terrain", "Yukon", "Yukon XL", "Other"],
  Honda: ["Accord", "Civic", "Clarity", "CR-V", "CR-Z", "Element", "Fit", "HR-V", "Insight", "Odyssey", "Passport", "Pilot", "Prelude", "Prologue", "Ridgeline", "S2000"],
  Hummer: ["H1", "H2", "H3"],
  Hyundai: ["Accent", "Azera", "Elantra", "Equus", "Genesis", "Ioniq 5", "Ioniq 6", "Kona", "Nexo", "Palisade", "Santa Cruz", "Santa Fe", "Sonata", "Tucson", "Veloster", "Venue", "Veracruz"],
  IH: ["Pickup & Travelall", "Scout & Scout II", "Truck (Big)"],
  Infiniti: ["EX35", "EX37", "FX", "G20", "G25", "G35", "G37", "I30", "I35", "J30", "JX35", "M30", "M35", "M37", "M45", "M56", "Q40", "Q45", "Q50", "Q60", "Q70", "QX4", "QX30", "QX50", "QX55", "QX56", "QX60", "QX70", "QX80"],
  Isuzu: ["Amigo", "Ascender", "Axiom", "Rodeo", "Trooper", "Vehicross", "Other"],
  Jaguar: ["E Pace", "F Pace", "F Type", "I Pace", "S Type", "X Type", "XE", "XF", "XJ Series", "XJR", "XJS", "XK Series", "XKE", "XKR"],
  Jeep: ["Cherokee", "CJ Series", "Comanche", "Commander", "Compass", "Gladiator", "Grand Cherokee", "Grand Wagoneer", "Liberty", "Patriot", "Renegade", "Wagoneer", "Wrangler"],
  kaiser: ["Kaiser"],
  Kenworth: ["Kenworth"],
  Kia: ["Amanti", "Borrego", "Cadenza", "Carnival", "EV6", "EV9", "Forte", "K5", "K900", "Niro", "Niro EV", "Optima", "Rio", "Seltos", "Sorento", "Soul", "Sportage", "Stinger", "Telluride"],
  Lamborghini: ["Lamborghini"],
  LandRover: ["Defender", "Discovery", "Discovery Sport", "Freelander", "LR2", "LR3", "LR4", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar", "Other"],
  Lexus: ["CT 200H", "ES250", "ES300", "ES350", "GS 300", "GS 350", "GS 450h", "GX 460", "IS 250", "IS 350", "IS 500", "LC 500", "LS 460", "LS 600h", "LX 570", "NX 300", "NX 300h", "RC 300", "RC 350", "RC F", "RX 350", "RX 450h", "UX 200", "UX 250h"],
  Lincoln: ["Aviator", "Blackwood", "Continental", "LS", "Mark LT", "MKC", "MKS", "MKT", "MKX", "MKZ", "Nautilus", "Navigator", "Navigator L", "Town Car"],
  Lotus: ["Evora", "Exige"],
  Maserati: ["BiTurbo", "Ghibli", "GranTurismo", "Levante", "Quattroporte"],
  Maybach: ["Maybach"],
  Mazda: ["2", "3", "5", "6", "323", "626", "929", "CX-3", "CX-5", "CX-7", "CX-9", "CX-30", "CX-50", "CX-90", "Miata MX-5", "Millenia", "MX-3", "MX-6", "MX-30", "Protege", "RX-7", "RX-8", "Tribute"],
  McLaren: ["540C", "570GT", "570S", "600LT", "650S", "720S", "765LT", "Artura", "GT", "MP4-12C", "P1", "Senna"],
  Mercedes: ["A-Class", "AMG GT", "B-Class", "C-Class", "CL-Class", "CLA-Class", "CLK", "CLS", "E Class", "EQB", "EQE", "EQS", "G-Class", "GL-Class", "GLA-Class", "GLB-Class", "GLC-Class", "GLE-Class", "GLK-Class", "GLS-Class", "Metris", "ML Series", "R Class", "S Class", "SL Class", "SLC Class", "SLK", "SLR", "SLS", "Sprinter 2500", "Sprinter 3500"],
  Mercury: ["Capri", "Comet", "Cougar", "Grand Marquis", "Mariner", "Milan", "Monarch", "Montego", "Mountaineer", "Mystique", "Sable", "Topaz", "Tracer", "Villager", "Zephyr"],
  Mini: ["Cooper", "Cooper Clubman", "Cooper Countryman", "Cooper Paceman"],
  Mitsubishi: ["3000", "Diamante", "Eclipse", "Eclipse Cross", "Endeavor", "Galant", "Lancer", "Mirage", "Montero", "Outlander", "Outlander Sport", "Raider"],
  Nissan: ["200SX", "240SX", "240Z", "300ZX", "350Z", "370Z", "Altima", "Armada", "Frontier", "GT-R", "Juke", "Kicks", "Leaf", "Maxima", "Murano", "NV 200", "NV 1500", "NV 2500", "NV 3500", "Pathfinder", "Qashqai", "Quest", "Rogue", "Rogue Sport", "Sentra", "Titan", "Versa", "Xterra", "Z"],
  Oldsmobile: ["88", "98", "Achieva", "Alero", "Aurora", "Bravada", "Cutlass", "Intrigue", "Toronado"],
  peugeot: ["304", "404", "405", "504", "505", "604"],
  Plymouth: ["Acclaim", "Barracuda", "Breeze", "Duster", "Grand Fury", "Horizon", "Neon", "Reliant", "Sundance", "Voyager", "Other"],
  Polestar: ["Polestar 1", "Polestar 2"],
  Pontiac: ["Aztek", "Bonneville", "Firebird", "G6", "G8", "Grand AM", "Grand Prix", "GTO", "Montana", "Solstice", "Sunfire", "Torrent", "Trans Sport", "Vibe", "Other"],
  Porsche: ["356", "911/930", "914", "918", "924", "928", "944", "968", "Boxster", "Carrera GT", "Cayenne", "Cayman", "Macan", "Panamera", "Taycan"],
  RAM: ["Promaster 1500", "Promaster 2500", "Promaster 3500", "Promaster City", "Truck 1500", "Truck 2500", "Truck 3500", "Truck 4500", "Truck 5500"],
  Renault: ["Alliance", "Encore", "Fuego", "Medallion", "Other"],
  RollsRoyce: ["Cullinan", "Dawn", "Ghost", "Phantom", "Silver Shadow", "Spectre", "Wraith"],
  Rover: ["3 Litre", "100", "2000", "3500", "3500S"],
  Saab: ["9-3", "9-5", "92x", "93", "94x", "95", "96", "97x", "99", "900", "9000"],
  Saturn: ["Astra", "Aura", "Ion", "L Series", "S Series", "Outlook", "Relay", "Sky", "Vue"],
  Scion: ["FRS", "iA", "iM", "iQ", "tC", "xA", "xB", "xD"],
  Seat: ["Cordova", "Ibiza", "Leon", "Toledo"],
  Subaru: ["Ascent", "Baja", "BRZ", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "Solterra", "Tribeca", "WRX", "XV Crosstrek", "Other"],
  Suzuki: ["Aerio", "Esteem", "Forenza", "Kizashi", "Samurai", "Sidekick", "Swift", "SX4", "Vitara", "XL7"],
  Tesla: ["Model 3", "Model S", "Model X", "Model Y", "Roadster", "Cybertruck"],
  Toyota: ["86", "4Runner", "Avalon", "BZ4X", "C-HR", "Camry", "Celica", "Corolla", "Corolla Cross", "Corolla iM", "Echo", "FJ Cruiser", "GR86", "GR Corolla", "GR Supra", "Grand Highlander", "Highlander", "Land Cruiser", "Matrix", "Mirai", "MR2", "Prius", "RAV4", "Sequoia", "Sienna", "Supra", "Tacoma", "Tundra", "Venza", "Yaris"],
  Triumph: ["GT6", "Spitfire", "Stag", "TR2", "TR3", "TR4", "TR6", "TR7", "TR8", "TR250"],
  Volkswagen: ["Arteon", "Atlas", "Atlas Cross Sport", "Beetle", "Cabrio", "CC", "Eos", "Golf", "Golf GTI", "ID.4", "Jetta", "Jetta GLI", "Passat", "Rabbit", "Routan", "Scirocco", "Taos", "Tiguan", "Touareg", "Other"],
  Volvo: ["30 Series", "40 Series", "60 Series", "70 Series", "80 Series", "90 Series", "C40", "S60", "S90", "V60", "V90", "XC40", "XC60", "XC70", "XC90"],
  Yugo: ["Yugo"],
};

const parts = [
  "Choose Part",
  "Engine Assembly", "Transmission", "ABS Control Module", "ABS System (Anti-Lock)", "AC Compressor",
  "AC Compressor Clutch", "AC Condenser", "AC Evaporator", "Air Bag Control Module", "Air Cleaner Box",
  "Air Flow Meter", "Alternator", "Axle Assembly - Front", "Axle Assembly - Rear", "Axle Shaft",
  "Back Glass", "Blower Motor", "Body Control Module", "Brake Master Cylinder",
  "Bumper Assembly - Front", "Bumper Assembly - Rear", "Camshaft", "Carburetor",
  "Control Arm - Lower (Front)", "Control Arm - Lower (Rear)", "Control Arm - Upper (Front)", "Control Arm - Upper (Rear)",
  "Cooling Fan", "Crankshaft", "Cylinder Head", "Dash Panel", "Differential Assembly",
  "Door Assembly - Front", "Door Assembly - Rear", "Door Glass - Front (Side)", "Door Window Motor",
  "Drive Shaft - Front", "Drive Shaft - Rear", "ECM/ECU (Engine)", "Engine Oil Cooler",
  "Exhaust Manifold", "Fan Clutch", "Fender", "Flywheel", "Front Axle", "Front Bumper",
  "Front Clip", "Front Fender", "Fuel Pump", "Generator", "Grille", "Head Light Assembly",
  "Heater Core", "Hood", "Ignition Switch", "Intake Manifold", "Intercooler",
  "Lower Control Arm - Front", "Oil Pan", "Power Brake Boosters", "Power Steering Pump",
  "Power Window Motor", "Quarter Panel", "Radiator", "Rear Axle", "Rear Bumper",
  "Rear Door Assembly", "Rear Fender", "Rear View Mirror", "Ring Gear and Pinion Assembly",
  "Roof Glass", "Seat Track - Front", "Shock Absorber", "Side View Mirror",
  "Speedometer Cluster", "Starter Motor", "Steering Column", "Steering Gear - Rack & Pinion",
  "Strut", "Sun Roof / Moon Roof", "Supercharger", "Tail Light", "Tailgate", "Throttle Body Assembly",
  "Timing Cover", "Torque Converter", "Transfer Case", "Transmission Control Module",
  "Trunk Lid", "Turbocharger", "Upper Control Arm - Front", "Vacuum Pump", "Water Pump",
  "Wheel", "Window Regulator - Front", "Window Regulator - Rear", "Windshield Wiper Switch",
  "Wiper Motor - Front", "Wiper Motor - Rear",
];

const engineSizes = [
  "Select Engine Size",
  "1.5L", "1.6L", "1.7L", "1.8L", "1.9L",
  "2.0L", "2.2L", "2.3L", "2.4L", "2.5L",
  "2.6L", "2.7L", "2.8L", "2.9L",
  "3.0L", "3.2L", "3.3L", "3.4L", "3.5L", "3.6L", "3.7L", "3.8L",
  "4.0L", "4.2L", "4.3L", "4.4L", "4.6L", "4.7L", "4.8L",
  "5.0L", "5.2L", "5.3L", "5.4L", "5.5L", "5.7L", "5.9L",
  "6.0L", "6.2L", "6.4L", "6.6L", "6.7L",
  "7.0L", "7.3L", "7.4L",
  "8.0L", "8.1L", "8.3L", "8.4L",
];

const transmissions = [
  "Select Transmission",
  "2WD / Automatic Transmission",
  "4x4 / Automatic Transmission",
  "2WD / Manual Transmission",
  "4x4 / Manual Transmission",
];

// ----- Sub-components -----

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
      <span className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300">{label}</span>
      <div className="relative">
        <select
          className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-slate-800/70 px-3.5 pr-9 text-sm text-white shadow-inner outline-none transition-all duration-200 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 focus:bg-slate-800 disabled:opacity-50 cursor-pointer"
          name={name}
          onChange={(event) => onChange?.(event.target.value)}
          required
          value={value}
        >
          {options.map((option, index) => (
            <option key={`${option}-${index}`} className="bg-slate-900 text-white">
              {option}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
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
      <span className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300">{label}</span>
      <input
        className="h-11 w-full rounded-xl border border-white/10 bg-slate-800/70 px-3.5 text-sm text-white shadow-inner outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 focus:bg-slate-800"
        name={name}
        placeholder={placeholder}
        required
        type={type}
      />
    </label>
  );
}

// ---- Inner form that uses useSearchParams ----
function VehicleFormInner() {
  const searchParams = useSearchParams();
  const paramMake = searchParams.get("make") ?? "";
  const paramPart = searchParams.get("part") ?? "";

  // Resolve initial make from URL param
  const initialMake = makes.find(
    (m) => m.toLowerCase() === paramMake.toLowerCase()
  ) ?? "Select Make";

  const [selectedMake, setSelectedMake] = useState(initialMake);
  const [selectedModel, setSelectedModel] = useState("Select Model");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  // Pre-populate on mount if URL params exist
  useEffect(() => {
    if (initialMake !== "Select Make") {
      setSelectedMake(initialMake);
      setSelectedModel("Select Model");
    }
  }, [initialMake]);

  const normalizedKey = normalizeMakeKey(selectedMake);
  const models = modelsByMake[normalizedKey] ?? modelsByMake[selectedMake] ?? [];
  const modelOptions =
    selectedMake === "Select Make"
      ? ["Select make first"]
      : ["Select Model", ...models];

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
    <form
      className="w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-5 shadow-2xl shadow-black/50 sm:p-6"
      onSubmit={handleSubmit}
      id="vehicle-selector-form"
    >
      {/* Header */}
      <div className="mb-5 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/20 px-3 py-1 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Instant Quote</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl tracking-tight">
          Find Your Part
        </h2>
        <p className="mt-1 text-sm text-slate-400">Fill in your vehicle details below</p>
      </div>

      {/* Form grid */}
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
        <SelectField
          label="Part"
          name="part"
          options={paramPart ? [paramPart, ...parts.filter((p) => p !== paramPart)] : parts}
        />
        <SelectField label="Engine Size" name="engineSize" options={engineSizes} />
        <SelectField label="Transmission" name="transmission" options={transmissions} />
        <TextField label="Full Name" name="fullName" placeholder="John Smith" />
        <TextField label="Email" name="email" placeholder="john@example.com" type="email" />
        <TextField label="Zip Code" name="zipCode" placeholder="12345" />
        <TextField label="Phone" name="phone" placeholder="(123) 456-7890" type="tel" />
      </div>

      {/* Submit */}
      <button
        className="mt-5 flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 px-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 transition-all duration-200 hover:shadow-cyan-500/50 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0 active:scale-[0.98]"
        disabled={isSending}
        type="submit"
      >
        {isSending ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          <>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            Find My Part Now
          </>
        )}
      </button>

      {/* Status message */}
      {submitMessage ? (
        <div
          className={`mt-4 rounded-xl px-4 py-3 text-center text-sm font-semibold ${
            submitStatus === "success"
              ? "bg-emerald-500/15 border border-emerald-500/20 text-emerald-400"
              : "bg-red-500/15 border border-red-500/20 text-red-400"
          }`}
        >
          {submitMessage}
        </div>
      ) : null}

      {/* Call CTA */}
      <a
        className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/20"
        href="tel:7705984665"
      >
        <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Or Call: (770) 598-4665
      </a>

      {/* Trust note */}
      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500">
        <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Your information is secure and never shared.
      </div>
    </form>
  );
}

// ---- Public export wrapped in Suspense for Next.js SSG ----
export default function VehicleSelectorForm() {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl text-center text-slate-400 text-sm">
          Loading form…
        </div>
      }
    >
      <VehicleFormInner />
    </Suspense>
  );
}
