import { JsonResume } from "./jsonresume";

/**
 * In the future there might be additional catalogs.
 */
enum SupportedCatalogTypes {
  JSONRESUME = "jsonresume",
}

/**
 * "CVDrive Schema" underlying CV schema object.
 */
export interface CVDSchema {
  /**
   * An id that will be included in exports so imports can be retrieved from source again.
   */
  // TODO: Evaluate idea. This can be included in json schema, linkedin profile etc.
  cvdID?: string;
  /**
   * Schema version used at generation.
   */
  cvdschemaVersion: "0.0.1";
  /**
   * Label for this CV
   */
  label: string;
  /**
   * Source catalog. These can be more in the future. Like LinkedIn etc.
   */
  // TODO: Should not be an array for object reference. I.e. generate UUID instead and under
  // type catalog: jsonresum -> data[]
  catalog: [
    {
      label: string;
      priority?: number;
      dateAdded: Date;
      /**
       * Written language used in the CV (EN, DE, etc.)
       */
      // TODO: Potentially use this: https://www.npmjs.com/package/locale-enum
      language: string;
      // HACK: Implement properly by type inference.
      type: "jsonresume" | SupportedCatalogTypes;
      data: JsonResume;
    },
  ];
}
