declare module 'astrowind:config' {
  import type {
    SiteConfig,
    I18NConfig,
    MetaDataConfig,
    AppBlogConfig,
    AppArvakConfig,
    UIConfig,
    AnalyticsConfig,
  } from './config';

  export const SITE: SiteConfig;
  export const I18N: I18NConfig;
  export const METADATA: MetaDataConfig;
  export const APP_BLOG: AppBlogConfig;
  export const ARVAK_BLOG: AppArvakConfig;
  export const UI: UIConfig;
  export const ANALYTICS: AnalyticsConfig;
}
