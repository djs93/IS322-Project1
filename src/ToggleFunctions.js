// eslint-disable-next-line import/prefer-default-export
export function ToggleOnSale(items, showAll) {
    return items.filter((result) => {
        // If showPublished is TRUE, always show.
        // Otherweise only show if published is TRUE
        return showAll || result.onSale;
    });
}
