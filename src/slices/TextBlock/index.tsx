import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="m-8 container xl mx-auto px-4 text-center text-3xl/loose">
      <PrismicRichText field={slice.primary.text} />
      </div>
      Placeholder component for text_block (variation: {slice.variation}) Slices
    </section>
  );
};

export default TextBlock;
