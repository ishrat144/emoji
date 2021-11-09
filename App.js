import React from "react";
import Entery from "./Entery";
import emojipedia from "./emojipedia";

console.log(emojipedia);
function createEntery(emojiTern){
return (
<Entery
key={emojiTern.id}
emoji={emojiTern.emoji}
name={emojiTern.name}
description={emojiTern.meaning}
/>
);
}

function App(props) {
return (
  <div>
    <h1>
      <span>emojipedia</span>
    </h1>

  <d1 className="dictionary">
    {emojipedia.map(createEntery)}
    </d1>
    </div>
 
);
}


export default App;
