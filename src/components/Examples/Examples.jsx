import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, SetSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    SetSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic!</p>;
  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h3>Examples</h3>
      <menu>
        <TabButton
          isSelected={selectedTopic === "Components"}
          onSelect={() => handleSelect("Components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "JSX"}
          onSelect={() => handleSelect("JSX")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "Props"}
          onSelect={() => handleSelect("Props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "State"}
          onSelect={() => handleSelect("State")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
