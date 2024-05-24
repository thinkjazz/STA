import React, { useState } from 'react';

const cyrillicToLatinMap = {
  'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E', 'Ж': 'ZH', 'З': 'Z', 'И': 'I',
  'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
  'У': 'U', 'Ф': 'F', 'Х': 'KH', 'Ц': 'TS', 'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ъ': '', 'Ы': 'Y', 'Ь': '',
  'Э': 'E', 'Ю': 'YU', 'Я': 'YA', 'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
  'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p',
  'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
  'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
};

function transliterate(text) {
  return text.split('').map(char => cyrillicToLatinMap[char] || char).join('');
}

function createSEOFriendlyURL(text) {
  const transliteratedText = transliterate(text);
  return transliteratedText.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
}

function Component({ showNotification }) {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTransliterate = () => {
    setOutputText(createSEOFriendlyURL(inputText));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      showNotification('Text copied to clipboard');
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      SEO транслит для URL</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="cyrillic-input">
          Введите кириллический текст:
          </label>
          <textarea
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            id="cyrillic-input"
            placeholder="Введите текст на кириллице..."
            rows={3}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-700"
            onClick={handleTransliterate}
          >
            Перевести
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-100 font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleCopyToClipboard}
          >
            Cкопировать
          </button>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="latin-output">
            Транслит латиницей:
          </label>
          <textarea
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            id="latin-output"
            readOnly
            rows={3}
            value={outputText}
          />
        </div>
      </div>
    </div>
  );
}

export default Component;
