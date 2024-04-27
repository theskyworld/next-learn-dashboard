// google字体，next中已经自动安装好了，可以直接导入使用
import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({
  subsets : ["latin"]
})

export const lusitana = Lusitana({
  weight : ['400', '700'],
  subsets :['latin']
})