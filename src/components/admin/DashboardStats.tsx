'use client';

interface DashboardStatsProps {
  blogCount: number;
  galleryCount: number;
  testimonialsCount: number;
  portfolioCount: number;
}

export default function DashboardStats({ 
  blogCount, 
  galleryCount, 
  testimonialsCount, 
  portfolioCount 
}: DashboardStatsProps) {
  const stats = [
    { name: 'Blog Posts', value: blogCount, color: 'bg-blue-500' },
    { name: 'Gallery Items', value: galleryCount, color: 'bg-green-500' },
    { name: 'Testimonials', value: testimonialsCount, color: 'bg-purple-500' },
    { name: 'Portfolio Items', value: portfolioCount, color: 'bg-orange-500' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`${stat.color} rounded-full p-3 mr-4`}>
              <div className="w-6 h-6 bg-white rounded-full opacity-30"></div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}