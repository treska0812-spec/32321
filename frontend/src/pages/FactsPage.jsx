import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Checkbox } from '../components/ui/checkbox';
import { Lightbulb, Clock, Trophy, TrendingUp, Send, Star } from 'lucide-react';
import { facts, surveyQuestions } from '../mock/mockData';

const FactsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [surveyAnswers, setSurveyAnswers] = useState({});
  const [showSurvey, setShowSurvey] = useState(false);

  const categories = ['all', ...new Set(facts.map(fact => fact.category))];
  const filteredFacts = facts.filter(fact => 
    selectedCategory === 'all' || fact.category === selectedCategory
  );

  const categoryIcons = {
    'Історія': Clock,
    'Рекорди': Trophy,
    'Статистика': TrendingUp,
    'Технології': Lightbulb
  };

  const handleSurveyAnswer = (questionId, answer) => {
    setSurveyAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    alert('Дякуємо за участь в опитуванні! Ваші відповіді допомагають нам покращувати сервіс.');
    setSurveyAnswers({});
    setShowSurvey(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Цікаві факти про смартфони
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            12 захоплюючих фактів зі світу мобільних технологій, які вас здивують
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-white rounded-lg p-2 shadow-sm">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all hover:scale-105"
              >
                {category === 'all' ? 'Всі факти' : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFacts.map((fact, index) => {
            const IconComponent = categoryIcons[fact.category] || Lightbulb;
            return (
              <Card key={fact.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={fact.image}
                    alt={fact.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900">
                      <IconComponent className="w-3 h-3 mr-1" />
                      {fact.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">Факт #{fact.id}</h3>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {fact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {fact.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-500">Цікавий рейтинг: {4 + Math.random().toFixed(1)}/5</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Survey Section */}
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Опитування користувачів
            </CardTitle>
            <CardDescription className="text-lg">
              Поділіться вашим досвідом використання смартфонів
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showSurvey ? (
              <div className="text-center space-y-4">
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Ваша думка важлива для нас! Пройдіть коротке опитування про ваші вподобання 
                  та досвід використання смартфонів. Це допоможе нам покращити наші рекомендації.
                </p>
                <Button
                  onClick={() => setShowSurvey(true)}
                  className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
                  size="lg"
                >
                  Розпочати опитування
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSurveySubmit} className="space-y-6 max-w-2xl mx-auto">
                {surveyQuestions.map((question) => (
                  <div key={question.id} className="space-y-3">
                    <Label className="text-base font-medium text-gray-900">
                      {question.question}
                    </Label>
                    
                    {question.type === 'radio' && (
                      <RadioGroup
                        value={surveyAnswers[question.id] || ''}
                        onValueChange={(value) => handleSurveyAnswer(question.id, value)}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {question.options.map((option, index) => (
                            <div key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                              <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                              <Label htmlFor={`${question.id}-${index}`} className="cursor-pointer">
                                {option}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    )}

                    {question.type === 'checkbox' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {question.options.map((option, index) => (
                          <div key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                            <Checkbox
                              id={`${question.id}-${index}`}
                              onCheckedChange={(checked) => {
                                const currentAnswers = surveyAnswers[question.id] || [];
                                if (checked) {
                                  handleSurveyAnswer(question.id, [...currentAnswers, option]);
                                } else {
                                  handleSurveyAnswer(question.id, currentAnswers.filter(a => a !== option));
                                }
                              }}
                            />
                            <Label htmlFor={`${question.id}-${index}`} className="cursor-pointer">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    )}

                    {question.type === 'range' && (
                      <div className="space-y-2">
                        <Input
                          type="range"
                          min={question.min}
                          max={question.max}
                          value={surveyAnswers[question.id] || question.min}
                          onChange={(e) => handleSurveyAnswer(question.id, e.target.value)}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{question.min}</span>
                          <span className="font-medium">{surveyAnswers[question.id] || question.min}</span>
                          <span>{question.max}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex space-x-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowSurvey(false)}
                    className="flex-1"
                  >
                    Скасувати
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Надіслати відповіді
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FactsPage;