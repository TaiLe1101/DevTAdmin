class ResponseAPI<T> {
  statusCode?: number;
  error?: string;
  messages?: string[];
  data?: T;

  constructor({
    statusCode = 200,
    error = null,
    messages = [],
    data = null,
  }: ResponseAPI<T>) {
    this.statusCode = statusCode;
    if (error) {
      this.error = error;
    }
    this.messages = messages;
    this.data = data;
  }
}

export default ResponseAPI;
