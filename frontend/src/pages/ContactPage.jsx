import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Star } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Дякуємо за ваше повідомлення! Ми відповімо вам найближчим часом.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const teamMembers = [
    {
      name: 'Олександр Петренко',
      role: 'Головний редактор',
      experience: '5 років в tech-журналістиці',
      specialization: 'Флагманські смартфони',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Марія Іванова',
      role: 'Експерт з камер',
      experience: '7 років в мобільній фотографії',
      specialization: 'Камерофони та фотографія',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Андрій Коваленко',
      role: 'Технічний аналітик',
      experience: '4 роки в тестуванні гаджетів',
      specialization: 'Продуктивність та ігри',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@smartguide.ua',
      description: 'Для загальних питань та співпраці'
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+380 (44) 123-45-67',
      description: 'Пн-Пт з 9:00 до 18:00'
    },
    {
      icon: MapPin,
      title: 'Адреса',
      content: 'вул. Хрещатик, 22, Київ',
      description: 'Головний офіс'
    },
    {
      icon: Clock,
      title: 'Час роботи',
      content: 'Пн-Пт: 9:00-18:00',
      description: 'Вихідні: 10:00-16:00'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Зв'язатися з нами
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Маєте питання, пропозиції або потребуєте консультації? Ми завжди готові допомогти!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-blue-600" />
                Напишіть нам
              </CardTitle>
              <CardDescription>
                Заповніть форму і ми відповімо вам найближчим часом
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-500" />
                      Ім'я
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше ім'я"
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-500" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Тема повідомлення</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Про що ви хочете запитати?"
                    required
                    className="transition-all focus:scale-[1.02]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Повідомлення</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Детально опишіть ваше питання або пропозицію..."
                    rows={5}
                    required
                    className="transition-all focus:scale-[1.02] resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Надіслати повідомлення
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Контактна інформація
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="font-medium text-blue-600">{item.content}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Швидкий зв'язок</h3>
                <p className="mb-4 text-blue-100">
                  Потрібна термінова консультація? Зателефонуйте нам або напишіть в месенджер
                </p>
                <div className="flex space-x-3">
                  <Button variant="secondary" size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Phone className="w-4 h-4 mr-2" />
                    Подзвонити
                  </Button>
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Mail className="w-4 h-4 mr-2" />
                    Написати
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Наша команда
            </CardTitle>
            <CardDescription>
              Експерти, які створюють найкращі рекомендації для вас
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                    <Badge className="bg-blue-100 text-blue-700 mb-2">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-gray-600 mb-1">{member.experience}</p>
                    <p className="text-sm font-medium text-blue-600">{member.specialization}</p>
                  </div>
                  
                  <div className="flex justify-center items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Quick Links */}
        <Card className="mt-8 border-0 shadow-lg bg-gradient-to-r from-gray-50 to-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Часті питання
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 text-left justify-start hover:bg-blue-50">
                <div>
                  <div className="font-medium">Як обрати смартфон?</div>
                  <div className="text-sm text-gray-600">Покроковий гід</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4 text-left justify-start hover:bg-blue-50">
                <div>
                  <div className="font-medium">Де краще купувати?</div>
                  <div className="text-sm text-gray-600">Рекомендовані магазини</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto p-4 text-left justify-start hover:bg-blue-50">
                <div>
                  <div className="font-medium">Гарантія та сервіс</div>
                  <div className="text-sm text-gray-600">Умови обслуговування</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;