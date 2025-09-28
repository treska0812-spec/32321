import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Star, Filter, ArrowUpDown } from 'lucide-react';
import { smartphones, phoneCategories } from '../mock/mockData';

const SmartphonesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredPhones = smartphones.filter(phone => 
    selectedCategory === 'all' || phone.category === selectedCategory
  );

  const sortedPhones = [...filteredPhones].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог смартфонів
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Детальна інформація про найкращі смартфони 2025 року з технічними характеристиками та відгуками
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700">Категорії:</span>
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className="transition-all hover:scale-105"
            >
              Всі
            </Button>
            {phoneCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all hover:scale-105"
              >
                {category.name}
              </Button>
            ))}
          </div>
          <div className="flex items-center space-x-4 lg:ml-auto">
            <ArrowUpDown className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700">Сортування:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="name">За назвою</option>
              <option value="price-low">Ціна: спочатку дешевші</option>
              <option value="price-high">Ціна: спочатку дорожчі</option>
              <option value="rating">За рейтингом</option>
            </select>
          </div>
        </div>

        <Tabs defaultValue="grid" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="grid">Сітка</TabsTrigger>
            <TabsTrigger value="list">Список</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPhones.map((phone) => (
                <Card key={phone.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-t-lg overflow-hidden">
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {phoneCategories.find(c => c.id === phone.category)?.name || 'Інше'}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{phone.rating}</span>
                        <span className="text-xs text-gray-500">({phone.reviews})</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {phone.name}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-blue-600">
                      {phone.price.toLocaleString()} {phone.currency}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Процесор:</span>
                          <span className="font-medium">{phone.specs.processor}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Камера:</span>
                          <span className="font-medium">{phone.specs.camera.split(' ')[0]}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Батарея:</span>
                          <span className="font-medium">{phone.specs.battery}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {phone.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                        Детальніше
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            {sortedPhones.map((phone) => (
              <Card key={phone.id} className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-32 h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{phone.name}</h3>
                          <p className="text-lg font-semibold text-blue-600">
                            {phone.price.toLocaleString()} {phone.currency}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            {phoneCategories.find(c => c.id === phone.category)?.name || 'Інше'}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{phone.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Дисплей</p>
                          <p className="font-medium text-sm">{phone.specs.display}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Процесор</p>
                          <p className="font-medium text-sm">{phone.specs.processor}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Пам'ять</p>
                          <p className="font-medium text-sm">{phone.specs.ram} / {phone.specs.storage}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Батарея</p>
                          <p className="font-medium text-sm">{phone.specs.battery}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {phone.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <div>
                            <span className="text-sm text-green-600 font-medium">Переваги: </span>
                            <span className="text-sm text-gray-600">{phone.pros.join(', ')}</span>
                          </div>
                          <div>
                            <span className="text-sm text-red-600 font-medium">Недоліки: </span>
                            <span className="text-sm text-gray-600">{phone.cons.join(', ')}</span>
                          </div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                          Детальніше
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SmartphonesPage;