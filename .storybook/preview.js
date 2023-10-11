/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            // storySort: (a, b) => a[1].id.localeCompare(b[1].id),
            storySort: function storySort(a, b) {
                return a.title !== b.title
                    ? 0
                    : a.id.localeCompare(b.id, undefined, { numeric: true });
            },
        },
    },
};

export default preview;
