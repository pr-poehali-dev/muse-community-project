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
    <div className="min-h-screen bg-cream">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
                alt="Muse Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-burgundy transition-colors">О клубе</a>
              <a href="#mission" className="text-sm font-medium text-gray-700 hover:text-burgundy transition-colors">Миссия</a>
              <a href="#experts" className="text-sm font-medium text-gray-700 hover:text-burgundy transition-colors">Эксперты</a>
              <Button className="bg-burgundy hover:bg-burgundy/90 text-white px-8 h-11 font-medium rounded-lg">
                Вступить
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-burgundy/5 px-5 py-2.5 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-burgundy animate-pulse"></div>
                <span className="text-sm font-medium text-burgundy">Премиум сообщество</span>
              </div>
              
              <h1 className="font-serif text-7xl sm:text-8xl font-bold text-slate mb-8 leading-[0.95]">
                Клуб<br/>Muse
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-xl">
                Пространство для успешных женщин, которые создают будущее в бизнесе, искусстве и культуре
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-white px-10 h-14 rounded-lg shadow-lg shadow-burgundy/25 font-medium">
                  Присоединиться к клубу
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-burgundy text-slate px-10 h-14 rounded-lg font-medium">
                  Узнать подробнее
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-burgundy mb-1">8</div>
                  <div className="text-sm text-gray-500">Экспертов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-burgundy mb-1">12+</div>
                  <div className="text-sm text-gray-500">Встреч в год</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-burgundy mb-1">50+</div>
                  <div className="text-sm text-gray-500">Участниц</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-burgundy/20 to-gold/20 rounded-3xl blur-2xl opacity-30"></div>
                <Card className="relative bg-white shadow-xl border-0 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-burgundy/5 to-transparent rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Users" className="w-6 h-6 text-burgundy" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate text-sm">Нетворкинг</div>
                        <div className="text-xs text-gray-500">Связи на всю жизнь</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gold/5 to-transparent rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Sparkles" className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate text-sm">Вдохновение</div>
                        <div className="text-xs text-gray-500">От лучших экспертов</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-burgundy/5 to-transparent rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="TrendingUp" className="w-6 h-6 text-burgundy" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate text-sm">Развитие</div>
                        <div className="text-xs text-gray-500">Личный и бизнес рост</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gold/5 to-transparent rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Award" className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate text-sm">Эксклюзив</div>
                        <div className="text-xs text-gray-500">Премиум формат</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-burgundy text-sm font-semibold mb-4">О клубе Muse</div>
              <h2 className="font-serif text-5xl font-bold text-slate mb-8 leading-tight">
                Место силы для амбициозных женщин
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Muse — это больше, чем клуб. Это сообщество единомышленниц, где вы найдёте поддержку, новые возможности и настоящую дружбу.
              </p>
              <p className="text-base text-gray-500 mb-10 leading-relaxed">
                Мы собираем вместе женщин из бизнеса, искусства, культуры и спорта. Наши встречи — это пространство для обмена опытом, вдохновения и создания долгосрочных партнёрств.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-full bg-gradient-to-br from-burgundy to-gold border-4 border-white shadow-lg"></div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-slate">50+ участниц</div>
                  <div className="text-sm text-gray-500">Уже с нами</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <Card className="p-8 bg-gradient-to-br from-burgundy to-burgundy/90 text-white border-0 shadow-xl hover:shadow-2xl transition-all group">
                <div className="mb-6">
                  <Icon name="Crown" className="w-12 h-12 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Элитный круг</h3>
                <p className="text-white/80 text-sm leading-relaxed">Общение с лидерами индустрий</p>
              </Card>
              
              <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all group">
                <div className="mb-6">
                  <Icon name="Calendar" className="w-12 h-12 text-burgundy group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate mb-2">Регулярность</h3>
                <p className="text-gray-600 text-sm leading-relaxed">События каждый месяц</p>
              </Card>
              
              <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all group">
                <div className="mb-6">
                  <Icon name="Lock" className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate mb-2">Приватность</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Закрытое сообщество</p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-gold to-gold/90 text-white border-0 shadow-xl hover:shadow-2xl transition-all group">
                <div className="mb-6">
                  <Icon name="Heart" className="w-12 h-12 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Поддержка</h3>
                <p className="text-white/80 text-sm leading-relaxed">Сильные женщины рядом</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-24 px-8 lg:px-12 bg-slate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-gold text-sm font-semibold mb-4">Наша миссия</div>
            <h2 className="font-serif text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
              Создаём пространство для роста и самореализации
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: "Users", title: "Сообщество", desc: "Единомышленницы из разных сфер" },
              { icon: "TrendingUp", title: "Развитие", desc: "Личностный и бизнес-рост" },
              { icon: "Sparkles", title: "Вдохновение", desc: "Мотивация и новые идеи" },
              { icon: "Award", title: "Лидерство", desc: "Женщины-лидеры индустрий" }
            ].map((goal, idx) => (
              <Card key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all rounded-xl">
                <div className="w-14 h-14 rounded-2xl bg-burgundy/20 flex items-center justify-center mb-6">
                  <Icon name={goal.icon} className="w-7 h-7 text-burgundy" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{goal.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{goal.desc}</p>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-xl">
              <Icon name="Heart" className="w-10 h-10 text-gold mb-6" />
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Наши ценности</h3>
              <ul className="space-y-4">
                {['Солидарность и поддержка', 'Открытость новому', 'Равноправие и уважение', 'Стремление к росту'].map((value) => (
                  <li key={value} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-burgundy flex-shrink-0"></div>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-xl">
              <Icon name="Calendar" className="w-10 h-10 text-burgundy mb-6" />
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Форматы встреч</h3>
              <ul className="space-y-4">
                {['Ежемесячные встречи офлайн', 'Онлайн-трансляции дважды в месяц', 'Мастер-классы от экспертов', 'Творческие и деловые мероприятия'].map((format) => (
                  <li key={format} className="flex items-start gap-3 text-white/80">
                    <Icon name="Check" className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{format}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="experts" className="py-24 px-8 lg:px-12 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-burgundy text-sm font-semibold mb-4">Эксперты клуба</div>
            <h2 className="font-serif text-5xl font-bold text-slate mb-6">
              Лидеры в своих сферах
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наши эксперты — успешные предпринимательницы, деятели искусства и культуры
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert, idx) => (
              <Card 
                key={idx} 
                className={`bg-white border-0 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden rounded-xl ${
                  hoveredCard === idx ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-square bg-gradient-to-br from-burgundy/10 via-rose to-gold/10 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="User" className="w-10 h-10 text-burgundy" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate mb-2 leading-tight text-base">{expert.name}</h3>
                  <p className="text-burgundy text-xs font-semibold mb-2 uppercase tracking-wide">{expert.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{expert.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-8 lg:px-12 bg-gradient-to-br from-burgundy via-burgundy/95 to-burgundy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-serif text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Станьте частью Muse
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Откройте новые возможности для роста и развития вместе с сообществом успешных женщин
          </p>
          
          <Button size="lg" className="bg-white text-burgundy hover:bg-white/90 px-12 h-14 rounded-lg shadow-2xl hover:scale-105 transition-all font-semibold">
            Оставить заявку на вступление
          </Button>
          
          <div className="mt-20 pt-12 border-t border-white/20">
            <p className="font-serif text-2xl mb-8">Мы на связи</p>
            <div className="flex justify-center gap-4">
              {['Mail', 'Phone', 'Instagram'].map((icon) => (
                <button key={icon} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all border border-white/20">
                  <Icon name={icon} className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate text-white py-16 px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-white/10">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
            <div className="flex gap-8">
              <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">О клубе</a>
              <a href="#mission" className="text-sm text-white/60 hover:text-white transition-colors">Миссия</a>
              <a href="#experts" className="text-sm text-white/60 hover:text-white transition-colors">Эксперты</a>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-white/40">© 2025 Клуб Muse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
