import discardDuplicates from 'postcss-discard-duplicates'
import normalizeWhiteSpace from 'postcss-normalize-whitespace'
//@ts-ignore
import prettify from 'postcss-prettify'
import postcss from 'postcss'
//@ts-ignore
import sortMq from 'postcss-sort-media-queries'
import nested from 'postcss-nested'

export function optimizeCss(code: string, { minify = false }: { minify?: boolean } = {}) {
  const { css } = postcss([
    discardDuplicates(),
    sortMq({ sort: 'mobile-first' }),
    minify ? normalizeWhiteSpace() : prettify,
    nested(),
  ]).process(code)
  return css
}
