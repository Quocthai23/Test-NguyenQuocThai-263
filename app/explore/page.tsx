import MainLayout from '../../src/components/layout/MainLayout';

export default function ExplorePage() {
  return (
    <MainLayout>
      <div className="w-full h-full flex items-center justify-center bg-app-bg text-app-text p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Khám phá</h1>
          <p className="text-app-text-muted">Tính năng đang được phát triển...</p>
        </div>
      </div>
    </MainLayout>
  );
}
