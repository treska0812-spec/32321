import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Star, Users, Shield, Zap, Camera, Battery, Cpu } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Star,
      title: 'Експертні огляди',
      description: 'Детальні аналізи та порівняння найкращих смартфонів на ринку'
    },
    {
      icon: Users,
      title: 'Спільнота користувачів',
      description: 'Реальні відгуки та досвід використання від тисяч користувачів'
    },
    {
      icon: Shield,
      title: 'Перевірена інформація',
      description: 'Тільки достовірні дані та актуальні технічні характеристики'
    },
    {
      icon: Zap,
      title: 'Швидкий пошук',
      description: 'Знайдіть ідеальний смартфон за лічені хвилини'
    }
  ];

  const popularPhones = [
    {
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      price: '54,999 грн',
      rating: 4.9,
      features: ['A17 Pro', '48MP камера', '120Hz дисплей'],
      category: 'Флагман'
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      price: '49,999 грн',
      rating: 4.8,
      features: ['S Pen', '200MP камера', 'AI функції'],
      category: 'Флагман'
    },
    {
      name: 'Google Pixel 8 Pro',
      brand: 'Google',
      price: '39,999 грн',
      rating: 4.7,
      features: ['Magic Eraser', 'Чистий Android', 'AI фото'],
      category: 'Камерофон'
    }
  ];

  const quickSpecs = [
    { icon: Camera, label: 'Камера', value: 'До 200MP' },
    { icon: Battery, label: 'Батарея', value: 'До 5000mAh' },
    { icon: Cpu, label: 'Процесор', value: 'Flagship SoC' },
    { icon: Zap, label: 'Зарядка', value: 'До 120W' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
              🔥 Найкращий гід для вибору смартфона в Україні
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Оберіть ідеальний{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                смартфон
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Комплексний гід з вибору смартфона: від технічних характеристик до місць покупки. 
              Знайдіть ідеальний пристрій для ваших потреб та бюджету.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/how-to-choose">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Почати вибір
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/smartphones">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-medium border-2 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
                  Переглянути смартфони
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Чому обирають SmartGuide?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ми надаємо найповнішу та найактуальнішу інформацію про смартфони
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-blue-50/30">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Phones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярні смартфони 2025
            </h2>
            <p className="text-lg text-gray-600">
              Топ-рекомендації експертів та користувачів
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPhones.map((phone, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {phone.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{phone.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {phone.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-600">
                    {phone.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {phone.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 hover:bg-blue-50 transition-colors">
                    Детальніше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ключові характеристики
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickSpecs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{spec.label}</h3>
                    <p className="text-blue-600 font-medium">{spec.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готові обрати свій ідеальний смартфон?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Пройдіть наш детальний гід і знайдіть смартфон, який ідеально підійде саме вам
          </p>
          <Link to="/how-to-choose">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Почати зараз
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;