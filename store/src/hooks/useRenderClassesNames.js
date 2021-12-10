export default function useRenderClassesNames(names, classes) {
    if (names) {
        return names.map(name => classes[name])
    }
}