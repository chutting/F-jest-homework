export default {
  get: jest.fn(() => Promise.resolve({ data: { name: "ctt" } })),
  post: jest.fn(() => Promise.resolve({ data: { name: "ctt" } })),
};
