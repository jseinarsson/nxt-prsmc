// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = never;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Menu documents */
interface MenuDocumentData {
  /**
   * Logo field in *Menu*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
  /**
   * Menu Items field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  menu_items: prismic.GroupField<Simplify<MenuDocumentDataMenuItemsItem>>;
}
/**
 * Item in Menu → Menu Items
 *
 */
export interface MenuDocumentDataMenuItemsItem {
  /**
   * Label field in *Menu → Menu Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_items[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismic.KeyTextField;
  /**
   * Link field in *Menu → Menu Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<MenuDocumentData>, "menu", Lang>;
/** Content for Project page documents */
interface ProjectPageDocumentData {
  /**
   * Hero field in *Project page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.hero
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  hero: prismic.ImageField<never>;
  /**
   * Title field in *Project page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Slice Zone field in *Project page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<ProjectPageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Project page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Project page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Project page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Project page → Slice Zone*
 *
 */
type ProjectPageDocumentDataSlicesSlice = ImgGallerySlice | TextBlockSlice;
/**
 * Project page document from Prismic
 *
 * - **API ID**: `project_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectPageDocumentData>,
    "project_page",
    Lang
  >;
export type AllDocumentTypes =
  | HomeDocument
  | MenuDocument
  | ProjectPageDocument;
/**
 * Primary content in ImgGallery → Primary
 *
 */
interface ImgGallerySliceDefaultPrimary {
  /**
   * Img field in *ImgGallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: img_gallery.primary.img
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  img: prismic.ImageField<never>;
}
/**
 * Default variation for ImgGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImgGallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImgGallerySliceDefaultPrimary>,
  never
>;
/**
 * Item in ImgGallery → Items
 *
 */
export interface ImgGallerySliceMultipleImgItem {
  /**
   * Img field in *ImgGallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: img_gallery.items[].img
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  img: prismic.ImageField<never>;
}
/**
 * MultipleImg variation for ImgGallery Slice
 *
 * - **API ID**: `multipleImg`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImgGallerySliceMultipleImg = prismic.SharedSliceVariation<
  "multipleImg",
  Record<string, never>,
  Simplify<ImgGallerySliceMultipleImgItem>
>;
/**
 * Slice variation for *ImgGallery*
 *
 */
type ImgGallerySliceVariation =
  | ImgGallerySliceDefault
  | ImgGallerySliceMultipleImg;
/**
 * ImgGallery Shared Slice
 *
 * - **API ID**: `img_gallery`
 * - **Description**: `ImgGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImgGallerySlice = prismic.SharedSlice<
  "img_gallery",
  ImgGallerySliceVariation
>;
/**
 * Primary content in TextBlock → Primary
 *
 */
interface TextBlockSliceDefaultPrimary {
  /**
   * Text field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in TextBlock → Primary
 *
 */
interface TextBlockSliceCenteredPrimary {
  /**
   * Text field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Centered variation for TextBlock Slice
 *
 * - **API ID**: `centered`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSliceCentered = prismic.SharedSliceVariation<
  "centered",
  Simplify<TextBlockSliceCenteredPrimary>,
  never
>;
/**
 * Primary content in TextBlock → Primary
 *
 */
interface TextBlockSliceRightAlignedPrimary {
  /**
   * Text field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Right Aligned variation for TextBlock Slice
 *
 * - **API ID**: `rightAligned`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSliceRightAligned = prismic.SharedSliceVariation<
  "rightAligned",
  Simplify<TextBlockSliceRightAlignedPrimary>,
  never
>;
/**
 * Slice variation for *TextBlock*
 *
 */
type TextBlockSliceVariation =
  | TextBlockSliceDefault
  | TextBlockSliceCentered
  | TextBlockSliceRightAligned;
/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomeDocument,
      MenuDocumentData,
      MenuDocumentDataMenuItemsItem,
      MenuDocument,
      ProjectPageDocumentData,
      ProjectPageDocumentDataSlicesSlice,
      ProjectPageDocument,
      AllDocumentTypes,
      ImgGallerySliceDefaultPrimary,
      ImgGallerySliceDefault,
      ImgGallerySliceMultipleImgItem,
      ImgGallerySliceMultipleImg,
      ImgGallerySliceVariation,
      ImgGallerySlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceDefault,
      TextBlockSliceCenteredPrimary,
      TextBlockSliceCentered,
      TextBlockSliceRightAlignedPrimary,
      TextBlockSliceRightAligned,
      TextBlockSliceVariation,
      TextBlockSlice,
    };
  }
}