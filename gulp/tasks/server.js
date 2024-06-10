import { filePaths } from '../config/paths.js';

const server = (instance) => {
  instance.init({
    server: {
      baseDir: filePaths.buildFolder,
    },
  });
};

export { server };
