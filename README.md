# next-learn-dashboard

此项目为学习 Next.js 的第一个项目。来源于https://nextjs.org/learn/dashboard-app

## 项目相关

## 知识点相关

### 样式

在 react/next 中添加样式的方式

#### 使用 tailwindcss

#### 使用模块 css

创建例如`./demo.module.css`文件

```css
.test {
  color: blue;
}
```

在组件中使用

```tsx
// demo.tsx
import style from "./demo.module.css";
export default function Demo() {
  return <p className={style.test}>test</p>;
}
```

#### 使用 clsx 库

使用 clsx 库之后，可以在`className`中同时书写样式类名字符串和样式类型表达式

```tsx
import clsx from "clsx";
export default function InvoiceStatus({ status }: { status: string }) {
  // 根据status的不同值展示不同的样式
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-sm",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "paid",
        }
      )}
    >
      invoice status
    </span>
  );
}
```

#### 其他方式

- 使用`.css`或者`.scss`文件
- 使用其它 css-in-js 库，例如: [styled-jsx](https://github.com/vercel/styled-jsx), [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components),和[emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion).

### 字体

next 中默认内置了 google 字体库（位于`next/font/google`模块），可以直接导入使用

当使用`next/font`模块时，next 会进行相应的优化：在构建时就预先下载字体文件并将其与静态资源一起进行托管。避免在使用时额外请求字体

创建`./app/fonts.ts`文件，创建并导出要使用的字体

```ts
// google字体，next中已经自动安装好了，可以直接导入使用
import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
```

在组件中使用字体

```tsx
// layout.tsx
import lusitana from "./fonts.ts";

<p className={`${lusitana.className}`}>some test text</p>;
```

### 图像

next 默认对`next/image`模块下的组件进行图像优化，当使用`<Image>`组件(对`img`元素的封装)时，会自动对其中的图像进行以下优化：

- 加载时避免布局移动
- 调整图像大小，避免不同视口设备图像的不兼容
- 延迟加载图像(进入视口时才加载)
- 以例如 Webp 和 AVIF 格式提供图像(如果浏览器支持)

对于`public`目录下的文件，可以在任意组件中直接通过例如`/hero-image.png`进行获取

### 路由

注意点：

- 使用`<Link>`组件进行路由跳转时，应当从`next/link`中导入

#### 使用`page.tsx`文件表示路由页面

如果一个文件用于表示一个路由页面，表示该文件是公共的，直接通过路由路径即可获取，类似于直接通过路由路径获取`public`目录下的资源

在 next 中每一个`page.tsx`文件表示一个单独的页面，不同目录下的`page.tsx`文件对应着不同的路由。例如`app/`目录下的`page.tsx`文件表示`/`，`app/login/`下的`page.tsx`文件表示`/login`，`app/login/user/`下的`page.tsx`文件表示`/login/user`

同理，在 next 中每一个`layout.tsx`文件表示一个单独的布局页面，在不同目录下表示当前目录下的布局页面，作用于当前目录下的所有路由页面。布局页面组件中的`children`属性用于接收一个路由页面组件或者另外一个布局页面组件(嵌套布局)
