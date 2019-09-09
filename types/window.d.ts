declare global {
  type Share =
    | { title: string; message?: string; url?: string }
    | { title?: string; message: string; url?: string }
    | { title?: string; message?: string; url: string };
  interface Window {
    navigator: {
      share: ({ title, messaage, url }: Share) => Promise<void>;
    };
  }
}
