module.exports = {
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  overrrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parseOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};
