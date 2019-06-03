const modules = process.env.BABEL_ENV === 'false' ? false : process.env.BABEL_ENV
const presets = [
  [
    "@babel/env",
    {
      targets: {
        "browsers": ["last 20 versions", "safari >= 7"]
      },
      useBuiltIns: "usage",
      modules,
      // loose: true,
      // spec: false,
      debug: true
    },
  ],
];

module.exports = { presets };