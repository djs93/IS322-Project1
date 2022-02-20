// eslint-disable-next-line import/prefer-default-export
export function FilterByComponentType(items, componentType) {
    return items.filter((result) => {
        return componentType === 'all' ? true : result.category === componentType;
    });
}
