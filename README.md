## CSS code management

### Principles

#### Separate css declarations by purpose

If we need the list of all declarations for a selector, see snapshot tests (or Chrome DevTools)

#### Purposes of css declarations

  1. Font style

      This includes `color` and `background-color`, both of which are essential for the legibility of letters. They are also one of the means to make headings stand out (just like `font-family` and `font-weight` do)
  
  2. Vertical margin/padding beyond `line-height`
  3. Side margin/padding

### How each CSS property value is derived

#### Font style

#### Vertical spacing

#### Side margin/padding

1. **Narrowest screens (from 320px)**

   For text, the left/right margins are equal to the space between lines in a paragraph (i.e., the baseline to the top of x-height in the line below).

   For figures, there is no left and right margin. The image spreads across the screen.

2. **Beyond the minimum line length**

   Minimum line length is set beyond which the word wrapping won't make it difficult to read a paragraph 

   For text, the left/right margins are equal to the space between paragraphs.

   For figures, unless the image is of high quality and of large size, the left and right margins follow the text.

3. **Beyond the maximum line length**

   Maximum line length is set beyond which reading a paragraph will become difficult due to too long a line of text

   Both text and figures are center-aligned

4. **Beyond the font-size breakpoint**

   Go back to the spacing for "Beyond the minimum line length", with spacing adjusted to a larger font size (which means a larger space between paragraphs). 

   Beyond the maximum line length, both text and figures are center-aligned.


## Vertical spacing

Space between components within `<Section>` is controlled by `<Spacer>` components' `height`.

In Koho-an page, the space between H1 text and the 1st paragraph is set by `<Article.Header>`'s `padding-bottom`.

Space between sections is set by `<Section>` component's `padding-bottom`.

Space above H3 text is set by `<SubSection>` component's `padding-top`.

Space above and below Hr is set by `<Hr>` component's `padding-top` and `padding-bottom`.

In Index page, the space between Main and Footer is set by `<Main>` component's `padding-bottom`.

In Index page, the space between Footer and the bottom of the page is set by `<Footer>` component's `padding-bottom`.
