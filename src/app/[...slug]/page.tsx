// app/[...slug]/page.tsx
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const pageName = slug.join("/");
  const pageTitle = slug[slug.length - 1]
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-white mt-8 sm:mt-10 lg:mt-16">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-xl text-gray-600">/{pageName}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Content Sections */}
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-orange-500 mr-2">→</span>
              About This Page
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This is a dynamically generated page for{" "}
              <strong>/{pageName}</strong>. The content here is placeholder text
              that matches the GEKOKAVE design system.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">Features</h3>
                <span className="text-orange-500 text-2xl">↗</span>
              </div>
              <p className="text-gray-600">
                Discover the key features and benefits of this section.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">Resources</h3>
                <span className="text-orange-500 text-2xl">↗</span>
              </div>
              <p className="text-gray-600">
                Access helpful resources and documentation.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">Support</h3>
                <span className="text-orange-500 text-2xl">↗</span>
              </div>
              <p className="text-gray-600">
                Get help and support for your questions.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">Community</h3>
                <span className="text-orange-500 text-2xl">↗</span>
              </div>
              <p className="text-gray-600">
                Join our community and connect with others.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Explore our full range of products and services, or get in touch
              with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Go to Homepage
              </Link>
              <Link
                href="/shop"
                className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Visit Shop
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
