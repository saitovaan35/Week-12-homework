// Выведите в консоль количество символов в тексте.
const wholeText = document.querySelector('.paragraph')
console.log("Количество символов в тексте:", wholeText.length);

// Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.
const result = wholeText.textContent.replace(/;\n/g, '');
console.log("Текст с переносами строк:\n",result);

// Удалите все пробелы в переменной result и сохраните результат в переменную substring.
const substring = result.replace(/\s/g, "");
console.log("Текст без пробелов:\n", substring);


// Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.
const newText = result.slice(27, 50);
console.log("Извлечённая подстрока:\n", newText);

// Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText.
const replacedText = newText.replace(/клён/g, "дубе");
console.log("Заменённый текст:\n", replacedText);

// Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.
const replacedText2 = result.toUpperCase();
console.log("Текст в верхнем регистре:\n", replacedText2);

// Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.
const replacedText3 = result.replace(/клён/g, "дуб");
console.log("Заменённый текст:\n", replacedText3);

// Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.
const index = result.indexOf("моря");
console.log("Индекс первого вхождения слова моря:", index);

// Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.
const modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
console.log("Текст с изменённой первой буквой:\n", modifiedText);




// 1. Создаём строку с алфавитом
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// 2. Генерируем случайное слово из 4 букв
let randomWord = "";
for (let i = 0; i < 4; i++) {
    // Получаем случайный индекс
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    // Добавляем случайную букву к слову
    randomWord += alphabet[randomIndex];
}

// 3. Выводим результат
console.log("Случайное слово:", randomWord);


