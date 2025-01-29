export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center">
      <div className="animate-pulse">
        <div className="h-8 w-64 bg-gray-200 rounded mb-8"></div>
        <div className="h-96 w-full bg-gray-200 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}