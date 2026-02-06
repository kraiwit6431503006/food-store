# Food Store Calculator (Node.js)

โปรเจกต์นี้เป็นเครื่องคิดราคาสำหรับร้านอาหารเล็ก ๆ เขียนด้วย **Node.js**

---

## Problem Overview

ร้านอาหารมีเมนูทั้งหมด **7 รายการ**

| Item   | Price (THB/set) |
| ------ | --------------- |
| Red    | 50              |
| Green  | 40              |
| Blue   | 30              |
| Yellow | 50              |
| Pink   | 80              |
| Purple | 90              |
| Orange | 120             |

### Requirements

* ลูกค้าสามารถสั่งหลายเมนูในบิลเดียว
* โปรแกรมต้องคำนวณราคารวมให้ถูกต้อง
* มีเงื่อนไขส่วนลด:

  * **สมาชิก ลด 10%**
  * ถ้าสั่ง **Orange / Pink / Green ตั้งแต่ 2 ชุดขึ้นไป**
    จะได้ **ส่วนลด 5%**
* มี unit test เพื่อช่วยตรวจสอบความถูกต้องของ logic

---

## แนวคิดการออกแบบ

โครงสร้างโปรเจกต์ถูกออกแบบให้เข้าใจง่าย และแยกหน้าที่ชัดเจน

* **menu.js**
  เก็บข้อมูลเมนูและราคา เป็นแหล่งข้อมูลหลักของระบบ

* **discounts.js**
  รวม logic เกี่ยวกับส่วนลดทั้งหมด แยกออกจากการคำนวณราคา

* **calculator.js**
  ฟังก์ชันหลักสำหรับคำนวณราคาทั้งหมด

* **index.js**
  ใช้สำหรับรันตัวอย่างและดูผลลัพธ์

* **Unit Tests (Jest)**
  ใช้ตรวจสอบว่าการคำนวณและส่วนลดทำงานถูกต้อง

การแยกแบบนี้ทำให้ถ้าต้องเพิ่มเมนูหรือส่วนลดใหม่ สามารถทำได้ง่ายโดยไม่กระทบโค้ดส่วนอื่นมากนัก

---

## Project Structure

```
food-store/
├─ src/
│  ├─ menu.js
│  ├─ discounts.js
│  ├─ calculator.js
│  └─ index.js
├─ tests/
│  └─ calculator.test.js
├─ package.json
└─ README.md
```

---

## Installation & Setup

### สิ่งที่ต้องมี

* Node.js เวอร์ชัน **16 ขึ้นไป**

เช็กเวอร์ชันได้ด้วยคำสั่ง

```bash
node -v
```

---

### ติดตั้ง dependency

```bash
npm install
```

ถ้ายังไม่ได้ติดตั้ง Jest:

```bash
npm install --save-dev jest
```

---

## วิธีรันโปรแกรม

รันไฟล์ตัวอย่าง:

```bash
node src/index.js
```

ตัวอย่างผลลัพธ์ที่ได้:

```text
Desk#1 price: 90
Desk#1 with member card: 81
Desk#2 price: 228
```

---

## ตัวอย่างการใช้งาน

```js
const calculateTotalPrice = require("./calculator");

const items = {
  RED: 1,
  GREEN: 2,
  ORANGE: 2
};

const total = calculateTotalPrice(items, true);
console.log(total);
```

---

## การรัน Unit Test

โปรเจกต์นี้ใช้ **Jest** สำหรับทดสอบ

รัน test ทั้งหมด:

```bash
npx jest
```

Test จะครอบคลุมกรณีต่าง ๆ เช่น

* คำนวณราคาปกติ
* ส่วนลดสมาชิก
* ส่วนลดสั่งซ้ำ
* การใช้หลายส่วนลดพร้อมกัน

---
