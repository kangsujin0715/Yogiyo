import React from "react";

import "../../asset/component-css/button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (
        <button
            type="button"
            className={[
                "storybook-button",
                `storybook-button--${size || "small"}`,
                mode,
            ].join(" ")}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
