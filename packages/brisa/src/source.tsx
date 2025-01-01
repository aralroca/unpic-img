import { transformSourceProps, type UnpicSourceProps } from "@unpic/core";
export type SourceProps = UnpicSourceProps;

export function Source(props: SourceProps) {
  return (
    <source
      {...transformSourceProps<JSX.HTMLAttributes<HTMLSourceElement>>(props)}
    />
  );
}
