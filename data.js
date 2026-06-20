// ============================================================================
// Catalogs: glasses, methods, ingredients, garnishes
// All liquid measurements use the metric system (millilitres, ml).
// ============================================================================

// `tpl` selects the CSS shape template; `w`/`h` size the bowl (px);
// `cap` is the reference capacity (ml) used to scale the liquid fill;
// `stem` adds a stem + foot.
export const GLASSES = [
  { id: "rocks", name: "Rocks (Old Fashioned)", emoji: "🥃", tpl: "tumbler", w: 132, h: 120, cap: 220, stem: false },
  { id: "highball", name: "Highball", emoji: "🥤", tpl: "tumbler", w: 96, h: 210, cap: 320, stem: false },
  { id: "collins", name: "Collins", emoji: "🥤", tpl: "tumbler", w: 84, h: 240, cap: 360, stem: false },
  { id: "coupe", name: "Coupe", emoji: "🍸", tpl: "bowl", w: 168, h: 96, cap: 200, stem: true },
  { id: "martini", name: "Martini", emoji: "🍸", tpl: "cone", w: 184, h: 124, cap: 180, stem: true },
  { id: "margarita", name: "Margarita", emoji: "🍹", tpl: "marg", w: 192, h: 116, cap: 250, stem: true },
  { id: "hurricane", name: "Hurricane", emoji: "🍹", tpl: "hurricane", w: 122, h: 212, cap: 420, stem: true },
  { id: "wine", name: "Wine", emoji: "🍷", tpl: "bowl", w: 140, h: 134, cap: 250, stem: true },
  { id: "shot", name: "Shot", emoji: "🥃", tpl: "tumbler", w: 72, h: 82, cap: 60, stem: false },
];

export const METHODS = [
  { id: "shake", name: "Shake", emoji: "🤝", hint: "Chill & combine with ice in a shaker." },
  { id: "stir", name: "Stir", emoji: "🥄", hint: "Gently stir with ice to chill & dilute." },
  { id: "build", name: "Build", emoji: "🧱", hint: "Build directly in the serving glass." },
  { id: "muddle", name: "Muddle", emoji: "🪵", hint: "Crush ingredients to release flavour." },
  { id: "blend", name: "Blend", emoji: "🌀", hint: "Blend with ice for a frozen drink." },
];

// unit: "ml" for liquids, "dash" / "leaf" / "piece" for specials.
// color: liquid colour used for the pour/fill animation.
// mx: mixology metadata used by the Mixologist evaluator —
//   fam = role family, abv = % alcohol, sw/so/bi = sweet/sour/bitter (0..1),
//   pot = flavour potency multiplier, fizz = carbonated.
export const INGREDIENTS = [
  // Spirits
  { id: "white_rum", name: "White Rum", unit: "ml", cat: "Spirits", color: "#efe9d0", mx: { fam: "spirit", abv: 40, sw: 0, so: 0, bi: 0, pot: 1 } },
  { id: "dark_rum", name: "Dark Rum", unit: "ml", cat: "Spirits", color: "#7a431d", mx: { fam: "spirit", abv: 40, sw: 0.08, so: 0, bi: 0, pot: 1 } },
  { id: "gin", name: "Gin", unit: "ml", cat: "Spirits", color: "#e6eef0", mx: { fam: "spirit", abv: 42, sw: 0, so: 0, bi: 0.05, pot: 1 } },
  { id: "vodka", name: "Vodka", unit: "ml", cat: "Spirits", color: "#eaf2f6", mx: { fam: "spirit", abv: 40, sw: 0, so: 0, bi: 0, pot: 1 } },
  { id: "citron_vodka", name: "Citron Vodka", unit: "ml", cat: "Spirits", color: "#eaf0c8", mx: { fam: "spirit", abv: 38, sw: 0.03, so: 0.05, bi: 0, pot: 1 } },
  { id: "tequila", name: "Tequila", unit: "ml", cat: "Spirits", color: "#f1e7bf", mx: { fam: "spirit", abv: 40, sw: 0, so: 0, bi: 0, pot: 1 } },
  { id: "mezcal", name: "Mezcal", unit: "ml", cat: "Spirits", color: "#f0e8c8", mx: { fam: "spirit", abv: 45, sw: 0, so: 0, bi: 0.05, pot: 1 } },
  { id: "bourbon", name: "Bourbon", unit: "ml", cat: "Spirits", color: "#c06b22", mx: { fam: "spirit", abv: 45, sw: 0.05, so: 0, bi: 0, pot: 1 } },
  { id: "rye_whiskey", name: "Rye Whiskey", unit: "ml", cat: "Spirits", color: "#c77a2a", mx: { fam: "spirit", abv: 45, sw: 0.03, so: 0, bi: 0.05, pot: 1 } },
  { id: "cognac", name: "Cognac", unit: "ml", cat: "Spirits", color: "#9c5018", mx: { fam: "spirit", abv: 40, sw: 0.06, so: 0, bi: 0, pot: 1 } },

  // Liqueurs / fortified
  { id: "triple_sec", name: "Triple Sec", unit: "ml", cat: "Liqueurs", color: "#f2dd97", mx: { fam: "liqueur", abv: 30, sw: 0.8, so: 0.05, bi: 0, pot: 1.2 } },
  { id: "campari", name: "Campari", unit: "ml", cat: "Liqueurs", color: "#b11226", mx: { fam: "amaro", abv: 25, sw: 0.35, so: 0, bi: 0.8, pot: 1.4 } },
  { id: "aperol", name: "Aperol", unit: "ml", cat: "Liqueurs", color: "#ff7a18", mx: { fam: "amaro", abv: 11, sw: 0.5, so: 0.05, bi: 0.55, pot: 1.3 } },
  { id: "sweet_vermouth", name: "Sweet Vermouth", unit: "ml", cat: "Liqueurs", color: "#6e2c1c", mx: { fam: "aromatized", abv: 16, sw: 0.5, so: 0, bi: 0.2, pot: 1.1 } },
  { id: "dry_vermouth", name: "Dry Vermouth", unit: "ml", cat: "Liqueurs", color: "#e6ead0", mx: { fam: "aromatized", abv: 16, sw: 0.15, so: 0.05, bi: 0.2, pot: 1.1 } },
  { id: "coffee_liqueur", name: "Coffee Liqueur", unit: "ml", cat: "Liqueurs", color: "#34190e", mx: { fam: "liqueur", abv: 20, sw: 0.75, so: 0, bi: 0.2, pot: 1.2 } },
  { id: "amaretto", name: "Amaretto", unit: "ml", cat: "Liqueurs", color: "#8a4a23", mx: { fam: "liqueur", abv: 24, sw: 0.8, so: 0, bi: 0.05, pot: 1.2 } },
  { id: "maraschino", name: "Maraschino", unit: "ml", cat: "Liqueurs", color: "#efe9e0", mx: { fam: "liqueur", abv: 32, sw: 0.7, so: 0, bi: 0.05, pot: 1.3 } },
  { id: "elderflower", name: "Elderflower Liqueur", unit: "ml", cat: "Liqueurs", color: "#f0ead0", mx: { fam: "liqueur", abv: 20, sw: 0.8, so: 0.05, bi: 0, pot: 1.2 } },

  // Juices
  { id: "lime_juice", name: "Lime Juice", unit: "ml", cat: "Juices", color: "#b9d96a", mx: { fam: "citrus", abv: 0, sw: 0, so: 1, bi: 0, pot: 1 } },
  { id: "lemon_juice", name: "Lemon Juice", unit: "ml", cat: "Juices", color: "#eee46a", mx: { fam: "citrus", abv: 0, sw: 0, so: 1, bi: 0, pot: 1 } },
  { id: "grapefruit_juice", name: "Grapefruit Juice", unit: "ml", cat: "Juices", color: "#f2a285", mx: { fam: "citrus", abv: 0, sw: 0.1, so: 0.6, bi: 0.25, pot: 1 } },
  { id: "cranberry_juice", name: "Cranberry Juice", unit: "ml", cat: "Juices", color: "#a01234", mx: { fam: "juice", abv: 0, sw: 0.35, so: 0.45, bi: 0.1, pot: 1 } },
  { id: "orange_juice", name: "Orange Juice", unit: "ml", cat: "Juices", color: "#ff9a1f", mx: { fam: "juice", abv: 0, sw: 0.45, so: 0.3, bi: 0, pot: 1 } },
  { id: "pineapple_juice", name: "Pineapple Juice", unit: "ml", cat: "Juices", color: "#efc83f", mx: { fam: "juice", abv: 0, sw: 0.55, so: 0.35, bi: 0, pot: 1 } },

  // Mixers
  { id: "soda_water", name: "Soda Water", unit: "ml", cat: "Mixers", color: "#d7e9ef", mx: { fam: "soda", abv: 0, sw: 0, so: 0, bi: 0, pot: 1, fizz: 1 } },
  { id: "tonic_water", name: "Tonic Water", unit: "ml", cat: "Mixers", color: "#e6f1ec", mx: { fam: "soda", abv: 0, sw: 0.3, so: 0, bi: 0.35, pot: 1, fizz: 1 } },
  { id: "cola", name: "Cola", unit: "ml", cat: "Mixers", color: "#2f1b10", mx: { fam: "soda", abv: 0, sw: 0.6, so: 0.05, bi: 0.05, pot: 1, fizz: 1 } },
  { id: "ginger_beer", name: "Ginger Beer", unit: "ml", cat: "Mixers", color: "#dcae6a", mx: { fam: "soda", abv: 0, sw: 0.5, so: 0, bi: 0.1, pot: 1, fizz: 1 } },
  { id: "prosecco", name: "Prosecco", unit: "ml", cat: "Mixers", color: "#efe2a3", mx: { fam: "sparkling", abv: 11, sw: 0.2, so: 0.1, bi: 0, pot: 1, fizz: 1 } },
  { id: "espresso", name: "Espresso", unit: "ml", cat: "Mixers", color: "#241009", mx: { fam: "coffee", abv: 0, sw: 0, so: 0.05, bi: 0.6, pot: 1.1 } },

  // Syrups & sweet
  { id: "sugar_syrup", name: "Sugar Syrup", unit: "ml", cat: "Syrups & Sweet", color: "#e3ddc8", mx: { fam: "syrup", abv: 0, sw: 1, so: 0, bi: 0, pot: 2 } },
  { id: "grenadine", name: "Grenadine", unit: "ml", cat: "Syrups & Sweet", color: "#9e0f2e", mx: { fam: "syrup", abv: 0, sw: 0.9, so: 0.1, bi: 0, pot: 2 } },
  { id: "honey_syrup", name: "Honey Syrup", unit: "ml", cat: "Syrups & Sweet", color: "#d9a534", mx: { fam: "syrup", abv: 0, sw: 0.9, so: 0, bi: 0, pot: 2 } },
  { id: "agave_syrup", name: "Agave Syrup", unit: "ml", cat: "Syrups & Sweet", color: "#d8c48a", mx: { fam: "syrup", abv: 0, sw: 0.9, so: 0, bi: 0, pot: 2 } },
  { id: "orgeat", name: "Orgeat (Almond)", unit: "ml", cat: "Syrups & Sweet", color: "#efe6d6", mx: { fam: "syrup", abv: 0, sw: 0.85, so: 0, bi: 0, pot: 2 } },

  // Bitters
  { id: "angostura", name: "Angostura Bitters", unit: "dash", cat: "Bitters", color: "#6f1b1b", mx: { fam: "bitters", abv: 44, sw: 0, so: 0, bi: 1, pot: 5 } },
  { id: "orange_bitters", name: "Orange Bitters", unit: "dash", cat: "Bitters", color: "#b5641a", mx: { fam: "bitters", abv: 40, sw: 0.05, so: 0, bi: 0.8, pot: 5 } },

  // Dairy & egg
  { id: "egg_white", name: "Egg White", unit: "piece", cat: "Dairy & Egg", color: "#f5f0e2", mx: { fam: "egg", abv: 0, sw: 0, so: 0, bi: 0, pot: 1 } },
  { id: "cream", name: "Cream", unit: "ml", cat: "Dairy & Egg", color: "#f6f1e3", mx: { fam: "dairy", abv: 0, sw: 0.2, so: 0, bi: 0, pot: 1 } },
  { id: "coconut_cream", name: "Coconut Cream", unit: "ml", cat: "Dairy & Egg", color: "#f3efe6", mx: { fam: "dairy", abv: 0, sw: 0.6, so: 0, bi: 0, pot: 1.2 } },

  // Herbs & spice
  { id: "mint", name: "Mint Leaves", unit: "leaf", cat: "Herbs & Spice", color: "#3f9140", mx: { fam: "herb", abv: 0, sw: 0, so: 0, bi: 0.1, pot: 3 } },
];

export const GARNISHES = [
  { id: "none", name: "No Garnish", emoji: "🚫" },
  { id: "lime_wheel", name: "Lime Wheel", emoji: "🟢" },
  { id: "lemon_twist", name: "Lemon Twist", emoji: "🍋" },
  { id: "orange_peel", name: "Orange Peel", emoji: "🍊" },
  { id: "mint_sprig", name: "Mint Sprig", emoji: "🌿" },
  { id: "olive", name: "Olive", emoji: "🫒" },
  { id: "cherry", name: "Cocktail Cherry", emoji: "🍒" },
  { id: "coffee_beans", name: "Coffee Beans", emoji: "🫘" },
  { id: "salt_rim", name: "Salt Rim", emoji: "🧂" },
  { id: "pineapple_wedge", name: "Pineapple Wedge", emoji: "🍍" },
];

// ============================================================================
// Recipes (the stages). Difficulty ascends down the list.
// `ingredients` is a list of { id, amount } in the ingredient's own unit.
// `garnish` lists acceptable garnish ids (first one shown as the "ideal").
// ============================================================================

export const RECIPES = [
  {
    id: "daiquiri",
    name: "Daiquiri",
    order: "A crisp, tart classic — clean rum, lime and a touch of sweetness, served up.",
    glass: "coupe",
    method: "shake",
    ingredients: [
      { id: "white_rum", amount: 60 },
      { id: "lime_juice", amount: 25 },
      { id: "sugar_syrup", amount: 15 },
    ],
    garnish: ["lime_wheel"],
  },
  {
    id: "negroni",
    name: "Negroni",
    order: "Equal parts, bittersweet and stirred over ice. A bracing aperitivo.",
    glass: "rocks",
    method: "stir",
    ingredients: [
      { id: "gin", amount: 30 },
      { id: "campari", amount: 30 },
      { id: "sweet_vermouth", amount: 30 },
    ],
    garnish: ["orange_peel"],
  },
  {
    id: "margarita",
    name: "Margarita",
    order: "Tequila, orange liqueur and lime — shaken, with a salted rim.",
    glass: "margarita",
    method: "shake",
    ingredients: [
      { id: "tequila", amount: 50 },
      { id: "triple_sec", amount: 20 },
      { id: "lime_juice", amount: 20 },
    ],
    garnish: ["salt_rim", "lime_wheel"],
  },
  {
    id: "old_fashioned",
    name: "Old Fashioned",
    order: "Bourbon, a little sugar and bitters, stirred down over ice. Timeless.",
    glass: "rocks",
    method: "stir",
    ingredients: [
      { id: "bourbon", amount: 60 },
      { id: "sugar_syrup", amount: 10 },
      { id: "angostura", amount: 2 },
    ],
    garnish: ["orange_peel"],
  },
  {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    order: "Citron vodka, triple sec, lime and a splash of cranberry — shaken and served up.",
    glass: "martini",
    method: "shake",
    ingredients: [
      { id: "citron_vodka", amount: 45 },
      { id: "triple_sec", amount: 15 },
      { id: "lime_juice", amount: 15 },
      { id: "cranberry_juice", amount: 30 },
    ],
    garnish: ["lime_wheel"],
  },
  {
    id: "mojito",
    name: "Mojito",
    order: "Muddle mint with lime and sugar, build over ice with rum, top with soda.",
    glass: "collins",
    method: "muddle",
    ingredients: [
      { id: "white_rum", amount: 60 },
      { id: "lime_juice", amount: 30 },
      { id: "sugar_syrup", amount: 20 },
      { id: "soda_water", amount: 60 },
      { id: "mint", amount: 8 },
    ],
    garnish: ["mint_sprig"],
  },
  {
    id: "espresso_martini",
    name: "Espresso Martini",
    order: "Vodka, coffee liqueur and fresh espresso — shaken hard for a silky foam.",
    glass: "martini",
    method: "shake",
    ingredients: [
      { id: "vodka", amount: 50 },
      { id: "coffee_liqueur", amount: 20 },
      { id: "espresso", amount: 30 },
      { id: "sugar_syrup", amount: 10 },
    ],
    garnish: ["coffee_beans"],
  },
  {
    id: "dry_martini",
    name: "Dry Martini",
    order: "Gin kissed with dry vermouth, stirred ice-cold and served up. Pure finesse.",
    glass: "martini",
    method: "stir",
    ingredients: [
      { id: "gin", amount: 60 },
      { id: "dry_vermouth", amount: 10 },
    ],
    garnish: ["olive", "lemon_twist"],
  },
];

// ============================================================================
// Classic cocktails for the Mixologist "you (re)invented…" detector.
// Built from the campaign recipes plus a few extra well-known builds.
// Matching is by ingredient set + rough proportions, so amounts are reference.
// ============================================================================
const EXTRA_CLASSICS = [
  { name: "Gin & Tonic", glass: "highball", method: "build", ingredients: [{ id: "gin", amount: 50 }, { id: "tonic_water", amount: 150 }] },
  { name: "Cuba Libre", glass: "highball", method: "build", ingredients: [{ id: "white_rum", amount: 50 }, { id: "cola", amount: 120 }, { id: "lime_juice", amount: 10 }] },
  { name: "Whiskey Sour", glass: "rocks", method: "shake", ingredients: [{ id: "bourbon", amount: 60 }, { id: "lemon_juice", amount: 25 }, { id: "sugar_syrup", amount: 15 }] },
  { name: "Aperol Spritz", glass: "wine", method: "build", ingredients: [{ id: "aperol", amount: 60 }, { id: "prosecco", amount: 90 }, { id: "soda_water", amount: 30 }] },
  { name: "Americano", glass: "highball", method: "build", ingredients: [{ id: "campari", amount: 30 }, { id: "sweet_vermouth", amount: 30 }, { id: "soda_water", amount: 60 }] },
  { name: "Moscow Mule", glass: "highball", method: "build", ingredients: [{ id: "vodka", amount: 50 }, { id: "lime_juice", amount: 15 }, { id: "ginger_beer", amount: 120 }] },
  { name: "Piña Colada", glass: "hurricane", method: "blend", ingredients: [{ id: "white_rum", amount: 50 }, { id: "coconut_cream", amount: 30 }, { id: "pineapple_juice", amount: 90 }] },
  { name: "Paloma", glass: "highball", method: "build", ingredients: [{ id: "tequila", amount: 50 }, { id: "grapefruit_juice", amount: 60 }, { id: "lime_juice", amount: 10 }, { id: "soda_water", amount: 60 }] },
];

export const CLASSICS = [
  ...RECIPES.map((r) => ({ name: r.name, glass: r.glass, method: r.method, ingredients: r.ingredients })),
  ...EXTRA_CLASSICS,
];

// Convenience lookups
export const INGREDIENT_BY_ID = Object.fromEntries(INGREDIENTS.map((i) => [i.id, i]));
export const GLASS_BY_ID = Object.fromEntries(GLASSES.map((g) => [g.id, g]));
export const METHOD_BY_ID = Object.fromEntries(METHODS.map((m) => [m.id, m]));
export const GARNISH_BY_ID = Object.fromEntries(GARNISHES.map((g) => [g.id, g]));
