import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Все');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: 'Scale',
      title: 'Арбитражные споры',
      description: 'Представление интересов в арбитражных судах всех инстанций, защита прав бизнеса'
    },
    {
      icon: 'FileText',
      title: 'Договорная работа',
      description: 'Разработка, проверка и сопровождение договоров любой сложности'
    },
    {
      icon: 'Building2',
      title: 'Корпоративные споры',
      description: 'Разрешение конфликтов между участниками, защита корпоративных прав'
    },
    {
      icon: 'Shield',
      title: 'Защита от проверок',
      description: 'Представительство при взаимодействии с контролирующими органами'
    },
    {
      icon: 'Briefcase',
      title: 'Банкротство',
      description: 'Сопровождение процедур банкротства, защита интересов кредиторов и должников'
    },
    {
      icon: 'TrendingUp',
      title: 'Взыскание долгов',
      description: 'Эффективное взыскание задолженности в судебном и досудебном порядке'
    }
  ];

  const cases = [
    {
      title: 'Взыскание 12 млн рублей',
      category: 'Договорные споры',
      result: 'Успешно взыскана задолженность по договору поставки'
    },
    {
      title: 'Защита от налоговой проверки',
      category: 'Налоговые споры',
      result: 'Снижение доначислений с 8 млн до 1,2 млн рублей'
    },
    {
      title: 'Корпоративный конфликт',
      category: 'Корпоративное право',
      result: 'Досудебное урегулирование спора между участниками ООО'
    },
    {
      title: 'Банкротство контрагента',
      category: 'Банкротство',
      result: 'Включение требований в реестр на сумму 5,3 млн рублей'
    }
  ];

  const packages = [
    {
      title: 'Консультация',
      price: '3 000 ₽',
      features: [
        'Устная консультация 1 час',
        'Анализ документов',
        'Правовая оценка ситуации',
        'Рекомендации по действиям'
      ]
    },
    {
      title: 'Досудебное урегулирование',
      price: 'от 25 000 ₽',
      features: [
        'Подготовка претензии',
        'Переговоры с контрагентом',
        'Составление соглашения',
        'Юридическое сопровождение'
      ],
      popular: true
    },
    {
      title: 'Судебное представительство',
      price: 'от 50 000 ₽',
      features: [
        'Подготовка иска',
        'Представительство в суде',
        'Сбор доказательств',
        'Ведение дела до результата'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Дмитрий Соколов',
      company: 'ООО "Стройком"',
      text: 'Обратился за помощью по сложному арбитражному спору. Профессиональный подход, внимание к деталям и отличный результат. Рекомендую!'
    },
    {
      name: 'Елена Морозова',
      company: 'ИП Морозова Е.А.',
      text: 'Помогли успешно пройти налоговую проверку, снизили штрафы в несколько раз. Очень довольна сотрудничеством.'
    },
    {
      name: 'Игорь Петров',
      company: 'ООО "ТехноСервис"',
      text: 'Взыскали крупную задолженность, которую не могли получить год. Спасибо за профессионализм!'
    }
  ];

  const filteredCases = activeFilter === 'Все' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  const categories = ['Все', ...Array.from(new Set(cases.map(c => c.category)))];

  return (
    <div className="min-h-screen bg-background">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Scale" className="text-white" size={24} />
            </div>
            <div>
              <div className="font-heading font-bold text-xl text-foreground">Ухова & Партнеры</div>
              <div className="text-xs text-muted-foreground">Арбитражный адвокат</div>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('practice')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Практика
            </button>
            <button 
              onClick={() => scrollToSection('articles')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Статьи
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Отзывы
            </button>
          </nav>

          <Button 
            onClick={() => window.open('tel:89131586504', '_self')}
            className="hidden md:flex"
          >
            Задать вопрос
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight text-foreground">
                Юрист по арбитражному процессу
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Помогаю решить возникшие спорные ситуации, в том числе с привлечением контролирующих органов.
              </p>
              <p className="text-base text-muted-foreground">
                Обращайтесь, подробно и вдумчиво проконсультирую по всем интересующим вас вопросам.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={() => window.open('tel:89131586504', '_self')}
                  className="text-lg px-8"
                >
                  Заказать звонок
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('practice')}
                  className="text-lg px-8"
                >
                  Посмотреть кейсы
                </Button>
              </div>
            </div>

            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/e95a7c15-17f8-4c93-a0f6-d7876432c7b7/files/7d867bc4-f6ea-43fd-b431-e6985632bbdf.jpg"
                alt="Юридические услуги"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Комплексная юридическая поддержка вашего бизнеса на всех этапах
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 px-0 text-primary hover:text-primary/80">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl text-center mb-4">Практика</h2>
          <p className="text-center text-muted-foreground mb-8">
            Примеры успешно выигранных дел
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeFilter === cat ? 'default' : 'outline'}
                onClick={() => setActiveFilter(cat)}
                className="transition-all"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredCases.map((caseItem, idx) => (
              <Card 
                key={idx}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="font-heading text-xl">{caseItem.title}</CardTitle>
                    <Icon name="CheckCircle2" className="text-green-600" size={24} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    {caseItem.category}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseItem.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl text-center mb-4">Пакеты услуг</h2>
          <p className="text-center text-muted-foreground mb-12">
            Выберите оптимальный вариант для решения вашей задачи
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <Card 
                key={idx}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'border-primary border-2 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6"
                    variant={pkg.popular ? 'default' : 'outline'}
                    onClick={() => window.open('tel:89131586504', '_self')}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading font-bold text-4xl text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12">
            Что говорят о нашей работе
          </p>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                        ))}
                      </div>
                      <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="User" className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Scale" className="text-white" size={20} />
                </div>
                <div className="font-heading font-bold text-lg">Ухова & Партнеры</div>
              </div>
              <p className="text-sm text-gray-300">
                Профессиональная юридическая помощь в арбитражных спорах
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <a 
                  href="tel:89131586504" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Icon name="Phone" size={16} />
                  8 913 158 65 04
                </a>
                <a 
                  href="https://vk.com/ukhova_lawyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Icon name="MessageCircle" size={16} />
                  ВКонтакте
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-4">Навигация</h3>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block hover:text-primary transition-colors"
                >
                  Услуги
                </button>
                <button 
                  onClick={() => scrollToSection('practice')}
                  className="block hover:text-primary transition-colors"
                >
                  Практика
                </button>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="block hover:text-primary transition-colors"
                >
                  Отзывы
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Ухова & Партнеры. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
