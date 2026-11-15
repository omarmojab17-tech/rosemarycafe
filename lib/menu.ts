export type MenuItem = { nameAr: string; nameEn: string; price: string; noteAr?: string; noteEn?: string; featured?: boolean };
export type MenuCategory = { id: string; nameAr: string; nameEn: string; subtitleAr: string; subtitleEn: string; items: MenuItem[] };
const item = (nameEn: string, nameAr: string, price: string): MenuItem => ({ nameEn, nameAr, price });

export const menuCategories: MenuCategory[] = [
  { id: "shisha", nameAr: "أراجيل", nameEn: "Shisha", subtitleAr: "نكهات الأرجيلة.", subtitleEn: "Shisha flavours.", items: [
    item("Double Apple", "تفاحتين", "20 / 25"), item("Lemon & Mint", "ليمون ونعنع", "20"), item("Watermelon", "بطيخ", "20"), item("Love 66", "لوف 66", "20"),
  ]},
  { id: "matcha", nameAr: "ماتشا", nameEn: "Matcha", subtitleAr: "باردة أو ساخنة.", subtitleEn: "Iced or hot.", items: [
    item("Iced Strawberry Matcha Latte", "آيس ماتشا لاتيه بالفراولة", "16 / 18"), item("Iced White Chocolate Matcha", "آيس ماتشا بالشوكولاتة البيضاء", "16 / 18"), item("Iced Chocolate Matcha Latte", "آيس شوكولاتة ماتشا لاتيه", "16 / 18"), item("Iced Mango Matcha Latte", "آيس ماتشا لاتيه بالمانجا", "16 / 18"), item("Hot Matcha Latte", "ماتشا لاتيه ساخنة", "16 / 18"),
  ]},
  { id: "korean-fruit-milk", nameAr: "حليب الفواكه الكوري", nameEn: "Korean Fruit Milk", subtitleAr: "", subtitleEn: "", items: [
    item("Strawberry Fresh Milk", "حليب طازج بالفراولة", "12 / 15"), item("Mango Fresh Milk", "حليب طازج بالمانجا", "12 / 15"),
  ]},
  { id: "fizz", nameAr: "فِز", nameEn: "Fizz", subtitleAr: "", subtitleEn: "", items: [
    item("Watermelon Mojito", "موهيتو بطيخ", "15"), item("Strawberry Mojito", "موهيتو فراولة", "15"), item("Blueberry Mojito", "موهيتو توت أزرق", "15"), item("Kiwi Mojito", "موهيتو كيوي", "15"), item("Passion Fruit Mojito", "موهيتو باشن فروت", "15"), item("Tropical Mojito", "موهيتو تروبيكال", "15"), item("Lemon & Mint Mojito", "موهيتو ليمون ونعنع", "15"), item("Pineapple Mojito", "موهيتو أناناس", "15"),
  ]},
  { id: "smoothies", nameAr: "سموذي", nameEn: "Smoothies", subtitleAr: "", subtitleEn: "", items: [
    item("Mango Smoothie", "سموذي مانجا", "12 / 15"), item("Strawberry Smoothie", "سموذي فراولة", "12 / 15"), item("Mango Passion Fruit Smoothie", "سموذي مانجا وباشن فروت", "12 / 15"), item("Mixed Berries Smoothie", "سموذي توت مشكل", "12 / 15"), item("Pineapple Smoothie", "سموذي أناناس", "12 / 15"), item("Passion Fruit Smoothie", "سموذي باشن فروت", "12 / 15"),
  ]},
  { id: "frosted-drinks", nameAr: "مشروبات فروستد", nameEn: "Frosted Drinks", subtitleAr: "", subtitleEn: "", items: [
    item("Frosted Salted Caramel", "فروستد كراميل مملح", "13 / 16"), item("Frosted Mocha", "فروستد موكا", "13 / 16"), item("Frosted French Vanilla", "فروستد فانيلا فرنسية", "13 / 16"),
  ]},
  { id: "milkshakes", nameAr: "ميلك شيك", nameEn: "Milkshakes", subtitleAr: "", subtitleEn: "", items: [
    item("Chocolate Milkshake", "ميلك شيك شوكولاتة", "13 / 16"), item("Lotus Milkshake", "ميلك شيك لوتس", "13 / 16"), item("Pistachio Milkshake", "ميلك شيك فستق", "13 / 16"), item("Oreo Milkshake", "ميلك شيك أوريو", "13 / 16"),
  ]},
  { id: "refreshers", nameAr: "مشروبات منعشة", nameEn: "Refreshers", subtitleAr: "", subtitleEn: "", items: [
    item("Iced Peach Tea", "آيس تي بالخوخ", "10 / 12"), item("Lemon & Mint", "ليمون ونعنع", "12 / 15"),
  ]},
  { id: "iced-coffee", nameAr: "قهوة باردة", nameEn: "Iced Coffee", subtitleAr: "قهوة باردة محضّرة حسب طلبك.", subtitleEn: "Iced coffee, made to order.", items: [
    item("Iced Latte — Vanilla / Hazelnut", "آيس لاتيه — فانيلا / بندق", "12 / 15"), item("Iced Spanish Latte", "آيس سبانيش لاتيه", "12 / 15"), item("Iced Pistachio Latte", "آيس لاتيه بالفستق", "12 / 15"), item("Iced Caramel Macchiato Latte", "آيس كراميل ماكياتو لاتيه", "12 / 15"), item("Iced Tiramisu Latte", "آيس تيراميسو لاتيه", "12 / 15"), item("Iced Mocha", "آيس موكا", "12 / 15"), item("Iced White Mocha", "آيس وايت موكا", "12 / 15"), item("Iced Coffee", "آيس كوفي", "12 / 15"), item("Diet Iced Coffee", "آيس كوفي دايت", "12 / 15"), item("Iced Americano", "آيس أمريكانو", "10"), item("Iced Pumpkin Spice Latte", "آيس بامبكن سبايس لاتيه", "12 / 15"),
  ]},
  { id: "hot-drinks", nameAr: "مشروبات ساخنة", nameEn: "Hot Drinks", subtitleAr: "قهوة ومشروبات ساخنة.", subtitleEn: "Coffee and hot favourites.", items: [
    item("Espresso", "إسبريسو", "5 / 8"), item("Americano", "أمريكانو", "8 / 10"), item("Cappuccino", "كابتشينو", "10"), item("Pistachio Latte", "لاتيه بالفستق", "13 / 16"), item("Hazelnut Latte", "لاتيه بالبندق", "10"), item("Mocha", "موكا", "12"), item("White Mocha", "وايت موكا", "12"), item("Cortado", "كورتادو", "10"), item("Flat White", "فلات وايت", "10"), item("Hot Lotus", "هوت لوتس", "12"), item("Salted Caramel", "كراميل مملح", "12"), item("Salted Caramel Mocha", "موكا كراميل مملح", "13"), item("Hot Tiramisu", "تيراميسو ساخن", "10"), item("Pumpkin Spice Latte", "بامبكن سبايس لاتيه", "10"),
  ]},
  { id: "desserts", nameAr: "حلويات", nameEn: "Desserts", subtitleAr: "حلويات يومية مختارة.", subtitleEn: "A selection of daily desserts.", items: [
    item("Cookie Pie", "كوكي باي", "20"), item("Nesquik Coco Dessert", "حلى نسكويك بالكاكاو", "16"), item("Cheesecake", "تشيزكيك", "20"), item("Mini Lazy Chocolate Cake", "ميني ليزي كيك شوكولاتة", "6"), item("Mini Fudge Brownie", "ميني فادج براوني", "6"), item("Dubai Pistachio Cake", "كيكة دبي بالفستق", "25"), item("Molten Chocolate Soufflé", "سوفليه شوكولاتة سائلة", "20"), item("Golden Honey Cake", "كيكة العسل الذهبية", "20"), item("Cookies", "كوكيز", "7"), item("Cinnamon Rolls", "سينامون رولز", "18"), item("Chocolate Cornflake Ball", "كرة كورن فليكس بالشوكولاتة", "5"), item("Lotus Ball", "كرة لوتس", "5"),
  ]},
  { id: "cans-water", nameAr: "معلبات ومياه", nameEn: "Cans & Water", subtitleAr: "مشروبات باردة ومياه.", subtitleEn: "Chilled drinks and water.", items: [
    item("Blu", "بلو", "6"), item("XL", "إكس إل", "7"), item("Cola", "كولا", "5"), item("Sprite", "سبرايت", "5"), item("Small Water", "مياه صغيرة", "3"), item("Large Water", "مياه كبيرة", "5"),
  ]},
];
