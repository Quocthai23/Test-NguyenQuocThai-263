import MainLayout from '../../src/components/layout/MainLayout';

export default function UploadPage() {
  return (
    <MainLayout>
      <div className="w-full h-full flex items-center justify-center bg-app-bg text-app-text p-4">
        <div className="text-center border-2 border-dashed border-app-border rounded-xl p-8 w-full">
          <h1 className="text-2xl font-bold mb-4">Tải video lên</h1>
          <p className="text-app-text-muted mb-6">Kéo và thả video vào đây hoặc chọn tệp từ thiết bị của bạn.</p>
          <button className="bg-primary-500 text-white px-6 py-2 rounded-md font-bold">Chọn tệp</button>
        </div>
      </div>
    </MainLayout>
  );
}
