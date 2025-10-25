import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

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
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center h-24">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-20 w-auto"
            />
            <div className="hidden lg:flex items-center space-x-12">
              <a href="#about" className="text-sm tracking-wide text-darkBlue/70 hover:text-burgundy transition-colors">О КЛУБЕ</a>
              <a href="#mission" className="text-sm tracking-wide text-darkBlue/70 hover:text-burgundy transition-colors">МИССИЯ</a>
              <a href="#experts" className="text-sm tracking-wide text-darkBlue/70 hover:text-burgundy transition-colors">ЭКСПЕРТЫ</a>
              <a href="#contact" className="text-sm tracking-wide text-darkBlue/70 hover:text-burgundy transition-colors">КОНТАКТЫ</a>
            </div>
            <Button className="bg-burgundy hover:bg-burgundy/90 text-white px-8 py-6 text-sm tracking-wide">
              ВСТУПИТЬ
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block mb-8">
                <span className="text-burgundy text-sm tracking-[0.3em] font-light">ЖЕНСКИЙ КЛУБ</span>
              </div>
              <h1 className="font-serif text-7xl lg:text-8xl font-light text-darkBlue mb-8 leading-[0.95]">
                Muse
              </h1>
              <p className="text-xl text-darkBlue/60 leading-relaxed mb-12 max-w-xl">
                Сообщество успешных женщин из сферы бизнеса, культуры, науки и искусства
              </p>
              <div className="flex gap-6">
                <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-white px-10 py-7 text-sm tracking-wide">
                  ПРИСОЕДИНИТЬСЯ
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-darkBlue/20 text-darkBlue hover:bg-darkBlue hover:text-white px-10 py-7 text-sm tracking-wide">
                  УЗНАТЬ БОЛЬШЕ
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-burgundy/5 to-gold/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                    <div className="text-5xl font-serif text-burgundy mb-2">8</div>
                    <div className="text-sm tracking-wide text-darkBlue/60">ЭКСПЕРТОВ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-8 lg:px-16 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-burgundy text-sm tracking-[0.3em] font-light mb-6 block">О КЛУБЕ</span>
              <h2 className="font-serif text-5xl lg:text-6xl font-light text-darkBlue mb-8 leading-tight">
                Пространство для роста
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-darkBlue/70 leading-relaxed mb-6">
                Клуб Muse объединяет талантливых женщин для совместного роста и развития. Мы создаём пространство, где каждая участница может черпать вдохновение, делиться опытом и находить поддержку среди единомышленников.
              </p>
              <p className="text-lg text-darkBlue/70 leading-relaxed mb-12">
                Наши мероприятия охватывают не только бизнес, но и искусство, спорт, путешествия — всё, что делает жизнь насыщенной и гармоничной.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="border-l-2 border-burgundy pl-6">
                  <div className="text-3xl font-serif text-burgundy mb-2">Статусное окружение</div>
                  <p className="text-sm text-darkBlue/60">Нетворкинг на высшем уровне</p>
                </div>
                <div className="border-l-2 border-gold pl-6">
                  <div className="text-3xl font-serif text-gold mb-2">Уникальные события</div>
                  <p className="text-sm text-darkBlue/60">Баланс работы и жизни</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-32 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-burgundy text-sm tracking-[0.3em] font-light mb-6 block">НАША МИССИЯ</span>
            <h2 className="font-serif text-5xl lg:text-6xl font-light text-darkBlue max-w-3xl mx-auto leading-tight">
              Объединяем сильных женщин для достижения большего
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Users", title: "Создать сообщество", desc: "Динамичная сеть поддержки из различных сфер" },
              { icon: "TrendingUp", title: "Поощрять развитие", desc: "Личный и профессиональный рост" },
              { icon: "Sparkles", title: "Вдохновлять", desc: "Поддержка в стремлениях и достижениях" },
              { icon: "Award", title: "Продвигать лидерство", desc: "Женщины в руководящих позициях" }
            ].map((goal, idx) => (
              <Card key={idx} className="p-8 bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center mb-6 group-hover:bg-burgundy/20 transition-colors">
                  <Icon name={goal.icon} className="w-8 h-8 text-burgundy" />
                </div>
                <h3 className="font-serif text-2xl text-darkBlue mb-3">{goal.title}</h3>
                <p className="text-darkBlue/60 leading-relaxed text-sm">{goal.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 lg:px-16 bg-darkBlue text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold text-sm tracking-[0.3em] font-light mb-6 block">ЦЕННОСТИ</span>
              <h2 className="font-serif text-5xl lg:text-6xl font-light mb-12 leading-tight">
                Что нас объединяет
              </h2>
              <div className="space-y-8">
                {[
                  { icon: "Heart", title: "Солидарность", text: "Поддержка и признание достижений каждой" },
                  { icon: "Lightbulb", title: "Инновации", text: "Креативность и свежие идеи приветствуются" },
                  { icon: "Scale", title: "Равноправие", text: "Равные возможности для всех участниц" },
                  { icon: "Globe", title: "Открытость", text: "Разнообразие мнений и культурный обмен" }
                ].map((value, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-full bg-burgundy/20 flex items-center justify-center flex-shrink-0 group-hover:bg-burgundy/30 transition-colors">
                      <Icon name={value.icon} className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl mb-2">{value.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              {[
                { icon: "Users", title: "Ежемесячные встречи", desc: "Панельные дискуссии и творческие воркшопы" },
                { icon: "Video", title: "Онлайн-трансляции", desc: "Два раза в месяц: обмен знаниями и энергией" },
                { icon: "Star", title: "Гостевые спикеры", desc: "Эксперты делятся опытом на экскурсиях" },
                { icon: "Sparkles", title: "Творческие мероприятия", desc: "Искусство, музыка, новые форматы развития" }
              ].map((format, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <Icon name={format.icon} className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl">{format.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{format.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experts" className="py-32 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-burgundy text-sm tracking-[0.3em] font-light mb-6 block">НАШИ ЭКСПЕРТЫ</span>
            <h2 className="font-serif text-5xl lg:text-6xl font-light text-darkBlue max-w-3xl mx-auto leading-tight">
              Лидеры в своих областях
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square bg-gradient-to-br from-burgundy/10 to-gold/10 rounded-2xl mb-6 flex items-center justify-center overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <Icon name="User" className="w-24 h-24 text-burgundy/30 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-serif text-xl text-darkBlue mb-2">{expert.name}</h3>
                <p className="text-burgundy text-sm font-medium mb-2">{expert.title}</p>
                <p className="text-darkBlue/50 text-xs">{expert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-8 lg:px-16 bg-gradient-to-br from-burgundy to-burgundy/90">
        <div className="max-w-[1000px] mx-auto text-center text-white">
          <h2 className="font-serif text-5xl lg:text-6xl font-light mb-8 leading-tight">
            Присоединяйтесь к нам
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Клуб Muse приглашает всех женщин, стремящихся к самосовершенствованию и желающих делиться своим вдохновением и талантами
          </p>
          <Button size="lg" className="bg-white text-burgundy hover:bg-white/90 px-12 py-8 text-base tracking-wide">
            ОСТАВИТЬ ЗАЯВКУ
          </Button>
          <div className="mt-20 pt-12 border-t border-white/20">
            <p className="font-serif text-3xl mb-8">Вместе мы можем достичь большего</p>
            <div className="flex justify-center space-x-8">
              <Icon name="Mail" className="w-6 h-6 text-gold" />
              <Icon name="Phone" className="w-6 h-6 text-gold" />
              <Icon name="Instagram" className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-darkBlue text-white py-16 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src="https://cdn.poehali.dev/files/7cc9e240-b9c5-48ca-9cd7-e402285e50ff.png" 
              alt="Muse Logo" 
              className="h-16 w-auto mb-8 md:mb-0 brightness-0 invert"
            />
            <div className="flex space-x-12">
              <a href="#about" className="text-sm tracking-wide text-white/60 hover:text-gold transition-colors">О клубе</a>
              <a href="#mission" className="text-sm tracking-wide text-white/60 hover:text-gold transition-colors">Миссия</a>
              <a href="#experts" className="text-sm tracking-wide text-white/60 hover:text-gold transition-colors">Эксперты</a>
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
