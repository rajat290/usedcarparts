"use client";

import { useState } from "react";

type SubmitStatus = "idle" | "sending" | "success" | "error";
type FieldName =
  | "year"
  | "make"
  | "model"
  | "part"
  | "engineSize"
  | "transmission"
  | "fullName"
  | "email"
  | "zipCode"
  | "phone";

type FormErrors = Partial<Record<FieldName, string>>;

const years = [
  "Select Year",
  ...Array.from({ length: 64 }, (_, index) => String(1960 + index)),
];
const makes = ["Select Make", "AMC", "Acura", "Alfa", "Aston Martin", "Audi",
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
  "Yugo"];
const modelsByMake: Record<string, string[]> = {
  AMC: ["Ambassador", "American", "AMX", "Classic", "Concord", "Eagle", "Gremlin", "Matador", "Pacer", "Rebel", "Rambler", "Spirit", "Other"],
  Acura: ["CL", "CSX", "EL", "ILX", "Integra", "Legend", "MDX", "RDX", "RL", "RSX", "SLX", "TL", "TSX", "Vigor", "ZDX"],
  Alfa: ["147", "164 Sedan", "1750", "4C", "Alfetta", "GTV6", "Giulia", "Giulia 1600", "Giulietta", "Milano", "Mito", "Spider-1600", "Stelvio", "Tonale"],
  AstonMartin: ["DB11", "Vantage"],
  Audi: ["100", "200", "4000 2 & 4 Door Sedan", "4000 Quattro", "5000 & 5000 Quattro", "80 Series", "90 Series", "A3", "A4", "A5", "A6", "A7", "A8", "Allroad", "AllRoad A4", "AllRoad A6", "Cabriolet", "Coupe GT", "Coupe Quattro", "E-tron", "E-tron GT", "E-tron S", "Fox", "Q3", "Q4 E-tron", "Q5", "Q7", "Q8", "Q8 E tron", "R8", "RS3", "RS4", "RS5", "RS6", "RS7", "RS E-tron GT", "S4", "S5", "S6", "S7", "S8", "SQ5", "SQ7", "SQ8", "SQ8 E tron", "TT", "Sport Coupe", "Super 90", "V8 Quattro", "RS Q8"],
  Bentley: ["Arnage", "Azure", "Bentayga", "Brooklands", "Continental", "Corniche", "Flying Spur", "Mulsanne", "Eight", "Turbo R"],
  BMW: ["1M", "128i", "135i", "1602", "1800", "228i", "230i", "2002", "2500", "2800", "3", "318i", "320i", "323i", "325e", "325i", "328i", "328i GT", "330e", "330i", "330i GT", "335i", "335i GT", "340i GT", "428i", "430i", "325i", "328i", "330i", "340i GT", "428i", "430i", "435i", "440i", "524TD", "525i", "528e", "528i", "530e", "530i", "533i", "535i", "535i GT", "540i", "545i", "550i", "550i GT", "630CSi", "633CSi", "635CSi", "640i", "640i GT", "645Ci", "650i", "728", "732", "733i", "735i", "740e", "740i", "745e", "745i", "750e", "750i", "760i", "840ci", "840i", "850i", "ActiveE", "ActiveHybrid 3", "ActiveHybrid 5", "ActiveHybrid 7", "Alpina B6", "Alpina B7", "Alpina B8", "Alpina XB7", "I3", "I4", "I5", "I7", "I8", "IX", "L6", "Mini Cooper", "Mini Cooper Clubman", "Mini Cooper Countryman", "Mini Cooper Paceman", "M1", "M2", "M3", "M4", "M5", "M6", "M8", "M235i", "M240i", "M340i", "M440i", "M550i", "M760i", "M850i", "X1", "X2", "X3", "X3M", "X4", "X4M", "X5", "X5M", "X6", "X6M", "X7", "XM", "Z3", "Z4", "Z8", "Other"],
  Buick: ["Allure", "Apollo", "Cascada", "Century", "Electra", "Enclave", "Encore", "Encore GX", "Envision", "Envision", "Envista", "Limited", "LaCrosse", "LeSabre", "Lucerne", "Park Ave", "Rainier", "Reatta", "Regal", "Regal Somerset", "Rendezvous", "Riviera", "Roadmaster", "Skyhawk", "Skylark", "Special", "Somerset", "Terraza", "Verano", "Other"],
  Cadillac: ["Allante", "ATS", "Brougham", "CT4", "CT5", "CT6", "CTS", "Catera", "Cimarron", "Concours", "DeVille", "DHS", "DTS", "ELR", "Eldorado", "Escalade", "Escalade-ESV", "Fleetwood", "Escalade-EXT", "Fleetwood", "LYRIQ", "Seville", "SRX", "STS", "XLR", "XT4", "XT5", "XT6", "XTS", "Other"],
  Chevy: ["Astra", "Astro", "Aveo", "Beretta", "Full Size", "Blazer", "Blazer EV", "S10/S15", "Bolt", "Bolt EUV", "C2", "Camaro", "Caprice", "Captiva Sport", "Cavalier", "Celebrity", "Chevelle", "Pickup FWD", "Small Car", "Citation", "City Express", "Cobalt", "Corsa", "Corsica", "Corvette", "Corvair", "Cruze", "El Camino", "Epica", "Equinox", "HHR", "Impala", "Lumina Car", "Express Van", "Luv (See Also Isuzu Mini P-Up)", "Meriva", "Malibu", "Metro", "Monte Carlo", "Monza", "Nova &Chevy II", "Nova", "Optra", "Orlando", "Prizm", "S10/S15/Sonoma", "Sonic", "Spark", "Spectrum", "Sprint", "SS", "SSR", "Suburban-10", "Suburban-20", "Suburban-30", "Suburban-1000", "Suburban-1500", "Suburban-2500", "Suburban-3500", "Tahoe", "Tornado", "Tracker", "TrailBlazer", "TrailBlazer-EXT", "Traverse", "Trax", "Truck-10 Series", "Truck-20 Series", "Truck-30 Series", "Truck-1500 Series", "Truck-2500 Series", "Truck-3500 Series", "Truck-Avalanche 1500", "Truck-Avalanche 2500", "Truck-C3100", "Truck-C3600", "Truck-C3800", "Truck-Colorado", "Truck-Forward Control", "Truck-Kodiak", "Truck-Luv Mini Pup", "Truck-S10/S15/Sonoma", "Truck-Silverado 1500", "Truck-Silverado 2500", "Truck-Silverado 3500", "Truck-Tilt Cab", "Uplander", "Van 10", "Van 20", "Van 30", "Van Express 1500", "Van Express 2500", "Van Express 3500", "Vectra", "Vega", "Venture", "Volt", "Zafira", "Other"],
  Chrysler: ["200", "300", "300M", "", "Aspen", "Atos", "Attitude", "Cirrus", "Concorde", "Conquest", "Cordoba", "Crossfire", "E Class", "Fifth Avenue - FWD", "Fifth Avenue - RWD", "Imperial", "LeBaron", "LHS", "Laser", "New Yorker - FWD", "New Yorker - RWD", "Newport", "Pacifica", "Prowler", "PT Cruiser", "Sebring", "TC", "Saratoga", "Sebring", "Town & Country", "Voyager", "Other"],
  Citroen: ["Citroen"],
  Daewoo: ["Lanos", "Leganza", "Nubira"],
  Daihatsu: ["Charade", "Hijet", "Rocky"],
  Dodge: ["400", "600", "Aries", "Aspen", "Avenger", "Caliber", "Caravan", "Challenger (Chrysler)", "Challenger (Mitsubishi)", "Charger", "Colt-not Vista", "Colt Vista", "Cricket", "D50/Ram 50 (See also Plymouth Arrow Truck)", "Dakota", "Dart", "Daytona", "Diplomat", "Durango", "Dynasty", "Hornet", "Intrepid", "Journey", "Lancer", "Magnum", "Mirada", "Monaco", "Neon", "Nitro", "Omni", "Raider", "Ramcharger", "Rampage", "Shadow", "Spirit", "St Regis", "Stealth", "Stratus", "Truck-100 Series", "Truck-200 Series", "Truck-300 Series", "Truck-400 Series", "Truck-150", "Truck-250 Series", "Truck-350 Series", "Truck-450 Series", "Truck-2500 Series", "Truck-3500", "Truck-4500 Series", "Truck-5500 Series", "Truck-D50/Ram 50", "Truck-Dakota", "Truck-Forward Control", "Truck-Rampage", "Truck-Rampage", "Van-100", "Van-150", "Van-200", "Van 250", "Van 300", "Van 300", "Van 350", "Van 1500", "Van 2500", "Van 3500", "Van (Sprinter 2500)", "Van (Sprinter 3500)", "Verna", "Other"],
  Eagle: ["2000 GTX", "Premier", "Summit", "Talon", "Vision"],
  Ferrari: ["Ferrari"],
  Fiat: ["1100R", "124 Spider", "128", "131/Brava", "500", "600", "850", "Spider (includes 2000)", "Strada", "X 1/9", "Other"],
  Ford: ["500", "Aerostar", "Aspire", "Bronco (Full Size)", "Bronco II", "Bronco Raptor", "Bronco Sport", "C-Max", "Contour", "Cortina", "Courier", "Crown Vic", "E Transit", "Ecosport", "Edge", "Escape", "Escort", "Excursion", "EXP", "Expedition", "Explorer", "Fairlane", "Fairmont", "Falcon", "Festiva", "Fiesta", "Five Hundred", "Flex", "Focus", "Focus RS", "Freestar", "Freestyle", "Fusion", "Galaxie", "Granada", "GT", "Ikon", "KA", "LTD", "LTD IT", "Maverick", "Maverick Pickup", "Mondeo", "Mustang", "Mustang Mach E", "Pinto", "Probe", "Ranchero ", "Ranger", "Ranger Raptor", "Taurus", "Taurus X", "Tempo", "ThinkCity-Electric", "Thunderbird", "Torino", "Transit 150", "Transit 250", "Transit 350", "Transit Connect", "Truck-Courier", "Truck-F100", "Truck-F150", "Truck F150 Lightning (Electric)", "Truck-F150 Lightning (SVT Gas", "Truck-F150 Raptor", "Truck-F250 not Super Duty", "Truck-F250 Super Duty", "Truck-F350 not Super Duty", "Truck-F350 Super Duty", "Truck-F450 not Super Duty", "Truck-F450 Super Duty", "Truck-F550 Super Duty", "Truck-Forward Control", "Truck-Ranger", "Van E100", "Van E150", "Van E200", "Van E250", "Van E300", "Van E350", "Van E450 Super Duty", "Van E550 Super Duty", "Windstar", "Other"],
  Freightliner: ["Freightliner"],
  Genesis: ["G70", "G80", "G90", "GV60", "GV70", "GV80"],
  Geo: ["Metro", "Prizm", "Spectrum", "Storm", "Tracker"],
  GMC: ["Acadia", "Jimmy Full Size", "Jimmy S10 / S15", "Safari Van", "Sprint", "Suburban- 10", "Suburban- 20", "Suburban- 30", "Suburban-1000", "Suburban-1500", "Suburban-2500", "Syclone", "Terrain", "Truck-1000 Series", "Truck-1500 Series", "Truck-2500 Series", "Truck-3500 Series", "Truck-Canyon", "Truck-Envoy", "Truck-Envoy XL", "Truck-Envoy XUV", "Truck- Forward Control", "Truck-S10 / S15 / Sonoma", "Truck Sierra 1500", "Truck Sierra 2500", "Truck Sierra 3500", "Truck Sierra Denali", "Truck Sierra Denali 1500", "Truck Sierra Denali 2500", "Truck Sierra Denali 3500", "Truck-Topkick", "Truck-Yukon (except XL)", "Truck-Yukon XL1500", "Truck-Yukon XL2500", "Typhoon", "Van 1000", "Van 1500", "Van 2500", "Van 3500", "Van Savana 1500", "Van Savana 3500"],
  Honda: ["600", "Accord", "Acty", "Civic", "Clarity", "Clarity Electric", "Clarity Fuel Cell", "Crosstour", "CRV", "CRX", "CRZ", "DelSol", "Element", "FCX", "Fit", "HRV", "Insight", "Odyssey", "Passport", "Pilot", "Prelude", "Prologue", "Ridgeline", "S2000"],
  Hummer: ["Hummer H1", "Hummer H2", "Hummer H3"],
  Hyundai: ["Accent", "Azera", "Elantra", "Entourage", "Equus", "Excel", "Genesis", "Ioniq 5", "Ioniq 6", "Kona", "Kona Electric", "Nexo", "Palisade", "Pony", "Santa Cruz", "Santa Fe", "Scoupe", "Sonata", "Stellar", "Tiburon", "Tucson", "Veloster", "Venue", "Veracruz", "XG Series"],
  IH: ["Pickup &Travelall", "Scout & Scout II", "Truck (Big)"],
  Infiniti: ["EX35", "EX37", "FX", "G20", "G25", "FX50", "G20", "G25", "G35", "G37", "I30", "I35", "J30", "JX35", "M30", "M35", "M37", "M45", "M56", "Q40", "Q45", "Q50", "Q60", "Q70", "QX4", "QX30", "QX50", "QX55", "QX56", "QX60", "QX70", "QX80"],
  Isuzu: ["Amigo", "Ascender", "Axiom", "Gemini", "IMark", "Impulse", "Oasis", "Optima", "Reach", "Rodeo", "Stylus", "Trooper/Trooper II", "Truck (Big)", "Truck-(Mini Pickup)", "Truck-(Mini Pickup) Hombre", "Truck i280 (Pickup)", "Truck i290 (Pickup)", "Truck i350 (Pickup)", "Truck i370 (Pickup)", "Vehicross",],
  Jaguar: ["120", "140", "150", "E Pace", "F Pace", "F Type", "I Pace", "Mark 10", "S Type", "Sedan", "Jaguar Vanden Plas", "X Type", "XE", "XF", "XF Sportbrake", "XJ Series", "XJR ", "XJS", "XJ6", ' XJ8 ', "XK Series", "XKE", "XKR", "XK8"],
  Jeep: ["Cherokee ( Except Grand Cherokee)", "CJ Series", "Comanche", "Commander", "Compass", "DJ Series", "FC Series", "Gladiator", "Grand Cherokee", "Grand Wagoneer", "J - Series", "Jeepster", "Liberty", "Patriot", "Renegade", "Station Wagon", "Truck", "Wagoneer (Except Grand Wagoneer)", "Wrangler"],
  kaiser: ["Kaiser"],
  Kenworth: ["Kenworth"],
  Kia: ["Amanti", "Besta", "Borrego", "Cadenza", "Carnival", "EV6", "EV9", "Forte", "K5", "K900", "Magentis", "Niro", 'Niro EV', "Optima", "Rio", "Rondo", "Sedona", "Seltos", 'Sephia', "Sorento", "Soul", "Spectra", "Sportage", "Stinger", "Telluride"],
  Lamborghini: ["Lamborghini"],
  LandRover: ["Defender", "Discovery", "Discovery Sport", "Freelander", "LR2", "LR3", "LR4", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar", "Other"],
  Lexus: [" CT 200H", " ES250", " ES300", " ES350", " ES400h", " GS 200t", " GS 300", " GS 350", " GS 450h", " GX 460", " IS 200t", " IS 250", " IS 350", " IS 500", " LC 500", " LS 460", " LS 600h/LS 600h L", " LX 570", " NX 200t/NX 300/NX 300h", " RC 200t/RC 300/RC 350/RC F", " RX 350/RX 450h/RX L/RX L450h", "UX 200/UX 250h"],
  Lincoln: ["Aviator", " Blackwood", "Continental", "LS", "Mark LT", "MKC", "MKS", "MKT", "MKX", "MKZ", "Nautilus", "Navigator", "Navigator L", "Town Car"],
  Lotus: ["Evora", "Exige"],
  Maserati: ["BiTurbo", "Ghibli", "GranTurismo", "Levante", "Quattroporte"],
  Maybach: ["Maybach"],
  Mazda: ["2", "3", "5", "6", "323", "626", "808", "929", "1200", "1800", "Cosmo", "CX3", "CX5", "CX7", "CX9", "CX30", "CX50", "CX70", "CX90", "GLC", "MPV Van", "MX3", "MX6", "MX30", "Miata MX5", "Millenia", "Navajo", "Pickup-B1600", "Pickup-B1800", "Pickup-B2000", "Pickup-B2200", "Pickup-B2300", "Pickup-B2600", "Pickup-B3000", "Pickup-B4000", "Pickup-Rotary", "Protege", "RX2", "RX3", "RX4", "RX7", "RX8", "Tribute"],
  McLaren: ["540C", "570GT", "570S", "600LT", "650S", "720S", "765LT", "Artura", "GT", "MP4 12C", "P1", "Senna"],
  Mercedes: ["170", "190", "200", "218", "219", "220", "230-4 Cyl", "230-6 Cyl", "240D", "250", "260E", "280", "300D (includes CD/D/SD/TD)", "300E", "300SL", "320", "350", "380", "400", "420", "450", "500", "560", "600", "A-Class", "AMG GT", "A-Class", "B-Class", "C-Class", "CL-Class", "CLA-Class", "CLK", "CLA Class", "CLS", "E Class", "EQB Class", "EQE Class", "EQE Class SUV", "EQS Class", "EQE Class SUV", "EQS Class", "EQS Class SUV", "eSprinter 2500", "G-Class", "GL-Class", "GLA-Class", "GLB-Class", "GLC-Class", "GLE-Class", "GLK-Class", "GLS-Class", "ML Series", "Metris", "R Class", "S Class", "SL Class", "SLC Class", "SLK", "SLR", "SLS", "Sprinter 1500", "Sprinter 2500", "Sprinter 3500", "Sprinter 4500", "Truck"],
  Mercury: ["Bobcat", "Capri", "Comet", "Cougar", "Grand Marquis", "LN7", "Lynx (except LN7)", "Mariner", "Marauder", "Marquis (not Grand)", "Merkur (includes XR4TI and Scorpio)", "Milan", "Monarch", "Montego", "Monterey", "Mountaineer", "Mystique", "Sable", "Topaz", "Tracer", "Villager", "Zephyr", "other"],
  Mini: ["Austin", "Cooper", "Cooper Clubman", "Cooper Countryman", "Cooper Paceman"],
  Mitsubishi: ["3000", "Cordia", "Diamante", "Eclipse", "Eclipse Cross", "Endeavor", "Expo", "Galant", "i-MiEV", "Lancer", "Minicab", "Mirage", "Mirage", "Montero", "Montero Sport", "Outlander", "Outlander Sport", "Pickup (See also Dodge D50)", "Precis", "Raider", "RVR", "Sigma", "Space Wagon", "Starion", "Tredia", "Van"],
  Nissan: ["1200", "1600", "200SX", "210", "240SX", "240Z", "260Z", "280-Z", "280-ZX", "300ZX", "350Z", "370Z", "310", "311", "410", "411", "510", "610", "710", "810", "Almera", "Altima", "Armada", "Axxess", "B210", "Cube", "F10", "Frontier", "GTR", "Juke", "Kicks", "Leaf", "Lucino", "Maxima", "Micra", "Murano", "NV 200", "NV 1500", "NV 2500", "NV 3500", "NX", 'Pathfinder', "Patrol", "Platina", "Pulsar", "Qashqai", "Quest", "Rogue", "Rogue Sport", "Sentra", "Stanza (Excl Van)", "Tida", "Truck", "Truck-Titan", "Truck-Titan XD", "Tsubame", "UD Series", "Van GC22", "Versa", "X Trail", "Xterra", "Z"],
  Oldsmobile: ["88", "98", "Achieva", "Alero", "Aurora", "Bravada", "Calais", "Ciera", "Custom Cruiser", "Cutlass", "F85", "Firenza", "Intrigue", "Omega", "Starfire", "Supreme-Calais", "Supreme-Cutlass", 'Supreme', "Toronado"],
  peugeot: ["304", "103", "404", "405", "504", "505", "604"],
  Plymouth: ["Acclaim", "Arrow-Car", "Arrow-Truck (See also Dodge D50)", "Barracuda", "Breeze", "Caravelle", "Champ", "Cricket", "Duster", "Grand Fury", "Horizon", "Laser", "Neon", "Prowler", "Horizon", "Neon", "Prowler", "Reliant", "Sapporo", "Scamp", "Sundance", "Trailduster", "Valiant", "Van 100", "Van 150", "Van 150", "Van 200", "Van 250", "Van 300", "Van 300", "Volare", "Voyager", "Other"],
  Polestar: ["Polestar 1", "Polestar 2"],
  Pontiac: ["1000", "2000-P/J/Sunbird", "6000", "Acadian", "Astre", "Aztek", "Bonneville", "Catalina", "Fiero", "Firebird", "Firefly", "G3", "G4", "G5", "G6", "G8", "Grand AM", "Grand Prix", "GTO (New Style)", "GTO (Old Style)", "LeMans", "Matiz", "Montana", "Parisienne", "Phoenix", "Pursuit", "Solstice", "Sunbird", "Sunburst", "Sunfire", "Sunrunner", "Tempest", "Torrent", "Trans Sport", "Van-Montana", "Ventura", "Vibe", "Wave", "Other"],
  Porsche: ["356", "911/930", "912/e", "914", "918", "924", "928", "944", "968", "Boxster", "Carrera-GT", "Cayenne", "Cayman S", "Macan", "Panamera", "Taycan"],
  RAM: ["Promaster 1500", "Promaster 2500", "Promaster 3500", "Promaster City", "Truck 1500 Series", "Truck 2500 Series", "Truck 3500 Series", "Truck 4500 Series", "Truck 5500 Series"],
  Renault: ["18I", "Alliance", "Clio", "Dauphine", "Encore", "Fuego", "Gordini", "Lecar/R5", "Medallion", "Megane", "R8", "R10", "R12", "R12", "R15", "R16", "R17", "R30", "Other"],
  RollsRoyce: ["RollsRoyce"],
  Rover: ["3 Litre", "100", "2000", "3500", "3500S"],
  Saab: ["9-3", "9-5", "92x", "93", "94x", "95", "96", "97x", "99", "900 (incl Turbo)", "9000 (incl Turbo)", "Monte Carlo", "Sonett", "Sonett III"],
  Saturn: ["Astra", "Aura", "EV1", "Ion", "L Series", "S Series", "Outlook", "Relay", "Sky", "Vue"],
  Scion: ["FRS", "iA", "iM", "iQ", "tC", "xA", "xB", "xD"],
  Seat: ["Cordova", "Ibiza", "Leon", "Toledo"],
  Subaru: ["Ascent", "Baja", "BRZ", "Chaser", "Crosstrek", "Forester", "Impreza", "Justy", "Legacy", "Loyale", "Outback (Impreza)", "SOutback (Legacy)", "Sambar", "Solterra", "Streegar", "SVX", "Tribeca", "WRX", "XV Crosstrek", "XT", "Other"],
  Suzuki: ["Aerio", "Carry", "Esteem", "Equator", "Forenza", "Forsa", "Kizashi", "Reno", "Samurai", "Sidekick", "SJ410", "Swift", "SX4", "Verona", "Vitara", "X-90", "XL7"],
  Tesla: ["3", "S", "X", "Y", "Roadster"],
  Toyota: ["86", "4Runner", "Aristo", "Avalon", "BZ4X", "CHR", "Camry", "Carina", "Celica", "Corolla", "Corolla Cross", "Corolla FX/FX16", "Corolla iM", "Corona MKII", "Cressida", "Crown", "Echo", "FJ Cruiser", "FX/FX16", "GR86", "GR Corolla", "GR Supra", "Grand Highlander", "HiAce", "Highlander", "Land Cruiser", "Matrix", "Mirai", "MR2", "Paseo", "Previa", "Prius", "RAV4", "Sequoia", "Sienna", "Solara", "Starlet", "Stout", "Supra", "T100", "Tacoma", "Tercel", "Truck (except T100 & Tundra)", "Tundra", "Van (See also Previa)", "Venza", "Yaris", "Yaris iA"],
  Triumph: ["GT6", "Spitfire", "Stag", "TR2", "TR3", "TR4", "TR4A", "TR6", "TR7", "TR8", "TR250"],
  Volkswagen: ["412/411", "Arteon", "Atlas", "Atlas Cross Sport", "Beetle/Bug", "Cabrio", "Cabriolet", "CC", "Corrado", "Dasher", "Derby", "Eos", "Fox", "Golf", "Golf GTI", "ID.4", "Jetta", "Jetta GLI", "Karmann Ghia", "Passat", "Phaeton", "Pointer", "Pointer Truck", "Quantum", "Rabbit", "Routan", "Scirocco", "Sedan", "Sharan", "Taos", "Thing", "Tiguan", "Touareg", "Type 3", "Van-EuroVan", "Van-Transporter", "Van-Vanagon", "Other"],
  Volvo: ["30 Series", "40 Series", "50 Series", "60 Series", "70 Series", "80 Series", "90 Series", "120 Series", "140 Series", "240", "260", "444/445", "544", "740", "760", "780", "850", "940", "960", "1800", "C40", "F7", "FE6", "S60", "S90", "Truck", "V60", "V90", "V90", "XC40", "XC60", "XC70", "XC90"],
  Yugo: ["Yugo"],
};
const parts = [
  "Choose Part",
  "Engine Assembly",
  "Transmission",
  "ABS Control Module",
  "ABS System (Anti-Lock)",
  "AC Compressor",
  "AC Compressor Clutch",
  "AC Condenser",
  "AC Evaporator",
  "Air Bag Control Module",
  "Air Cleaner Box",
  "Air Flow Meter",
  "Air Injection Pump",
  "Alternator",
  "Axle Assembly - Front",
  "Axle Assembly - Rear",
  "Axle Housing",
  "Axle Shaft",
  "Back Glass",
  "Backup Lamp",
  "Beam Axle",
  "Bell Housing",
  "Blower Motor",
  "Body Control Module",
  "Brain Box (Engine)",
  "Brain Box (Not Engine)",
  "Brake Master Cylinder",
  "Bumper Assembly - Front",
  "Bumper Assembly - Rear",
  "Bumper Reinforcement - Front",
  "Bumper Reinforcement - Rear",
  "Camera/Projector",
  "Camshaft",
  "Car Window Lifter",
  "Car Window Regulator",
  "Carburetor",
  "Carrier Assembly",
  "Carrier Case",
  "Clutch Disc",
  "Clutch Master Cylinder",
  "Clutch Slave Cylinder",
  "Coil Spring",
  "Column Switch",
  "Communication Module",
  "Computer (Engine)",
  "Computer (Not Engine)",
  "Condenser Fan",
  "Control Arm - Lower (Front)",
  "Control Arm - Lower (Rear)",
  "Control Arm - Upper (Front)",
  "Control Arm - Upper (Rear)",
  "Convertible Top Lift",
  "Convertible Top Motor",
  "Cooling Fan",
  "Crankshaft",
  "Cruise Switch",
  "Cylinder Block",
  "Cylinder Head",
  "Dash Panel",
  "DC Converter (Inverter)",
  "Decklid",
  "Differential",
  "Differential Assembly",
  "Differential Case",
  "Differential Flange",
  "Distributor Coil",
  "DistributorCoil - Engine",
  "Door Assembly - Front",
  "Door Assembly - Rear",
  "Door Electrical Switch",
  "Door Glass - Front (Side)",
  "Door Glass - Rear (Side)",
  "Door Lock Control Module",
  "Door Vent Glass - Front (Side)",
  "Door Vent Glass - Rear (Side)",
  "Door Window Motor",
  "Door Window Regulator - Front",
  "Door Window Regulator - Rear",
  "Drive Shaft - Front",
  "Drive Shaft - Rear",
  "ECM/ECU (Engine)",
  "ECM/ECU (Not Engine)",
  "ECU (Not Engine)",
  "Electric Door Motor",
  "Electrical Switch (Door)",
  "Electronic Control Module (Engine)",
  "Electronic Control Module (Not Engine)",
  "Engine Coil",
  "Engine Computer",
  "Engine Control Module",
  "Engine Oil Cooler",
  "Exhaust Manifold",
  "Fan Blade",
  "Fan Clutch",
  "Fender",
  "Flywheel",
  "Fog Light Stalk",
  "Front Axle",
  "Front Axle I-Beam (2WD)",
  "Front Body Panel",
  "Front Bumper",
  "Front Bumper Reinforcement",
  "Front Clip",
  "Front Door Assembly",
  "Front Door Glass (Side)",
  "Front Door Hinge",
  "Front Door Vent Glass (Side)",
  "Front End Assembly",
  "Front Fender",
  "Front Side Lamp",
  "Front Spoiler",
  "Front Window Lifter",
  "Front Wiper Motor",
  "Fuel Injection Parts",
  "Fuel Pump",
  "Fuel Pump Control Module",
  "Generator",
  "GPS ScreenTV Info Screen",
  "Grille",
  "Harmonic Balancer",
  "Head Light Assembly",
  "Head Light Door",
  "Head Light Motor",
  "Head Light Switch",
  "Header Panel",
  "Heater Assembly",
  "Heater Core",
  "Heater or Air Conditioner Parts - Misc.",
  "High Mounted Stop Light",
  "Hood",
  "Hood Hinge",
  "Hub Brakes",
  "Ignition Switch",
  "Intake Manifold",
  "Intercooler",
  "Interior Light Control Module",
  "K-Frame",
  "Knee",
  "Leaf Spring - Front",
  "Leaf Spring - Rear",
  "Loaded Beam Axle",
  "Lower Control Arm - Front",
  "Lower Control Arm - Rear",
  "Navigation Control Module",
  "Oil Pan",
  "Overdrive Unit Transmission",
  "Power Brake Boosters",
  "Power Steering Pump",
  "Power Supply Control Module",
  "Power Window Motor",
  "Pressure Plate",
  "Quarter Glass",
  "Quarter Panel",
  "Quarter Window Regulator - Rear",
  "Radiator",
  "Radiator Cooling Fan",
  "Radiator Core Support",
  "Radiator Fan",
  "Radio/Audio Cowl",
  "Rear Axle",
  "Rear Body Panel",
  "Rear Bumper",
  "Rear Bumper Reinforcement",
  "Rear Clip Assembly",
  "Rear Door Assembly",
  "Rear Door Glass (Side)",
  "Rear Door Vent Glass (Side)",
  "Rear Fender",
  "Rear Independent Suspension Assembly",
  "Rear Lower Control Arm",
  "Rear Quarter Panel",
  "Rear Side Lamp",
  "Rear Spoiler",
  "Rear View Mirror",
  "Rear Window Washer Motor",
  "Rear Wiper Motor",
  "Ring Gear and Pinion Assembly",
  "Rocker Arm",
  "Roof Control Module",
  "Roof Glass",
  "SAM Control Module",
  "Seat Control Module",
  "Seat Track - Front",
  "Security System Control Module",
  "Shock Absorber",
  "Side Lamp (Front)",
  "Side Lamp (Rear)",
  "Side View Mirror",
  "Speedometer Cluster",
  "Spindle Knuckle - Front",
  "Spoiler - Front",
  "Spoiler - Rear",
  "Stabilizer Bar",
  "Starter Motor",
  "Starter Solenoid",
  "Steering Column",
  "Steering Gear - Rack & Pinion",
  "Strut",
  "Stub Axle - Rear",
  "Sun RoofMoon Roof",
  "Supercharger",
  "Suspension Compressor/Pump",
  "Suspension Control Module",
  "Suspension Crossmember",
  "Tail Finish Panel",
  "Tail Gate Hinge",
  "Tail Gate Molding",
  "Tail Gate Windor Regulator",
  "Tail Light",
  "Tail Panel",
  "Tailgate",
  "Temperature Control Module",
  "Throttle Body Assembly",
  "Timing Cover",
  "Torque Converter",
  "Torsion Bar",
  "Transfer Case",
  "Transfer Case Assembly",
  "Transmission Control Module",
  "Trunk Lid",
  "Turbocharger",
  "Turn Signal Lever",
  "Upper Control Arm - Front",
  "Upper Control Arm - Rear",
  "Vacuum Pump",
  "Valance - Front",
  "Voltage Regulator",
  "Water Pump",
  "Wheel",
  "Window Lifter",
  "Window Motor",
  "Window Regulator",
  "Window Regulator - Front",
  "Window Regulator - Rear",
  "Window Regulator (Quarter) - Rear",
  "Window Regulator (Tail Gate)",
  "Windshield Washer Motor",
  "Windshield Washer Reservoir",
  "Windshield Wiper Switch",
  "Wiper Motor - Front",
  "Wiper Motor - Rear",
  "Wiper Motor (Windshield)",
  "Wiper Transmission"
];
const engineSizes = [
  "Select Engine Size",
  "Engine Size",
  "1.5L",
  "1.6L",
  "1.7L",
  "1.8L",
  "1.9L",
  "2.0L",
  "2.1L",
  "2.2L",
  "2.3L",
  "2.4L",
  "2.5L",
  "2.6L",
  "2.7L",
  "2.8L",
  "2.9L",
  "3.0L",
  "3.1L",
  "3.2L",
  "3.3L",
  "3.4L",
  "3.5L",
  "3.6L",
  "3.7L",
  "3.8L",
  "3.9L",
  "4.0L",
  "4.1L",
  "4.2L",
  "4.3L",
  "4.4L",
  "4.5L",
  "4.6L",
  "4.7L",
  "4.8L",
  "4.9L",
  "5.0L",
  "5.1L",
  "5.2L",
  "5.3L",
  "5.4L",
  "5.5L",
  "5.6L",
  "5.7L",
  "5.8L",
  "5.9L",
  "6.0L",
  "6.1L",
  "6.2L",
  "6.3L",
  "6.4L",
  "6.5L",
  "6.6L",
  "6.7L",
  "6.8L",
  "6.9L",
  "7.0L",
  "7.1L",
  "7.2L",
  "7.3L",
  "7.4L",
  "7.5L",
  "7.6L",
  "7.7L",
  "7.8L",
  "7.9L",
  "8.0L",
  "8.1L",
  "8.2L",
  "8.3L",
  "8.4L",
  "8.5L",
  "8.6L",
  "8.7L",
  "8.8L",
  "8.9L",
  "9.0L",
  "9.1L",
  "9.2L",
  "9.3L",
  "9.4L",
  "9.5L",
  "9.6L",
  "9.7L",
  "9.8L",
  "9.9L",
  "10.0"
];;
const transmissions = [
  "Select Transmission",
  "Choose Transmission",
  "2WD / Automatic Transmission",
  "4x4 / Automatic Transmission",
  "2WD / Manual Transmission",
  "4x4 / Manual Transmission"
];

const placeholderValues = new Set([
  "Select Year",
  "Select Make",
  "Select make first",
  "Select Model",
  "Choose Part",
  "Select Part",
  "Select Engine Size",
  "Engine Size",
  "Select Transmission",
  "Choose Transmission",
]);

const fieldLabels: Record<FieldName, string> = {
  year: "Year",
  make: "Make",
  model: "Model",
  part: "Part",
  engineSize: "Engine size",
  transmission: "Transmission",
  fullName: "Full name",
  email: "Email",
  zipCode: "Zip code",
  phone: "Phone number",
};

function getFormValue(formData: FormData, name: FieldName) {
  return String(formData.get(name) ?? "").trim();
}

function validateField(name: FieldName, value: string) {
  const cleanValue = value.trim();

  if (!cleanValue || placeholderValues.has(cleanValue)) {
    return `Please enter ${fieldLabels[name].toLowerCase()}.`;
  }

  if (name === "fullName" && cleanValue.length < 2) {
    return "Please enter at least 2 characters.";
  }

  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanValue)) {
    return "Please enter a valid email address.";
  }

  if (name === "zipCode" && !/^\d{6}(?:-\d{5})?$/.test(cleanValue)) {
    return "Please enter a valid ZIP code.";
  }

  if (
    name === "phone" &&
    !/^\+?1?\s*(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/.test(cleanValue)
  ) {
    return "Please enter a valid phone number.";
  }

  return "";
}

function validateFormData(formData: FormData) {
  const nextErrors: FormErrors = {};
  const requiredFields: FieldName[] = [
    "year",
    "make",
    "model",
    "part",
    "engineSize",
    "transmission",
    "fullName",
    "email",
    "zipCode",
    "phone",
  ];

  requiredFields.forEach((field) => {
    const value = getFormValue(formData, field);
    const error = validateField(field, value);

    if (error) {
      nextErrors[field] = error;
    }
  });

  return nextErrors;
}

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  error,
  onValidate,
}: {
  label: string;
  name: FieldName;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  onValidate?: (name: FieldName, value: string) => void;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cx(
          "h-10 w-full rounded-md border bg-white px-3 text-sm text-slate-950 shadow-[0_2px_0_rgba(7,89,133,0.55)] outline-none transition focus:ring-2",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
            : "border-sky-800/40 focus:border-cyan-200 focus:ring-cyan-100",
        )}
        name={name}
        onChange={(event) => {
          onChange?.(event.target.value);
          onValidate?.(name, event.target.value);
        }}
        required
        value={value}
      >
        {options.map((option, index) => (
          <option key={`${option}-${index}`}>{option}</option>
        ))}
      </select>
      {error ? (
        <span id={`${name}-error`} className="mt-1 block text-xs font-semibold text-red-100">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function TextField({
  label,
  name,
  placeholder,
  type = "text",
  error,
  onValidate,
}: {
  label: string;
  name: FieldName;
  placeholder: string;
  type?: string;
  error?: string;
  onValidate?: (name: FieldName, value: string) => void;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cx(
          "h-10 w-full rounded-md border bg-white px-3 text-sm text-slate-950 shadow-[0_2px_0_rgba(7,89,133,0.55)] outline-none transition placeholder:text-slate-500 focus:ring-2",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
            : "border-sky-800/40 focus:border-cyan-200 focus:ring-cyan-100",
        )}
        name={name}
        onChange={(event) => onValidate?.(name, event.target.value)}
        placeholder={placeholder}
        required
        type={type}
      />
      {error ? (
        <span id={`${name}-error`} className="mt-1 block text-xs font-semibold text-red-100">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export default function VehicleSelectorForm() {
  const [selectedMake, setSelectedMake] = useState("Select Make");
  const [selectedModel, setSelectedModel] = useState("Select make first");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const modelOptions = [
    selectedMake === "Select Make" ? "Select make first" : "Select Model",
    ...(modelsByMake[selectedMake] ?? []),
  ];
  const isSending = submitStatus === "sending";

  function handleFieldValidation(name: FieldName, value: string) {
    const error = validateField(name, value);

    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };

      if (error) {
        nextErrors[name] = error;
      } else {
        delete nextErrors[name];
      }

      return nextErrors;
    });

    if (submitStatus === "error") {
      setSubmitMessage("");
      setSubmitStatus("idle");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitStatus("sending");
    setSubmitMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const validationErrors = validateFormData(formData);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setSubmitStatus("error");
        setSubmitMessage("Please correct the highlighted fields.");
        return;
      }

      setErrors({});
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
      setErrors({});
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Unable to send request. Please try again.");
    }
  }

  return (
    <form
      className="w-full max-w-xl rounded-xl border border-sky-300/30 bg-[linear-gradient(180deg,#10a8ee_0%,#0878bd_58%,#07507f_100%)] p-4 shadow-2xl shadow-black/25 sm:p-5"
      onSubmit={handleSubmit}
      id="vehicle-selector-form"
    >
      <h2 className="mb-4 text-center text-2xl font-black tracking-normal text-white sm:text-3xl">
        Find Your Part Instantly
      </h2>

      <div className="grid gap-3 sm:grid-cols-2">
        <SelectField
          label="Year"
          name="year"
          options={years}
          error={errors.year}
          onValidate={handleFieldValidation}
        />
        <SelectField
          label="Make"
          name="make"
          onChange={(make) => {
            setSelectedMake(make);
            setSelectedModel(make === "Select Make" ? "Select make first" : "Select Model");
            handleFieldValidation("model", make === "Select Make" ? "Select make first" : "Select Model");
          }}
          options={makes}
          value={selectedMake}
          error={errors.make}
          onValidate={handleFieldValidation}
        />
        <SelectField
          label="Model"
          name="model"
          onChange={setSelectedModel}
          options={modelOptions}
          value={selectedModel}
          error={errors.model}
          onValidate={handleFieldValidation}
        />
        <SelectField
          label="Part"
          name="part"
          options={parts}
          error={errors.part}
          onValidate={handleFieldValidation}
        />
        <SelectField
          label="Engine Size"
          name="engineSize"
          options={engineSizes}
          error={errors.engineSize}
          onValidate={handleFieldValidation}
        />
        <SelectField
          label="Transmission"
          name="transmission"
          options={transmissions}
          error={errors.transmission}
          onValidate={handleFieldValidation}
        />
        <TextField
          label="Full Name"
          name="fullName"
          placeholder="John Smith"
          error={errors.fullName}
          onValidate={handleFieldValidation}
        />
        <TextField
          label="Email"
          name="email"
          placeholder="john@example.com"
          type="email"
          error={errors.email}
          onValidate={handleFieldValidation}
        />
        <TextField
          label="Zip Code"
          name="zipCode"
          placeholder="12345"
          error={errors.zipCode}
          onValidate={handleFieldValidation}
        />
        <TextField
          label="Phone"
          name="phone"
          placeholder="(123) 456-7890"
          type="tel"
          error={errors.phone}
          onValidate={handleFieldValidation}
        />
      </div>

      <button
        className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-black text-slate-950 shadow-sm transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSending}
        type="submit"
      >
        {isSending ? (
          "Sending..."
        ) : (
          <>
            <span aria-hidden="true">&#128269;</span>
            <span>Find My Part</span>
          </>
        )}
      </button>

      {submitMessage ? (
        <p
          className={`mt-3 rounded-md px-4 py-3 text-center text-sm font-semibold ${submitStatus === "success"
            ? "bg-emerald-50 text-emerald-800"
            : "bg-red-50 text-red-800"
            }`}
        >
          {submitMessage}
        </p>
      ) : null}

      <a
        className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-black text-black shadow-sm transition hover:bg-blue-50"
        href="tel:7705984665"
      >
        <span className="text-black">&#9742;</span>
        <span className="text-black">(770) 598-4665</span>
      </a>

      <div className="mt-3 border-t border-white/20 pt-3 text-center text-sm text-blue-50">
        <span className="mr-2">&#9671;</span>
        Your information is secure.
      </div>
    </form>
  );
}
