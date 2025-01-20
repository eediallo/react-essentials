import componentImg from "./assets/components.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";
import propsImg from "./assets/config.png";

export const CORE_CONCEPTS = [
  {
    title: "Components",
    description:
      "The Core of UI building blocks - compose the user interface by combining multiple components.",
    image: componentImg,
  },

  {
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    image: jsxImg,
  },

  {
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them ",
    image: propsImg,
  },

  {
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    image: stateImg,
  },
];

export const EXAMPLES = {
  Components: {
    title: "Components",
    description:
      "Components are the building blocks fo React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output",
    code: `
        function Welcome() {
            return <h1>Hello, World!</h1>
        }
        `,
  },

  JSX: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language. But it has full power of JavaScript(e.g, it may output dynamic content).",
    code: `
        <div>
          <h1>Welcome {userName}</h1>
          <p>Time to learn React!</p>
        </div>
        `,
  },

  Props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
         function Welcome(props){
            return <h1>Hello, {props.name}</h1>
         }
        `,
  },

  State: {
    title: "State",
    description:
      "State allows React components to change their output over tiem in response to user actions, network, responses, and anything else.",
    code: `
         function Counter(){
            const [isVisible, setIsVisible] = useState(false)

            function handleClick(){
                setIsVisisble(true)
            }

            return (
                <div>
                    <button onClick={handleClick}>Apply Visibility</button>
                </div>
            )
         }
        `,
  },
};
