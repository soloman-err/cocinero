import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Blog = () => {
  return (
    <Accordion className="w-[90%] md:w-[80%] mx-auto my-10 space-y-5">
      <h2 className="text-center font-bold md:text-3xl underline underline-offset-8 mb-10">
        FAQ
      </h2>
      {/* 1 */}
      <AccordionItem className="border border-amber-800 rounded">
        <AccordionItemHeading className="bg-amber-800 px-2 font-bold py-3 md:text-xl">
          <AccordionItemButton>
            What are the major differences between controlled & uncontrolled
            components?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="p-2">
            <h4 className="font-bold text-lg underline underline-offset-4">
              Controlled component:
            </h4>
            <p>
              It doesn't manage own state itself. Instead, the component state
              is managed through it's parent components. It serves a more
              manageability to the state hierarchy.
            </p>
            <h4 className="font-bold text-lg underline underline-offset-4">
              Uncontrolled component:
            </h4>
            <p>
              These components are quite easier to use & requires less code than
              controlled components. They doesn't need to be shared across
              several components.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 2 */}
      <AccordionItem className="border border-amber-800 rounded">
        <AccordionItemHeading className="bg-amber-800 px-2 font-bold py-3 md:text-xl">
          <AccordionItemButton>
            How to validate React props using PropTypes?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="p-2">
          <p>
            <span className="font-bold">Firstly,</span> we've to import
            PropTypes from 'prop-types'.
            <br />
            Then we need to declare a function, using the functions name we've
            to create object using .propTypes at the end of the created function
            name.
            <br />
            <span className="font-bold">Lastly,</span> we can access created
            objects properties using (props) on the main function. It's a
            reliable process to validate react props.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 3 */}
      <AccordionItem className="border border-amber-800 rounded">
        <AccordionItemHeading className="bg-amber-800 px-2 font-bold py-3 md:text-xl">
          <AccordionItemButton>
            What is the difference between nodeJS & expressJS?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="p-2">
          <div className="p-2">
            <h4 className="font-bold text-lg underline underline-offset-4">
              NodeJS:
            </h4>
            <p>
              NodeJS is a runtime environment that provides Node functionality
              to write server-side JavaScript code.
            </p>
            <h4 className="font-bold text-lg underline underline-offset-4">
              ExpressJS:
            </h4>
            <p>
              ExpressJS itself a framework, based on JavaScript. It provides a
              set of tools & features for building web applications and APIs
              using NodeJS.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>

      {/* 4 */}
      <AccordionItem className="border border-amber-800 rounded">
        <AccordionItemHeading className="bg-amber-800 px-2 font-bold py-3 md:text-xl">
          <AccordionItemButton>
            What is a custom hook, and why will you create a custom hook?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="p-2">
          <p>
            A custom hook is a JavaScript function that starts with the phrase
            "use" and then calls other hooks to encapsulate reusable logic. It
            allows us to extract & reuse common functionality/logic across
            different components.
            <br />
            <span className="font-bold underline">
              We should create a custom hook for:
            </span>
            <li>Encapsulating complex logic</li>
            <li>State sharing between components</li>
            <li>Handling/reuse common functionality</li>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Blog;

// <div className="space-y-5">
//     <h2 className="text-2xl uppercase underline underline-offset-8 text-center font-bold">
//       Cocinero Blog
//     </h2>
//     <div className="w-[80%] mx-auto">
//       <div>
//         <h2 className="flex gap-2 items-center">
//           <span className="font-bold text-2xl">Q. </span>
//           <p className="font-bold text-amber-700">
//             What is major differences between uncontrolled & controlled
//             components?
//           </p>
//         </h2>
//         <div className="flex gap-2">
//           <span className="font-bold text-2xl">A </span>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
//             autem cum rerum doloremque deserunt similique, inventore
//             voluptate, consequuntur doloribus error quidem praesentium
//             consectetur ullam voluptas? Cumque omnis neque consequuntur ipsam
//             ratione dolore, ipsum laudantium magnam, facilis expedita eius
//             vitae fugit?
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
