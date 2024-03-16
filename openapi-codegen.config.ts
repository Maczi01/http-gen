import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  api: {
    from: {
      source: "url",
      url: "https://gist.githubusercontent.com/przeprogramowani/6e35bd3a347f4a58de6ec16514739f23/raw/506b7ff69b9bd8b32bc52bac318f6cd3fb468833/rickandmorty.json",
    },
    outputDir: "src/api/rq",
    to: async (context) => {
      const filenamePrefix = "api";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
  api: {
    from: {
      source: "url",
      url: "https://gist.githubusercontent.com/przeprogramowani/6e35bd3a347f4a58de6ec16514739f23/raw/506b7ff69b9bd8b32bc52bac318f6cd3fb468833/rickandmorty.json",
    },
    outputDir: "api",
    to: async (context) => {
      const filenamePrefix = "api";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
