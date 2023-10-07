import { defineWindiSetup } from "@slidev/types";

// ビルトインのWindi CSSの設定を拡張する
export default defineWindiSetup(() => ({
  shortcuts: {
    // デフォルトの背景をカスタマイズします
    "bg-main": "bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]",
  },
  theme: {
    extend: {
      // フォントはここで置き換えることができますが、`index.html`のWebフォントのリンクの更新を忘れないようにしてください
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}));
