// Pantry & Orders

const pantry = [
  { name: "Chocolate", icon: "🍫", quantity: 5 },
  { name: "Cookie", icon: "🍪", quantity: 2 },
  { name: "Tuna", icon: "🎣", quantity: 50 },
  { name: "Pasta", icon: "🍝", quantity: 5 },
];

const pantryRaids = [
  { name: "Sarah", items: ["Cookie", "Cookie", "Chocolate"] },
  { name: "Kaoru", items: ["Tuna", "Pasta"] },
  { name: "Thomas", items: ["Tuna", "Tuna", "Tuna", "Tuna", "Tuna"] },
];

// ("Sarah grabbed 🍪🍪🍫 from the pantry");

const fetchIconsFromPantryRaids = (pantry, raids) => {
  const updatedPantryRaids = [];
  for (const raid of raids) {
    const itemIcons = [];
    for (const item of raid.items) {
      const pantryItem = pantry.find((pantryItem) => pantryItem.name === item);
      itemIcons.push(pantryItem.icon);
    }
    updatedPantryRaids.push({ name: raid.name, items: itemIcons });
  }
  return updatedPantryRaids;
};

console.log(fetchIconsFromPantryRaids(pantry, pantryRaids));
console.log(fetchIconsFromPantryRaids(pantry, pantryRaids));
