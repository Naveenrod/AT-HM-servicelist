// AT-HM Service List Data
// Based on ISO 9999:2022 - Assistive products - Classification and terminology

const athmData = [
    // =====================================================
    // TISSUE INTEGRITY MANAGEMENT (ISO 04)
    // =====================================================
    {
        name: "Seat cushions and underlays for tissue integrity",
        category: "Tissue Integrity Management",
        description: "Cushions and underlays designed to prevent pressure injuries and maintain tissue integrity while seated.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "04 33 03",
        keywords: ["cushion", "seat", "pressure", "tissue integrity", "prevention"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Back cushions and back pads for tissue integrity",
        category: "Tissue Integrity Management",
        description: "Back cushions and pads designed to prevent pressure injuries and maintain tissue integrity for the back.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "04 33 04",
        keywords: ["cushion", "back", "pressure", "tissue integrity", "pad"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Assistive products for tissue integrity when lying down",
        category: "Tissue Integrity Management",
        description: "Products designed to prevent pressure injuries and maintain tissue integrity while lying down.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "04 33 06",
        keywords: ["lying", "bed", "pressure", "tissue integrity", "prevention"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Special equipment for tissue integrity",
        category: "Tissue Integrity Management",
        description: "Specialized equipment for managing and maintaining tissue integrity.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "04 33 09",
        keywords: ["special", "equipment", "tissue integrity", "pressure management"],
        conditions: "Requires prescription from qualified health professional"
    },

    // =====================================================
    // PERSONAL CARE AND PROTECTION (ISO 09)
    // =====================================================
    {
        name: "Shower chair",
        category: "Personal Care and Protection",
        description: "Chair designed for use in the shower to provide seated support during bathing.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 33 03",
        keywords: ["bathing", "shower", "seat", "hygiene"]
    },
    {
        name: "Shower stool",
        category: "Personal Care and Protection",
        description: "Stool designed for use in shower or wet areas for seated bathing.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 33 03",
        keywords: ["bathing", "shower", "seat", "hygiene"]
    },
    {
        name: "Bath board",
        category: "Personal Care and Protection",
        description: "Board that fits across the bath to provide a seated transfer surface.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 33 03",
        keywords: ["bathing", "transfer", "bath"]
    },
    {
        name: "Bath seat",
        category: "Personal Care and Protection",
        description: "Seat that fits inside the bath to lower the bathing position.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 33 03",
        keywords: ["bathing", "seat", "bath"]
    },
    {
        name: "Shower commode chair",
        category: "Personal Care and Protection",
        description: "Mobile chair with aperture for toileting that can be used over toilet or in shower.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "09 33 03",
        keywords: ["shower", "toilet", "commode", "mobile"]
    },
    {
        name: "Raised toilet seat",
        category: "Personal Care and Protection",
        description: "Seat that raises the height of an existing toilet to assist with sitting and standing.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 12 03",
        keywords: ["toilet", "raised", "seat", "height"]
    },
    {
        name: "Toilet frame",
        category: "Personal Care and Protection",
        description: "Freestanding frame placed around toilet to provide armrests for support.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 12 15",
        keywords: ["toilet", "frame", "support", "armrest"]
    },
    {
        name: "Over toilet frame with seat",
        category: "Personal Care and Protection",
        description: "Frame that fits over existing toilet with raised seat and armrests.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "09 12 03",
        keywords: ["toilet", "frame", "raised", "seat"]
    },
    {
        name: "Commode chair",
        category: "Personal Care and Protection",
        description: "Portable toilet chair for use beside bed or in rooms without toilet access.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 12 03",
        keywords: ["toilet", "commode", "portable", "bedside"]
    },
    {
        name: "Long-handled sponge",
        category: "Personal Care and Protection",
        description: "Bathing sponge with extended handle for reaching back and feet.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 33 06",
        keywords: ["bathing", "sponge", "reach", "hygiene"]
    },
    {
        name: "Long-handled toe washer",
        category: "Personal Care and Protection",
        description: "Device with extended handle designed for washing feet without bending.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 33 06",
        keywords: ["bathing", "feet", "reach", "hygiene"]
    },
    {
        name: "Dressing stick",
        category: "Personal Care and Protection",
        description: "Long stick with hooks to assist with putting on and removing clothing.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 09 03",
        keywords: ["dressing", "clothing", "reach"]
    },
    {
        name: "Button hook",
        category: "Personal Care and Protection",
        description: "Device to assist with fastening and unfastening buttons.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 09 06",
        keywords: ["dressing", "buttons", "fastening"]
    },
    {
        name: "Sock aid",
        category: "Personal Care and Protection",
        description: "Device to assist with putting on socks without bending.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 09 03",
        keywords: ["dressing", "socks", "reach"]
    },
    {
        name: "Elastic shoelaces",
        category: "Personal Care and Protection",
        description: "Elastic laces that convert lace-up shoes to slip-on style.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 09 06",
        keywords: ["dressing", "shoes", "laces"]
    },
    {
        name: "Long-handled shoehorn",
        category: "Personal Care and Protection",
        description: "Shoehorn with extended handle to assist with putting on shoes.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 09 03",
        keywords: ["dressing", "shoes", "reach"]
    },
    {
        name: "Incontinence pads",
        category: "Personal Care and Protection",
        description: "Absorbent pads for managing urinary or faecal incontinence.",
        riskLevel: "low-risk",
        status: "excluded",
        isoCode: "09 30",
        keywords: ["incontinence", "pads", "absorbent"],
        conditions: "Consumable items are not covered under AT-HM scheme"
    },
    {
        name: "Pressure care mattress overlay",
        category: "Personal Care and Protection",
        description: "Foam or air overlay placed on existing mattress to redistribute pressure.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "09 30 03",
        keywords: ["pressure", "mattress", "overlay", "prevention"]
    },
    {
        name: "Pressure care cushion",
        category: "Personal Care and Protection",
        description: "Cushion designed to redistribute pressure for wheelchair or seating use.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "09 30 03",
        keywords: ["pressure", "cushion", "wheelchair", "seating"]
    },
    {
        name: "Alternating pressure mattress",
        category: "Personal Care and Protection",
        description: "Powered mattress system with alternating air cells for pressure redistribution.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "09 30 03",
        keywords: ["pressure", "mattress", "alternating", "powered"],
        conditions: "Requires assessment by qualified health professional demonstrating clinical need"
    },
    {
        name: "Bed cradle",
        category: "Personal Care and Protection",
        description: "Frame to keep bedding weight off legs or feet.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 30 06",
        keywords: ["bed", "cradle", "bedding", "legs"]
    },
    {
        name: "Bed lever/rail",
        category: "Personal Care and Protection",
        description: "Rail that attaches to bed to assist with repositioning and transfers.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "09 30 06",
        keywords: ["bed", "rail", "lever", "transfer"]
    },
    {
        name: "Bed rope ladder",
        category: "Personal Care and Protection",
        description: "Rope ladder attached to bed end to assist with sitting up in bed.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 30 06",
        keywords: ["bed", "ladder", "sitting", "repositioning"]
    },
    {
        name: "Electric adjustable bed",
        category: "Personal Care and Protection",
        description: "Bed with electric motor for adjusting head and foot height.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "09 30 06",
        keywords: ["bed", "electric", "adjustable", "motor"],
        conditions: "Requires assessment demonstrating inability to safely use manual alternatives"
    },
    {
        name: "Bed wedge/pillow",
        category: "Personal Care and Protection",
        description: "Foam wedge for positioning in bed to elevate head or legs.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "09 30 06",
        keywords: ["bed", "wedge", "pillow", "positioning"]
    },

    // =====================================================
    // MOBILITY (ISO 12)
    // =====================================================
    {
        name: "Walking stick (single point)",
        category: "Mobility",
        description: "Single point walking stick for balance and support during walking.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "12 03 03",
        keywords: ["walking", "stick", "cane", "balance"]
    },
    {
        name: "Quad stick (four point)",
        category: "Mobility",
        description: "Walking stick with four-point base for greater stability.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "12 03 06",
        keywords: ["walking", "stick", "quad", "stability"]
    },
    {
        name: "Walking frame (standard)",
        category: "Mobility",
        description: "Basic walking frame with four legs for stability during walking.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "12 06 03",
        keywords: ["walking", "frame", "zimmer", "stability"]
    },
    {
        name: "Walking frame with wheels",
        category: "Mobility",
        description: "Walking frame with front wheels for easier mobility.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "12 06 06",
        keywords: ["walking", "frame", "wheels", "rollator"]
    },
    {
        name: "Rollator (four-wheeled walker)",
        category: "Mobility",
        description: "Four-wheeled walker with seat, brakes and basket for outdoor mobility.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "12 06 06",
        keywords: ["rollator", "walker", "wheels", "outdoor"]
    },
    {
        name: "Forearm support frame",
        category: "Mobility",
        description: "Walking frame with forearm troughs for users who cannot grip handles.",
        riskLevel: "prescribed",
        status: "included",
        isoCode: "12 06 09",
        keywords: ["walking", "frame", "forearm", "gutter"]
    },
    {
        name: "Manual wheelchair (basic)",
        category: "Mobility",
        description: "Basic self-propelled or attendant-propelled wheelchair.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "12 22 03",
        keywords: ["wheelchair", "manual", "self-propelled"]
    },
    {
        name: "Manual wheelchair (custom)",
        category: "Mobility",
        description: "Custom-configured manual wheelchair with specific seating and positioning.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 22 03",
        keywords: ["wheelchair", "manual", "custom", "configured"],
        conditions: "Requires prescription and assessment by qualified prescriber"
    },
    {
        name: "Power wheelchair",
        category: "Mobility",
        description: "Electric powered wheelchair for users who cannot self-propel.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 23 03",
        keywords: ["wheelchair", "power", "electric", "motorized"],
        conditions: "Requires comprehensive assessment demonstrating inability to use manual wheelchair"
    },
    {
        name: "Wheelchair cushion (basic)",
        category: "Mobility",
        description: "Basic foam cushion for wheelchair comfort and positioning.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "12 27 03",
        keywords: ["wheelchair", "cushion", "foam", "seating"]
    },
    {
        name: "Wheelchair cushion (pressure relieving)",
        category: "Mobility",
        description: "Specialized cushion for pressure redistribution in wheelchair users.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "12 27 03",
        keywords: ["wheelchair", "cushion", "pressure", "seating"]
    },
    {
        name: "Mobility scooter",
        category: "Mobility",
        description: "Electric scooter for outdoor mobility for people who can sit upright.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 23 06",
        keywords: ["scooter", "mobility", "electric", "outdoor"],
        conditions: "Requires assessment demonstrating need and safe operation ability"
    },
    {
        name: "Portable ramp (folding)",
        category: "Mobility",
        description: "Folding portable ramp for accessing small steps or kerbs.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "12 18 03",
        keywords: ["ramp", "portable", "folding", "access"]
    },
    {
        name: "Threshold ramp",
        category: "Mobility",
        description: "Small ramp for navigating door thresholds.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "12 18 03",
        keywords: ["ramp", "threshold", "door", "access"]
    },
    {
        name: "Transfer board",
        category: "Mobility",
        description: "Board for sliding transfers between surfaces such as bed to wheelchair.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "12 31 03",
        keywords: ["transfer", "board", "sliding", "wheelchair"]
    },
    {
        name: "Transfer belt",
        category: "Mobility",
        description: "Belt worn around waist to provide grip points during assisted transfers.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "12 31 06",
        keywords: ["transfer", "belt", "gait", "assist"]
    },
    {
        name: "Standing hoist",
        category: "Mobility",
        description: "Hoist that assists person to stand from seated position.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 03",
        keywords: ["hoist", "standing", "transfer", "lift"],
        conditions: "Requires assessment by qualified health professional"
    },
    {
        name: "Ceiling hoist system",
        category: "Mobility",
        description: "Ceiling-mounted track and hoist system for transfers.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 03",
        keywords: ["hoist", "ceiling", "track", "transfer"],
        conditions: "Requires comprehensive assessment and home modification approval"
    },
    {
        name: "Mobile floor hoist",
        category: "Mobility",
        description: "Portable floor-standing hoist for lifting and transferring.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 03",
        keywords: ["hoist", "mobile", "floor", "portable"],
        conditions: "Requires assessment by qualified health professional"
    },
    {
        name: "Hoist sling",
        category: "Mobility",
        description: "Fabric sling used with hoists for lifting and transfers.",
        riskLevel: "prescribed",
        status: "included",
        isoCode: "12 36 06",
        keywords: ["hoist", "sling", "lifting", "transfer"]
    },

    // Wheelchair accessories
    {
        name: "Devices to connect a wheelchair to a bicycle",
        category: "Mobility",
        description: "Devices that allow connection of a wheelchair to a bicycle for transportation.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 24 39",
        keywords: ["wheelchair", "bicycle", "connect", "transport"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Devices to facilitate wheelchair movement up and down stairs",
        category: "Mobility",
        description: "Devices to which a wheelchair is attached that facilitate movement up and down stairs.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 24 42",
        keywords: ["wheelchair", "stairs", "stair climber", "transport"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Devices attached to wheelchairs to hold or carry objects",
        category: "Mobility",
        description: "Accessories attached to wheelchairs for holding or carrying objects.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 24 45",
        keywords: ["wheelchair", "carry", "hold", "accessory"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Devices to check surroundings of wheelchairs",
        category: "Mobility",
        description: "Devices that help wheelchair users check their surroundings.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 24 48",
        keywords: ["wheelchair", "surroundings", "mirror", "safety"],
        conditions: "Requires prescription from qualified health professional"
    },

    // Accessories for wheelchair seating
    {
        name: "Back supports for wheelchairs",
        category: "Mobility",
        description: "Back support accessories designed specifically for wheelchairs.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 25 03",
        keywords: ["wheelchair", "back", "support", "seating"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Seat cushions and underlays for wheelchairs",
        category: "Mobility",
        description: "Cushions and underlays designed for wheelchair seating.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 25 06",
        keywords: ["wheelchair", "cushion", "seat", "underlay"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Arm supports for wheelchairs",
        category: "Mobility",
        description: "Arm support accessories for wheelchairs.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 25 09",
        keywords: ["wheelchair", "arm", "support", "armrest"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Head supports and neck supports for wheelchairs",
        category: "Mobility",
        description: "Head and neck support accessories for wheelchairs.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 25 12",
        keywords: ["wheelchair", "head", "neck", "support"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Leg supports and foot supports for wheelchairs",
        category: "Mobility",
        description: "Leg and foot support accessories for wheelchairs.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 25 15",
        keywords: ["wheelchair", "leg", "foot", "support"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Trunk supports and pelvic supports for wheelchairs",
        category: "Mobility",
        description: "Trunk and pelvic support accessories for wheelchairs.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 25 18",
        keywords: ["wheelchair", "trunk", "pelvic", "support"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Lap trays for wheelchairs",
        category: "Mobility",
        description: "Lap trays designed for use with wheelchairs.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 25 24",
        keywords: ["wheelchair", "lap", "tray", "table"],
        conditions: "Requires prescription from qualified health professional"
    },

    // Diverse human powered vehicles
    {
        name: "Crawlers and mobility boards",
        category: "Mobility",
        description: "Crawlers and mobility boards for floor-level movement.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 27 15",
        keywords: ["crawler", "mobility board", "floor", "movement"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Manually powered stand-on mobility devices",
        category: "Mobility",
        description: "Stand-on mobility devices powered manually by the user.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 27 24",
        keywords: ["stand-on", "mobility", "manual", "device"],
        conditions: "Requires prescription from qualified health professional"
    },

    // Changing body position
    {
        name: "Assistive products for sliding and turning",
        category: "Mobility",
        description: "Products that assist with sliding and turning movements for repositioning.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 31 03",
        keywords: ["sliding", "turning", "transfer", "repositioning"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Turntables",
        category: "Mobility",
        description: "Turntable devices that assist with rotating movements during transfers.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 31 06",
        keywords: ["turntable", "rotating", "transfer", "pivot"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Non-mounted rails for self-lifting",
        category: "Mobility",
        description: "Rails that are not mounted to walls or floors for self-lifting assistance.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 31 09",
        keywords: ["rail", "self-lifting", "portable", "support"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Grip ladders",
        category: "Mobility",
        description: "Ladder-style gripping aids for pulling oneself up from lying or seated positions.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 31 12",
        keywords: ["grip", "ladder", "pull-up", "repositioning"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Lifting belts and harnesses",
        category: "Mobility",
        description: "Belts and harnesses used to assist with lifting and transferring.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 31 15",
        keywords: ["belt", "harness", "lifting", "transfer"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Transfer platforms",
        category: "Mobility",
        description: "Platforms designed to assist with transfers between surfaces.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 31 21",
        keywords: ["platform", "transfer", "surface", "mobility"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Lifting seats and mattresses",
        category: "Mobility",
        description: "Seats and mattresses with lifting mechanisms to assist with standing.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 31 24",
        keywords: ["lifting", "seat", "mattress", "standing"],
        conditions: "Requires prescription from qualified health professional"
    },

    // Lifting persons
    {
        name: "Mobile hoists for transferring person in sitting position with sling seats",
        category: "Mobility",
        description: "Mobile hoists with sling seats for transferring a person in sitting position.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 03",
        keywords: ["hoist", "mobile", "sling", "sitting", "transfer"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Mobile hoists for transferring person in standing position",
        category: "Mobility",
        description: "Mobile hoists designed to transfer a person while in standing position.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 04",
        keywords: ["hoist", "mobile", "standing", "transfer"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Mobile hoists for transferring person in sitting position with solid seats",
        category: "Mobility",
        description: "Mobile hoists with solid seats for transferring a person in sitting position.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 06",
        keywords: ["hoist", "mobile", "solid seat", "sitting", "transfer"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Mobile hoists for transferring person in lying position",
        category: "Mobility",
        description: "Mobile hoists designed to transfer a person while in lying position.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 09",
        keywords: ["hoist", "mobile", "lying", "supine", "transfer"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Stationary hoists fixed to walls, floor or ceiling",
        category: "Mobility",
        description: "Hoists that are permanently fixed to walls, floor or ceiling.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 12",
        keywords: ["hoist", "stationary", "fixed", "ceiling", "wall"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Stationary hoists fixed to or mounted on another product",
        category: "Mobility",
        description: "Hoists that are fixed to or mounted in or on another product.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 15",
        keywords: ["hoist", "stationary", "mounted", "attached"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Stationary free-standing hoists",
        category: "Mobility",
        description: "Free-standing hoists that do not require mounting.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 18",
        keywords: ["hoist", "stationary", "free-standing", "portable"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Body support units for hoists",
        category: "Mobility",
        description: "Body support units and slings used with hoists for lifting.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "12 36 21",
        keywords: ["hoist", "body support", "sling", "unit"],
        conditions: "Requires prescription from qualified health professional"
    },

    // =====================================================
    // COMMUNICATION AND INFORMATION (ISO 22)
    // =====================================================
    {
        name: "Magnifying glass (handheld)",
        category: "Communication and Information",
        description: "Handheld magnifier for reading small print.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "22 03 03",
        keywords: ["magnifier", "reading", "vision", "handheld"]
    },
    {
        name: "Magnifying lamp",
        category: "Communication and Information",
        description: "Combined lamp and magnifier for reading and detailed tasks.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "22 03 06",
        keywords: ["magnifier", "lamp", "reading", "light"]
    },
    {
        name: "Electronic magnifier (portable)",
        category: "Communication and Information",
        description: "Portable electronic device with camera and screen for magnification.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "22 03 09",
        keywords: ["magnifier", "electronic", "CCTV", "portable"]
    },
    {
        name: "Desktop video magnifier",
        category: "Communication and Information",
        description: "Desktop electronic magnifier with camera and large screen.",
        riskLevel: "under-advice",
        status: "conditional",
        isoCode: "22 03 09",
        keywords: ["magnifier", "desktop", "CCTV", "video"],
        conditions: "Requires assessment demonstrating need beyond portable options"
    },
    {
        name: "Large button telephone",
        category: "Communication and Information",
        description: "Telephone with large buttons and display for ease of use.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "22 24 03",
        keywords: ["telephone", "buttons", "large", "vision"]
    },
    {
        name: "Amplified telephone",
        category: "Communication and Information",
        description: "Telephone with volume amplification for hearing impaired users.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "22 24 06",
        keywords: ["telephone", "amplified", "hearing", "volume"]
    },
    {
        name: "Personal amplifier",
        category: "Communication and Information",
        description: "Portable device that amplifies sound for hearing impaired users.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "22 06 12",
        keywords: ["amplifier", "hearing", "personal", "sound"]
    },
    {
        name: "Vibrating alert device",
        category: "Communication and Information",
        description: "Device that alerts through vibration for people with hearing impairment.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "22 27 03",
        keywords: ["alert", "vibrating", "hearing", "alarm"]
    },
    {
        name: "Flashing doorbell",
        category: "Communication and Information",
        description: "Doorbell with flashing light indicator for hearing impaired users.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "22 27 06",
        keywords: ["doorbell", "flashing", "hearing", "alert"]
    },
    {
        name: "Communication board (basic)",
        category: "Communication and Information",
        description: "Board with pictures or symbols for non-verbal communication.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "22 21 03",
        keywords: ["communication", "board", "AAC", "symbols"]
    },
    {
        name: "Speech generating device",
        category: "Communication and Information",
        description: "Electronic device that produces speech output for communication.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "22 21 06",
        keywords: ["communication", "speech", "AAC", "device"],
        conditions: "Requires assessment by speech pathologist or qualified prescriber"
    },
    {
        name: "Hearing aid",
        category: "Communication and Information",
        description: "Device worn in or behind the ear to amplify sound.",
        riskLevel: "prescribed",
        status: "excluded",
        isoCode: "22 06 03",
        keywords: ["hearing", "aid", "amplification"],
        conditions: "Available through Australian Government Hearing Services Program"
    },
    {
        name: "Large print books",
        category: "Communication and Information",
        description: "Books printed in larger font for vision impaired readers.",
        riskLevel: "low-risk",
        status: "excluded",
        isoCode: "22 12 03",
        keywords: ["books", "large print", "reading", "vision"],
        conditions: "Consumable items not covered"
    },

    // =====================================================
    // HOUSEHOLD AND DOMESTIC (ISO 15)
    // =====================================================
    {
        name: "Kettle tipper",
        category: "Household and Domestic",
        description: "Frame to safely pour from a kettle without lifting.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 03 03",
        keywords: ["kettle", "kitchen", "pouring", "tipper"]
    },
    {
        name: "Jar opener",
        category: "Household and Domestic",
        description: "Device to assist with opening jars and bottles.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 03 06",
        keywords: ["jar", "opener", "kitchen", "grip"]
    },
    {
        name: "Non-slip mat",
        category: "Household and Domestic",
        description: "Mat with non-slip surface to stabilize items during use.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 03 09",
        keywords: ["non-slip", "mat", "kitchen", "stability"]
    },
    {
        name: "Adapted cutlery",
        category: "Household and Domestic",
        description: "Cutlery with modified handles for easier grip.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 03",
        keywords: ["cutlery", "adapted", "eating", "grip"]
    },
    {
        name: "Plate guard",
        category: "Household and Domestic",
        description: "Clip-on guard for plates to assist with scooping food.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 06",
        keywords: ["plate", "guard", "eating", "scooping"]
    },
    {
        name: "Two-handled cup",
        category: "Household and Domestic",
        description: "Cup with two handles for steadier grip when drinking.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 09",
        keywords: ["cup", "drinking", "handles", "grip"]
    },
    {
        name: "Nosey cup",
        category: "Household and Domestic",
        description: "Cup with cutout section to drink without tilting head back.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 09",
        keywords: ["cup", "drinking", "nosey", "dysphagia"]
    },
    {
        name: "One-handed chopping board",
        category: "Household and Domestic",
        description: "Chopping board with spikes and edges to hold food while cutting with one hand.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 03 06",
        keywords: ["chopping", "kitchen", "one-handed", "cutting"]
    },
    {
        name: "Key turner",
        category: "Household and Domestic",
        description: "Handle that attaches to key for easier turning.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 03",
        keywords: ["key", "turner", "grip", "door"]
    },
    {
        name: "Tap turner",
        category: "Household and Domestic",
        description: "Device to assist with turning taps on and off.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 06",
        keywords: ["tap", "turner", "grip", "bathroom"]
    },
    {
        name: "Pick up reacher",
        category: "Household and Domestic",
        description: "Long-handled grabber for picking up items from floor or height.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 09",
        keywords: ["reacher", "grabber", "picking", "reach"]
    },
    {
        name: "Perching stool",
        category: "Household and Domestic",
        description: "Angled stool for resting while performing standing tasks.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 12",
        keywords: ["stool", "perching", "standing", "rest"]
    },
    {
        name: "Kitchen trolley",
        category: "Household and Domestic",
        description: "Wheeled trolley for transporting items around the home.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 15",
        keywords: ["trolley", "kitchen", "transport", "wheels"]
    },

    // Preparing food and drink
    {
        name: "Assistive products for weighing and measuring to prepare food and drink",
        category: "Household and Domestic",
        description: "Products to assist with weighing and measuring ingredients for food and drink preparation.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 03 03",
        keywords: ["weighing", "measuring", "kitchen", "food preparation"]
    },
    {
        name: "Assistive products for cutting, chopping and dividing to prepare food and drink",
        category: "Household and Domestic",
        description: "Products to assist with cutting, chopping and dividing food and drink items.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 03 09",
        keywords: ["cutting", "chopping", "dividing", "kitchen", "food preparation"]
    },
    {
        name: "Assistive products for cleaning and peeling",
        category: "Household and Domestic",
        description: "Products to assist with cleaning and peeling food items.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 03 12",
        keywords: ["cleaning", "peeling", "kitchen", "food preparation"]
    },
    {
        name: "Assistive products for baking",
        category: "Household and Domestic",
        description: "Products to assist with baking activities.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 03 15",
        keywords: ["baking", "kitchen", "cooking", "food preparation"]
    },

    // Dishwashing
    {
        name: "Dishwashing brushes and flask brushes",
        category: "Household and Domestic",
        description: "Brushes designed for washing dishes and flasks.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 06 06",
        keywords: ["dishwashing", "brush", "flask", "cleaning"]
    },
    {
        name: "Dish drying racks",
        category: "Household and Domestic",
        description: "Racks for drying dishes after washing.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 06 09",
        keywords: ["dish", "drying", "rack", "kitchen"]
    },
    {
        name: "Dishcloth wringers",
        category: "Household and Domestic",
        description: "Devices to wring out dishcloths.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 06 15",
        keywords: ["dishcloth", "wringer", "kitchen", "cleaning"]
    },

    // Eating and drinking
    {
        name: "Assistive products for service and storing food and drink",
        category: "Household and Domestic",
        description: "Products to assist with serving and storing food and drink.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 03",
        keywords: ["service", "storing", "food", "drink"]
    },
    {
        name: "Food dispensers",
        category: "Household and Domestic",
        description: "Devices for dispensing food items.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 06",
        keywords: ["food", "dispenser", "eating", "kitchen"]
    },
    {
        name: "Stoppers and funnels",
        category: "Household and Domestic",
        description: "Stoppers and funnels for food and drink containers.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "19 09 09",
        keywords: ["stopper", "funnel", "container", "pouring"]
    },
    {
        name: "Cutlery, chopsticks, straws",
        category: "Household and Domestic",
        description: "Eating utensils including cutlery, chopsticks and straws.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 13",
        keywords: ["cutlery", "chopsticks", "straws", "eating"]
    },
    {
        name: "Mugs, glasses, cups, and saucers",
        category: "Household and Domestic",
        description: "Drinking vessels including mugs, glasses, cups and saucers.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 16",
        keywords: ["mug", "glass", "cup", "saucer", "drinking"]
    },
    {
        name: "Plates and bowls",
        category: "Household and Domestic",
        description: "Plates and bowls for serving and eating food.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 18",
        keywords: ["plate", "bowl", "eating", "serving"]
    },
    {
        name: "Food guards",
        category: "Household and Domestic",
        description: "Guards to prevent food from falling off plates.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 21",
        keywords: ["food", "guard", "plate", "eating"]
    },
    {
        name: "Egg cups",
        category: "Household and Domestic",
        description: "Cups designed for holding eggs while eating.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 09 24",
        keywords: ["egg", "cup", "eating", "breakfast"]
    },
    {
        name: "Feeding apparatus",
        category: "Household and Domestic",
        description: "Specialized feeding apparatus for individuals requiring assisted feeding.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "15 09 27",
        keywords: ["feeding", "apparatus", "assisted", "eating"],
        conditions: "Requires prescription from qualified health professional"
    },

    // Housecleaning
    {
        name: "Dustpans, dust brushes and dust brooms",
        category: "Household and Domestic",
        description: "Cleaning tools including dustpans, dust brushes and brooms.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 03",
        keywords: ["dustpan", "brush", "broom", "cleaning"]
    },
    {
        name: "Brushes, sponges, chamois leathers, dusters and floorcloths",
        category: "Household and Domestic",
        description: "Various cleaning materials including brushes, sponges, chamois, dusters and floorcloths.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 06",
        keywords: ["brush", "sponge", "chamois", "duster", "floorcloth", "cleaning"]
    },
    {
        name: "Vacuum cleaners",
        category: "Household and Domestic",
        description: "Vacuum cleaners for household cleaning.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 09",
        keywords: ["vacuum", "cleaner", "cleaning", "floor"]
    },
    {
        name: "Carpet sweepers for dry use",
        category: "Household and Domestic",
        description: "Manual carpet sweepers for dry cleaning of carpets.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 12",
        keywords: ["carpet", "sweeper", "cleaning", "dry"]
    },
    {
        name: "Floor mopping equipment",
        category: "Household and Domestic",
        description: "Equipment for mopping floors.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 12 22",
        keywords: ["floor", "mop", "mopping", "cleaning"]
    },

    // Making and maintaining textiles for domestic use
    {
        name: "Scissors",
        category: "Household and Domestic",
        description: "Scissors for cutting textiles and other materials.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 15 21",
        keywords: ["scissors", "cutting", "textile", "sewing"]
    },
    {
        name: "Ironing machines and irons",
        category: "Household and Domestic",
        description: "Machines and irons for pressing textiles.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 15 24",
        keywords: ["ironing", "machine", "iron", "textile"]
    },
    {
        name: "Ironing boards and ironing tables",
        category: "Household and Domestic",
        description: "Boards and tables for ironing textiles.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 15 27",
        keywords: ["ironing", "board", "table", "textile"]
    },
    {
        name: "Laundry baskets on castors",
        category: "Household and Domestic",
        description: "Wheeled laundry baskets for easy transport.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 15 30",
        keywords: ["laundry", "basket", "castor", "wheel", "transport"]
    },
    {
        name: "Wringers for laundry",
        category: "Household and Domestic",
        description: "Wringers for removing excess water from laundry.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 15 36",
        keywords: ["wringer", "laundry", "water", "textile"]
    },
    {
        name: "Clothespins",
        category: "Household and Domestic",
        description: "Pins for hanging clothes to dry.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 15 39",
        keywords: ["clothespin", "peg", "drying", "laundry"]
    },
    {
        name: "Assistive products for drying clothes",
        category: "Household and Domestic",
        description: "Products to assist with drying clothes. Note: tumble dryers and spin dryers are conditional inclusions.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 15 43",
        keywords: ["drying", "clothes", "laundry", "dryer"]
    },
    {
        name: "Shoe cleaning devices",
        category: "Household and Domestic",
        description: "Devices for cleaning shoes.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 15 48",
        keywords: ["shoe", "cleaning", "device", "footwear"]
    },

    // Gardening and lawn care for domestic use
    {
        name: "Tools for outdoor gardening",
        category: "Household and Domestic",
        description: "Tools for outdoor gardening activities.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 18 03",
        keywords: ["gardening", "tools", "outdoor", "garden"]
    },
    {
        name: "Assistive products for protecting the body while gardening",
        category: "Household and Domestic",
        description: "Products to protect the body during gardening activities.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 18 09",
        keywords: ["gardening", "protection", "body", "safety"]
    },
    {
        name: "Tools for indoor gardening and flower arranging",
        category: "Household and Domestic",
        description: "Tools for indoor gardening and flower arranging activities.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "15 18 12",
        keywords: ["gardening", "indoor", "flower", "arranging"]
    },

    // =====================================================
    // HOME MODIFICATIONS (ISO 18)
    // =====================================================
    {
        name: "Grab rail installation",
        category: "Home Modifications",
        description: "Fixed grab rails installed in bathroom, toilet or other areas.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 18 03",
        keywords: ["grab rail", "bathroom", "toilet", "support"]
    },
    {
        name: "Removable grab rails and handgrips",
        category: "Home Modifications",
        description: "Removable grab rails and handgrips for temporary or portable support in various locations.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 18 10",
        keywords: ["grab rail", "handgrip", "removable", "portable", "support"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Ramp installation (minor)",
        category: "Home Modifications",
        description: "Installation of small ramps for access (up to 3 steps).",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 30 03",
        keywords: ["ramp", "access", "steps", "installation"]
    },
    {
        name: "Ramp installation (major)",
        category: "Home Modifications",
        description: "Installation of larger ramps requiring structural work.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 30 03",
        keywords: ["ramp", "access", "structural", "installation"],
        conditions: "Requires OT assessment and building approval"
    },
    {
        name: "Handrail installation",
        category: "Home Modifications",
        description: "Fixed handrails installed along stairs, corridors or ramps.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 18 06",
        keywords: ["handrail", "stairs", "corridor", "support"]
    },
    {
        name: "Lever tap replacement",
        category: "Home Modifications",
        description: "Replacement of round taps with lever-style taps.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "18 09 03",
        keywords: ["tap", "lever", "bathroom", "kitchen"]
    },
    {
        name: "Door handle replacement (lever)",
        category: "Home Modifications",
        description: "Replacement of round door knobs with lever handles.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "18 09 06",
        keywords: ["door", "handle", "lever", "access"]
    },
    {
        name: "Door widening",
        category: "Home Modifications",
        description: "Structural modification to widen doorways for wheelchair access.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 09 09",
        keywords: ["door", "widening", "wheelchair", "structural"],
        conditions: "Requires OT assessment and building approval"
    },
    {
        name: "Bathroom modification (minor)",
        category: "Home Modifications",
        description: "Minor bathroom modifications such as non-slip flooring, grab rails.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 12 03",
        keywords: ["bathroom", "modification", "flooring", "safety"]
    },
    {
        name: "Bathroom modification (major)",
        category: "Home Modifications",
        description: "Major bathroom modifications including shower conversion, layout changes.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 03",
        keywords: ["bathroom", "modification", "shower", "structural"],
        conditions: "Requires OT assessment, building approval and may require co-contribution"
    },
    {
        name: "Step-free shower installation",
        category: "Home Modifications",
        description: "Removal of shower hob or bath to create step-free shower access.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 06",
        keywords: ["shower", "step-free", "accessible", "bathroom"],
        conditions: "Requires OT assessment and building compliance"
    },
    {
        name: "Stairlift installation",
        category: "Home Modifications",
        description: "Motorized chair lift installed on staircase.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 30 06",
        keywords: ["stairlift", "stairs", "lift", "access"],
        conditions: "Requires comprehensive assessment demonstrating need and feasibility"
    },
    {
        name: "Platform lift installation",
        category: "Home Modifications",
        description: "Vertical platform lift for wheelchair users.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 30 09",
        keywords: ["lift", "platform", "wheelchair", "vertical"],
        conditions: "Requires comprehensive assessment, building approval, significant cost"
    },
    {
        name: "Kitchen modification",
        category: "Home Modifications",
        description: "Modification of kitchen including bench heights, accessible storage.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 09 12",
        keywords: ["kitchen", "modification", "bench", "accessible"],
        conditions: "Requires OT assessment demonstrating functional need"
    },
    {
        name: "Lighting improvement",
        category: "Home Modifications",
        description: "Installation of improved lighting for safety and visibility.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "18 06 03",
        keywords: ["lighting", "safety", "visibility", "home"]
    },
    {
        name: "Non-slip flooring installation",
        category: "Home Modifications",
        description: "Installation of non-slip flooring in wet areas or high-risk zones.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 06 06",
        keywords: ["flooring", "non-slip", "safety", "bathroom"]
    },
    {
        name: "Smart home automation",
        category: "Home Modifications",
        description: "Installation of automated controls for lights, doors, appliances.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 06 09",
        keywords: ["smart home", "automation", "controls", "electronic"],
        conditions: "Requires assessment demonstrating functional need and capability to operate"
    },

    // =====================================================
    // RECREATION AND LEISURE (ISO 30)
    // =====================================================
    {
        name: "Playing card holder",
        category: "Recreation and Leisure",
        description: "Device to hold playing cards for people with limited hand function.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "30 09 03",
        keywords: ["cards", "holder", "games", "recreation"]
    },
    {
        name: "Book holder/stand",
        category: "Recreation and Leisure",
        description: "Stand to hold books open for reading without hand support.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "30 03 03",
        keywords: ["book", "holder", "reading", "stand"]
    },
    {
        name: "Page turner (manual)",
        category: "Recreation and Leisure",
        description: "Device to assist turning pages without fine finger control.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "30 03 06",
        keywords: ["page", "turner", "reading", "book"]
    },
    {
        name: "Page turner (electric)",
        category: "Recreation and Leisure",
        description: "Electric device that automatically turns pages.",
        riskLevel: "under-advice",
        status: "conditional",
        isoCode: "30 03 06",
        keywords: ["page", "turner", "electric", "reading"],
        conditions: "Requires assessment demonstrating need beyond manual options"
    },
    {
        name: "Exercise bike (recumbent)",
        category: "Recreation and Leisure",
        description: "Stationary exercise bike with reclined seating position.",
        riskLevel: "under-advice",
        status: "conditional",
        isoCode: "30 18 03",
        keywords: ["exercise", "bike", "fitness", "recumbent"],
        conditions: "Requires clinical justification demonstrating therapeutic benefit"
    },
    {
        name: "Swimming pool equipment",
        category: "Recreation and Leisure",
        description: "Equipment for accessing and using swimming pools.",
        riskLevel: "prescribed",
        status: "excluded",
        isoCode: "30 18 06",
        keywords: ["swimming", "pool", "recreation"],
        conditions: "Not available under AT-HM scheme"
    },
    {
        name: "Gardening tools (adapted)",
        category: "Recreation and Leisure",
        description: "Gardening tools with modified handles for easier grip.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "30 15 03",
        keywords: ["gardening", "tools", "adapted", "outdoor"]
    },
    {
        name: "Gardening kneeler/seat",
        category: "Recreation and Leisure",
        description: "Kneeler that converts to seat for gardening activities.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "30 15 06",
        keywords: ["gardening", "kneeler", "seat", "outdoor"]
    },

    // =====================================================
    // SAFETY AND EMERGENCY (ISO 28)
    // =====================================================
    {
        name: "Personal alarm pendant",
        category: "Safety and Emergency",
        description: "Wearable alarm device to call for help in emergency.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "28 03 03",
        keywords: ["alarm", "pendant", "emergency", "personal"]
    },
    {
        name: "Fall detector",
        category: "Safety and Emergency",
        description: "Device that automatically detects falls and alerts carers.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "28 03 06",
        keywords: ["fall", "detector", "alarm", "automatic"]
    },
    {
        name: "Medication reminder device",
        category: "Safety and Emergency",
        description: "Device that provides reminders to take medication.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "28 06 03",
        keywords: ["medication", "reminder", "alarm", "pill"]
    },
    {
        name: "Automatic medication dispenser",
        category: "Safety and Emergency",
        description: "Electronic device that dispenses medication at set times.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "28 06 06",
        keywords: ["medication", "dispenser", "automatic", "electronic"]
    },
    {
        name: "Sensor mat (bed/chair)",
        category: "Safety and Emergency",
        description: "Pressure sensor mat that alerts when person leaves bed or chair.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "28 09 03",
        keywords: ["sensor", "mat", "alert", "bed"]
    },
    {
        name: "GPS tracker",
        category: "Safety and Emergency",
        description: "Device to track location of person who may wander.",
        riskLevel: "under-advice",
        status: "conditional",
        isoCode: "28 09 06",
        keywords: ["GPS", "tracker", "location", "wandering"],
        conditions: "For people with cognitive impairment at risk of wandering"
    },
    {
        name: "Door/window sensor",
        category: "Safety and Emergency",
        description: "Sensor that alerts when doors or windows are opened.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "28 09 09",
        keywords: ["door", "window", "sensor", "alert"]
    },
    {
        name: "Carbon monoxide detector",
        category: "Safety and Emergency",
        description: "Detector that alerts to presence of carbon monoxide.",
        riskLevel: "low-risk",
        status: "excluded",
        isoCode: "28 12 03",
        keywords: ["carbon monoxide", "detector", "safety"],
        conditions: "Standard household safety items not covered"
    },
    {
        name: "Smoke alarm (adapted)",
        category: "Safety and Emergency",
        description: "Smoke alarm with visual or vibrating alert for hearing impaired.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "28 12 06",
        keywords: ["smoke", "alarm", "hearing", "visual"]
    },

    // =====================================================
    // ORTHOSES AND PROSTHESES (ISO 06)
    // =====================================================

    // Upper limb orthoses
    {
        name: "Finger orthoses",
        category: "Orthoses and Prostheses",
        description: "Orthotic devices designed to support, align, or improve function of the fingers.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 03",
        keywords: ["finger", "orthosis", "splint", "support", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Hand orthoses",
        category: "Orthoses and Prostheses",
        description: "Orthotic devices designed to support, align, or improve function of the hand.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 06",
        keywords: ["hand", "orthosis", "splint", "support", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Hand-finger orthoses",
        category: "Orthoses and Prostheses",
        description: "Orthotic devices designed to support both the hand and fingers.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 07",
        keywords: ["hand", "finger", "orthosis", "splint", "support", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Wrist-hand orthoses",
        category: "Orthoses and Prostheses",
        description: "Orthotic devices designed to support both the wrist and hand.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 12",
        keywords: ["wrist", "hand", "orthosis", "splint", "support", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Wrist-hand-finger orthoses",
        category: "Orthoses and Prostheses",
        description: "Orthotic devices designed to support the wrist, hand, and fingers.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 13",
        keywords: ["wrist", "hand", "finger", "orthosis", "splint", "support", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Shoulder-elbow-wrist-hand orthoses",
        category: "Orthoses and Prostheses",
        description: "Orthotic devices designed to support the shoulder, elbow, wrist, and hand.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 30",
        keywords: ["shoulder", "elbow", "wrist", "hand", "orthosis", "support", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Hand and finger joints",
        category: "Orthoses and Prostheses",
        description: "Joint components for upper limb orthoses affecting the hand and fingers.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 32",
        keywords: ["joint", "hand", "finger", "orthosis", "component", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Wrist joints",
        category: "Orthoses and Prostheses",
        description: "Joint components for upper limb orthoses affecting the wrist.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 33",
        keywords: ["joint", "wrist", "orthosis", "component", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Elbow joints",
        category: "Orthoses and Prostheses",
        description: "Joint components for upper limb orthoses affecting the elbow.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 36",
        keywords: ["joint", "elbow", "orthosis", "component", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Shoulder joints",
        category: "Orthoses and Prostheses",
        description: "Joint components for upper limb orthoses affecting the shoulder.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 39",
        keywords: ["joint", "shoulder", "orthosis", "component", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Interface components for upper limb orthoses",
        category: "Orthoses and Prostheses",
        description: "Interface components used in upper limb orthotic devices.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 42",
        keywords: ["interface", "component", "orthosis", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Structural components for upper limb orthoses",
        category: "Orthoses and Prostheses",
        description: "Structural components used in upper limb orthotic devices.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 45",
        keywords: ["structural", "component", "orthosis", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Finishing (cosmetic) components for upper limb orthoses",
        category: "Orthoses and Prostheses",
        description: "Cosmetic finishing components for upper limb orthotic devices.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 06 48",
        keywords: ["finishing", "cosmetic", "component", "orthosis", "upper limb"],
        conditions: "Requires prescription from qualified health professional"
    },

    // Lower limb orthoses
    {
        name: "Foot orthoses",
        category: "Orthoses and Prostheses",
        description: "Orthotic devices designed to support, align, or improve function of the foot.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 12 03",
        keywords: ["foot", "orthosis", "insole", "support", "lower limb"],
        conditions: "Requires prescription from qualified health professional"
    },

    // Other orthoses
    {
        name: "Wrist splint",
        category: "Orthoses and Prostheses",
        description: "Supportive splint for wrist immobilization or support.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "06 06 06",
        keywords: ["splint", "wrist", "support", "orthosis"]
    },
    {
        name: "Knee brace",
        category: "Orthoses and Prostheses",
        description: "Supportive brace for knee stability.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "06 12 03",
        keywords: ["brace", "knee", "support", "orthosis"]
    },
    {
        name: "Ankle foot orthosis (AFO)",
        category: "Orthoses and Prostheses",
        description: "Custom or off-the-shelf orthosis for ankle and foot support.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 12 06",
        keywords: ["AFO", "ankle", "foot", "orthosis"],
        conditions: "Custom AFOs require prescription; off-the-shelf available under advice"
    },
    {
        name: "Compression garments",
        category: "Orthoses and Prostheses",
        description: "Compression stockings or garments for circulatory support.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "06 06 09",
        keywords: ["compression", "stockings", "circulation", "garment"]
    },
    {
        name: "Spinal orthosis",
        category: "Orthoses and Prostheses",
        description: "Orthotic device for spinal support and alignment.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 03 06",
        keywords: ["spinal", "orthosis", "back", "support"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Prosthetic limb",
        category: "Orthoses and Prostheses",
        description: "Artificial limb to replace missing body part.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 24",
        keywords: ["prosthetic", "limb", "artificial", "amputation"],
        conditions: "Requires comprehensive assessment and prescription by prosthetic/orthotic team"
    },
    {
        name: "Custom orthopaedic footwear",
        category: "Orthoses and Prostheses",
        description: "Custom-made shoes for complex foot conditions.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "06 33 03",
        keywords: ["footwear", "shoes", "orthopaedic", "custom"],
        conditions: "Requires podiatry or orthotist prescription"
    },
    {
        name: "Shoe modifications",
        category: "Orthoses and Prostheses",
        description: "Modifications to existing footwear such as raises or wedges.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "06 33 06",
        keywords: ["shoes", "modification", "raise", "wedge"]
    },

    // =====================================================
    // FURNITURE AND SEATING (ISO 18 continued)
    // =====================================================
    {
        name: "Riser recliner chair",
        category: "Furniture and Seating",
        description: "Armchair with powered lift and recline functions.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 09 15",
        keywords: ["chair", "riser", "recliner", "lift"],
        conditions: "Requires assessment demonstrating inability to use standard seating"
    },
    {
        name: "Chair raiser blocks",
        category: "Furniture and Seating",
        description: "Blocks placed under chair legs to raise seating height.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "18 09 18",
        keywords: ["chair", "raiser", "blocks", "height"]
    },
    {
        name: "Seat cushion (standard)",
        category: "Furniture and Seating",
        description: "Cushion to increase seat height or comfort.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "18 09 21",
        keywords: ["cushion", "seat", "height", "comfort"]
    },
    {
        name: "Posture support cushion",
        category: "Furniture and Seating",
        description: "Shaped cushion for lumbar or posture support in seating.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "18 09 24",
        keywords: ["cushion", "posture", "lumbar", "support"]
    },
    {
        name: "Height adjustable table",
        category: "Furniture and Seating",
        description: "Table with adjustable height for wheelchair access or varied use.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 03 03",
        keywords: ["table", "adjustable", "height", "wheelchair"]
    },
    {
        name: "Over bed table",
        category: "Furniture and Seating",
        description: "Mobile table that positions over bed for eating or activities.",
        riskLevel: "low-risk",
        status: "included",
        isoCode: "18 03 06",
        keywords: ["table", "overbed", "mobile", "bed"]
    },
    {
        name: "Bed (standard adjustable)",
        category: "Furniture and Seating",
        description: "Hospital-style bed with manual adjustment.",
        riskLevel: "under-advice",
        status: "conditional",
        isoCode: "18 12 09",
        keywords: ["bed", "hospital", "adjustable", "manual"],
        conditions: "Requires demonstrated medical need"
    },
    {
        name: "Bariatric furniture",
        category: "Furniture and Seating",
        description: "Heavy-duty furniture rated for higher weight capacity.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 09 27",
        keywords: ["bariatric", "heavy-duty", "weight", "furniture"],
        conditions: "For individuals exceeding standard equipment weight limits"
    },

    // Tables
    {
        name: "Reading desks, writing desks and standing desks",
        category: "Furniture and Seating",
        description: "Desks designed for reading, writing and standing work activities.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 03 06",
        keywords: ["desk", "reading", "writing", "standing"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Dining tables",
        category: "Furniture and Seating",
        description: "Tables designed for dining activities.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 03 12",
        keywords: ["table", "dining", "eating", "meal"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Bed tables",
        category: "Furniture and Seating",
        description: "Tables designed for use in or near the bed.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 03 15",
        keywords: ["table", "bed", "overbed", "bedside"],
        conditions: "Requires prescription from qualified health professional"
    },

    // Light fixtures
    {
        name: "General lights",
        category: "Furniture and Seating",
        description: "General lighting fixtures for home use.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 06 03",
        keywords: ["light", "lighting", "fixture", "general"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Reading lights and working lights",
        category: "Furniture and Seating",
        description: "Specialized lights for reading and working activities.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 06 06",
        keywords: ["light", "reading", "working", "task"],
        conditions: "Requires prescription from qualified health professional"
    },

    // Sitting furniture
    {
        name: "Chairs",
        category: "Furniture and Seating",
        description: "Standard chairs for seating.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 09 03",
        keywords: ["chair", "sitting", "seating", "furniture"]
    },
    {
        name: "Stools",
        category: "Furniture and Seating",
        description: "Stools for seating at various heights.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 09 04",
        keywords: ["stool", "sitting", "seating", "height"]
    },
    {
        name: "Standing chairs",
        category: "Furniture and Seating",
        description: "Chairs designed to support standing or leaning positions.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 09 07",
        keywords: ["chair", "standing", "leaning", "support"]
    },
    {
        name: "Coxit chairs",
        category: "Furniture and Seating",
        description: "Specialized chairs with features for hip conditions.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 09 09",
        keywords: ["chair", "coxit", "hip", "specialized"]
    },
    {
        name: "Lounge chairs and easy chairs",
        category: "Furniture and Seating",
        description: "Comfortable chairs for relaxation and lounging.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 09 15",
        keywords: ["chair", "lounge", "easy", "comfort", "relaxation"]
    },
    {
        name: "Special sitting furniture",
        category: "Furniture and Seating",
        description: "Specialized seating furniture for specific needs.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 09 21",
        keywords: ["chair", "special", "sitting", "furniture"]
    },
    {
        name: "Chair lifts and chair transporters",
        category: "Furniture and Seating",
        description: "Devices for lifting or transporting chairs.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 09 24",
        keywords: ["chair", "lift", "transporter", "mobility"]
    },
    {
        name: "Modular seating systems",
        category: "Furniture and Seating",
        description: "Modular seating systems that can be configured for specific needs.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 09 39",
        keywords: ["seating", "modular", "system", "configurable"]
    },

    // Accessories for sitting furniture
    {
        name: "Back cushions for sitting furniture",
        category: "Furniture and Seating",
        description: "Cushions designed to provide back support for sitting furniture.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 10 03",
        keywords: ["cushion", "back", "sitting", "support"]
    },
    {
        name: "Neck and head support for sitting furniture",
        category: "Furniture and Seating",
        description: "Supports for neck and head designed for sitting furniture.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 10 13",
        keywords: ["support", "neck", "head", "sitting"]
    },
    {
        name: "Leg rests and footrests",
        category: "Furniture and Seating",
        description: "Rests for legs and feet used with sitting furniture.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 10 15",
        keywords: ["leg rest", "footrest", "sitting", "support"]
    },
    {
        name: "Cushions or systems to assist a person to stand or sit",
        category: "Furniture and Seating",
        description: "Cushions or systems added to seats to assist a person to stand or sit.",
        riskLevel: "under-advice",
        status: "included",
        isoCode: "18 10 21",
        keywords: ["cushion", "system", "standing", "sitting", "assist"]
    },

    // Beds and bed equipment
    {
        name: "Beds and bed boards/mattress support platforms, non-adjustable",
        category: "Furniture and Seating",
        description: "Non-adjustable beds and detachable bed boards or mattress support platforms.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 04",
        keywords: ["bed", "board", "mattress", "platform", "non-adjustable"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Beds and bed boards/mattress support platforms with manual adjustment",
        category: "Furniture and Seating",
        description: "Beds and detachable bed boards or mattress support platforms with manual adjustment.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 07",
        keywords: ["bed", "board", "mattress", "platform", "manual", "adjustable"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Beds and bed boards/mattress support platforms with powered adjustment",
        category: "Furniture and Seating",
        description: "Beds and detachable bed boards or mattress support platforms with powered adjustment.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 10",
        keywords: ["bed", "board", "mattress", "platform", "powered", "electric", "adjustable"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Bed lifts",
        category: "Furniture and Seating",
        description: "Lifting devices for beds.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 12",
        keywords: ["bed", "lift", "raising", "height"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Bedding",
        category: "Furniture and Seating",
        description: "Bedding items including sheets, blankets, and covers.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 15",
        keywords: ["bedding", "sheets", "blankets", "covers"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Mattress and mattress coverings",
        category: "Furniture and Seating",
        description: "Mattresses and mattress coverings for beds.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 18",
        keywords: ["mattress", "covering", "bed", "sleep"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Blanket supports",
        category: "Furniture and Seating",
        description: "Supports to keep blankets off the body.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 21",
        keywords: ["blanket", "support", "bed", "cradle"],
        conditions: "Requires prescription from qualified health professional"
    },
    {
        name: "Separate adjustable back supports and leg supports for beds",
        category: "Furniture and Seating",
        description: "Adjustable back and leg supports that can be added to beds.",
        riskLevel: "prescribed",
        status: "conditional",
        isoCode: "18 12 24",
        keywords: ["back support", "leg support", "bed", "adjustable"],
        conditions: "Requires prescription from qualified health professional"
    }
];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = athmData;
}
