This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Video Play/Pause Logic on Scroll

Logic tự động Play/Pause video khi người dùng cuộn trang được xử lý thông qua **Intersection Observer API** (trong `src/components/video/VideoFeed.tsx`):
1. **IntersectionObserver**: Được sử dụng để theo dõi vị trí của các thẻ chứa video trong danh sách (feed).
2. **Ngưỡng hiển thị (Threshold)**: Được cấu hình với `threshold: 0.6`, nghĩa là khi một video chiếm từ 60% màn hình trở lên, nó sẽ được xem là video đang focus (Active).
3. **Cập nhật State**: Video thỏa điều kiện sẽ được gán ID làm `activeVideoId`.
4. **Điều khiển Player**: Trạng thái `isActive` được truyền xuống component `VideoPlayer`. Nếu `isActive` là `true` (video đang hiển thị), video sẽ tự động phát (Play), ngược lại nếu bị cuộn đi, video sẽ tự động tạm dừng (Pause).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# Test-NguyenQuocThai-263" 
