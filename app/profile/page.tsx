import MainLayout from '../../src/components/layout/MainLayout';

export default function ProfilePage() {
  return (
    <MainLayout>
      <div className="w-full h-full flex items-start justify-center bg-app-bg text-app-text p-8 overflow-y-auto">
        <div className="w-full">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-neutral-300 overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=profile" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Test User</h1>
              <div className="flex gap-4 text-app-text-muted">
                <span><strong className="text-app-text">0</strong> Đang follow</span>
                <span><strong className="text-app-text">0</strong> Follower</span>
                <span><strong className="text-app-text">0</strong> Thích</span>
              </div>
            </div>
          </div>

          <div className="border-t border-app-border pt-8 flex flex-col items-center justify-center min-h-[300px]">
            <h2 className="text-xl font-bold mb-2">Tải video đầu tiên của bạn lên</h2>
            <p className="text-app-text-muted mb-4">Video của bạn sẽ hiển thị tại đây</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
