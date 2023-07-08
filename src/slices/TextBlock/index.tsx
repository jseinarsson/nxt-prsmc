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
      <div className={`m-8 container xl mx-auto px-4 text-3xl/loose 
      ${slice.variation === 'centered' ? 'text-center' : ''}
      ${slice.variation === 'rightAligned' ? 'text-right' : ''}
      `}>
      <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default TextBlock;
