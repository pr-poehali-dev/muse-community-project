import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const experts = [
  {
    name: "Ляшева Карина Викторовна",
    title: "Эксперт гастрономического искусства",
    description: "Владелица семейного бизнеса компании «ВЕЕК»"
  },
  {
    name: "Мерзлая Людмила Ивановна",
    title: "Художница",
    description: "Владелица творческого пространства «Приходи творить»"
  },
  {
    name: "Мазмишаили Тамара Васильевна",
    title: "Фитнес-тренер",
    description: "Профессиональный тренер по фитнесу"
  },
  {
    name: "Самсонова Юлия Аркадьевна",
    title: "Стилист",
    description: "Эксперт по стилю и имиджу"
  },
  {
    name: "Христенко Юлия Анатольевна",
    title: "Дизайнер",
    description: "Бренд одежды JK"
  },
  {
    name: "Кузнецова Екатерина Юрьевна",
    title: "Директор ТИЦ",
    description: "Туристско-информационный центр Архангельской области"
  },
  {
    name: "Полина Берг",
    title: "Мастер исторического костюма",
    description: "Северный бренд одежды «Пинега»"
  },
  {
    name: "Лазарева Мария Михайловна",
    title: "Психолог, психотерапевт",
    description: "Метод символдрама"
  }
];

const formats = [
  {
    icon: "Users",
    title: "Ежемесячные встречи ОЧНО",
    description: "Тематические панельные дискуссии и творческие воркшопы"
  },
  {
    icon: "Video",
    title: "Онлайн-трансляции",
    description: "Два раза в месяц: обмен знаниями и поддержка"
  },
  {
    icon: "Star",
    title: "Гостевые спикеры",
    description: "Эксперты делятся опытом, экскурсии"
  },
  {
    icon: "Sparkles",
    title: "Творческие мероприятия",
    description: "Развитие в новом формате: творчество, музыка, искусство"
  }
];

const values = [
  { icon: "Heart", title: "Солидарность", text: "Поддерживаем друг друга, отмечая достижения каждой" },
  { icon: "Lightbulb", title: "Инновации", text: "Поощряем креативность и свежие идеи" },
  { icon: "Scale", title: "Равноправие", text: "Стремимся к равным возможностям для всех женщин" },
  { icon: "Globe", title: "Открытость", text: "Приветствуем разнообразие мнений и культурный обмен" }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-16 w-auto"
            />
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-darkBlue hover:text-burgundy transition-colors font-sans text-sm font-medium">О клубе</a>
              <a href="#mission" className="text-darkBlue hover:text-burgundy transition-colors font-sans text-sm font-medium">Миссия</a>
              <a href="#formats" className="text-darkBlue hover:text-burgundy transition-colors font-sans text-sm font-medium">Форматы встреч</a>
              <a href="#experts" className="text-darkBlue hover:text-burgundy transition-colors font-sans text-sm font-medium">Эксперты</a>
              <a href="#contact" className="text-darkBlue hover:text-burgundy transition-colors font-sans text-sm font-medium">Контакты</a>
            </div>
            <Button className="bg-burgundy hover:bg-burgundy/90 text-white font-sans">
              Вступить в клуб
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-darkBlue mb-6 animate-fade-in">
            Клуб <span className="text-burgundy">Muse</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in-up">
            Сообщество женщин из сферы бизнеса, культуры, науки, искусства
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-white font-sans text-lg px-8 py-6">
              Стать участницей
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white font-sans text-lg px-8 py-6">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkBlue mb-6">
                О клубе
              </h2>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
                Мероприятия клуба охватывают не только бизнес, но и искусство, спорт, путешествия. Мы укрепляем баланс жизни через уникальные события.
              </p>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                Мы стремимся создать пространство, где каждая участница сможет черпать вдохновение, делиться опытом и находить поддержку среди единомышленников.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 to-gold/20 rounded-lg transform rotate-3"></div>
              <Card className="relative p-8 bg-white shadow-xl">
                <Icon name="Sparkles" className="w-12 h-12 text-gold mb-4" />
                <h3 className="font-serif text-2xl font-bold text-darkBlue mb-4">Наша миссия</h3>
                <ul className="space-y-3 font-sans text-gray-700">
                  <li className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-burgundy mt-1 mr-2 flex-shrink-0" />
                    <span>Объединить сильных и талантливых женщин для общего роста</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-burgundy mt-1 mr-2 flex-shrink-0" />
                    <span>Обеспечить статусное окружение</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-burgundy mt-1 mr-2 flex-shrink-0" />
                    <span>Создать коллаборации и партнёрства</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-burgundy mt-1 mr-2 flex-shrink-0" />
                    <span>Сделать жизнь ярче</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkBlue text-center mb-4">
            Наши цели
          </h2>
          <Separator className="w-24 h-1 bg-gold mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Создать сообщество", desc: "Объединить женщин из различных сфер для формирования динамичной сети поддержки" },
              { num: "02", title: "Поощрять развитие", desc: "Предоставлять возможности для личного и профессионального роста" },
              { num: "03", title: "Вдохновлять", desc: "Поддерживать участниц в их стремлениях и достижениях" },
              { num: "04", title: "Продвигать лидерство", desc: "Вдохновлять больше женщин занимать руководящие должности" }
            ].map((goal, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-none">
                <div className="text-5xl font-serif font-bold text-gold/30 mb-4">{goal.num}</div>
                <h3 className="font-serif text-xl font-bold text-darkBlue mb-3">{goal.title}</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">{goal.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkBlue text-center mb-4">
            Ценности клуба
          </h2>
          <Separator className="w-24 h-1 bg-gold mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-burgundy/10 mb-4">
                  <Icon name={value.icon} className="w-8 h-8 text-burgundy" />
                </div>
                <h3 className="font-serif text-xl font-bold text-darkBlue mb-2">{value.title}</h3>
                <p className="font-sans text-gray-600 text-sm">{value.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkBlue text-center mb-4">
            Форматы встреч
          </h2>
          <Separator className="w-24 h-1 bg-gold mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            {formats.map((format, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-burgundy text-white">
                      <Icon name={format.icon} className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-darkBlue mb-3">{format.title}</h3>
                    <p className="font-sans text-gray-600 leading-relaxed">{format.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experts" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkBlue text-center mb-4">
            Наши эксперты
          </h2>
          <Separator className="w-24 h-1 bg-gold mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-burgundy/20 to-gold/20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="w-12 h-12 text-burgundy" />
                </div>
                <h3 className="font-serif text-lg font-bold text-darkBlue mb-2">{expert.name}</h3>
                <p className="font-sans text-sm text-burgundy font-medium mb-2">{expert.title}</p>
                <p className="font-sans text-xs text-gray-600">{expert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkBlue mb-6">
            Присоединяйтесь к нам
          </h2>
          <p className="font-sans text-xl text-gray-700 mb-8 leading-relaxed">
            Клуб "Муза" приглашает всех женщин, стремящихся к самосовершенствованию и желающих делиться своим вдохновением и талантами с другими.
          </p>
          <div className="bg-gradient-to-br from-burgundy to-burgundy/90 rounded-lg p-12 text-white shadow-2xl">
            <p className="font-serif text-3xl font-bold mb-6">Вместе мы можем достичь большего!</p>
            <Button size="lg" className="bg-white text-burgundy hover:bg-gray-100 font-sans text-lg px-10 py-6">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-darkBlue text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
                alt="Muse Logo" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="font-sans text-gray-400 text-sm">
                Клуб успешных и талантливых женщин
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 font-sans text-sm">
                <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors">О клубе</a></li>
                <li><a href="#mission" className="text-gray-400 hover:text-gold transition-colors">Миссия</a></li>
                <li><a href="#formats" className="text-gray-400 hover:text-gold transition-colors">Форматы встреч</a></li>
                <li><a href="#experts" className="text-gray-400 hover:text-gold transition-colors">Эксперты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Контакты</h4>
              <p className="font-sans text-gray-400 text-sm mb-2">
                Свяжитесь с нами для вступления в клуб
              </p>
              <div className="flex space-x-4 mt-4">
                <Icon name="Mail" className="w-6 h-6 text-gold" />
                <Icon name="Phone" className="w-6 h-6 text-gold" />
                <Icon name="Instagram" className="w-6 h-6 text-gold" />
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <p className="text-center font-sans text-sm text-gray-400">
            © 2025 Клуб Muse. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}