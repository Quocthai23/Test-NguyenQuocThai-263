import MainLayout from '../../src/components/layout/MainLayout';

export default function FollowingPage() {
  return (
    <MainLayout>
      <div className="w-full h-full flex items-center justify-center bg-app-bg text-app-text p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Đã follow</h1>
          <p className="text-app-text-muted">Bạn chưa follow ai, hãy khám phá thêm nhé.</p>
        </div>
      </div>
    </MainLayout>
  );
}
