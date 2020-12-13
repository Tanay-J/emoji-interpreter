import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [meaning, setMeaning] = useState("");
  var [inputEmoji, setInputEmoji] = useState("");
  var emojiDb = {
    "😀": "Grinning Face",
    "😇": "Smiling Face with Halo",
    "😉": " Winking Face",
    "🤩": "Star-Struck",
    "🤗": "Hugging Face",
    "🤭": "Face with Hand Over Mouth",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "🤐": "Zipper-Mouth Face",
    "🤨": "Face with Raised Eyebrow",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "😶": "Face Without Mouth",
    "😏": "Smirking Face",
    "😒": "Unamused Face",
    "🙄": "Face with Rolling Eyes",
    "😬": "Grimacing Face",
    "🤥": "Lying Face",
    "😌": "Relieved Face",
    "😔": "Pensive Face",
    "😪": "Sleepy Face",
    "🤤": "Drooling Face",
    "😷": "Face with Medical Mask",
    "🤒": "Face with Thermometer",
    "🤕": "Face with Head-Bandage",
    "🤢": "Nauseated Face",
    "🤮": "Face Vomiting",
    "🤧": "Sneezing Face",
    "🥵": "Hot Face",
    "🥶": "Cold Face",
    "🥴": "Woozy Face",
    "😵": "Dizzy Face",
    "🤯": "Exploding Head",
    "🤠": "Cowboy Hat Face",
    "🥳": "Partying Face"
  };
  var emojiArray = Object.keys(emojiDb);

  function changeHandler(event) {
    inputEmoji = event.target.value;
    setInputEmoji(inputEmoji);
    if (inputEmoji in emojiDb) {
      meaning = emojiDb[inputEmoji];
    } else {
      meaning = "Can't find the emoji";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    meaning = emojiDb[emoji];
    setMeaning(meaning);
    setInputEmoji(emoji);
  }
  return (
    <div className="App">
      <h1>Know Your Emoji</h1>

      <div class="meaning">
        {" "}
        {inputEmoji} : {meaning}{" "}
      </div>
      <input
        class="inputArea"
        onChange={changeHandler}
        placeholder="Search emoji"
      ></input>
      <h3>Click on the emoji to search</h3>
      <p>
        {emojiArray.map(function (emoji) {
          return (
            <span
              class="emojiList"
              onClick={function () {
                return emojiClickHandler(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </p>
    </div>
  );
}
