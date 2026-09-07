export type MenuItem = { nameAr: string; nameEn: string; price: string; noteAr?: string; noteEn?: string; featured?: boolean };
export type MenuCategory = { id: string; nameAr: string; nameEn: string; subtitleAr: string; subtitleEn: string; items: MenuItem[] };
const item = (nameEn: string, nameAr: string, price: string): MenuItem => ({ nameEn, nameAr, price });

export const menuCategories: MenuCategory[] = [
  { id: "shisha", nameAr: "أراجيل", nameEn: "Shisha", subtitleAr: "نكهات الأرجيلة.", subtitleEn: "Shisha flavours.", items: [
    item("Double Apple", "تفاحتين", "20 / 25"), item("Lemon & Mint", "ليمون ونعنع", "20"), item("Watermelon", "بطيخ", "20"), item("Love 66", "لوف 66", "20"),
  ]},
  { id: "matcha", nameAr: "ماتشا", nameEn: "Matcha", subtitleAr: "باردة أو ساخنة.", subtitleEn: "Iced or hot.", items: [
    item("Iced Strawberry Matcha Latte", "آيس ماتشا لاتيه بالفراولة", "18"), item("Iced White Chocolate Matcha", "آيس ماتشا بالشوكولاتة البيضاء", "18"), item("Iced Chocolate Matcha Latte", "آيس شوكولاتة ماتشا لاتيه", "18"), item("Iced Mango Matcha Latte", "آيس ماتشا لاتيه بالمانجا", "18"), item("Hot Matcha Latte", "ماتشا لاتيه ساخنة", "18"),
  ]},
  { id: "korean-fruit-milk", nameAr: "حليب الفواكه الكوري", nameEn: "Korean Fruit Milk", subtitleAr: "اختر وسط أو كبير.", subtitleEn: "Choose Medium or Large.", items: [
    item("Strawberry Fresh Milk", "حليب طازج بالفراولة", "M 12 · L 15"), item("Mango Fresh Milk", "حليب طازج بالمانجا", "M 12 · L 15"),
  ]},
  { id: "fizz", nameAr: "فِز", nameEn: "Fizz", subtitleAr: "", subtitleEn: "", items: [
    item("Watermelon Mojito", "موهيتو بطيخ", "15"), item("Strawberry Mojito", "موهيتو فراولة", "15"), item("Blueberry Mojito", "موهيتو توت أزرق", "15"), item("Kiwi Mojito", "موهيتو كيوي", "15"), item("Passion Fruit Mojito", "موهيتو باشن فروت", "15"), item("Tropical Mojito", "موهيتو تروبيكال", "15"), item("Lemon & Mint Mojito", "موهيتو ليمون ونعنع", "15"), item("Pineapple Mojito", "موهيتو أناناس", "15"),
  ]},
  { id: "smoothies", nameAr: "سموذي", nameEn: "Smoothies", subtitleAr: "اختر وسط أو كبير.", subtitleEn: "Choose Medium or Large.", items: [
    item("Mango Smoothie", "سموذي مانجا", "M 14 · L 16"), item("Strawberry Smoothie", "سموذي فراولة", "M 14 · L 16"), item("Mango Passion Fruit Smoothie", "سموذي مانجا وباشن فروت", "M 14 · L 16"), item("Mixed Berries Smoothie", "سموذي توت مشكل", "M 14 · L 16"), item("Pineapple Smoothie", "سموذي أناناس", "M 14 · L 16"), item("Passion Fruit Smoothie", "سموذي باشن فروت", "M 14 · L 16"),
  ]},
  { id: "frosted-drinks", nameAr: "مشروبات فروستد", nameEn: "Frosted Drinks", subtitleAr: "اختر وسط أو كبير.", subtitleEn: "Choose Medium or Large.", items: [
    item("Frosted Salted Caramel", "فروستد كراميل مملح", "M 16 · L 20"), item("Frosted Mocha", "فروستد موكا", "M 16 · L 20"), item("Frosted French Vanilla", "فروستد فانيلا فرنسية", "M 16 · L 20"),
  ]},
  { id: "milkshakes", nameAr: "ميلك شيك", nameEn: "Milkshakes", subtitleAr: "اختر وسط أو كبير.", subtitleEn: "Choose Medium or Large.", items: [
    item("Chocolate Milkshake", "ميلك شيك شوكولاتة", "M 16 · L 20"), item("Lotus Milkshake", "ميلك شيك لوتس", "M 16 · L 20"), item("Pistachio Milkshake", "ميلك شيك فستق", "M 16 · L 20"), item("Oreo Milkshake", "ميلك شيك أوريو", "M 16 · L 20"),
  ]},
  { id: "refreshers", nameAr: "مشروبات منعشة", nameEn: "Refreshers", subtitleAr: "اختر وسط أو كبير.", subtitleEn: "Choose Medium or Large.", items: [
    item("Iced Peach Tea", "آيس تي بالخوخ", "M 13 · L 15"), item("Lemon & Mint", "ليمون ونعنع", "M 13 · L 15"),
  ]},
  { id: "iced-coffee", nameAr: "قهوة باردة", nameEn: "Iced Coffee", subtitleAr: "قهوة باردة محضّرة حسب طلبك.", subtitleEn: "Iced coffee, made to order.", items: [
    item("Iced Latte — Vanilla / Hazelnut", "آيس لاتيه — فانيلا / بندق", "M 15 · L 17"), item("Iced Spanish Latte", "آيس سبانيش لاتيه", "M 15 · L 17"), item("Iced Pistachio Latte", "آيس لاتيه بالفستق", "M 15 · L 17"), item("Iced Caramel Macchiato Latte", "آيس كراميل ماكياتو لاتيه", "M 15 · L 17"), item("Iced Tiramisu Latte", "آيس تيراميسو لاتيه", "M 15 · L 17"), item("Iced Mocha", "آيس موكا", "M 15 · L 17"), item("Iced White Mocha", "آيس وايت موكا", "M 15 · L 17"), item("Iced Coffee", "آيس كوفي", "M 13 · L 15"), item("Diet Iced Coffee", "آيس كوفي دايت", "M 14 · L 16"), item("Iced Americano", "آيس أمريكانو", "12"),
  ]},
  { id: "hot-drinks", nameAr: "مشروبات ساخنة", nameEn: "Hot Drinks", subtitleAr: "قهوة ومشروبات ساخنة.", subtitleEn: "Coffee and hot favourites.", items: [
    item("Espresso", "إسبريسو", "M 6 · L 8"), item("Americano", "أمريكانو", "M 8 · L 10"), item("Cappuccino", "كابتشينو", "12"), item("Pistachio Latte", "لاتيه بالفستق", "13"), item("Hazelnut Latte", "لاتيه بالبندق", "13"), item("Mocha", "موكا", "13"), item("White Mocha", "وايت موكا", "13"), item("Cortado", "كورتادو", "10"), item("Flat White", "فلات وايت", "12"), item("Hot Lotus", "هوت لوتس", "12"), item("Salted Caramel", "كراميل مملح", "13"), item("Salted Caramel Mocha", "موكا كراميل مملح", "15"), item("Hot Tiramisu", "تيراميسو ساخن", "14"),
  ]},
  { id: "desserts", nameAr: "حلويات", nameEn: "Desserts", subtitleAr: "حلويات يومية مختارة.", subtitleEn: "A selection of daily desserts.", items: [
    item("Cookie Pie", "كوكي باي", "20"), item("Nesquik Coco Dessert", "حلى نسكويك بالكاكاو", "16"), item("Cheesecake", "تشيزكيك", "20"), item("Mini Lazy Chocolate Cake", "ميني ليزي كيك شوكولاتة", "6"), item("Mini Fudge Brownie", "ميني فادج براوني", "6"), item("Dubai Pistachio Cake", "كيكة دبي بالفستق", "25"), item("Molten Chocolate Soufflé", "سوفليه شوكولاتة سائلة", "20"), item("Golden Honey Cake", "كيكة العسل الذهبية", "20"), item("Cookies", "كوكيز", "7"), item("Cinnamon Rolls", "سينامون رولز", "18"), item("Chocolate Cornflake Ball", "كرة كورن فليكس بالشوكولاتة", "5"), item("Lotus Ball", "كرة لوتس", "5"),
  ]},
  { id: "cans-water", nameAr: "معلبات ومياه", nameEn: "Cans & Water", subtitleAr: "مشروبات باردة ومياه.", subtitleEn: "Chilled drinks and water.", items: [
    item("Blu", "بلو", "8"), item("XL", "إكس إل", "8"), item("Cola", "كولا", "5"), item("Sprite", "سبرايت", "5"), item("Small Water", "مياه صغيرة", "3"), item("Large Water", "مياه كبيرة", "5"),
  ]},
];
