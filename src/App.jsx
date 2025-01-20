import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
