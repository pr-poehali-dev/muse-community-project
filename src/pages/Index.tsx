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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex justify-between items-center h-20">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-burgundy transition-colors">О клубе</a>
              <a href="#mission" className="text-sm font-medium text-gray-600 hover:text-burgundy transition-colors">Миссия</a>
              <a href="#experts" className="text-sm font-medium text-gray-600 hover:text-burgundy transition-colors">Эксперты</a>
              <Button className="bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-6 shadow-lg shadow-burgundy/20">
                Вступить в клуб
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 sm:px-12 bg-gradient-to-br from-rose via-white to-rose/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-burgundy/5 text-burgundy px-4 py-2 rounded-full text-xs font-semibold mb-8 border border-burgundy/10">
                Женский клуб премиум-класса
              </div>
              
              <h1 className="font-serif text-7xl sm:text-8xl font-bold text-slate mb-6 leading-[0.9] tracking-tight">
                Muse
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Сообщество успешных женщин из мира бизнеса, культуры и искусства
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-8 shadow-xl shadow-burgundy/20 hover:shadow-2xl hover:shadow-burgundy/30 transition-all">
                  Присоединиться
                  <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-200 hover:border-burgundy hover:text-burgundy rounded-full px-8 bg-white">
                  Узнать больше
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-burgundy mb-1 font-serif">8</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Экспертов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-burgundy mb-1 font-serif">12</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Встреч/год</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-burgundy mb-1 font-serif">24</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Онлайн</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/10 to-gold/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-rose to-white rounded-2xl p-8 text-center border border-burgundy/10 hover:shadow-lg transition-all">
                    <Icon name="Users" className="w-10 h-10 text-burgundy mx-auto mb-3" />
                    <div className="text-sm font-semibold text-slate">Нетворкинг</div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-rose rounded-2xl p-8 text-center border border-gold/20 hover:shadow-lg transition-all">
                    <Icon name="Sparkles" className="w-10 h-10 text-gold mx-auto mb-3" />
                    <div className="text-sm font-semibold text-slate">Вдохновение</div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-rose rounded-2xl p-8 text-center border border-gold/20 hover:shadow-lg transition-all">
                    <Icon name="TrendingUp" className="w-10 h-10 text-gold mx-auto mb-3" />
                    <div className="text-sm font-semibold text-slate">Рост</div>
                  </div>
                  <div className="bg-gradient-to-br from-rose to-white rounded-2xl p-8 text-center border border-burgundy/10 hover:shadow-lg transition-all">
                    <Icon name="Award" className="w-10 h-10 text-burgundy mx-auto mb-3" />
                    <div className="text-sm font-semibold text-slate">Премиум</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-xl">
              <div className="text-burgundy text-xs font-semibold uppercase tracking-wider mb-4">О клубе</div>
              <h2 className="font-serif text-5xl font-bold text-slate mb-6 leading-tight">
                Пространство для роста и развития
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                Клуб Muse объединяет талантливых женщин для совместного роста и развития. Мы создаём пространство, где каждая участница может черпать вдохновение и находить поддержку.
              </p>
              <p className="text-base text-gray-500 mb-8 leading-relaxed">
                Наши мероприятия охватывают бизнес, искусство, спорт и путешествия — всё для гармоничной и насыщенной жизни.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-5">
              <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-burgundy to-burgundy/90 text-white hover:shadow-xl hover:scale-105 transition-all">
                <Icon name="Crown" className="w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold mb-2">Статусное окружение</h3>
                <p className="text-white/80 text-sm">Нетворкинг высшего уровня</p>
              </Card>
              
              <Card className="p-8 border border-gray-100 shadow-md hover:shadow-xl hover:scale-105 transition-all bg-white">
                <Icon name="Calendar" className="w-10 h-10 text-burgundy mb-4" />
                <h3 className="text-lg font-bold text-slate mb-2">Регулярные встречи</h3>
                <p className="text-gray-600 text-sm">Каждый месяц новые события</p>
              </Card>
              
              <Card className="p-8 border border-gray-100 shadow-md hover:shadow-xl hover:scale-105 transition-all bg-white">
                <Icon name="Lock" className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-lg font-bold text-slate mb-2">Закрытый формат</h3>
                <p className="text-gray-600 text-sm">Только для участниц клуба</p>
              </Card>
              
              <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-gold to-gold/90 text-white hover:shadow-xl hover:scale-105 transition-all">
                <Icon name="Heart" className="w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold mb-2">Поддержка</h3>
                <p className="text-white/80 text-sm">Сильное женское сообщество</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-24 px-6 sm:px-12 bg-slate text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Наша миссия</div>
            <h2 className="font-serif text-5xl font-bold mb-6 leading-tight">
              Объединяем сильных женщин для достижения большего
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "Users", title: "Сообщество", desc: "Динамичная сеть поддержки из различных сфер" },
              { icon: "TrendingUp", title: "Развитие", desc: "Личный и профессиональный рост" },
              { icon: "Sparkles", title: "Вдохновение", desc: "Поддержка в стремлениях и достижениях" },
              { icon: "Award", title: "Лидерство", desc: "Женщины в руководящих позициях" }
            ].map((goal, idx) => (
              <Card key={idx} className="bg-white/5 backdrop-blur-sm border-white/10 p-8 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-burgundy/20 flex items-center justify-center mb-6">
                  <Icon name={goal.icon} className="w-6 h-6 text-burgundy" />
                </div>
                <h3 className="text-lg font-bold mb-3">{goal.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{goal.desc}</p>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
              <Icon name="Heart" className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-2xl font-bold mb-6 font-serif">Ценности</h3>
              <ul className="space-y-4">
                {['Солидарность', 'Инновации', 'Равноправие', 'Открытость'].map((value) => (
                  <li key={value} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-burgundy"></div>
                    <span className="font-light">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
              <Icon name="Calendar" className="w-10 h-10 text-burgundy mb-6" />
              <h3 className="text-2xl font-bold mb-6 font-serif">Форматы встреч</h3>
              <ul className="space-y-4">
                {['Ежемесячные встречи ОЧНО', 'Онлайн-трансляции 2 раза/месяц', 'Гостевые спикеры', 'Творческие мероприятия'].map((format) => (
                  <li key={format} className="flex items-center gap-3 text-white/80">
                    <Icon name="Check" className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-light">{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experts" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-white to-rose/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-burgundy text-xs font-semibold uppercase tracking-wider mb-4">Наши эксперты</div>
            <h2 className="font-serif text-5xl font-bold text-slate mb-6">
              Лидеры в своих областях
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert, idx) => (
              <Card 
                key={idx} 
                className={`border-none shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden ${
                  hoveredCard === idx ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-square bg-gradient-to-br from-burgundy/5 via-rose to-gold/5 flex items-center justify-center">
                  <Icon name="User" className="w-16 h-16 text-burgundy/30" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-slate mb-2 leading-tight">{expert.name}</h3>
                  <p className="text-burgundy text-xs font-semibold mb-2">{expert.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{expert.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 sm:px-12 bg-gradient-to-br from-burgundy via-burgundy to-burgundy/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            Присоединяйтесь к нам
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Клуб Muse приглашает всех женщин, стремящихся к самосовершенствованию
          </p>
          
          <Button size="lg" className="bg-white text-burgundy hover:bg-white/90 rounded-full px-10 shadow-2xl hover:scale-105 transition-all font-semibold">
            Оставить заявку
          </Button>
          
          <div className="mt-20 pt-12 border-t border-white/20">
            <p className="text-2xl font-bold mb-8 font-serif">Вместе мы можем достичь большего</p>
            <div className="flex justify-center gap-4">
              {['Mail', 'Phone', 'Instagram'].map((icon) => (
                <div key={icon} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer border border-white/20">
                  <Icon name={icon} className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate text-white py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-white/10">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-14 w-auto brightness-0 invert"
            />
            <div className="flex gap-8">
              <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">О клубе</a>
              <a href="#mission" className="text-sm text-white/60 hover:text-white transition-colors">Миссия</a>
              <a href="#experts" className="text-sm text-white/60 hover:text-white transition-colors">Эксперты</a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-white/40">© 2025 Клуб Muse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
