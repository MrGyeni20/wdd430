import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  const customers = [
    { id: 1, name: 'Isaac Newton', email: 'ikenewton@gmail.com' },
    { id: 2, name: 'Joshua King', email: 'joking@gmail.com' },
    { id: 3, name: 'Courage Badioo', email: 'hashtag@gmail.com' },
    { id: 4, name: 'Benjiman Sesko', email: 'sesko30@gmail.com' },
    { id: 5, name: 'Hugo Frimpong', email: 'ekitike22@gmail.com' },
  ];

  return (
    <div className="w-full">
      <h1 className="mb-4 text-2xl font-semibold">Customers</h1>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-lg bg-gray-50 p-2">
              {customers.map((customer) => (
                <div key={customer.id} className="mb-2 bg-white p-4 rounded">
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-sm text-gray-600">{customer.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}