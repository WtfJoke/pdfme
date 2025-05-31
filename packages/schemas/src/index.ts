import multiVariableText from './multiVariableText/index.js';
import text from './text/index.js';
import image from './graphics/image.js';
import svg from './graphics/svg.js';
import barcodes from './barcodes/index.js';
import line from './shapes/line.js';
import table from './tables/index.js';
import { rectangle, ellipse } from './shapes/rectAndEllipse.js';
import dateTime from './date/dateTime.js';
import date from './date/date.js';
import time from './date/time.js';
import select from './select/index.js';
import radioGroup from './radioGroup/index.js';
import checkbox from './checkbox/index.js';

const builtInPlugins = { Text: text };

export {
  builtInPlugins,
  // schemas
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/text)
   */
  text,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/multiVariableText)
   */	
  multiVariableText,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/graphics/image)
   */
  image,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/graphics/svg)
   */
  svg,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/tables)
   */
  table,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/barcodes)
   */
  barcodes,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/shapes/line)
   */
  line,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/shapes/rectangle)
   */
  rectangle,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/shapes/ellipse)
   */
  ellipse,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/dates/dateTime)
   */
  dateTime,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/dates/date)
   */
  date,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/dates/time)
   */
  time,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/select)
   */
  select,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/radioGroup)
   */
  radioGroup,
  /**
   * @deprecated Use the individual schemas instead (@pdfme/schemas/checkbox)
   */
  checkbox,
};

// Export utility functions
export { getDynamicHeightsForTable } from './tables/dynamicTemplate.js';
