interface Sale {
  id: number;
  name: string;
  email: string;
  amount: number;
  avatarUrl?: string;
}

interface RecentSalesProps {
  sales: Sale[];
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const avatarColors = [
  'bg-purple-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-teal-500',
];

export function RecentSales({ sales }: RecentSalesProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 h-full">
      <h2 className="text-lg font-bold text-gray-900 mb-1">Recent Sales</h2>
      <p className="text-sm text-gray-500 mb-4">You made 265 sales this month.</p>
      <div className="flex flex-col gap-4">
        {sales.map((sale, index) => (
          <div key={sale.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-semibold flex-shrink-0 ${
                  avatarColors[index % avatarColors.length]
                }`}
              >
                {getInitials(sale.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{sale.name}</p>
                <p className="text-xs text-gray-500">{sale.email}</p>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-900">
              +${sale.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
