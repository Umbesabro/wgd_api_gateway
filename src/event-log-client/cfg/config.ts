export class Config {
  public static readonly url: string = process.env.WGD_EVENT_LOG_URL
    ? process.env.WGD_EVENT_LOG_URL
    : 'http://localhost:3100';
}
