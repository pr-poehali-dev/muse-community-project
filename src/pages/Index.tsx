import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

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
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-burgundy/5 overflow-hidden">
      <div 
        className="fixed top-0 left-0 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div 
        className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
        }}
      />

      <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-xl z-50 border-b border-white/20">
        <div className="max-w-[1600px] mx-auto px-12 lg:px-20">
          <div className="flex justify-between items-center h-28">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-20 w-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden lg:flex items-center space-x-14">
              <a href="#about" className="text-xs tracking-[0.2em] text-darkBlue/60 hover:text-burgundy transition-all duration-300 relative group">
                О КЛУБЕ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-burgundy group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#mission" className="text-xs tracking-[0.2em] text-darkBlue/60 hover:text-burgundy transition-all duration-300 relative group">
                МИССИЯ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-burgundy group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#experts" className="text-xs tracking-[0.2em] text-darkBlue/60 hover:text-burgundy transition-all duration-300 relative group">
                ЭКСПЕРТЫ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-burgundy group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-xs tracking-[0.2em] text-darkBlue/60 hover:text-burgundy transition-all duration-300 relative group">
                КОНТАКТЫ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-burgundy group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <Button className="bg-gradient-to-r from-burgundy to-burgundy/80 hover:from-burgundy/90 hover:to-burgundy/70 text-white px-10 py-7 text-xs tracking-[0.2em] shadow-lg hover:shadow-burgundy/30 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              ВСТУПИТЬ
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-52 pb-40 px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div 
              className="relative z-10"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="inline-block mb-10 px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-burgundy/20">
                <span className="text-burgundy text-xs tracking-[0.3em] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-burgundy rounded-full animate-pulse"></span>
                  ЖЕНСКИЙ КЛУБ ПРЕМИУМ-КЛАССА
                </span>
              </div>
              <h1 className="font-serif text-8xl lg:text-9xl font-light text-darkBlue mb-10 leading-[0.9] relative">
                Muse
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
              </h1>
              <p className="text-2xl text-darkBlue/70 leading-relaxed mb-14 max-w-xl font-light">
                Эксклюзивное сообщество успешных женщин из мира бизнеса, культуры и искусства
              </p>
              <div className="flex gap-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-burgundy via-burgundy to-burgundy/90 hover:from-burgundy/90 hover:to-burgundy text-white px-12 py-8 text-sm tracking-[0.2em] shadow-2xl hover:shadow-burgundy/40 transition-all duration-500 hover:scale-105 group"
                >
                  ПРИСОЕДИНИТЬСЯ
                  <Icon name="ArrowRight" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-darkBlue/20 text-darkBlue hover:bg-darkBlue hover:text-white hover:border-darkBlue px-12 py-8 text-sm tracking-[0.2em] backdrop-blur-sm bg-white/40 transition-all duration-300 hover:scale-105"
                >
                  ПОДРОБНЕЕ
                </Button>
              </div>
            </div>
            <div 
              className="relative"
              style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 via-gold/20 to-burgundy/10 rounded-[3rem] blur-2xl"></div>
                <div className="relative aspect-square bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/60 p-12 shadow-2xl">
                  <div className="grid grid-cols-2 gap-8 h-full">
                    <div className="bg-gradient-to-br from-burgundy/10 to-transparent backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                      <Icon name="Users" className="w-16 h-16 text-burgundy mb-4" />
                      <div className="text-5xl font-serif text-burgundy mb-2">8</div>
                      <div className="text-xs tracking-wider text-darkBlue/60">ЭКСПЕРТОВ</div>
                    </div>
                    <div className="bg-gradient-to-br from-gold/10 to-transparent backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                      <Icon name="Calendar" className="w-16 h-16 text-gold mb-4" />
                      <div className="text-5xl font-serif text-gold mb-2">12</div>
                      <div className="text-xs tracking-wider text-darkBlue/60">ВСТРЕЧ/ГОД</div>
                    </div>
                    <div className="bg-gradient-to-br from-gold/10 to-transparent backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                      <Icon name="Sparkles" className="w-16 h-16 text-burgundy mb-4" />
                      <div className="text-5xl font-serif text-burgundy mb-2">24</div>
                      <div className="text-xs tracking-wider text-darkBlue/60">ОНЛАЙН</div>
                    </div>
                    <div className="bg-gradient-to-br from-burgundy/10 to-transparent backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
                      <Icon name="Award" className="w-16 h-16 text-gold mb-4" />
                      <div className="text-5xl font-serif text-gold mb-2">VIP</div>
                      <div className="text-xs tracking-wider text-darkBlue/60">СТАТУС</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-40 px-12 lg:px-20">
        <div 
          className="absolute top-20 left-1/4 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <div className="inline-block mb-8 px-5 py-2 bg-white/60 backdrop-blur-md rounded-full border border-burgundy/20">
                <span className="text-burgundy text-xs tracking-[0.3em] font-medium">О КЛУБЕ</span>
              </div>
              <h2 className="font-serif text-7xl font-light text-darkBlue mb-10 leading-tight">
                Пространство для роста и вдохновения
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xl text-darkBlue/70 leading-relaxed">
                Клуб Muse — это не просто сообщество. Это эксклюзивная экосистема для женщин, которые создают будущее в своих сферах.
              </p>
              <p className="text-xl text-darkBlue/70 leading-relaxed">
                Мы объединяем лидеров мнений, предпринимателей, художников и экспертов для создания уникальных коллабораций, обмена опытом и построения долгосрочных партнёрств.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-burgundy/10 to-transparent rounded-2xl group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/60 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <Icon name="Crown" className="w-12 h-12 text-burgundy mb-4" />
                    <h3 className="text-2xl font-serif text-darkBlue mb-3">Статусное окружение</h3>
                    <p className="text-darkBlue/60 leading-relaxed">Нетворкинг высшего уровня с лидерами индустрий</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/60 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <Icon name="Zap" className="w-12 h-12 text-gold mb-4" />
                    <h3 className="text-2xl font-serif text-darkBlue mb-3">Уникальные события</h3>
                    <p className="text-darkBlue/60 leading-relaxed">Закрытые мероприятия только для участниц</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="relative py-40 px-12 lg:px-20 bg-gradient-to-br from-darkBlue via-darkBlue to-burgundy/20">
        <div 
          className="absolute top-40 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
        ></div>
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-8 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-gold text-xs tracking-[0.3em] font-medium">НАША МИССИЯ</span>
            </div>
            <h2 className="font-serif text-7xl font-light text-white max-w-4xl mx-auto leading-tight mb-8">
              Создаём будущее вместе
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Объединяем сильных женщин для достижения невозможного
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Users", title: "Сообщество", desc: "Динамичная сеть поддержки из различных сфер", color: "burgundy" },
              { icon: "TrendingUp", title: "Развитие", desc: "Личный и профессиональный рост", color: "gold" },
              { icon: "Sparkles", title: "Вдохновение", desc: "Поддержка в стремлениях и достижениях", color: "burgundy" },
              { icon: "Award", title: "Лидерство", desc: "Женщины в руководящих позициях", color: "gold" }
            ].map((goal, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 shadow-2xl">
                  <div className={`w-20 h-20 rounded-2xl bg-${goal.color}/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon name={goal.icon} className={`w-10 h-10 text-${goal.color === 'burgundy' ? 'burgundy' : 'gold'}`} />
                  </div>
                  <h3 className="font-serif text-3xl text-white mb-4">{goal.title}</h3>
                  <p className="text-white/60 leading-relaxed">{goal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experts" className="relative py-40 px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block mb-8 px-5 py-2 bg-white/60 backdrop-blur-md rounded-full border border-burgundy/20">
              <span className="text-burgundy text-xs tracking-[0.3em] font-medium">НАШИ ЭКСПЕРТЫ</span>
            </div>
            <h2 className="font-serif text-7xl font-light text-darkBlue max-w-4xl mx-auto leading-tight">
              Лидеры в своих областях
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy/5 to-gold/5 rounded-3xl group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative bg-white/60 backdrop-blur-sm border border-white/60 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square bg-gradient-to-br from-burgundy/10 to-gold/10 rounded-2xl mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <Icon name="User" className="w-20 h-20 text-burgundy/40 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-serif text-xl text-darkBlue mb-2 leading-tight">{expert.name}</h3>
                  <p className="text-burgundy text-sm font-medium mb-2">{expert.title}</p>
                  <p className="text-darkBlue/50 text-xs leading-relaxed">{expert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-40 px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy via-burgundy to-burgundy/80"></div>
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="font-serif text-7xl font-light mb-10 leading-tight text-white">
            Станьте частью элиты
          </h2>
          <p className="text-2xl text-white/80 mb-16 leading-relaxed max-w-3xl mx-auto">
            Присоединяйтесь к эксклюзивному сообществу успешных женщин
          </p>
          <Button 
            size="lg" 
            className="bg-white text-burgundy hover:bg-white/90 px-16 py-10 text-base tracking-[0.2em] shadow-2xl hover:shadow-white/30 hover:scale-110 transition-all duration-500 group"
          >
            ОСТАВИТЬ ЗАЯВКУ
            <Icon name="Sparkles" className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
          </Button>
          <div className="mt-24 pt-16 border-t border-white/20">
            <p className="font-serif text-4xl mb-10 text-white/90">Вместе мы создаём историю</p>
            <div className="flex justify-center gap-10">
              {['Mail', 'Phone', 'Instagram'].map((icon) => (
                <div key={icon} className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Icon name={icon} className="w-6 h-6 text-gold" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-darkBlue text-white py-20 px-12 lg:px-20 relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-20 w-auto brightness-0 invert"
            />
            <div className="flex gap-16">
              <a href="#about" className="text-xs tracking-[0.2em] text-white/50 hover:text-gold transition-colors">О клубе</a>
              <a href="#mission" className="text-xs tracking-[0.2em] text-white/50 hover:text-gold transition-colors">Миссия</a>
              <a href="#experts" className="text-xs tracking-[0.2em] text-white/50 hover:text-gold transition-colors">Эксперты</a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/30 tracking-wide">© 2025 Клуб Muse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
