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
    <div className="min-h-screen bg-darkBrown text-champagne">
      <nav className="fixed top-0 w-full bg-darkBrown/95 backdrop-blur-sm z-50 border-b border-gold/20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center h-24">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-16 w-auto brightness-0 invert opacity-90"
            />
            <div className="hidden md:flex items-center gap-12">
              <a href="#about" className="text-xs uppercase tracking-[0.2em] text-champagne/60 hover:text-gold transition-all font-sans">О клубе</a>
              <a href="#mission" className="text-xs uppercase tracking-[0.2em] text-champagne/60 hover:text-gold transition-all font-sans">Миссия</a>
              <a href="#experts" className="text-xs uppercase tracking-[0.2em] text-champagne/60 hover:text-gold transition-all font-sans">Эксперты</a>
              <Button className="bg-gold hover:bg-gold/90 text-darkBrown text-xs uppercase tracking-widest px-8 h-12 font-semibold">
                Вступить
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-burgundy/10 to-transparent"></div>
        
        <div className="max-w-[1600px] mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 border border-gold/30 px-6 py-3 mb-12">
                <div className="w-1 h-1 bg-gold"></div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans">Премиальное членство</span>
              </div>
              
              <h1 className="font-display text-8xl lg:text-9xl font-bold text-champagne mb-8 leading-none tracking-tight">
                MUSE
              </h1>
              
              <div className="w-24 h-[1px] bg-gold mb-8"></div>
              
              <p className="font-serif text-2xl lg:text-3xl text-champagne/80 mb-12 leading-relaxed italic">
                Элитарное сообщество для женщин,<br />определяющих культуру и бизнес
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Button size="lg" className="bg-gold hover:bg-gold/80 text-darkBrown text-xs uppercase tracking-[0.2em] px-12 h-14 font-semibold transition-all">
                  Присоединиться
                </Button>
                <Button size="lg" variant="outline" className="border border-champagne/30 hover:border-gold hover:bg-gold/10 text-champagne text-xs uppercase tracking-[0.2em] px-12 h-14 font-semibold">
                  Подробнее
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-champagne/10">
                <div>
                  <div className="font-display text-5xl text-gold mb-2">8</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-champagne/50 font-sans">Экспертов</div>
                </div>
                <div>
                  <div className="font-display text-5xl text-gold mb-2">12</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-champagne/50 font-sans">Встреч/год</div>
                </div>
                <div>
                  <div className="font-display text-5xl text-gold mb-2">24</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-champagne/50 font-sans">Онлайн</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 border border-gold/20"></div>
              <div className="absolute -inset-4 border border-gold/10"></div>
              <div className="relative bg-darkBrown/50 backdrop-blur-sm p-16 border border-gold/30">
                <div className="grid grid-cols-2 gap-8">
                  <div className="group cursor-pointer">
                    <div className="border border-champagne/20 p-8 h-full flex flex-col items-center justify-center text-center transition-all group-hover:border-gold/50 group-hover:bg-gold/5">
                      <Icon name="Users" className="w-12 h-12 text-gold mb-4" />
                      <div className="text-xs uppercase tracking-[0.15em] text-champagne/70 font-sans">Нетворкинг</div>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="border border-champagne/20 p-8 h-full flex flex-col items-center justify-center text-center transition-all group-hover:border-gold/50 group-hover:bg-gold/5">
                      <Icon name="Sparkles" className="w-12 h-12 text-gold mb-4" />
                      <div className="text-xs uppercase tracking-[0.15em] text-champagne/70 font-sans">Вдохновение</div>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="border border-champagne/20 p-8 h-full flex flex-col items-center justify-center text-center transition-all group-hover:border-gold/50 group-hover:bg-gold/5">
                      <Icon name="TrendingUp" className="w-12 h-12 text-gold mb-4" />
                      <div className="text-xs uppercase tracking-[0.15em] text-champagne/70 font-sans">Развитие</div>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="border border-champagne/20 p-8 h-full flex flex-col items-center justify-center text-center transition-all group-hover:border-gold/50 group-hover:bg-gold/5">
                      <Icon name="Award" className="w-12 h-12 text-gold mb-4" />
                      <div className="text-xs uppercase tracking-[0.15em] text-champagne/70 font-sans">Премиум</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-8 lg:px-16 bg-gradient-to-b from-burgundy/20 to-transparent">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8 font-sans">О клубе</div>
              <h2 className="font-display text-6xl font-bold text-champagne mb-10 leading-tight">
                Эксклюзивное пространство для избранных
              </h2>
              <div className="w-16 h-[1px] bg-gold/50 mb-8"></div>
              <p className="font-serif text-xl text-champagne/70 mb-6 leading-relaxed italic">
                Клуб Muse — это закрытое сообщество успешных женщин, объединённых стремлением к совершенству в бизнесе, искусстве и личностном росте.
              </p>
              <p className="font-sans text-sm text-champagne/60 mb-12 leading-relaxed">
                Наши мероприятия созданы для тех, кто ценит качество, эксклюзивность и подлинные связи. Здесь встречаются лидеры мнений, предприниматели и деятели искусства.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-transparent border border-gold/30 p-10 hover:bg-gold/5 transition-all group">
                <Icon name="Crown" className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-bold text-champagne mb-4 tracking-tight">Элитное окружение</h3>
                <p className="text-champagne/60 text-xs leading-relaxed uppercase tracking-wider font-sans">Нетворкинг высшего уровня</p>
              </Card>
              
              <Card className="bg-transparent border border-champagne/20 p-10 hover:border-gold/30 hover:bg-gold/5 transition-all group">
                <Icon name="Calendar" className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-bold text-champagne mb-4 tracking-tight">Регулярность</h3>
                <p className="text-champagne/60 text-xs leading-relaxed uppercase tracking-wider font-sans">Ежемесячные события</p>
              </Card>
              
              <Card className="bg-transparent border border-champagne/20 p-10 hover:border-gold/30 hover:bg-gold/5 transition-all group">
                <Icon name="Lock" className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-bold text-champagne mb-4 tracking-tight">Приватность</h3>
                <p className="text-champagne/60 text-xs leading-relaxed uppercase tracking-wider font-sans">Только для участниц</p>
              </Card>
              
              <Card className="bg-transparent border border-gold/30 p-10 hover:bg-gold/5 transition-all group">
                <Icon name="Heart" className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-bold text-champagne mb-4 tracking-tight">Поддержка</h3>
                <p className="text-champagne/60 text-xs leading-relaxed uppercase tracking-wider font-sans">Сильное сообщество</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-32 px-8 lg:px-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-burgundy/10 to-transparent"></div>
        
        <div className="max-w-[1600px] mx-auto relative">
          <div className="text-center mb-20">
            <div className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8 font-sans">Наша миссия</div>
            <h2 className="font-display text-6xl font-bold text-champagne mb-8 max-w-4xl mx-auto leading-tight">
              Объединение лидеров для создания наследия
            </h2>
            <div className="w-24 h-[1px] bg-gold/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Users", title: "Сообщество", desc: "Динамичная сеть из бизнеса, культуры и искусства" },
              { icon: "TrendingUp", title: "Развитие", desc: "Личностный и профессиональный рост" },
              { icon: "Sparkles", title: "Вдохновение", desc: "Поддержка в амбициозных стремлениях" },
              { icon: "Award", title: "Лидерство", desc: "Женщины в руководящих позициях" }
            ].map((goal, idx) => (
              <Card key={idx} className="bg-transparent border border-champagne/20 p-10 hover:border-gold/40 hover:bg-gold/5 transition-all">
                <div className="border border-gold/30 w-14 h-14 flex items-center justify-center mb-8">
                  <Icon name={goal.icon} className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-champagne mb-4 tracking-tight">{goal.title}</h3>
                <p className="text-champagne/60 text-xs leading-relaxed uppercase tracking-wide font-sans">{goal.desc}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-24 grid md:grid-cols-2 gap-12">
            <div className="border border-champagne/20 p-12">
              <Icon name="Heart" className="w-10 h-10 text-gold mb-8" />
              <h3 className="font-display text-3xl font-bold text-champagne mb-8 tracking-tight">Ценности</h3>
              <ul className="space-y-6">
                {['Солидарность', 'Инновации', 'Равноправие', 'Открытость'].map((value) => (
                  <li key={value} className="flex items-center gap-4 text-champagne/70 font-serif text-lg italic">
                    <div className="w-2 h-2 border border-gold"></div>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border border-gold/30 p-12 bg-gold/5">
              <Icon name="Calendar" className="w-10 h-10 text-gold mb-8" />
              <h3 className="font-display text-3xl font-bold text-champagne mb-8 tracking-tight">Форматы встреч</h3>
              <ul className="space-y-6">
                {['Ежемесячные встречи ОЧНО', 'Онлайн-трансляции 2 раза/месяц', 'Гостевые спикеры', 'Творческие мероприятия'].map((format) => (
                  <li key={format} className="flex items-start gap-4 text-champagne/70">
                    <Icon name="Check" className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-xs uppercase tracking-wide font-sans">{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experts" className="py-32 px-8 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-20">
            <div className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8 font-sans">Наши эксперты</div>
            <h2 className="font-display text-6xl font-bold text-champagne mb-8">
              Лидеры в своих областях
            </h2>
            <div className="w-24 h-[1px] bg-gold/50 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, idx) => (
              <Card 
                key={idx} 
                className={`bg-transparent border transition-all cursor-pointer ${
                  hoveredCard === idx 
                    ? 'border-gold/50 bg-gold/5' 
                    : 'border-champagne/20 hover:border-gold/30'
                }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-square border-b border-champagne/20 flex items-center justify-center bg-gradient-to-br from-burgundy/20 to-transparent">
                  <Icon name="User" className="w-16 h-16 text-gold/40" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif font-bold text-champagne mb-3 text-lg leading-tight italic">{expert.name}</h3>
                  <p className="text-gold text-xs font-semibold mb-3 uppercase tracking-wider font-sans">{expert.title}</p>
                  <p className="text-champagne/50 text-xs leading-relaxed font-sans">{expert.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-8 lg:px-16 bg-gradient-to-b from-burgundy/30 to-burgundy/20 relative">
        <div className="absolute inset-0 border-t border-b border-gold/20"></div>
        
        <div className="max-w-[1000px] mx-auto text-center relative">
          <h2 className="font-display text-7xl font-bold text-champagne mb-8 tracking-tight">
            Станьте частью элиты
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-12"></div>
          <p className="font-serif text-2xl text-champagne/80 mb-16 leading-relaxed italic">
            Клуб Muse приглашает женщин,<br />стремящихся к совершенству
          </p>
          
          <Button size="lg" className="bg-gold hover:bg-gold/80 text-darkBrown text-xs uppercase tracking-[0.2em] px-16 h-16 font-semibold transition-all">
            Оставить заявку
          </Button>
          
          <div className="mt-24 pt-16 border-t border-champagne/20">
            <p className="font-display text-2xl text-champagne mb-12 tracking-tight">Вместе мы создаём историю</p>
            <div className="flex justify-center gap-8">
              {['Mail', 'Phone', 'Instagram'].map((icon) => (
                <div key={icon} className="w-12 h-12 border border-champagne/30 hover:border-gold hover:bg-gold/10 flex items-center justify-center transition-all cursor-pointer">
                  <Icon name={icon} className="w-5 h-5 text-gold" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-darkBrown py-20 px-8 lg:px-16 border-t border-gold/20">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-20 w-auto brightness-0 invert opacity-70"
            />
            <div className="flex gap-12">
              <a href="#about" className="text-[10px] uppercase tracking-[0.2em] text-champagne/40 hover:text-gold transition-all font-sans">О клубе</a>
              <a href="#mission" className="text-[10px] uppercase tracking-[0.2em] text-champagne/40 hover:text-gold transition-all font-sans">Миссия</a>
              <a href="#experts" className="text-[10px] uppercase tracking-[0.2em] text-champagne/40 hover:text-gold transition-all font-sans">Эксперты</a>
            </div>
          </div>
          <div className="mt-16 pt-12 border-t border-champagne/10 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-champagne/30 font-sans">© 2025 Клуб Muse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
