window.cytubeEnhanced.addModule('animeQuotes', function (app, settings) {
    'use strict';

    app.getModule('additionalChatCommands').done(function (chatCommands) {
        chatCommands.randomQuotes = chatCommands.randomQuotes.concat([
            'Не поддавайся сожалениям, о которых тебе напоминает прошлое.',
            'Честно говоря, я всегда думал, что лучше умереть, чем жить в одиночестве...',
            'Прошу прощения, но валите прочь.',
            'По-настоящему силён лишь тот, кто знает свои слабости.',
            'Быть умным и хорошо учиться — две разные вещи.',
            'Когда я стану главнокомандующим, я заставлю всех девушек носить мини-юбки!',
            'Тот кто правит временем, правит всем миром.',
            'Я должен познакомить тебя с моими друзьями. Они еще те извращенцы, но они хорошие люди.',
            'Победа не важна, если она лишь твоя.',
            'Наркотики убивают в людях человечность.',
            'Если бы меня волновало мнение других людей, то я давно бы уже покрасил волосы в другой цвет.',
            'Слезы — кровотечение души....',
            'Весело создавать что-то вместе.',
            'Как ты не понимаешь, что есть люди, которые умрут от горя, если тебя не станет!',
            'Я частенько слышал, что пары, которые внешне любят друг друга, частенько холодны внутри.',
            'Если хочешь, что бы люди поверили в мечту, сначала поверь в нее сам.',
            'Жизнь, в которой человек имеет всё, что желает, пуста и неинтересна.',
            'Чтобы чего-то достичь, необходимо чем-то пожертвовать.',
            'Я не одинока. Я просто люблю играть соло. Краситься, укорачивать юбку и заигрывать с парнями — это для потаскух.',
            'Очень страшно, когда ты не помнишь, кто ты такая.',
            'Больно помнить о своих слабостях.',
            'Похоже, мудрость и алкоголь несовместимы.',
            'Почему... Почему... Почему со мной вечно происходит какая-то херня?!',
            'Красивое нельзя ненавидеть.',
            'Если ты хочешь написать что-то плохое в комментариях в интернете, пиши, но это будет лишь выражением твоей зависти.',
            'Хочешь сбежать от повседневности — не останавливайся в развитии.',
            'Одинокие женщины ищут утешение в домашних животных.',
            'В эпоху, когда информация правит миром, жить без компьютера совершенно непростительно!',
            'Каждый человек одинок. Звезды в ночном небе тоже вроде бы все вместе, но на самом деле они разделены бездной. Холодной, тёмной, непреодолимой бездной.',
            'Умные люди умны ещё до того, как начинают учиться.',
            'Только те, у кого явные проблемы, говорят, что у них всё хорошо.',
            'Не важно если меня победит другой, но... Себе я не проиграю!',
            'Немногие способны на правильные поступки, когда это необходимо.',
            'Я мечтаю о мире, где все смогут улыбаться и спать, когда им того захочется.',
            'Девушке не обмануть меня… даже если она без трусиков!',
            'Это не мир скучный, это я не выделяюсь.',
            'С людьми без воображения одни проблемы.',
            'Нечестно это — своей слабостью шантажировать.',
            'То ли я уже не человек, то ли вы еще не люди.',
            'Чего я действительно опасаюсь, так это не потери своей памяти, а исчезновения из памяти остальных.',
            'Даже если небо погружено во тьму, и ничего не видно, где-то обязательно будет светиться звезда. Если она будет сиять ярче и ярче, её обязательно увидят...',
            'Никто не может нырнуть в бездну и вынырнуть прежним.',
            'Когда теряешь всё разом, мир начинает казаться довольно хреновым местечком.',
            'Не хочу видеть, что будет, когда Маяка узнает, что её шоколад украли. Не люблю ужастики.',
            'В мире есть добро потому, что есть кошки.',
            'Девчата, пойте! Зажигайте свет вашей души!',
            'И что ты собираешься делать, рождённый неизвестно зачем, и умирающий неизвестно за что?',
            'А давай станем с тобой чудовищами, и поставим весь мир на уши?',
            'Не забывай только, что и доброта может причинить боль.',
            'Тяжело признать плохим то, за что отдал 20 баксов.',
            'Говорят, в вере спасение… Но мне что-то никогда в это не верилось.',
            'Клубничка — это сердце тортика!',
            'Бабушка мне всегда говорила: «Юи-тян, ты запомнишь всё что угодно, но при этом ты забудешь всё остальное».',
            'Как жаль, что люди начинают ценить что-то только тогда, когда теряют это.',
            'У людей с холодными руками тёплое сердце.',
            'Я всегда думала, что это здорово: Посмеяться перед серьёзным делом.',
            'Мир не так жесток, как ты думаешь.',
            'Даже отдав все свои силы, не каждый способен стать победителем.',
            'Наше общество — просто стадо баранов.',
            'Пока сами чего-то не сделаете, это ваше «однажды» никогда не наступит.',
            'Чтобы что-то выбрать, нужно что-то потерять.',
            'За каждой улыбкой, что ты увидишь, будут скрываться чьи-то слёзы.',
            'Приключения — мечта настоящего мужчины!',
            'Твоя хитрость всегда будет оценена по достоинству.',
            'Я гораздо лучше орудую мечами, нежели словами.',
            'Прошлое всегда сияет ярче настоящего.',
            'Становиться взрослой так грустно...',
            'Романтические чувства — всего лишь химическая реакция',
            'Говорят, что в море ты или плывёшь, или тонешь.',
            'Не важно как ты осторожен, всегда есть опасность споткнуться.',
            'Я насилие не люблю, оно у меня само получается.',
            'Когда я смотрю аниме от КёАни, Господь подымает меня над полом и приближает к себе.',
            'Бака, бака, бака!',
            'Ты так говоришь, будто это что-то плохое.',
            'Мне вас жаль.',
            'Ваше мнение очень важно для нас.',
            'А в глубине души я всех вас ненавижу, как и весь этот мир.',
            'А разгадка одна — безблагодатность.',
            'Умерьте пыл.',
            'Меня трудно найти, легко потерять и невозможно забыть....',
            'Не твоя, вот ты и бесишься.',
            'Ваш ребенок - аниме.',
            'Здесь все твои друзья.',
            'Мне 20 и я бородат'
        ]);
    });
});