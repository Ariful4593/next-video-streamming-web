import { useWindowWidth } from './useWindowWidth'

export const useResponsiveWidth = () => {
    const width = useWindowWidth();
    let preview;

    if (width < 400) {
        preview = 1;
    } else if (width < 800) {
        preview = 2;
    } else if (width < 1000) {
        preview = 3;
    } else if (width < 1300) {
        preview = 4;
    }

    return preview;
}
