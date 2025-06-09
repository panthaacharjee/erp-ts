import app from './app';

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});

export default server;