export interface AspectRatioProps extends React.ComponentProps<"div"> {
  ratio?: number;
}

export function AspectRatio({
  ratio = 1 / 1,
  style,
  ...props
}: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio-wrapper"
      style={{
        // ensures inner element is contained
        position: "relative",
        // ensures padding bottom trick maths works
        width: "100%",
        paddingBottom: `${100 / ratio}%`,
      }}
    >
      <div
        {...props}
        data-slot="aspect-ratio"
        style={{
          ...style,
          // ensures children expand in ratio
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
    </div>
  );
}
