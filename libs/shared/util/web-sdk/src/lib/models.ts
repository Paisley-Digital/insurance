export interface Environment<TWidgetId extends string = string> {
  blockSearchIndexing: boolean;
  trackWebsiteTraffic: boolean;
  production: boolean;
  apiRoot: string;
  imagesPath: string;
  userIdle: { idle: number; timeout: number };
  keys?: Record<string, string>;
  widgetsLoadStatus?: Partial<Record<TWidgetId, boolean>>;
}
