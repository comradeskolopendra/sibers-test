import { useCallback, useRef } from "react";

interface UseDebounceProps {
    callback: (...args: any) => void;
    ms: number;
}

// this hook returns the debounced version of passed callback
const useDebounce = (callback: (...args: any) => void, ms: number) => {
    const timeout = useRef<NodeJS.Timeout>()

    const debouncedCallback = useCallback((...args: any) => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
            callback(...args);
        }, ms)
    }, [callback, ms])

    return debouncedCallback;
}

export default useDebounce;