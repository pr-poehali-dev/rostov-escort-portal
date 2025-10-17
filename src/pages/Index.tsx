import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeSection, setActiveSection] = useState('home');
  const [selectedModel, setSelectedModel] = useState<any>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const models = [
    {
      id: 1,
      name: 'Анастасия',
      age: 24,
      category: 'VIP',
      price: '15000 ₽/час',
      description: 'Очаровательная брюнетка с безупречными манерами',
      image: 'https://cdn.poehali.dev/projects/07e781b0-13c9-4779-aedf-a01bf5fe0184/files/40d79099-9e3e-4e06-a20c-f473bcdfa63c.jpg',
      available: true
    },
    {
      id: 2,
      name: 'Виктория',
      age: 22,
      category: 'Премиум',
      price: '12000 ₽/час',
      description: 'Элегантная блондинка для деловых встреч',
      image: 'https://cdn.poehali.dev/projects/07e781b0-13c9-4779-aedf-a01bf5fe0184/files/d8fab546-d451-4f50-b913-a5e37b277556.jpg',
      available: true
    },
    {
      id: 3,
      name: 'Екатерина',
      age: 26,
      category: 'VIP',
      price: '18000 ₽/час',
      description: 'Модельная внешность и интеллект',
      image: 'https://cdn.poehali.dev/projects/07e781b0-13c9-4779-aedf-a01bf5fe0184/files/54801320-a2ff-4e77-86e2-1b1e79755538.jpg',
      available: false
    },
    {
      id: 4,
      name: 'Дарья',
      age: 23,
      category: 'Стандарт',
      price: '8000 ₽/час',
      description: 'Милая и общительная девушка',
      image: '/placeholder.svg',
      available: true
    }
  ];

  const services = [
    {
      title: 'Деловое сопровождение',
      description: 'Сопровождение на деловые мероприятия, встречи, переговоры',
      icon: 'Briefcase',
      features: ['Презентабельный внешний вид', 'Деловой этикет', 'Поддержка беседы']
    },
    {
      title: 'VIP сопровождение',
      description: 'Элитное сопровождение для особых случаев',
      icon: 'Crown',
      features: ['Модельная внешность', 'Знание этикета', 'Несколько языков']
    },
    {
      title: 'Вечерний выход',
      description: 'Сопровождение на вечерние мероприятия, театр, рестораны',
      icon: 'Wine',
      features: ['Вечерний стиль', 'Приятная беседа', 'Хорошие манеры']
    },
    {
      title: 'Путешествия',
      description: 'Сопровождение в поездках по России и за рубежом',
      icon: 'Plane',
      features: ['Наличие загранпаспорта', 'Готовность к поездкам', 'Гибкий график']
    }
  ];

  const tariffs = [
    {
      name: 'Стандарт',
      price: '8000',
      duration: 'час',
      features: ['1 час времени', 'Встреча в отеле', 'Городское сопровождение', 'Базовый гардероб'],
      popular: false
    },
    {
      name: 'Премиум',
      price: '12000',
      duration: 'час',
      features: ['2 часа времени', 'Любое место встречи', 'Деловое сопровождение', 'Стильный гардероб', 'Знание этикета'],
      popular: true
    },
    {
      name: 'VIP',
      price: '18000',
      duration: 'час',
      features: ['От 3 часов', 'Выезд по городу', 'Элитное сопровождение', 'Дизайнерский гардероб', 'Несколько языков', 'Модельная внешность'],
      popular: false
    }
  ];

  const reviews = [
    {
      name: 'Дмитрий',
      rating: 5,
      text: 'Отличный сервис! Все на высшем уровне, девушки очень приятные и воспитанные.',
      date: '15 октября 2024'
    },
    {
      name: 'Алексей',
      rating: 5,
      text: 'Сопровождение на деловой ужин прошло идеально. Рекомендую!',
      date: '10 октября 2024'
    },
    {
      name: 'Сергей',
      rating: 5,
      text: 'Профессиональный подход, конфиденциальность гарантирована.',
      date: '5 октября 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Elite Rostov
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`transition-colors ${activeSection === 'services' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('tariffs')}
                className={`transition-colors ${activeSection === 'tariffs' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Тарифы
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className={`transition-colors ${activeSection === 'reviews' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Отзывы
              </button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
                Премиум эскорт услуги в Ростове-на-Дону
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Элитное сопровождение
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                  высшего класса
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Индивидуальный подход, конфиденциальность и безупречный сервис для самых взыскательных клиентов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8" onClick={() => scrollToSection('models')}>
                  <Icon name="Users" size={20} className="mr-2" />
                  Посмотреть моделей
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Забронировать встречу
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Забронировать встречу</DialogTitle>
                      <DialogDescription>
                        Выберите удобную дату и время для встречи
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-6 py-4">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Выберите дату</label>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Выберите время</label>
                          <div className="grid grid-cols-2 gap-2">
                            {['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00'].map((time) => (
                              <Button key={time} variant="outline" className="hover:bg-primary/10">
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4">
                          <label className="text-sm font-medium mb-2 block">Продолжительность</label>
                          <Tabs defaultValue="2" className="w-full">
                            <TabsList className="grid grid-cols-3 w-full">
                              <TabsTrigger value="1">1 час</TabsTrigger>
                              <TabsTrigger value="2">2 часа</TabsTrigger>
                              <TabsTrigger value="3">3+ часа</TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-4">
                          Подтвердить бронирование
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        <section id="models" className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h3 className="text-4xl font-bold mb-4">Наши модели</h3>
              <p className="text-muted-foreground text-lg">Знакомьтесь с нашими прекрасными спутницами</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {models.map((model, index) => (
                <Card key={model.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-80 overflow-hidden">
                    <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 right-3">
                      <Badge className={model.available ? 'bg-green-500' : 'bg-red-500'}>
                        {model.available ? 'Доступна' : 'Занята'}
                      </Badge>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary">{model.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{model.name}, {model.age}</span>
                    </CardTitle>
                    <CardDescription>{model.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{model.price}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10" onClick={() => setSelectedModel(model)}>
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{model.name}, {model.age}</DialogTitle>
                            <DialogDescription>
                              {model.category} • {model.price}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <img src={model.image} alt={model.name} className="w-full h-96 object-cover rounded-lg" />
                            <p>{model.description}</p>
                            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                              <Icon name="Calendar" size={16} className="mr-2" />
                              Забронировать встречу
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Наши услуги</h3>
              <p className="text-muted-foreground text-lg">Широкий спектр сопровождения для любых мероприятий</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-primary" size={28} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Icon name="Check" className="text-primary mr-2" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="tariffs" className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Тарифы</h3>
              <p className="text-muted-foreground text-lg">Прозрачное ценообразование без скрытых платежей</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {tariffs.map((tariff, index) => (
                <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${tariff.popular ? 'border-primary border-2 scale-105' : 'border-border'} animate-scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {tariff.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-secondary">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-primary">{tariff.price}</span>
                      <span className="text-muted-foreground ml-2">₽/{tariff.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {tariff.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Icon name="Check" className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${tariff.popular ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`} variant={tariff.popular ? 'default' : 'outline'}>
                      Выбрать тариф
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Отзывы клиентов</h3>
              <p className="text-muted-foreground text-lg">Что говорят наши клиенты о нашем сервисе</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-card border-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary/20 text-primary">{review.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex items-center mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{review.text}</p>
                    <p className="text-sm text-muted-foreground/60">{review.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Crown" className="text-primary" size={28} />
                <span className="text-xl font-bold">Elite Rostov</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиум эскорт услуги в Ростове-на-Дону
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Деловое сопровождение</li>
                <li>VIP сопровождение</li>
                <li>Вечерний выход</li>
                <li>Путешествия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (863) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@eliterostov.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Ростов-на-Дону
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-3">
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary">
                  <Icon name="Send" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary">
                  <Icon name="MessageCircle" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Elite Rostov. Все права защищены. Только для совершеннолетних 18+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;