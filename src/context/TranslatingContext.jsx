// import { createContext, useContext, useState } from "react";
// import axios from "axios";

// const TranslatingContext = createContext();

// const useTranslatingContext = () => useContext(TranslatingContext);

// // eslint-disable-next-line react/prop-types
// export const TranslatingProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en");
//   const [text, setText] = useState("");
//   const [translatedText, setTranslatedText] = useState("");

//   const translate = async (inputText) => {
//     setText(inputText);

//     try {
//       const response = await axios.post(
//         `https://libretranslate.com/translate`,
//         {
//           q: inputText,
//           source: "auto",
//           target: language,
//           format: "text",
//         }
//       );
//       setTranslatedText(response.data.translatedText);
//     } catch (error) {
//       console.error("Translation API error:", error);
//       console.log("API Response:", error.response.data);
//       console.log("Translating to: ", language);
//       setTranslatedText("Translation failed");
//     }
//   };

//   return (
//     <TranslatingContext.Provider
//       value={{ language, setLanguage, text, translate, translatedText }}
//     >
//       {children}
//     </TranslatingContext.Provider>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export { useTranslatingContext };
