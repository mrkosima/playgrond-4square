import * as React from "react";

export const CategoryComponent = ({ categories = [] }) => {
    const primaryCategory = categories.find(category => category.primary);
    if (primaryCategory) {
        return <div data-role="category">{primaryCategory.name}</div>;
    }
    return null;
};
