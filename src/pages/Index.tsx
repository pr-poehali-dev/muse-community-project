import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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

export default function Index() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-14 w-auto"
            />
            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-burgundy transition-colors">О клубе</a>
              <a href="#mission" className="text-sm font-medium text-gray-600 hover:text-burgundy transition-colors">Миссия</a>
              <a href="#experts" className="text-sm font-medium text-gray-600 hover:text-burgundy transition-colors">Эксперты</a>
              <Button className="bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-8">
                Вступить
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-burgundy/5 to-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-burgundy/10 text-burgundy px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-burgundy opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-burgundy"></span>
                </span>
                Женский клуб премиум-класса
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-darkBlue mb-6 leading-none">
                Muse
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
                Сообщество успешных женщин из мира бизнеса, культуры и искусства
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-white text-base px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Присоединиться
                  <Icon name="ArrowRight" className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-burgundy hover:text-burgundy text-base px-10 py-6 rounded-full">
                  Узнать больше
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
                <div>
                  <div className="text-4xl font-bold text-burgundy mb-1">8</div>
                  <div className="text-sm text-gray-600">Экспертов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-burgundy mb-1">12</div>
                  <div className="text-sm text-gray-600">Встреч/год</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-burgundy mb-1">24</div>
                  <div className="text-sm text-gray-600">Онлайн</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 to-gold/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-burgundy/5 rounded-2xl p-6 text-center hover:bg-burgundy/10 transition-colors">
                    <Icon name="Users" className="w-12 h-12 text-burgundy mx-auto mb-3" />
                    <div className="text-sm font-semibold text-gray-700">Нетворкинг</div>
                  </div>
                  <div className="bg-gold/5 rounded-2xl p-6 text-center hover:bg-gold/10 transition-colors">
                    <Icon name="Sparkles" className="w-12 h-12 text-gold mx-auto mb-3" />
                    <div className="text-sm font-semibold text-gray-700">Вдохновение</div>
                  </div>
                  <div className="bg-gold/5 rounded-2xl p-6 text-center hover:bg-gold/10 transition-colors">
                    <Icon name="TrendingUp" className="w-12 h-12 text-gold mx-auto mb-3" />
                    <div className="text-sm font-semibold text-gray-700">Рост</div>
                  </div>
                  <div className="bg-burgundy/5 rounded-2xl p-6 text-center hover:bg-burgundy/10 transition-colors">
                    <Icon name="Award" className="w-12 h-12 text-burgundy mx-auto mb-3" />
                    <div className="text-sm font-semibold text-gray-700">Премиум</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-burgundy text-sm font-bold uppercase tracking-wider mb-4">О клубе</div>
              <h2 className="text-5xl font-bold text-darkBlue mb-6 leading-tight">
                Пространство для роста и развития
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Клуб Muse объединяет талантливых женщин для совместного роста и развития. Мы создаём пространство, где каждая участница может черпать вдохновение и находить поддержку.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Наши мероприятия охватывают бизнес, искусство, спорт и путешествия — всё для гармоничной и насыщенной жизни.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy to-gold border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-burgundy">50+</span> участниц уже с нами
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-8 border-none shadow-lg bg-burgundy text-white hover:shadow-xl transition-shadow">
                <Icon name="Crown" className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Статусное окружение</h3>
                <p className="text-white/80 text-sm leading-relaxed">Нетворкинг высшего уровня</p>
              </Card>
              <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow">
                <Icon name="Calendar" className="w-12 h-12 text-burgundy mb-4" />
                <h3 className="text-xl font-bold text-darkBlue mb-3">Регулярные встречи</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Каждый месяц новые события</p>
              </Card>
              <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow">
                <Icon name="Zap" className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-bold text-darkBlue mb-3">Закрытый формат</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Только для участниц клуба</p>
              </Card>
              <Card className="p-8 border-none shadow-lg bg-gold text-white hover:shadow-xl transition-shadow">
                <Icon name="Heart" className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Поддержка</h3>
                <p className="text-white/80 text-sm leading-relaxed">Сильное женское сообщество</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-24 px-6 sm:px-8 lg:px-12 bg-darkBlue text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold text-sm font-bold uppercase tracking-wider mb-4">Наша миссия</div>
            <h2 className="text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              Объединяем сильных женщин для достижения большего
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Users", title: "Сообщество", desc: "Динамичная сеть поддержки из различных сфер" },
              { icon: "TrendingUp", title: "Развитие", desc: "Личный и профессиональный рост" },
              { icon: "Sparkles", title: "Вдохновение", desc: "Поддержка в стремлениях и достижениях" },
              { icon: "Award", title: "Лидерство", desc: "Женщины в руководящих позициях" }
            ].map((goal, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 rounded-xl bg-burgundy/20 flex items-center justify-center mb-6">
                  <Icon name={goal.icon} className="w-7 h-7 text-burgundy" />
                </div>
                <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{goal.desc}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-10 border border-white/10">
              <Icon name="Heart" className="w-12 h-12 text-gold mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ценности</h3>
              <ul className="space-y-4">
                {['Солидарность', 'Инновации', 'Равноправие', 'Открытость'].map((value) => (
                  <li key={value} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-burgundy"></div>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-10 border border-white/10">
              <Icon name="Calendar" className="w-12 h-12 text-burgundy mb-6" />
              <h3 className="text-2xl font-bold mb-4">Форматы встреч</h3>
              <ul className="space-y-4">
                {['Ежемесячные встречи ОЧНО', 'Онлайн-трансляции 2 раза/месяц', 'Гостевые спикеры', 'Творческие мероприятия'].map((format) => (
                  <li key={format} className="flex items-center gap-3 text-white/80">
                    <Icon name="Check" className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm">{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experts" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-burgundy text-sm font-bold uppercase tracking-wider mb-4">Наши эксперты</div>
            <h2 className="text-5xl font-bold text-darkBlue mb-6">
              Лидеры в своих областях
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, idx) => (
              <Card 
                key={idx} 
                className={`border-none shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                  hoveredCard === idx ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-square bg-gradient-to-br from-burgundy/10 to-gold/10 flex items-center justify-center rounded-t-lg">
                  <Icon name="User" className="w-20 h-20 text-burgundy/40" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-darkBlue mb-2 text-lg leading-tight">{expert.name}</h3>
                  <p className="text-burgundy text-sm font-semibold mb-2">{expert.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{expert.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-burgundy to-burgundy/90 text-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Присоединяйтесь к нам
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Клуб Muse приглашает всех женщин, стремящихся к самосовершенствованию
          </p>
          <Button size="lg" className="bg-white text-burgundy hover:bg-white/90 text-lg px-12 py-7 rounded-full shadow-2xl hover:scale-105 transition-all">
            Оставить заявку
          </Button>
          <div className="mt-16 pt-16 border-t border-white/20">
            <p className="text-2xl font-bold mb-8">Вместе мы можем достичь большего</p>
            <div className="flex justify-center gap-6">
              {['Mail', 'Phone', 'Instagram'].map((icon) => (
                <div key={icon} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer">
                  <Icon name={icon} className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-darkBlue text-white py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-16 w-auto brightness-0 invert"
            />
            <div className="flex gap-8">
              <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">О клубе</a>
              <a href="#mission" className="text-sm text-white/60 hover:text-white transition-colors">Миссия</a>
              <a href="#experts" className="text-sm text-white/60 hover:text-white transition-colors">Эксперты</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/40">© 2025 Клуб Muse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
