import MainLayout from '../../src/components/layout/MainLayout';

export default function LivePage() {
  return (
    <MainLayout>
      <div className="w-full h-full flex items-center justify-center bg-app-bg text-app-text p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">LIVE</h1>
          <p className="text-app-text-muted">Không có phiên LIVE nào đang diễn ra.</p>
        </div>
      </div>
    </MainLayout>
  );
}
