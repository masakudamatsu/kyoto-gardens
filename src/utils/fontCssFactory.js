export const getFontSize = typeface => {
  let fontSize;
  if (typeface.capHeight) {
    fontSize = capHeightToBe(typeface.capHeight, typeface.fontMetrics);
  }
  if (typeface.xHeight) {
    fontSize = xHeightToBe(typeface.xHeight, typeface.fontMetrics);
  }
  return fontSize;
};

export const getFontSizeFromX = (xHeight, fontMetrics) => {
  if (typeof xHeight !== 'number') {
    throw new Error(
      `getFontSizeFromX() received x-height as ${typeof xHeight}, not as number`,
    );
  }
  if (!fontMetrics) {
    throw new Error(`getFontSizeFromX() received no fontMetrics`);
  }
  return xHeightToBe(xHeight, fontMetrics);
};

export const getFontSizeFromCap = (capHeight, fontMetrics) => {
  if (typeof capHeight !== 'number') {
    throw new Error(
      `getFontSizeFromX() received cap-height as ${typeof capHeight}, not as number`,
    );
  }
  if (!fontMetrics) {
    throw new Error(`getFontSizeFromX() received no fontMetrics`);
  }
  return capHeightToBe(capHeight, fontMetrics);
};

export const getLineHeight = typeface => {
  if (!typeface.lineHeightRatio) {
    return 'normal';
  }
  const lineHeightToXHeightRatio =
    (typeface.lineHeightRatio.xHeight + typeface.lineHeightRatio.betweenLines) /
    typeface.lineHeightRatio.xHeight;
  return (
    (typeface.fontMetrics.xHeight * lineHeightToXHeightRatio) /
    typeface.fontMetrics.unitsPerEm
  );
};

export const getLineHeightFromRatio = (lineHeightRatio, fontMetrics) => {
  if (!fontMetrics.unitsPerEm) {
    throw new Error(`getLineHeightFromRatio() received no fontMetrics`);
  }
  const lineHeightToXHeightRatio =
    (lineHeightRatio.xHeight + lineHeightRatio.betweenLines) /
    lineHeightRatio.xHeight;
  return (
    (fontMetrics.xHeight * lineHeightToXHeightRatio) / fontMetrics.unitsPerEm
  );
};

export const getCapHeightXHeightDiff = typeface => {
  let unit;
  if (typeface.xHeight) {
    unit = typeface.xHeight / typeface.fontMetrics.xHeight;
  }
  if (typeface.capHeight) {
    unit = typeface.capHeight / typeface.fontMetrics.capHeight;
  }
  return unit * (typeface.fontMetrics.capHeight - typeface.fontMetrics.xHeight);
};

// export const getCapToXDistFromXHeight = (xHeight, designSpec) => {
//   const unit = xHeight / designSpec.fontMetrics.xHeight;
//   return unit * (designSpec.fontMetrics.capHeight - designSpec.fontMetrics.xHeight);
// };

// export const getCapToXDistFromCapHeight = (capHeight, designSpec) => {
//   const unit = capHeight / designSpec.fontMetrics.capHeight;
//   return unit * (designSpec.fontMetrics.capHeight - designSpec.fontMetrics.xHeight);
// };

// helper functions

function capHeightToBe(capHeight, fontMetrics) {
  const fontSizeToCapHeightRatio =
    fontMetrics.unitsPerEm / fontMetrics.capHeight;
  return capHeight * fontSizeToCapHeightRatio;
}

function xHeightToBe(xHeight, fontMetrics) {
  const fontSizeToXHeightRatio = fontMetrics.unitsPerEm / fontMetrics.xHeight;
  return xHeight * fontSizeToXHeightRatio;
}
