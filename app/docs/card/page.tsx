import Card from "@/components/ui/Card";

export default function CardDocsPage() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-10">

      {/* Heading */}
      <div className="text-center mb-16">

        <h1 className="text-6xl font-extrabold text-white mb-5">

          Card Documentation 🚀

        </h1>

        <p className="text-gray-400 text-xl">

          Advanced reusable card showcase

        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <Card
          title="Analytics"
          description="Track your dashboard analytics with modern UI cards."
        />

        <Card
          title="Users"
          description="Manage users and user information professionally."
        />

        <Card
          title="Revenue"
          description="Monitor revenue and financial statistics easily."
        />

      </div>

    </div>
  );
}