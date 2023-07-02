import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `ImgGallery`.
 */
export type ImgGalleryProps = SliceComponentProps<Content.ImgGallerySlice>;

/**
 * Component for "ImgGallery" Slices.
 */
const ImgGallery = ({ slice }: ImgGalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      


      Placeholder component for img_gallery (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImgGallery;
