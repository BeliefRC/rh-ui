module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          // 转换枚举和联合类型
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules')
            }
            return true
          }
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
