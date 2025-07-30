import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const animals = [
    {
      id: 1,
      name: "Макс",
      type: "Собака",
      age: "2 года",
      description: "Дружелюбный и игривый пес, который ищет любящую семью",
      image: "/img/95331ab5-02ec-4549-81d7-48087d835d0c.jpg",
      urgent: true
    },
    {
      id: 2,
      name: "Мурка",
      type: "Кошка", 
      age: "1 год",
      description: "Ласковая кошечка, которая любит мурчать на коленях",
      image: "/img/e0822ac7-b26e-4339-8d6b-1b0180cf247a.jpg",
      urgent: false
    },
    {
      id: 3,
      name: "Белла",
      type: "Собака",
      age: "3 года",
      description: "Спокойная и умная собака, отлично ладит с детьми",
      image: "/img/95331ab5-02ec-4549-81d7-48087d835d0c.jpg",
      urgent: false
    }
  ];

  const stories = [
    {
      title: "История Рекса",
      description: "Как мы спасли собаку из заброшенного дома",
      image: "/img/95331ab5-02ec-4549-81d7-48087d835d0c.jpg"
    },
    {
      title: "Новый дом для Лизы",
      description: "Кошка нашла любящую семью после года в приюте",
      image: "/img/e0822ac7-b26e-4339-8d6b-1b0180cf247a.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-foreground">Лапки Помощи</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#animals" className="text-foreground hover:text-primary transition-colors">Животные</a>
              <a href="#volunteer" className="text-foreground hover:text-primary transition-colors">Волонтерство</a>
              <a href="#stories" className="text-foreground hover:text-primary transition-colors">Истории</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Помочь сейчас</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Дарим новую жизнь <br />
            <span className="text-primary">братьям нашим меньшим</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Каждое животное заслуживает любви и заботы. Помогите нам найти дом для тех, кто в этом нуждается
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Heart" className="mr-2" size={20} />
              Взять питомца
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8">
              <Icon name="HandHeart" className="mr-2" size={20} />
              Стать волонтером
            </Button>
          </div>
        </div>
      </section>

      {/* Animals Section */}
      <section id="animals" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Животные ищут дом</h2>
            <p className="text-lg text-muted-foreground">Познакомьтесь с нашими подопечными</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal) => (
              <Card key={animal.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in group">
                <div className="relative">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {animal.urgent && (
                    <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                      Срочно!
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{animal.name}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {animal.type} • {animal.age}
                      </CardDescription>
                    </div>
                    <Icon name="Heart" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{animal.description}</p>
                  <Button className="w-full">
                    <Icon name="Home" className="mr-2" size={18} />
                    Забрать домой
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Станьте волонтером</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Присоединяйтесь к нашей команде добрых сердец. Ваша помощь может изменить жизнь животного к лучшему.
              </p>
              
              <Tabs defaultValue="care" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="care">Уход</TabsTrigger>
                  <TabsTrigger value="transport">Транспорт</TabsTrigger>
                  <TabsTrigger value="admin">Админ</TabsTrigger>
                </TabsList>
                <TabsContent value="care" className="mt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Heart" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Забота о животных</h3>
                      <p className="text-muted-foreground">Помогайте кормить, купать и играть с нашими подопечными</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="transport" className="mt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Car" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Транспортировка</h3>
                      <p className="text-muted-foreground">Помогайте доставлять животных к ветеринару или новым хозяевам</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="admin" className="mt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="FileText" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Администрирование</h3>
                      <p className="text-muted-foreground">Помогайте с документооборотом и координацией работы приюта</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Форма регистрации волонтера</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Расскажите о своем опыте с животными" />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Истории спасения</h2>
            <p className="text-lg text-muted-foreground">Каждая история — это новая жизнь</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                  <CardDescription>{story.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Читать полностью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Поддержите наше дело</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ваше пожертвование поможет нам спасти больше животных и обеспечить им достойную жизнь
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" variant="outline">500 ₽</Button>
            <Button size="lg" variant="outline">1000 ₽</Button>
            <Button size="lg" variant="outline">2000 ₽</Button>
            <Button size="lg">Другая сумма</Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Сумма пожертвования" />
            <Button>
              <Icon name="CreditCard" className="mr-2" size={18} />
              Пожертвовать
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты приюта</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Icon name="MapPin" className="mx-auto text-primary mb-4" size={48} />
              <h3 className="font-semibold text-foreground mb-2">Адрес</h3>
              <p className="text-muted-foreground">ул. Добрых Дел, 123<br />Москва, 101000</p>
            </Card>
            
            <Card className="text-center p-6">
              <Icon name="Phone" className="mx-auto text-primary mb-4" size={48} />
              <h3 className="font-semibold text-foreground mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67<br />Ежедnevно 9:00-19:00</p>
            </Card>
            
            <Card className="text-center p-6">
              <Icon name="Mail" className="mx-auto text-primary mb-4" size={48} />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">help@lapki.org<br />Ответим в течение 24 часов</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Heart" className="text-primary" size={32} />
              <span className="text-2xl font-bold">Лапки Помощи</span>
            </div>
            <div className="flex gap-6">
              <Icon name="Instagram" className="hover:text-primary cursor-pointer transition-colors" size={24} />
              <Icon name="Facebook" className="hover:text-primary cursor-pointer transition-colors" size={24} />
              <Icon name="MessageCircle" className="hover:text-primary cursor-pointer transition-colors" size={24} />
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/80">© 2024 Лапки Помощи. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;