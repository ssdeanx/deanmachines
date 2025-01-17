import React from "react";

const AdvancedTailwindFeatures: React.FC = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="p-4 debug-screens">
      <h1 className="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
        Advanced Tailwind Features
      </h1>

      <div className="space-y-32">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Custom Spacing
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This section demonstrates the custom `128` spacing value (32rem)
            applied using the `space-y-128` utility class.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Forms Plugin
          </h2>
          <form className="space-y-4">
            <div>
              <label
                className="mb-1 block text-gray-600 dark:text-gray-400"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                id="name"
                name="name"
                type="text"
              />
            </div>
            <div>
              <label
                className="mb-1 block text-gray-600 dark:text-gray-400"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                id="message"
                name="message"
              />
            </div>
            <div>
              <label
                className="mb-1 block text-gray-600 dark:text-gray-400"
                htmlFor="country"
              >
                Country
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                id="country"
                name="country"
              >
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="mx">Mexico</option>
              </select>
            </div>
            <div>
              <input
                className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                id="terms"
                name="terms"
                type="checkbox"
              />
              <label
                className="ml-2 text-gray-600 dark:text-gray-400"
                htmlFor="terms"
              >
                I agree to the terms and conditions
              </label>
            </div>
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Debug Screens
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The `.debug-screens` utility class is applied to the outermost
            container, which shows the current screen size in the top-left
            corner during development.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Custom Utilities
          </h2>
          <div className="rounded-md p-4 glass">
            <p className="text-gray-600 dark:text-gray-400">
              This section demonstrates the use of the custom `.glass` utility
              class, which applies a glass morphism effect.
            </p>
          </div>
          <div className="mt-4 center">
            <p className="text-gray-600 dark:text-gray-400">
              This section demonstrates the use of the custom `.center` utility
              class, which centers content both horizontally and vertically.
            </p>
          </div>
          <div className="mt-4 stack">
            <p className="text-gray-600 dark:text-gray-400">
              This section demonstrates the use of the custom `.stack` utility
              class, which stacks content vertically with a gap.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Advanced Animations
          </h2>
          <div className="animate-slide-up rounded-md bg-gray-100 p-4 dark:bg-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              This section demonstrates the use of the custom
              `.animate-slide-up` utility class, which applies a slide-up
              animation.
            </p>
          </div>
          <div className="animate-fade mt-4 rounded-md bg-gray-100 p-4 dark:bg-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              This section demonstrates the use of the custom `.animate-fade`
              utility class, which applies a fade-in animation.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Responsive Design
          </h2>
          <div className="rounded-md bg-gray-100 p-4 dark:bg-gray-700 sm:text-center md:text-left lg:text-right">
            <p className="text-gray-600 dark:text-gray-400">
              This section demonstrates the use of responsive modifiers, which
              change the text alignment based on the screen size.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTailwindFeatures;
