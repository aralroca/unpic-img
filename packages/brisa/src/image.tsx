import { transformProps, type UnpicImageProps } from "@unpic/core";

export type ImageProps = UnpicImageProps<JSX.HTMLAttributes<HTMLImageElement>>;

export function Image(props: ImageProps) {
  return <img {...transformProps(props)} />;
}
