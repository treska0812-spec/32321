import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { MapPin, Phone, Globe, Star, Navigation, Clock } from 'lucide-react';
import { stores } from '../mock/mockData';

const StoresPage = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCity, setSelectedCity] = useState('all');

  const cities = ['all', ...new Set(stores.flatMap(store => store.locations.map(loc => loc.city)))];
  
  const filteredStores = stores.filter(store => 
    selectedCity === 'all' || store.locations.some(loc => loc.city === selectedCity)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Де купити смартфон в Україні
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Найкращі магазини та інтернет-платформи для покупки смартфонів з гарантією та сервісом
          </p>
        </div>

        {/* City Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-sm">
            {cities.map((city) => (
              <Button
                key={city}
                variant={selectedCity === city ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCity(city)}
                className="transition-all hover:scale-105"
              >
                {city === 'all' ? 'Всі міста' : city}
              </Button>
            ))}
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {filteredStores.map((store) => (
            <Card key={store.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {store.name}
                    </CardTitle>
                    <CardDescription className="text-base text-blue-600 font-medium">
                      {store.type}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    <Star className="w-3 h-3 mr-1" />
                    4.{Math.floor(Math.random() * 4) + 5}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a 
                      href={`https://${store.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {store.website}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{store.phone}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Переваги:</h4>
                  <div className="flex flex-wrap gap-1">
                    {store.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Локації:</h4>
                  <div className="space-y-1">
                    {store.locations
                      .filter(loc => selectedCity === 'all' || loc.city === selectedCity)
                      .map((location, index) => (
                        <div key={index} className="flex items-start space-x-2 p-2 bg-gray-50 rounded text-sm">
                          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-gray-900">{location.city}</div>
                            <div className="text-gray-600">{location.address}</div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-blue-50 transition-colors"
                    onClick={() => setSelectedStore(store)}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    На карті
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open(`https://${store.website}`, '_blank')}
                  >
                    Відвідати
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder */}
        <Card className="border-0 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 text-center">
              Карта магазинів
            </CardTitle>
            <CardDescription className="text-center">
              Інтерактивна карта з усіма локаціями магазинів смартфонів
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-blue-600 mx-auto" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Інтерактивна карта</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Тут буде відображена карта з усіма локаціями магазинів. 
                    Ви зможете знайти найближчий магазин та проложити до нього маршрут.
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Navigation className="h-4 w-4 mr-2" />
                  Відкрити повну карту
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shopping Tips */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 text-center">
              💡 Поради для покупки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-600" />
                  Коли купувати
                </h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Чорна п'ятниця (листопад)</li>
                  <li>• Після релізу нових моделей</li>
                  <li>• Кінець року (грудень)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <Star className="h-4 w-4 mr-2 text-blue-600" />
                  На що звернути увагу
                </h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Офіційна гарантія</li>
                  <li>• Комплектація товару</li>
                  <li>• Умови повернення</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-600" />
                  Способи оплати
                </h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Готівка/картка</li>
                  <li>• Розстрочка 0%</li>
                  <li>• Trade-in програми</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StoresPage;