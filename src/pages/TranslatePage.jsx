// import { useTranslatingContext } from "../context/TranslatingContext";

// const TranslatePage = () => {
//   const { language, setLanguage, text, translate, translatedText } =
//     useTranslatingContext();

//   const handleLanguageChange = (e) => {
//     setLanguage(e.target.value);
//   };

//   const handleTextChange = (e) => {
//     translate(e.target.value);
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
//       <h2>Text Translator</h2>
//       <label>
//         Select Language:
//         <select value={language} onChange={handleLanguageChange}>
//           <option value="en">English</option>
//           <option value="es">Spanish</option>
//           <option value="fr">French</option>
//           <option value="de">German</option>
//           <option value="it">Italian</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Enter Text:
//         <input
//           type="text"
//           value={text}
//           onChange={handleTextChange}
//           placeholder="Type text to translate"
//         />
//       </label>
//       <h3>Translated Text:</h3>
//       <p>{translatedText}</p>
//     </div>
//   );
// };

// export default TranslatePage;
