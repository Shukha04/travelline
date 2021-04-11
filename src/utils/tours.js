import France from '../images/france.jpg'
import Italy from '../images/italy.jpg'
import Russia from '../images/russia.jpg'
import UAE from '../images/uae.jpg'
import Uzbekistan from '../images/uzbekistan.jpg'

const tours = {
  en: [
    {
      id: 1,
      image: Italy,
      title: 'Italian trip',
      pickup: 'Samarkand',
      destination: 'Milan',
      way: ['Samarkand', 'Milan', 'Rimini'],
      price: 8000000,
      info: 'Beautiful vacation in one of the most beautiful resort towns of Italy - Rimini',
      plan: [
        'Arrival in Milan. Transfer to the hotel. Accommodation at Hotel Dateo Milano.',
        'On the second day of stay in Milan you will be able to familiarize yourself with the city closer. Milan is considered one of the leading global centers of science, technology, mods and design. Famous Duomo, La Rock, Vittorio Emmanuele Gallery; Majestic palaces and churches, excellent shops, cafes and pastry, in which you can lose your head... Even gray, rainy and foggy Milan is able to fall in love with a semi-dislice, with a half-year of hot chocolate in Cilccolatitaliani, with a semic student of the Panzerotti at Luini.',
        'Good (and for some - just decisive) A reason to visit Milan - the opportunity to buy clothes, shoes and accessories of legendary global brands for fabulous prices. On this day, we recommend that you independently go on shopping!',
        'Evaluation from the hotel in Milan. Transfer to the station.Min Milan Rimini. Settlement at Grand Hotel Rimini.',
        'In addition to relaxing on the miraculous sun-flooded beaches, you will get a closer to the city.',
        'Day of independent excursions!However, visit San Marino. San Marino is one of the smallest states on Earth (after Monaco and Vatican) and the oldest state of Europe, from all sides, surrounded by the territory of Italy. "The light republic" San Marino is almost "flying over the cuckoo nest": the rocky slopes of the Apennine and only 60 km of a useful area. The main attractions here are mighty locks and towers, as well as picturesque nature.',
        'Rest on wonderful beaches, enjoying the sun and blue sky and the sea.',
        'Eviction from the hotel. Rimini Milan. Airport transfer. Departure home.'
      ],
      m: 'Italy'
    },
    {
      id: 2,
      image: Russia,
      title: 'The Red Square',
      pickup: 'Samarkand',
      destination: 'Moscow',
      way: ['Samarkand', 'St. Petersburg', 'Moscow'],
      price: 9000000,
      info:
        'Tour to the largest country in the world, in comfortable conditions in the hotels of Azimut and Hilton, walks and excursions in 2 beautiful cities.',
      plan: [
        'Arrival to St. Petersburg. Transfer to the hotel. Accommodation at the Azimut Hotel.',
        'On the second day in St. Petersburg, you will get acquainted with his rich history, will pass a tour of the Hermitage Museum.',
        'On the third day you can buy souvenirs and everything you need in St. Petersburg shopping centers.',
        'Eviction from the hotel in St. Petersburg. Transfer to the station. Moving St. Petersburg-Moscow. Settlement at Hilton Hotel.',
        'On the first day in Moscow you will be familiar with its beauty and greatness, you walk through different attractions, such as Red Square.',
        'On the day before leaving, you can relax where you only wish in this huge city.',
        'Eviction from the hotel. Airport transfer. Departure home.'
      ],
      m: 'Russia'
    },
    {
      id: 3,
      image: UAE,
      title: 'Piece of paradise in the desertn the desert',
      pickup: 'Samarkand',
      destination: 'Dubai',
      duration: [11],
      way: ['Samarkand', 'Tashkent', 'Dubai'],
      price: 13650000,
      info:
        'A trip to the hot and beautiful Dubai with a stop at the Taj Dubai Hotel with the best view.',
      plan: [
        'Arrival in Tashkent. Airport transfer. Flying to Dubai',
        'Arrival to Dubai. Transfer to the hotel. Accommodation at the Taj Dubai Hotel.',
        'In an idiot day, you will have an unforgettable tour of the whole dub, in the most beautiful places, such as Burj Khalifa, The Dubai Fountain, etc.',
        'On the third stay in Dubai you will have the opportunity to look at local popular skyscrapers.',
        'Rest on wonderful beaches, enjoying the hot sun and blue sky and the sea.',
        'Eviction from the hotel. Airport transfer. Departure home.'
      ],
      m: 'UAE'
    },
    {
      id: 4,
      image: France,
      title: 'Dinner on the Eiffel Tower',
      pickup: 'Samarkand',
      destination: 'Paris',
      way: ['Samarkand', 'Paris', 'Nice'],
      price: 10500000,
      info: 'A trip to the capital of the most romantic country with a stop at Hotel Aston.',
      plan: [
        'Arrival to Paris. Transfer to the hotel. Accommodation at Hotel Aston.',
        'On the second day of stay in Paris you will learn from the city closer. Sightseeing tour of Paris. The guide will be happy to tell and show you the main sights of the city, the Site, the Square of Bastille, Opera, Wandom Square, Marso Field, the Champs Elysees, Eiffel Tower, and thanks to stopping along the route, you can make photos for memory.',
        'On this day we recommend that you visit Louvre or Versailles yourself. Meet the magnificent samples of French architecture listed on the UNESCO World Heritage List. You can send to Disneyland.',
        'Evaluation from the hotel in Paris. Transfer to the station. Moving Paris-Nice. Settlement at the Radisson Blu Hotel.',
        'In addition to relaxing on the miraculous sun-flooded beaches, you will get a closer to the city. A group sightseeing tour of Nice is an integral part of your holiday. Three-hour excursion will be held at the main places and attractions, and the interesting stories of the Russian-speaking guide will fully plunge into the azure world. Stroll through the old town. The amazing atmosphere, narrow streets and an insane diversity characteristic of France smells: flowers, flavors of perfume, pastis, amazing French wines, oils, coffee ... You will find ice cream, souvenirs, beautiful clothes and many more interesting things. Old Nice is a real work of art. City architecture style, houses, streets - everything is permeated by an atmosphere of exciting beauty that causes the feeling of unrestrained joy. In this cozy city you feel at home.',
        'Day of independent excursions! Be sure to visit Cannes! Yachts, palm trees, chic hotels, sandy beaches... This city was founded in 42 BC! But over the centuries, Cannes remained a simple village fishermen. And only thanks to the accidental visit of the English Chancellor, who was delighted with the beauty of these places and decided to build a house here, Cannes gradually became the resort of world importance. In 1988, Gi de Maupassan wrote about Cannes: "Princes, Princes, everywhere princes." Cannes is a city of wonderful hotels, beautiful species, sea and palm trees. Lear to the Tower of Syuke and enjoy a panoramic view of Cannes. Stroll around the evening beach, squeeze the salty air, listen to the noise of the surf. Stroll through the croisette boulevard, it is amazingly beautifully lit in the evening. This is the main street of the city, where you will find luxurious boutiques, elegant hotels and restaurants with a magnificent kitchen. Be sure to visit the fish restaurant, taste the seafood and fish, skillfully cooked by the hands of French chefs.',
        'Rest on wonderful beaches, enjoying the sun and blue sky and sea, or go to one of the excursions for an additional fee on the azure coast. Stroll in the port of Nice, admiring yachts, ships, multi-colored houses, or go shopping. Advanceders of antiques and vintage style We recommend visiting the small city market for the Marché à la brocante, which is located on the street called Cours Saléya, close to the famous Promenade des Anglais. Here you will undoubtedly get a lot of positive emotions and amazing impressions, feel the spirit of French old, you will be able to admire the real French furniture and objects of life in the spirit of the French province of the beginning of the 20th century.',
        "Day of independent excursions! We recommend that you visit the ancient city of Antibes. This city was founded by the Phoenicians in VII B BC. And wore name Antipolis. For a long time, Antibes remained the only fortified city on the shores of the Mediterranean Sea from Marseille to the shores of Italy. In the XVI. The city built a fortress in the form of a star, which was called Fort Carre. Visit the yacht port of Antibes, which, by the way, is one of the major on the Cote d'Azur. An excellent option for family holidays with children in Antibes will be visited by Marinland Marine Park. Here your children will be able to have fun, watching dolphins and clocks, visit the jungle butterflies, Provencal farm. You can even swim in the pool with dolphins and chat with a seawatch! 40 km west from Nice there is a small French city of Grass - the world capital of spirits. It is here that the mystery of the conversion of flowers in wonderful essences, from whose combinations perfumers create famous French perfumes.",
        'Overace on wonderful beaches, enjoying the sun and blue sky and sea, or go to one of the excursions for an extra fee on the azure shore. Without a doubt, the resort city sets his rhythm of life, relaxed, unhurried. I want to forget about the bustle and enjoy every moment of these amazing landscapes, every sigh of wonderful air at the shores of the sea, sit on beautiful benches in cozy parks. But for lovers of outdoor activities here have a lot of interesting things: surfing, diving, water skiing, hiking in the mountains, canoe, parachute, rafting and a lot more interesting for an unforgettable time. If you begin, you can take classes with an instructor.',
        'Day of independent excursions!You can go in the Saint-Tropez or visit Monaco, this amazing country, where the streets of the Old Town are filled with stories about the oldest ruling European dynasty.',
        'Evaluation of the hotel.Moving Nice-Paris.Airport transfer.Departure home.'
      ],
      m: 'France'
    },
    {
      id: 5,
      image: Uzbekistan,
      title: 'Great Silk Road',
      pickup: 'Samarkand',
      destination: 'Tashkent',
      way: ['Samarkand', 'Bukhara', 'Hiva', 'Tashkent'],
      price: 2700000,
      info: 'A trip to Uzbekistan along the "Great Silk Road".',
      plan: [
        'Arrival in Samarkand. Transfer to the hotel. Accommodation at the Hotel Dilimah Premium.',
        'The excursion to Mausoleum Imozoil Allah, Mausoleum Amir Temur, Square Registan, Bibihan Mosque.',
        'On the second day there will be more excursion (Samarkand has a very rich history and there are many historical places about which you are obliged to find out) in the Khazrai Hizr Mosque (here is the Mausoleum of the First President of the Republic of Uzbekistan Islam Karimov), the ensemble of Sinda Schoi, Mausoleum Huza Daniyar and the Ulugbek Observatory.',
        'Evaluation from the hotel in Samarkand. Transfer to the station. Moving Samarkand-Bukhara. Settlement at the hotel Orient Star Varahsha.',
        'On the second day in Bukhara, you will be taking a tour in the mausoleum of the Samanids, the Bolo-House complex, the ancient fortress of the Arc, the complex I will share Calyan, Minaret Calyan, Madrasa Abdulaziz-Khan, Kosh-Madrasa, Madrasa Ulugbek, Ensemble Langi Hauz, Madrasa Kukeldash,Madrasa Nadir Sivalbegie and Trading Dome.',
        'Evaluation from the hotel in Bukhara. Transfer to the station. Moving Bukhara Khiva. Settlement at the hotel Orient Star Khiva.',
        'In Khiva, there are also a lot of interesting places and the excursion there will be held on Mausoleum Pakhlavon-Mahmoud, Tosh Havli, Konya-Ark, Tower of Calta Minar, Madrasa Sherosi Khan, Alla Culi Khan, Moskoy Juma, Karavon Sarai, Huza Islam, Madrasa Kuutluk Murad Inak and Tim Alla Kulikhan.',
        'Evaluation from the hotel in Khiva. Transfer to the station. Moving Hiva Tashkent. Settlement at the Hilton Tashkent City Hotel.',
        "The excursion of the Square of Independence Square, the area of memory and honors, Amir Temur's Park, the Museum of the State History of Uzbekistan, Mausoleum Cauffal Shoe, Madrasa Barakhon, Mosque Tilla Shayh, Madrasa Kўkaldosh and Chorsu.",
        'The penultimate day is given to rest in the capital of Uzbekistan.',
        'Evaluation of the hotel. Moving home.'
      ],
      m: 'Uzbekistan'
    }
  ],

  ru: [
    {
      id: 1,
      image: Italy,
      title: 'Итальянский тур',
      pickup: 'Самарканд',
      destination: 'Милан',
      way: ['Самарканд', 'Милан', 'Римини'],
      price: 8000000,
      info: 'Прекрасный отдых в одном из самых красивейших курортных городов Италии - Римини',
      plan: [
        'Прилет в Милан. Трансфер в отель. Размещение в отеле Hotel Dateo Milano.',
        'На второй день пребывания в Милане вы сможете ознакомиться с городом поближе. Милан считается одним из ведущих мировых центров науки, технологии, моды и дизайна. Знаменитый Дуомо, Ла-Скала, галерея Витторио Эммануэле; величественные дворцы и церкви, отличные магазины, кафе и кондитерские, в которых можно потерять голову… Даже серый, дождливый и туманный Милан способен влюбить в себя с полувзгляда, с полуглотка горячего шоколада в Cilccolatitaliani, с полуукуса панцеротти у "Луини".',
        'Веский (а для некоторых — так и просто решающий) повод побывать в Милане — возможность накупить одежды, обуви и аксессуаров легендарных мировых брендов по сказочным ценам. В этот день мы рекомендуем Вам самостоятельно отправиться на шоппинг!',
        'Выселение из отеля в Милане. Трансфер на вокзал. Переезд Милан-Римини. Заселение в отель Grand Hotel Rimini.',
        'Помимо отдыха на чудесных залитых солнцем пляжах, Вы поближе познакомитесь с городом.',
        'День самостоятельных экскурсий! Непременно посетите Сан-Марино. Сан-Марино — одно из самых маленьких государств на Земле (после Монако и Ватикана) и самое старое государство Европы, со всех сторон окруженное территорией Италии. "Светлейшая республика" Сан-Марино — это почти "пролетая над гнездом кукушки": скалистые склоны Апеннин и всего 60 км полезной площади. Главные достопримечательности здесь — могучие замки и башни, а также живописная природа.',
        'Отдыхайте на чудесных пляжах, наслаждаясь солнцем и синевой неба и моря.',
        'Выселение из отеля. Переезд Римини-Милан. Трансфер в аэропорт. Вылет домой.'
      ],
      m: 'Italy'
    },
    {
      id: 2,
      image: Russia,
      title: 'Красная площадь',
      pickup: 'Самарканд',
      destination: 'Москва',
      way: ['Самарканд', 'Санкт-Петербург', 'Москва'],
      price: 9000000,
      info:
        'Тур в самую большую страну в мире, в комфортных условиях в отелях Azimut и Hilton, прогулки и экскурсии в 2 прекрасных городах.',
      plan: [
        'Прилет в Санкт-Петербург. Трансфер в отель. Размещение в отеле Azimut.',
        'Во второй день в Санкт-Петербурге вы познакомитесь с его богатой историей, пройдете экскурсию по музею Эрмитаж.',
        'В третий день вы сможете закупиться сувенирами и всем что вам нужно в торговых центрах Санкт-Петербурга.',
        'Выселение из отеля в Санкт-Петербурге. Трансфер на вокзал. Переезд Санкт-Петербург-Москва. Заселение в отель Hilton.',
        'В первый день в Москве вас ознакомят с её красотой и величием, вы прогуляетесь по разным достопримечательностям, таким как Красная Площадь.',
        'В день перед отъездом вы можете отдохнуть где только пожелаете в этом огромном городе.',
        'Выселение из отеля. Трансфер в аэропорт. Вылет домой.'
      ],
      m: 'Russia'
    },
    {
      id: 3,
      image: UAE,
      title: 'Кусок рая в пустыне',
      pickup: 'Самарканд',
      destination: 'Дубай',
      duration: [11],
      way: ['Самарканд', 'Ташкент', 'Дубай'],
      price: 13650000,
      info:
        'Поездка в жаркий и красивейший Дубай с остановкой в отеле Taj Dubai с наилучшим видом.',
      plan: [
        'Приезд в Ташкент. Трансфер в аэропорт. Полет в Дубай',
        'Прилет в Дубай. Трансфер в отель. Размещение в отеле Taj Dubai.',
        'Во вротой день у вас будет незабываемая экскурсия по всему дубаю, в самые красивые места, такие как Burj Khalifa, The Dubai Fountain и т.д.',
        'На третий день пребывания в Дубае у вас будет возможность посмотреть на местные популярные небоскребы.',
        'Отдыхайте на чудесных пляжах, наслаждаясь жарким солнцем и синевой неба и моря.',
        'Выселение из отеля. Трансфер в аэропорт. Вылет домой.'
      ],
      m: 'UAE'
    },
    {
      id: 4,
      image: France,
      title: 'Ужин на Эйфелевой башне',
      pickup: 'Самарканд',
      destination: 'Париж',
      way: ['Самарканд', 'Париж', 'Ницца'],
      price: 10500000,
      info: 'Поездка в столицу самой романтической страны с остановкой в Hotel Aston.',
      plan: [
        'Прилет в Париж. Трансфер в отель. Размещение в отеле Hotel Aston.',
        'На второй день пребывания в Париже Вы ознакомитесь с городом поближе. Обзорная экскурсия по Парижу. Русскоязычный гид с удовольствием расскажет и покажет Вам основные достопримечательности города- Сите, площадь Бастилии, Опера, Вандомская площадь, Марсово поле, Елисейские поля, Эйфелева башня, а благодаря остановкам по маршруту, Вы сможете сделать фотографии на память.',
        'В этот день мы рекомендуем Вам самостоятельно посетииь  Лувр или Версаль. Познакомьтесь с великолепными образцами французской архитектуры, занесёнными в список мирового наследия ЮНЕСКО. Можете отправитсья в Диснейленд.',
        'Выселение из отеля в Париже. Трансфер на вокзал. Переезд Париж-Ницца. Заселение в отель Radisson Blu Hotel.',
        'Помимо отдыха на чудесных залитых солнцем пляжах, Вы поближе познакомитесь с городом. Групповая обзорная экскурсия по Ницце является неотъемлемой частью Вашего отдыха. Трехчасовая экскурсия пройдет по главным местам и достопримечательностям, а интересные рассказы русскоязычного гида позволят полностью окунуться в Лазурный мир. Прогуляйтесь по старому городу. Здесь царит удивительная атмосфера, узкие улочки и безумное разнообразие характерных для Франции запахов: цветы, ароматы духов, пастис, удивительные французские вина, масла, кофе… Вы найдете здесь мороженое, сувениры, красивую одежду и еще множество интересных вещей. Старая Ницца – это настоящее произведение искусства. Городской стиль архитектуры, дома, улицы – все пронизано атмосферой волнующей красоты, вызывающей ощущение безудержной радости. В этом уютном городе чувствуешь себя как дома.',
        'День самостоятельных экскурсий! Непременно посетите Канны! Яхты, пальмы, шикарные отели, песчаные пляжи… Этот город был основан в 42 году до нашей эры! Но на протяжении столетий Канны оставались простой деревней рыбаков. И только благодаря случайному визиту английского канцлера, который пришел в восторг от красоты этих мест и решил построить здесь домик, Канны постепенно стали курортом мирового значения. В 1988 году Ги де Мопассан писал о Каннах: "Принцы, принцы, повсюду принцы". Канны – город чудесных отелей, красивых видов, моря и пальм. Поднимитесь к башне Сюке и насладитесь панорамным видом на Канны. Прогуляйтесь по вечернему пляжу, подышите соленым воздухом, послушайте шум прибоя. Прогуляйтесь по бульвару Круазетт, он удивительно красиво освещен в вечернее время. Это главная улица города, где вы найдете роскошные бутики, шикарные отели и рестораны с великолепной кухней. Обязательно посетите рыбный ресторанчик, продегустируйте дары моря и рыбу, искусно приготовленные руками французских поваров.',
        'Отдыхайте на чудесных пляжах, наслаждаясь солнцем и синевой неба и моря, или отправьтесь на одну из экскурсий за дополнительную плату на Лазурному берегу.  Прогуляйтесь в порту Ниццы, любуясь яхтами, кораблями, разноцветными домиками, или пройдитесь по магазинам. Любителям антиквариата и винтажного стиля рекомендуем посетить небольшой городской рынок Marché à la Brocante, который находится на улице под названием Cours Saléya,  недалеко от знаменитой Promenade des Anglais. Здесь Вы без сомнения получите массу положительных эмоций и удивительных впечатлений, почувствуете дух французской старины, сможете полюбоваться настоящей французской мебелью и предметами быта в духе французской провинции начала XX века.',
        'День самостоятельных экскурсий! Рекомендуем Вам посетить старинный город Антиб. Этот город был основан финикийцами в VII в до н.э. и носил имя Антиполис. Долгое время Антиб оставался единственным укрепленным городом на берегу Средиземного моря от Марселя до берегов Италии. В XVIв. в городе была построена крепость в виде звезды, которая называлась Форт Каррэ. Посетите  яхтенный порт Антиба, который, к слову, является одним из крупных на Лазурном берегу. Прекрасным вариантом для семейного отдыха с детьми в Антибе будет посещение морского парка "Маринлэнд". Здесь Ваши дети смогут весело провести время, наблюдая за дельфинами и касатками, посетить джунгли бабочек, провансальскую ферму. Можно даже поплавать в бассейне вместе с дельфинами и пообщаться с морским котиком! В 40 км на запад от Ниццы находится небольшой французский город Грасс – мировая столица духов. Именно здесь происходит таинство превращения цветов в чудесные эссенции, из сочетаний которых парфюмеры создают знаменитые французские духи.',
        'Oтдыхайте на чудесных пляжах, наслаждаясь солнцем и синевой неба и моря, или отправьтесь на одну из экскурсий за дополнительную плату на Лазурному берегу. Без сомнения,  город-курорт задает свой ритм жизни, расслабленый, неспешный. Хочется забыть о суете и насладиться каждым мгновением этих удивительных пейзажей, каждым вздохом чудесного воздуха у берега моря, посидеть на красивых скамеечках в уютных парках. Но и для любителей активного отдыха здесь есть масса интересного: серфинг, дайвинг, водные лыжи, пешие прогулки по горам, каноэ, парашютный спорт, рафтинг  и еще много интересного для незабываемого времяпровождения. Если Вы начинающий, то Вы можете взять занятия с инструктором.',
        'День самостоятельных экскурсий! Вы можете отправиться в Сен-Тропе или посетить Монако, эту удивительную страну, где улочки старого города наполнены рассказами о самой старинной правящей европейской династии.',
        'Выселение из отеля. Переезд Ницца-Париж. Трансфер в аэропорт. Вылет домой.'
      ],
      m: 'France'
    },
    {
      id: 5,
      image: Uzbekistan,
      title: 'Великий Шёлковый Путь',
      pickup: 'Самарканд',
      destination: 'Ташкент',
      way: ['Самарканд', 'Бухара', 'Хива', 'Ташкент'],
      price: 2700000,
      info: 'Поездка по Узбекистану вдоль самого "Великого Шёлкового Пути".',
      plan: [
        'Приезд в Самарканд. Трансфер в отель. Размещение в отеле Dilimah Premium.',
        'Экскурсия по Мавзолею Имом Исмоил Ал-Бухорий, Мавзолею Амира Темура, Площади Регистан, мечети Бибиханым.',
        'Во второй день будет еще экскурсия(у Самарканда очень богатая история и осталось много исторических мест про которые вы обязаны узнать) в мечеть Хазрати Хизр(Здесь находится мавзолей первого президента Республики Узбекистан Ислама Каримова), Ансамбль Шохи Зинда, мавзолей Хужа Данияр и обсерваторию Улугбека.',
        'Выселение из отеля в Самарканде. Трансфер на вокзал. Переезд Самарканд-Бухара. Заселение в отель Orient Star Varahsha.',
        'Во второй день в Бухаре вам поведут экскурсию в Мавзолей Саманидов, комплекс Боло-Хауз, старинную крепость Арк, комплекс Пойи-Калян, минарет Калян, медресе Абдулазиз-Хана, Кош-медресе, медресе Улугбека, Ансамбль Ляби-Хауз, медресе Кукельдаш, медресе Надира Диванбеги и торговые купола.',
        'Выселение из отеля в Бухаре. Трансфер на вокзал. Переезд Бухара-Хива. Заселение в отель Orient Star Khiva.',
        'В Хиве также очень много интересных мест и экскурсия там пройдет по Мавзолею Пахлавон-Махмуд, Тош-Хавли, Коня-Арк, башне Калта-Минар, Медресе Шерози-Хан, Алла-Кули-Хан, Мечет Жума, Каравон Сарай, Хужа Ислам, Медресе Кутлук Мурад Инака и Тим Алла Кулихан.',
        'Выселение из отеля в Хиве. Трансфер на вокзал. Переезд Хива-Ташкент. Заселение в отель Hilton Tashkent City.',
        'Экскурсия пл Площади Независимости, площади Памяти и Почести, парку Амира Темура, Музею Государственной истории Узбекистана, Мавзолею Каффол Шоший, медресе Баракхон, мечети Тилла Шайх, медресе Кўкалдош и Чорсу.',
        'Предпоследний день дается для отдыха в столице Узбекистана.',
        'Выселение из отеля. Переезд домой.'
      ],
      m: 'Uzbekistan'
    }
  ],

  uz: [
    {
      id: 1,
      image: Italy,
      title: 'Italiya safari',
      pickup: 'Samarkand',
      destination: '"Milan"',
      way: ['Samarqand', 'Milan', 'Rimini'],
      price: 8000000,
      info: "Italiyaning eng go'zal kurort shaharlaridan birida chiroyli bayramlar - Rimini",
      plan: [
        "Milanga kelish. Mehmonxonaga o'tkazish. Hotelo Milano mehmonxonasida turar joy.",
        "Milanda qolishning ikkinchi kunida siz shahar bilan yaqinlashishingiz mumkin. \"Milan\" fan, texnologiyalar, mods va dizaynning etakchi markazlaridan biri hisoblanadi. Mashhur duom, La Rok, Vitorio Eminuele galereyasi; Siz boshingizni yo'qotishingiz mumkin bo'lgan ajoyib saroylar, qahramon, yomg'irli va tumanli Milan, yarim yillik issiq shokolad bilan yarim nogironlarga oshiq bo'lishga qodir CILCCOLATALIA, Luini shahridagi Panzerotti yarim nafar talabasi bilan.",
        "Milanga tashrif buyurish uchun yaxshi (va ba'zilar uchun - bu afsonaviy narxlar uchun kiyim-kechak, poyabzal va aksessuarlarini sotib olish imkoniyati. Shu kuni siz mustaqil ravishda xarid qilishingizni maslahat beramiz!",
        "Milandagi mehmonxonadan baholash. Stantsiyaga o'tish.Milan Rimini. Grug mehmonxonasi Rimini punkti.",
        'Mojizaviy ravishda quyosh botirilgan plyajlarida dam olishdan tashqari, siz shaharga yaqinlashasiz.',
        'Mustaqil ekskursiyalar kuni!Biroq, San-Marinoga tashrif buyuring.San-Marino er yuzidagi eng kichik davlatlardan (Monakan va Vatikandan keyin) va Evropaning eng qadimgi holati, Italiya hududi bilan o\'ralgan. "Yengil respublika" San-Marino deyarli "Kuku uyasi bo\'ylab uchib ketish": Apenninning qoyali eğimli va faqat 60 km foydali joy. Bu erda asosiy diqqatga sazovor joylar qudratli qulflar va minoralar, shuningdek chiroyli tabiat.',
        'Quyosh va moviy osmondan va dengizdan zavqlanib, ajoyib plyajlarda dam oling.',
        "Mehmonxonani ko'chirish. Rimini Milan. Aeroportni o'tkazish. Uyga jo'nash."
      ],
      m: 'Italy'
    },
    {
      id: 2,
      image: Russia,
      title: 'Qizil maydon',
      pickup: 'Samarqand',
      destination: 'Moskva',
      way: ['Samarqand', 'Sankt-Peterburg', 'Moskva'],
      price: 9000000,
      info:
        "Azimut va Hilton mehmonxonalari, 2 ta go'zal shaharlarda sayohatlar va ekskursiyalarda dunyodagi eng katta mamlakatga sayohat.",
      plan: [
        "Sankt-Peterburgga kelish.Mehmonxonaga o'tkazish.Azimut mehmonxonasida turar joy.",
        'Ikkinchi kuni Sankt-Peterburgda siz uning boy tarixi bilan tanishasiz, Ermitaj muzeyi bilan tanishadi.',
        "Uchinchi kunda siz Sankt-Peterburg savdo markazlarida siz uchun qulay sovg'alar va kerakli narsalarni sotib olishingiz mumkin.",
        "Sankt-Peterburgdagi mehmonxonadan ko'chirish. Stantsiyaga o'tish.Sankt-Peterburg-Moskva harakatlanuvchi. Hilton mehmonxonasidagi hal qilish.",
        "Moskvadagi birinchi kunida siz uning go'zalligi va buyukligi bilan tanishasiz, masalan, qizil kvadrat kabi turli xil diqqatga sazovor joylar orqali yurasiz.",
        'Kundan oldin, siz bu ulkan shaharda faqat siz istagan joyda dam olishingiz mumkin.',
        "Mehmonxonani ko'chirish. Aeroportni o'tkazish. Uyga jo'nash."
      ],
      m: 'Russia'
    },
    {
      id: 3,
      image: UAE,
      title: "Cho'lda jannat bo'lagi",
      pickup: 'Samarqand',
      destination: 'Dubay',
      duration: [11],
      way: ['Самарканд', 'Toshkent', 'Dubay'],
      price: 13650000,
      info:
        "TaJ Dubay mehmonxonasida eng yaxshi ko'rinishga ega TaJ Dubay mehmonxonasida to'xtash va chiroyli Dubayga sayohat.",
      plan: [
        "Toshkentga kelish. Aeroportni o'tkazish. Dubayga uchish",
        "Dubayga kelish.Mehmonxonaga o'tkazish.TaJ Dubay mehmonxonasida turar joy.",
        "Dov qilsangiz, siz eng go'zal joylarda, masalan, Burj Xalifa, Dubay favvori va boshqalar kabi unutilmas safari bo'ladi.",
        "Dubayda uchinchi turish uchun siz mahalliy mashhur osmono'par binolarga qarash imkoniyatiga ega bo'lasiz.",
        "Ajoyib plyajlarda, issiq quyosh va ko'k osmon va dengizdan zavqlaning.",
        "Mehmonxonani ko'chirish. Aeroportni o'tkazish. Uyga jo'nash."
      ],
      m: 'UAE'
    },
    {
      id: 4,
      image: France,
      title: 'Eyfel minorasida kechki ovqat',
      pickup: 'Samarqand',
      destination: 'Parij',
      way: ['Samarqand', 'Parij', 'Yaxshi'],
      price: 10500000,
      info: '"Aston" mehmonxonasida to\'xtash bilan eng romantik mamlakat poytaxtiga sayohat.',
      plan: [
        "Parijga kelish. Mehmonxonaga o'tkazish. Aston mehmonxonasida turar joy.",
        `Parijda qolishning ikkinchi kunida siz shahardan yaqinroq o'rganasiz.Parijga tashrif buyurish. Qo'llanma sizga shaharning asosiy diqqatga sazovor joylarini, Sayt, Bastil, Wanom maydonini, Elifil maydon, Eyfel minorasi va marshrut bo'ylab to'xtash uchun shamporlar , Siz xotira uchun fotosuratlar qilishingiz mumkin.`,
        `Shu kuni siz Luvrga yoki Verzilga tashrif buyurishingizni maslahat beramiz.YuNESKOning Butunjahon merosi ro'yxatida ro'yxatga olingan frantsuz arxitekturasining ajoyib namunalari bilan tanishing.Siz Disneylendga yuborishingiz mumkin.`,
        `Parijdagi mehmonxonadan ko'chirish.Stantsiyaga o'tish.Parij-chiroyli harakatlanuvchi.Radisson Blu mehmonxonasida hal qilish.`,
        `Mo''jizaviy ravishda quyosh botirilgan plyajlarida dam olishdan tashqari, siz shaharga yaqinlashasiz. Guruhning go'zal turini tomosha qilish sizning bayramingizning ajralmas qismi. Uch soatlik ekskursiya asosiy joylarda va diqqatga sazovor joylarda o'tkaziladi va rus tilida so'zlashuvchi qo'llanmaning qiziqarli hikoyalari azure olamiga to'liq ta'sir qiladi. Eski shahar bo'ylab sayr qiling. Ajablanarli muhit, tor ko'chalar va Frantsiya hidlari, atirlar, pastis, frantsuz sharoblari, yog ', chiroyli kiyimlar, chiroyli kiyimlar va boshqa qiziqarli narsalarni topasiz. Eski yoqimli san'atning haqiqiy asari. Shahar arxitekturasi uslubi, uylar, ko'chalar - barcha quvonchni keltirib chiqarmaydigan quvonchni keltirib chiqaradigan ajoyib go'zallik muhiti tomonidan hal qilinadi. Ushbu shinam shaharda siz o'zingizni uyda his qilasiz.`,
        "Mustaqil ekskursiyalar kuni! Kanna tashrif buyurganingizga ishonch hosil qiling! Yaxtalar, palma daraxtlari, xalat mehmonxonalar, qumli plyajlar ... Bu shahar 42 yilda tashkil etilgan! Ammo asrlar davomida Kannlar oddiy baliqchi bo'lib qoldi. Va faqat bu joylarning go'zalligidan xursand bo'lgan va bu erda uy qurishga qaror qilgan ingliz kanalialining tasodifiy tashrifi tufayli, asta-sekin dunyo ahamiyatiga ega bo'ldi. 1988 yilda Gi Mauassan Kann haqida shunday deb yozdi: \"San'atlar, bekatlar, hamma joyda bekatlar.\" Kann - bu ajoyib mehmonxonalar, go'zal turlar, dengiz va palma daraxtlari joylashgan. Samarika minorasi uchun lear va Kannning panoramik ko'rinishi zavqlanmoqda. Kechqurun plyaj atrofida sayr qiling, tuzli havoni siqib, sirtning shovqinini tinglang. Croisette xiyobonida sayr qiling, kechqurun juda chiroyli yorqinroq yoritilgan. Bu shaharning asosiy ko'chasi bo'lib, u erda siz ajoyib oshxonaga ega bo'lgan hashamatli mehmonxonalar va restoranlarni topasiz. Baliq restoraniga tashrif buyurganingizga ishonch hosil qiling, dengiz bosimi va frantsuz oshpazlarining qo'llari bilan mohirona ravishda pishirilgan dengiz va baliqni tatib ko'ring.",
        `Ajoyib plyajlarda, quyosh va ko'k osmondan va dengizdan zavqlanish yoki Azure Sohilda qo'shimcha haq olish uchun ekskursiyalardan biriga boring. Yaxshi, hayratga soladigan yaxtalar, kemalar, ko'p rangli uylar portida sayr qiling yoki xarid qiling. Antikalar va Vintage uslubidagi antiqa va Vintage uslubidagi Mavzundlar Sadya deb nomlangan ko'chada joylashgan ko'chada joylashgan Marte a La Brokante shahriga tashrif buyurish tavsiya etiladi. Bu erda siz shubhasiz juda ko'p ijobiy his-tuyg'ularni va ajoyib taassurotlarga ega bo'lasiz, frantsuz qari ruhini his qilasiz, Frantsiyaning XX asr boshlarida frantsuz viloyatining ruhidagi haqiqiy frantsuz mebellari va hayot ob'ektlariga qoyil qolishingiz mumkin.`,
        "Mustaqil ekskursiyalar kuni! Qadimgi antibavotlaringizga tashrif buyurganingizni maslahat beramiz. Bu shahar fiteniklar tomonidan VII B BCda tashkil etilgan. Va antipolis ismini kiyish. Uzoq vaqt davomida, O'rta er dengizi sohilidagi antibavotlar, O'rta er dengizi sohilida Italiya sohillarigacha yagona mustahkamlangan shahar bo'lib qoldi. XVIda. Shahar qal'a shaklida qal'ani qurdi, u Fort Carre deb nomlangan. Aytgancha, Yashtes antibavosining portiga tashrif buyuring, bu esa Coot d'Azurning asosiy qismidan biridir. Oilaviy bayramlar bilan oilaning farzandlari bilan, Marinland Marin Park tomonidan tashrif buyuradi. Bu erda farzandlaringiz dam olishlari, delfinlar va soatlar tomosha qilishlari, jun kapalaklar, fitnachilarga tashrif buyurishadi. Siz hatto delfinlar bilan hovuzda suzishingiz va dengiz yo'li bilan suhbatlashishingiz mumkin! 40 km g'arbdan g'arbiy frantsuzli o'tlar shahri - dunyodagi ruhlar poytaxti. Bu erda xushomadgo'ylar kombinatsions kombinatsiyasining mashhur fransuzlarini yaratuvchisining ajoyib mohiyatiga aylanish siridir.",
        `Ajoyib plyajlarda, quyosh va ko'k osmondan va dengizdan zavqlanish yoki Azure Sohilda qo'shimcha haq olish uchun ekskursiyalardan biriga o'ting. Shubhasiz, dam olish maskani uning hayot ritmini, bo'shashmasdan bexosdan o'rnatadi. Men shovqinni unutib, ushbu ajoyib landshaftlarning har bir lahzasidan zavqlanaman va dengiz qirg'oqlarida ajoyib havo xo'rsinib, shinam bog'larda chiroyli skameykalarda o'tiraman. Ammo bu erda ochiq faoliyatni sevuvchilar juda ko'p qiziqarli narsalar: Sörding, sho'ng'in, suv chang'isi, kanoeda, kanoeda, rafting, unutilmas vaqt uchun juda qiziqarli. Agar boshlasangiz, siz o'qituvchi bilan darslarni olishingiz mumkin.`,
        `Mustaqil ekskursiyalar kuni!Siz Sankt-Tropezda yoki eski shahar ko'chalari Evropaning eng qadimgi boshqaruvi haqidagi hikoyalar bilan to'ldirilgan bu ajoyib mamlakatni kuzatib borishingiz mumkin.`,
        `Mehmonxonani ko'chirish. Go'zal parijni harakatlantiradi. Aeroportni o'tkazish. Uyga jo'nash.`
      ],
      m: 'France'
    },
    {
      id: 5,
      image: Uzbekistan,
      title: "Buyuk ipak yo'li",
      pickup: 'Samarqand',
      destination: 'Toshkent',
      way: ['Samarqand', 'Buxoro', 'Hiva', 'Toshkent'],
      price: 2700000,
      info: "\"Buyuk Ipak Yo'li\" bo'ylab O'zbekistonga sayohat.",
      plan: [
        "Samarqandga kelish.Mehmonxonaga o'tkazish.Mehmonxonada engil makonda turar joy.",
        'Amir Amir Amir Temur, Amir Temur, Bibixan masjidi maqbarasi uchun ekskursiya.',
        "Ikkinchi kuni safar bo'ladi (Samarqand juda boy tarixga ega va siz o'rganishga majbur bo'lgan tarixiy joylar mavjud) Xazraey Hizr masjidida (bu erda O'zbekiston Respublikasining birinchi prezidentining maqbarasi) Karimov), Sinta Shooi, maqbarasi va Ulug'bek rasadxonasi ansambli.",
        "Samarqanddagi mehmonxonadan chiqarib yuborish.Stantsiyaga o'tish.Samarqand-Buxoroni ko'chirish.Orige Star Varahshaning mehmonxonadagi aholi punkti.",
        "Ikkinchi kuni Buxoroda, siz yoyning qadimiy majmuasi, Kalyan, Minoret Kalyan, Madrasa Abdulaziz-Xon, Kos-madrasa majmuasi, Madrasa Ulug'bek, ansambli, madrasa kollabot, madrasa nohir yo'tal va savdo gumbazi.",
        "Buxoroda mehmonxonadan ko'chirish.Stantsiyaga o'tish.Buxoro Xiva harakatlanuvchi.Orige Ride Star Xiva mehmonxonasi.",
        'Xivada ham juda qiziqarli joylar mavjud, shuningdek, Paxlavon-Mahmud, Konya-Ark, Kalta tuman, Kuara Xon, Moskon Juma, Karava Saray, Huzha Islom, Madrasa Kutluk Murod Inaka va Tim Alla Kulixon.',
        "Xivadagi mehmonxonadan chiqarib yuborish.Stantsiyaga o'tish.Toshkentda Toshkentning harakatlanishi.Xilton shahar mehmonxonasida hal qilish.",
        "Mustaqillik maydonining ekskursiya maydoni, Xotira maydoni va Amir Temur Park, O'zbekistonning davlat tarixi muzeyi, Madrasa Shayx, Madrasa Kumnalosh, Madrasa Kumnalosh va Chorsu.",
        "O'tgan kun O'zbekiston poytaxtida dam olishga beriladi.",
        "Mehmonxonani ko'chirish.Uyga harakat qilish."
      ],
      m: 'Uzbekistan'
    }
  ]
}

export default tours
