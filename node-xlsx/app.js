const fs = require("fs");
const XLSX = require("xlsx");
const jsontoxml = require("jsontoxml");

const workbook = XLSX.readFile("file-example.xlsx");

let worksheets = {};
for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

console.log("json:\n", JSON.stringify(worksheets.Sheet1), "\n\n");

console.log("xml:\n", jsontoxml({
    worksheets: JSON.parse(JSON.stringify(Object.values(worksheets))).map(worksheet => worksheet.map(data => {
        for (property in data) {
            const newPropertyName = property.replace(/\s/g, "");
            if (property !== newPropertyName) {
                Object.defineProperty(data, newPropertyName,
                    Object.getOwnPropertyDescriptor(data, property));
                delete data[property];
            }
        }
        return data;
    }))
}, {}), "\n\n");

worksheets.Sheet1.push({
    "First Name": "Bob",
    "Last Name": "Bob",
    "Gender": "Male",
    "Country": "United States",
    "Age": 35,
    "Date": "22/09/2020",
    "Id": 1600,
    "New Column": "test"
});

const newBook = XLSX.utils.book_new();
const newSheet = XLSX.utils.json_to_sheet(worksheets.Sheet1);
XLSX.utils.book_append_sheet(newBook, newSheet, "Sheet1");
XLSX.writeFile(newBook,"new-book.xlsx");