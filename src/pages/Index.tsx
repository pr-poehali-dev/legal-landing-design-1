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
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/логотип НЕПРОЗРАЧНЫЙ.png" 
              alt="Екатерина Ухова - Юрист"
              className="h-14"
            />
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
              onClick={() => scrollToSection('prices')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Цены
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

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-3xl rounded-full"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <div className="flex gap-2 mb-6">
                  <div className="w-2 h-16 bg-secondary transform -skew-x-12"></div>
                  <div className="w-2 h-16 bg-primary transform -skew-x-12"></div>
                  <div className="w-2 h-16 bg-secondary transform -skew-x-12"></div>
                </div>
              </div>
              
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
                  className="text-lg px-8 border-2"
                >
                  Посмотреть кейсы
                </Button>
              </div>
            </div>

            <div className="animate-fade-in relative">
              <div className="absolute -top-8 -right-8 flex gap-2 z-0">
                <div className="w-3 h-32 bg-secondary/30 transform -skew-x-12"></div>
                <div className="w-3 h-32 bg-primary/30 transform -skew-x-12"></div>
              </div>
              
              <div className="relative mb-8">
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/files/фото без фона (1).png"
                  alt="Екатерина Ухова - Юрист по арбитражному процессу"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-2xl relative z-10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Scale" className="text-primary" size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-lg">15+</h3>
                    <p className="text-xs text-muted-foreground">лет опыта</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Trophy" className="text-secondary" size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-lg">200+</h3>
                    <p className="text-xs text-muted-foreground">выигранных дел</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-lg">500+</h3>
                    <p className="text-xs text-muted-foreground">клиентов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-2 h-12 bg-secondary transform -skew-x-12"></div>
              <div className="w-2 h-12 bg-primary transform -skew-x-12"></div>
            </div>
            <h2 className="font-heading font-bold text-4xl mb-4">Услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексная юридическая поддержка вашего бизнеса на всех этапах
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform translate-x-10 -translate-y-10 rotate-45"></div>
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="py-20 px-4 bg-gradient-to-b from-white to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-2 h-12 bg-primary transform -skew-x-12"></div>
              <div className="w-2 h-12 bg-secondary transform -skew-x-12"></div>
            </div>
            <h2 className="font-heading font-bold text-4xl mb-4">Практика</h2>
            <p className="text-muted-foreground">
              Примеры успешно выигранных дел
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeFilter === cat ? 'default' : 'outline'}
                onClick={() => setActiveFilter(cat)}
                className="transition-all border-2"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredCases.map((caseItem, idx) => (
              <Card 
                key={idx}
                className="hover:shadow-xl transition-all duration-300 border-2 animate-fade-in relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="font-heading text-xl">{caseItem.title}</CardTitle>
                    <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0" size={24} />
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

      <section id="prices" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-2 h-12 bg-secondary transform -skew-x-12"></div>
              <div className="w-2 h-12 bg-primary transform -skew-x-12"></div>
            </div>
            <h2 className="font-heading font-bold text-4xl mb-4">Пакеты услуг</h2>
            <p className="text-muted-foreground">
              Выберите оптимальный вариант для решения вашей задачи
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <Card 
                key={idx}
                className={`relative hover:shadow-2xl transition-all duration-300 border-2 ${
                  pkg.popular ? 'border-primary scale-105 shadow-xl' : 'hover:scale-105'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-heading text-2xl mb-4">{pkg.title}</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full"
                    variant={pkg.popular ? 'default' : 'outline'}
                    size="lg"
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

      <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-white to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-2 h-12 bg-primary transform -skew-x-12"></div>
              <div className="w-2 h-12 bg-secondary transform -skew-x-12"></div>
            </div>
            <h2 className="font-heading font-bold text-4xl mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground">
              Что говорят о нашей работе
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx}>
                  <Card className="border-2 shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={24} />
                        ))}
                      </div>
                      <p className="text-lg text-foreground mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Icon name="User" className="text-white" size={32} />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-foreground">{testimonial.name}</div>
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

      <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 flex gap-2 opacity-10">
          <div className="w-4 h-full bg-secondary transform -skew-x-12"></div>
          <div className="w-4 h-full bg-primary transform -skew-x-12"></div>
          <div className="w-4 h-full bg-secondary transform -skew-x-12"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/логотип НЕПРОЗРАЧНЫЙ.png" 
                alt="Екатерина Ухова"
                className="h-16 mb-4 brightness-0 invert"
              />
              <p className="text-sm text-gray-300 leading-relaxed">
                Профессиональная юридическая помощь в арбитражных спорах
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <a 
                  href="tel:89131586504" 
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name="Phone" size={20} />
                  </div>
                  <span>8 913 158 65 04</span>
                </a>
                <a 
                  href="https://vk.com/ukhova_lawyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name="MessageCircle" size={20} />
                  </div>
                  <span>ВКонтакте</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Навигация</h3>
              <div className="space-y-3 text-sm">
                {['services', 'practice', 'prices', 'reviews'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block hover:text-primary transition-colors hover:translate-x-2 transform duration-300"
                  >
                    {section === 'services' ? 'Услуги' : 
                     section === 'practice' ? 'Практика' : 
                     section === 'prices' ? 'Цены' : 'Отзывы'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Екатерина Ухова. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;