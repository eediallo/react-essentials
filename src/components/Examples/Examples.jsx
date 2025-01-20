import { useState } from "react";

import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section";
import Tabs from "../TabButton/Tabs";

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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
