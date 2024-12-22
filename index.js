import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// ใช้ EJS เป็น view engine
app.set('view engine', 'ejs');

// ตั้งค่า body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// เสิร์ฟฟอร์ม HTML
app.get('/', (req, res) => {
    res.render('index'); // แสดงผลฟอร์ม HTML
});

// จัดการการส่งข้อมูลฟอร์ม
app.post('/submit', (req, res) => {
    const firstName = req.body.fname;
    const lastName = req.body.lname;

    // คำนวณจำนวนตัวอักษร
    const firstNameLength = firstName.length;
    const lastNameLength = lastName.length;

    // ส่งข้อมูลกลับไปยัง template EJS
    res.render('result', { firstName, lastName, firstNameLength, lastNameLength });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
