import { Coffee, Croissant, MapPin } from 'lucide-react'

const Index = () => {
  const menuItems = [
    {
      name: "Espresso",
      description: "Rich and aromatic single shot of espresso",
      price: "$3.50",
      icon: <Coffee className="w-6 h-6" />
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: "$4.50",
      icon: <Coffee className="w-6 h-6" />
    },
    {
      name: "Croissant",
      description: "Freshly baked butter croissant",
      price: "$3.00",
      icon: <Croissant className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-4">Brew & Bites</h1>
            <p className="text-xl mb-8">Artisanal coffee and fresh pastries in the heart of the city</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium">
                View Menu
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium">
                Order Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Story</h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Founded in 2015, Brew & Bites is dedicated to serving the finest locally roasted coffee and homemade pastries in a cozy, welcoming atmosphere.
          </p>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Popular Items</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-amber-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-amber-800 font-medium">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Visit Us</h2>
            <p className="text-lg text-amber-800 mb-6">
              123 Coffee Street<br />
              Downtown, CA 90210
            </p>
            <div className="flex items-center gap-2 text-amber-800">
              <MapPin className="w-5 h-5" />
              <span>Open daily 7am - 7pm</span>
            </div>
          </div>
          <div className="md:w-1/2 h-64 bg-gray-200 rounded-lg overflow-hidden">
            {/* Map placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-amber-200">
              <span className="text-amber-800">Map would be here</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;