import { useEffect, useState } from "react";

/**
 * Returns true when an image at the given URL fails to load,
 * so callers can render a placeholder instead.
 */
export function useImageError(src: string | undefined) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
    if (!src) {
      setHasError(true);
      return;
    }
    const img = new Image();
    img.onerror = () => setHasError(true);
    img.onload = () => setHasError(false);
    img.src = src;
  }, [src]);

  return hasError;
}
