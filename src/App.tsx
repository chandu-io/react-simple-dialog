import * as React from "react";
import Dialog from "./Dialog";

/**
 * App to demonstrate a dialog box
 *
 * @author Chandrasekhar Thotakura
 */
export default function App() {
  const [show, setShow] = React.useState(false);
  const header = <div className="p-4 font-bold text-xl">Information</div>;
  const footer = (
    <div className="p-4 flex justify-end">
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setShow(false)}
      >
        Close
      </button>
    </div>
  );
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Sample Dialog Demo</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-4"
        onClick={() => setShow(true)}
      >
        Open Dialog
      </button>
      <Dialog
        header={header}
        footer={footer}
        show={show}
        onClose={() => setShow(false)}
        closeOnBlur={true}
      >
        <div className="px-4 text-gray-700 text-base">
          Sample dialog box demo
        </div>
      </Dialog>
    </div>
  );
}
