from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from arabic_reshaper import reshape
from bidi.algorithm import get_display
from pathlib import Path

OUT = Path("output/pdf/Rosemary-Menu-A4-Front-Back.pdf")
OUT.parent.mkdir(parents=True, exist_ok=True)
pdfmetrics.registerFont(TTFont("Menu", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("MenuBold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

GREEN = HexColor("#173126")
MUTED = HexColor("#667169")
LINE = HexColor("#D5D1C7")
PAPER = HexColor("#F7F5EF")
AMBER = HexColor("#C78B39")

def ar(text):
    return get_display(reshape(text))

pages = [
    [
        ("SHISHA", "أراجيل", [("Double Apple", "تفاحتين", "20 / 25"), ("Lemon & Mint", "ليمون ونعنع", "20"), ("Watermelon", "بطيخ", "20"), ("Love 66", "لوف 66", "20")]),
        ("MATCHA", "ماتشا", [("Iced Strawberry Matcha Latte", "آيس ماتشا لاتيه بالفراولة", "18"), ("Iced White Chocolate Matcha", "آيس ماتشا بالشوكولاتة البيضاء", "18"), ("Iced Chocolate Matcha Latte", "آيس شوكولاتة ماتشا لاتيه", "18"), ("Iced Mango Matcha Latte", "آيس ماتشا لاتيه بالمانجا", "18"), ("Hot Matcha Latte", "ماتشا لاتيه ساخنة", "18")]),
        ("KOREAN FRUIT MILK", "حليب الفواكه الكوري", [("Strawberry Fresh Milk", "حليب طازج بالفراولة", "M 12  |  L 15"), ("Mango Fresh Milk", "حليب طازج بالمانجا", "M 12  |  L 15")]),
        ("FIZZ", "فز", [("Watermelon Mojito", "موهيتو بطيخ", "15"), ("Strawberry Mojito", "موهيتو فراولة", "15"), ("Blueberry Mojito", "موهيتو توت أزرق", "15"), ("Kiwi Mojito", "موهيتو كيوي", "15"), ("Passion Fruit Mojito", "موهيتو باشن فروت", "15"), ("Tropical Mojito", "موهيتو تروبيكال", "15"), ("Lemon & Mint Mojito", "موهيتو ليمون ونعنع", "15"), ("Pineapple Mojito", "موهيتو أناناس", "15")]),
        ("SMOOTHIES", "سموذي", [("Mango Smoothie", "سموذي مانجا", "M 14  |  L 16"), ("Strawberry Smoothie", "سموذي فراولة", "M 14  |  L 16"), ("Mango Passion Fruit Smoothie", "سموذي مانجا وباشن فروت", "M 14  |  L 16"), ("Mixed Berries Smoothie", "سموذي توت مشكل", "M 14  |  L 16"), ("Pineapple Smoothie", "سموذي أناناس", "M 14  |  L 16"), ("Passion Fruit Smoothie", "سموذي باشن فروت", "M 14  |  L 16")]),
        ("FROSTED DRINKS", "مشروبات فروستد", [("Frosted Salted Caramel", "فروستد كراميل مملح", "M 16  |  L 20"), ("Frosted Mocha", "فروستد موكا", "M 16  |  L 20"), ("Frosted French Vanilla", "فروستد فانيلا فرنسية", "M 16  |  L 20")]),
    ],
    [
        ("MILKSHAKES", "ميلك شيك", [("Chocolate Milkshake", "ميلك شيك شوكولاتة", "M 16  |  L 20"), ("Lotus Milkshake", "ميلك شيك لوتس", "M 16  |  L 20"), ("Pistachio Milkshake", "ميلك شيك فستق", "M 16  |  L 20"), ("Oreo Milkshake", "ميلك شيك أوريو", "M 16  |  L 20")]),
        ("REFRESHERS", "مشروبات منعشة", [("Iced Peach Tea", "آيس تي بالخوخ", "M 13  |  L 15"), ("Lemon & Mint", "ليمون ونعنع", "M 13  |  L 15")]),
        ("ICED COFFEE", "قهوة باردة", [("Iced Latte - Vanilla / Hazelnut", "آيس لاتيه - فانيلا / بندق", "M 15  |  L 17"), ("Iced Spanish Latte", "آيس سبانيش لاتيه", "M 15  |  L 17"), ("Iced Pistachio Latte", "آيس لاتيه بالفستق", "M 15  |  L 17"), ("Iced Caramel Macchiato Latte", "آيس كراميل ماكياتو لاتيه", "M 15  |  L 17"), ("Iced Tiramisu Latte", "آيس تيراميسو لاتيه", "M 15  |  L 17"), ("Iced Mocha", "آيس موكا", "M 15  |  L 17"), ("Iced White Mocha", "آيس وايت موكا", "M 15  |  L 17"), ("Iced Coffee", "آيس كوفي", "M 13  |  L 15"), ("Diet Iced Coffee", "آيس كوفي دايت", "M 14  |  L 16"), ("Iced Americano", "آيس أمريكانو", "12")]),
        ("HOT DRINKS", "مشروبات ساخنة", [("Espresso", "إسبريسو", "M 6  |  L 8"), ("Americano", "أمريكانو", "M 8  |  L 10"), ("Cappuccino", "كابتشينو", "12"), ("Pistachio Latte", "لاتيه بالفستق", "13"), ("Hazelnut Latte", "لاتيه بالبندق", "13"), ("Mocha", "موكا", "13"), ("White Mocha", "وايت موكا", "13"), ("Cortado", "كورتادو", "10"), ("Flat White", "فلات وايت", "12"), ("Hot Lotus", "هوت لوتس", "12"), ("Salted Caramel", "كراميل مملح", "13"), ("Salted Caramel Mocha", "موكا كراميل مملح", "15"), ("Hot Tiramisu", "تيراميسو ساخن", "14")]),
        ("DESSERTS", "حلويات", [("Cookie Pie", "كوكي باي", "20"), ("Nesquik Coco Dessert", "حلى نسكويك بالكاكاو", "16"), ("Cheesecake", "تشيزكيك", "20"), ("Mini Lazy Chocolate Cake", "ميني ليزي كيك شوكولاتة", "6"), ("Mini Fudge Brownie", "ميني فادج براوني", "6"), ("Dubai Pistachio Cake", "كيكة دبي بالفستق", "25"), ("Molten Chocolate Souffle", "سوفليه شوكولاتة سائلة", "20"), ("Golden Honey Cake", "كيكة العسل الذهبية", "20"), ("Cookies", "كوكيز", "7"), ("Cinnamon Rolls", "سينامون رولز", "18"), ("Chocolate Cornflake Ball", "كرة كورن فليكس بالشوكولاتة", "5"), ("Lotus Ball", "كرة لوتس", "5")]),
        ("CANS & WATER", "معلبات ومياه", [("Blu", "بلو", "8"), ("XL", "إكس إل", "8"), ("Cola", "كولا", "5"), ("Sprite", "سبرايت", "5"), ("Small Water", "مياه صغيرة", "3"), ("Large Water", "مياه كبيرة", "5")]),
    ],
]

W, H = A4
MARGIN = 34
GAP = 18
COL_W = (W - 2 * MARGIN - GAP) / 2

def header(c, page_no):
    c.setFillColor(PAPER); c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(GREEN); c.setFont("MenuBold", 22); c.drawString(MARGIN, H - 43, "ROSEMARY")
    c.setFont("Menu", 7.5); c.setFillColor(MUTED); c.drawString(MARGIN, H - 56, "CAFE  |  JENIN")
    c.setFillColor(AMBER); c.rect(W - MARGIN - 108, H - 54, 108, 19, fill=1, stroke=0)
    c.setFillColor(HexColor("#FFFFFF")); c.setFont("MenuBold", 7.5); c.drawCentredString(W - MARGIN - 54, H - 47, "M = MEDIUM   L = LARGE")
    c.setStrokeColor(GREEN); c.setLineWidth(1.2); c.line(MARGIN, H - 68, W - MARGIN, H - 68)
    c.setFont("Menu", 6.5); c.setFillColor(MUTED); c.drawString(MARGIN, 20, "All prices are in NIS")
    c.drawRightString(W - MARGIN, 20, f"MENU  /  {page_no} OF 2")

def block_height(items):
    return 29 + len(items) * 24 + 8

def draw_block(c, x, y, title, title_ar, items):
    c.setFillColor(GREEN); c.setFont("MenuBold", 11); c.drawString(x, y, title)
    c.setFont("MenuBold", 9); c.setFillColor(MUTED); c.drawRightString(x + COL_W, y, ar(title_ar))
    y -= 8; c.setStrokeColor(GREEN); c.setLineWidth(.8); c.line(x, y, x + COL_W, y)
    y -= 17
    for en, arabic, price in items:
        c.setFillColor(GREEN); c.setFont("MenuBold", 7.35); c.drawString(x, y, en)
        c.setFont("MenuBold", 7.4); c.drawRightString(x + COL_W, y, price + "  NIS")
        c.setFillColor(MUTED); c.setFont("Menu", 6.4); c.drawString(x, y - 9, ar(arabic))
        c.setStrokeColor(LINE); c.setLineWidth(.35); c.line(x, y - 14, x + COL_W, y - 14)
        y -= 24
    return y - 8

c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
for page_no, groups in enumerate(pages, 1):
    header(c, page_no)
    columns = [[], []]
    heights = [0, 0]
    for group in groups:
        idx = 0 if heights[0] <= heights[1] else 1
        columns[idx].append(group); heights[idx] += block_height(group[2])
    for idx, groups_in_col in enumerate(columns):
        x = MARGIN + idx * (COL_W + GAP); y = H - 88
        for group in groups_in_col:
            y = draw_block(c, x, y, *group)
    c.showPage()
c.save()
print(OUT)
