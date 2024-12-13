import { createServer } from 'miragejs';

export function makeServer() {
  createServer({
    routes() {
      this.post('/api/execute', (schema, request) => {
        const { language, value } = JSON.parse(request.requestBody);

        if (value.includes('error')) {
          return { status: 'error', error: 'SyntaxError: Unexpected token' };
        }

        return { status: 'success', output: `Output from ${language}: Hello, world!` };
      });
    },
  });
}