import { CVDSchema } from "./schemas";
import { JsonResume } from "./schemas/jsonresume";

// TODO: Decide if a class based approach would be more appropriate for keeping the catalog in sync.
/**
 * Creates a CVDrive source
 */
const CVDSource = (data: CVDSchema) => {
  return data;
};

// =================================================================
// Testing JsonResume
// =================================================================
const TestJsonResumeData: JsonResume = {
  // Specification
  $schema:
    "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  jsonresumeVersion: "1.0.0",
  /**
   * Start JsonResume
   * */
  basics: {
    name: "Dino Scheidt",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum vehicula lectus, id vehicula est pharetra ac. Sed fermentum mauris non lorem vulputate, ac dictum dui commodo. Nullam ultrices suscipit justo, eu posuere erat ultrices eget. Curabitur at mollis risus, in consectetur est bla consectetur est bla .",
  },
};

// =================================================================
// Testing Usability
// =================================================================
CVDSource({
  cvdschemaVersion: "0.0.1",
  label: "Sample Source",
  catalog: [
    {
      label: "JsonResume Sample",
      language: "en",
      type: "jsonresume",
      dateAdded: new Date(),
      data: TestJsonResumeData,
    },
  ],
});

export default CVDSource;
