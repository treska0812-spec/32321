import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { CheckCircle, ArrowRight, ArrowLeft, Lightbulb, DollarSign, Smartphone, Camera, Battery, Cpu } from 'lucide-react';
import { choiceGuide } from '../mock/mockData';

const HowToChoosePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const handleStepComplete = (stepId) => {
    const newCompleted = new Set(completedSteps);
    newCompleted.add(stepId);
    setCompletedSteps(newCompleted);
  };

  const progress = (completedSteps.size / choiceGuide.steps.length) * 100;

  const stepIcons = [DollarSign, Smartphone, Camera, Cpu, Battery];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
            <Lightbulb className="w-4 h-4 mr-2" />
            Покроковий гід
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Як обрати ідеальний смартфон?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Пройдіть наш детальний гід з 5 кроків і знайдіть смартфон, який ідеально підійде саме вам
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Прогрес</span>
            <span className="text-sm font-medium text-blue-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Steps Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {choiceGuide.steps.map((step, index) => {
              const Icon = stepIcons[index];
              const isCompleted = completedSteps.has(step.id);
              const isCurrent = index === currentStep;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-lg'
                      : isCompleted
                      ? 'bg-green-100 text-green-700'
                      : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Icon className="h-4 w-4" />
                  )}
                  <span className="whitespace-nowrap">Крок {step.id}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Step */}
        <Card className="mb-8 border-0 shadow-lg bg-white">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                {React.createElement(stepIcons[currentStep], {
                  className: "h-8 w-8 text-blue-600"
                })}
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {choiceGuide.steps[currentStep].title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {choiceGuide.steps[currentStep].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {choiceGuide.steps[currentStep].details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => handleStepComplete(choiceGuide.steps[currentStep].id)}
                className={`px-8 py-3 text-lg font-medium transform hover:scale-105 transition-all duration-200 ${
                  completedSteps.has(choiceGuide.steps[currentStep].id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {completedSteps.has(choiceGuide.steps[currentStep].id) ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Виконано
                  </>
                ) : (
                  <>
                    Позначити як виконане
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-6 py-3 transform hover:scale-105 transition-all duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Попередній крок
          </Button>
          
          <span className="text-sm font-medium text-gray-500">
            {currentStep + 1} з {choiceGuide.steps.length}
          </span>
          
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.min(choiceGuide.steps.length - 1, currentStep + 1))}
            disabled={currentStep === choiceGuide.steps.length - 1}
            className="px-6 py-3 transform hover:scale-105 transition-all duration-200"
          >
            Наступний крок
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Quick Tips */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center">
              💡 Корисні поради
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Перед покупкою:</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Порівняйте ціни в різних магазинах</li>
                  <li>• Перевірте відгуки користувачів</li>
                  <li>• Подивіться відео-огляди</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Під час покупки:</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Перевірте комплектацію</li>
                  <li>• Протестуйте всі функції</li>
                  <li>• Уточніть умови гарантії</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowToChoosePage;