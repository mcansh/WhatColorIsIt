interface ShareOptions {
  title: string;
  text: string;
  url: string;
}

interface NavigatorShare extends Navigator {
  share?: (options: ShareOptions) => Promise<{}>;
}

export { ShareOptions, NavigatorShare };
