import React from "react";

const AdvancedTailwindFeatures: React.FC = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="p-4 debug-screens">
      <h1 className="mb-4 text-2xl font-bold">Advanced Tailwind Features</h1>

      <div className="space-y-32">
        <div>
          <h2 className="mb-2 text-lg font-semibold">Custom Spacing</h2>
          <p>
            This section demonstrates the custom `128` spacing value (32rem)
            applied using the `space-y-128` utility class.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold">Forms Plugin</h2>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                id="name"
                name="name"
                type="text"
              />
            </div>
            <div>
              <label className="mb-1 block" htmlFor="message">
                Message
              </label>
              <textarea className="w-full" id="message" name="message" />
            </div>
            <div>
              <label className="mb-1 block" htmlFor="country">
                Country
              </label>
              <select className="w-full" id="country" name="country">
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="mx">Mexico</option>
              </select>
            </div>
            <div>
              <input className="" id="terms" name="terms" type="checkbox" />
              <label className="ml-2" htmlFor="terms">
                I agree to the terms and conditions
              </label>
            </div>
            <button className="" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold">Debug Screens</h2>
          <p>
            The `.debug-screens` utility class is applied to the outermost
            container, which shows the current screen size in the top-left
            corner during development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTailwindFeatures;
