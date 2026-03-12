hiragana = new Vocab("Hiragana", [
    new Letter("a", "あ"),
    new Letter("i", "い"),
    new Letter("u", "う"),
    new Letter("e", "え"),
    new Letter("o", "お"),
    new Letter("ka", "か"),
    new Letter("ki", "き"),
    new Letter("ku", "く"),
    new Letter("ke", "け"),
    new Letter("ko", "こ"),
    new Letter("ga", "が"),
    new Letter("gi", "ぎ"),
    new Letter("gu", "ぐ"),
    new Letter("ge", "げ"),
    new Letter("go", "ご"),
    new Letter("sa", "さ"),
    new Letter("shi", "し"),
    new Letter("su", "す"),
    new Letter("se", "せ"),
    new Letter("so", "そ"),
    new Letter("za", "ざ"),
    new Letter("ji", "じ"),
    new Letter("zu", "ず"),
    new Letter("ze", "ぜ"),
    new Letter("zo", "ぞ"),
    new Letter("ta", "た"),
    new Letter("chi", "ち"),
    new Letter("tsu", "つ"),
    new Letter("te", "て"),
    new Letter("to", "と"),
    new Letter("da", "だ"),
    new Letter("ji", "ぢ"),
    new Letter("zu", "づ"),
    new Letter("de", "で"),
    new Letter("do", "ど"),
    new Letter("na", "な"),
    new Letter("ni", "に"),
    new Letter("nu", "ぬ"),
    new Letter("ne", "ね"),
    new Letter("no", "の"),
    new Letter("ha", "は"),
    new Letter("hi", "ひ"),
    new Letter("fu", "ふ"),
    new Letter("he", "へ"),
    new Letter("ho", "ほ"),
    new Letter("ba", "ば"),
    new Letter("bi", "び"),
    new Letter("bu", "ぶ"),
    new Letter("be", "べ"),
    new Letter("bo", "ぼ"),
    new Letter("pa", "ぱ"),
    new Letter("pi", "ぴ"),
    new Letter("pu", "ぷ"),
    new Letter("pe", "ぺ"),
    new Letter("po", "ぽ"),
    new Letter("ma", "ま"),
    new Letter("mi", "み"),
    new Letter("mu", "む"),
    new Letter("me", "め"),
    new Letter("mo", "も"),
    new Letter("ya", "や"),
    new Letter("yu", "ゆ"),
    new Letter("yo", "よ"),
    new Letter("ra", "ら"),
    new Letter("ri", "り"),
    new Letter("ru", "る"),
    new Letter("re", "れ"),
    new Letter("ro", "ろ"),
    new Letter("wa", "わ"),
    new Letter("wo", "を"),
    new Letter("n", "ん"),
]);

this_and_that = new Vocab("This and that", [
    new Word("this", "kore", "これ"),
    new Word("that", "sore", "それ"),
    new Word("that (far)", "are", "あれ"),
    new Word("which", "dore", "どれ"),
    new Word("this ...", "kono ...", "この ..."),
    new Word("that ...", "sono ...", "その ..."),
    new Word("that ... (far)", "ano ...", "あの ..."),
    new Word("which ...", "dono ...", "どの ..."),
])

numbers_base = new Vocab("Base numbers", [
    new Word("1", "ichi", "いち"),
    new Word("2", "ni", "に"),
    new Word("3", "san", "さん"),
    new Word("4", "yon", "よん"),
    new Word("5", "go", "ご"),
    new Word("6", "roku", "ろく"),
    new Word("7", "nana", "なな"),
    new Word("8", "hachi", "はち"),
    new Word("9", "kyuu", "きゅう"),
]);

mult_numbers = new Vocab("", [
    new Word("2", "ni", "に"),
    new Word("3", "san", "さん"),
    new Word("4", "yon", "よん"),
    new Word("5", "go", "ご"),
    new Word("6", "roku", "ろく"),
    new Word("7", "nana", "なな"),
    new Word("8", "hachi", "はち"),
    new Word("9", "kyuu", "きゅう"),
]);

num_99 = new Vocab("10-99", [
    new Word("10", "juu", "じゅう"),
    new Expression("{ten}{one}", "{ten}{one}", { "ten": new Word("1", "juu", "じゅう"), "one": numbers_base }),
    new Expression("{tens}{one}", "{tens}{ten}{one}", { "tens": mult_numbers, "ten": new Word("1", "juu", "じゅう"), "one": numbers_base }),
]);

normal_100 = new Vocab("", [
    new Word("2", "ni", "に"),
    new Word("4", "yon", "よん"),
    new Word("5", "go", "ご"),
    new Word("7", "nana", "なな"),
    new Word("9", "kyuu", "きゅう"),
]);
spec_100 = new Vocab("", [

    new Word("3", "sanbyaku", "さんびゃく"),
    new Word("6", "roppyaku", "ろっぴゃく"),
    new Word("8", "happyaku", "はっぴゃく"),
]);

num_999 = new Vocab("100-999", [
    new Word("100", "hyaku", "ひゃく"),
    new Expression("{hund}{num}", "{hund}{num}", { "hund": new Word("1", "hyaku", "ひゃく"), "num": num_99 }),
    new Expression("{hunds}{num}", "{hunds}{hund}{num}", { "hunds": normal_100, "hund": new Word("100", "hyaku", "ひゃく"), "num": num_99 }),
    new Expression("{hunds}{num}", "{hunds}{num}", { "hunds": spec_100, "num": num_99 }),
]);

normal_1000 = new Vocab("", [
    new Word("2", "ni", "に"),
    new Word("4", "yon", "よん"),
    new Word("5", "go", "ご"),
    new Word("6", "roku", "ろく"),
    new Word("7", "nana", "なな"),
    new Word("9", "kyuu", "きゅう"),
]);
spec_1000 = new Vocab("", [

    new Word("3", "sanzen", "さんぜん"),
    new Word("8", "hassen", "はっせん"),
]);

num_9999 = new Vocab("1000-9999", [
    new Word("1000", "sen", "せん"),
    new Expression("{thousand}{num}", "{thousand}{num}", { "thousand": new Word("1", "sen", "せん"), "num": num_999 }),
    new Expression("{thousands}{num}", "{thousands}{thousand}{num}", { "thousands": normal_1000, "thousand": new Word("1", "sen", "せん"), "num": num_999 }),
    new Expression("{thousands}{num}", "{thousands}{num}", { "thousands": spec_1000, "num": num_999 }),
]);

num_99999 = new Vocab("10000-99999", [
    new Word("10000", "man", "まん"),
    new Expression("{tenthousand}{num}", "{tenthousand}{num}", { "tenthousand": new Word("1", "ichiman", "いちまん"), "num": num_9999 }),
    new Expression("{tenthousands}{num}", "{tenthousands}{tenthousand}{num}", { "tenthousands": mult_numbers, "tenthousand": new Word("1", "man", "まん"), "num": num_9999 }),
]);

complex_numbers = new Vocab("Complex numbers", [], [num_99, num_999, num_9999, num_99999]);

numbers = new Vocab("Numbers", [], [numbers_base, complex_numbers]);

body_parts = new Vocab("Body parts", [], [
    new Vocab("Easy", [
        new Word("head", "atama", "あたま"),
        new Word("neck", "kubi", "くび"),
        new Word("shoulder", "kata", "かた"),
        new Word("arm", "ude", "うで"),
        new Word("finger", "yubi", "ゆび"),
        new Word("chest", "mune", "むね"),
        new Word("back", "senaka", "せなか"),
        new Word("stomach", "hara", "はら"),
        new Word("leg/foot", "ashi", "あし"),
        new Word("knee", "hiza", "ひざ"),
        new Word("hair", "kami(noke)", "かみ(のけ)"),
        new Word("eyes", "me", "め"),
        new Word("ear", "mimi", "みみ"),
        new Word("nose", "hana", "はな"),
        new Word("mouth", "kuchi", "くち"),
        new Word("teeth", "ha", "は"),
    ], []),
    new Vocab("Medium", [
        new Word("throat", "nodo", "のど"),
        new Word("elbow", "hiji", "ひじ"),
        new Word("wrist", "tekubi", "てくび"),
        new Word("breast", "nyuubou", "んゆうぼう"),
        new Word("thigh", "hutomomo", "ふともも"),
        new Word("hip", "shiri", "しり"),
        new Word("ankle", "ashikubi", "あしくび"),
        new Word("heel", "kakato", "かかと"),
        new Word("heart", "shinzou", "しんぞう"),
        new Word("lung", "hai", "はい"),
        new Word("muscle", "kinniku", "きんにく"),
        new Word("skin", "hada", "はだ"),
        new Word("bone", "hone", "ほね"),
    ], []),
])

verbs = new Vocab("Verbs", [], [
    new Vocab("Easy", [
        new Word("to be (animate)", "iru", "いる"),
        new Word("to be (inanimate)", "aru", "ある"),
        new Word("do", "suru", "する"),
        new Word("come", "kuru", "くる"),
        new Word("go", "iku", "いく"),
        new Word("eat", "taberu", "たべる"),
        new Word("drink", "nomu", "のむ"),
        new Word("say", "iu", "いう"),
        new Word("listen", "kiku", "きく"),
        new Word("look", "miru", "みる"),
        new Word("know", "shiru", "しる"),
        new Word("read", "yomu", "よむ"),
        new Word("write", "kaku", "かく"),
        new Word("understand", "wakaru", "わかる"),
        new Word("think", "omou", "おもう"),
        new Word("use/operate", "tsukau", "つかう"),
        new Word("buy", "kau", "かう"),
        new Word("take", "toru", "とる"),
        new Word("have/hold", "motsu", "もつ"),
        new Word("begin", "hajimeru", "はじめる"),
        new Word("end", "owaru", "おわる"),
        new Word("make", "tsukuru", "つくる"),
        new Word("walk", "aruku", "あるく"),
        new Word("run", "hashiru", "はしる"),
        new Word("move", "ugoku", "うごく"),
        new Word("sit", "suwaru", "すわる"),
        new Word("stand", "tatsu", "たつ"),
        new Word("wear", "kiru", "きる"),
        new Word("get up", "okiru", "おきる"),
        new Word("work", "hataraku", "はたらく"),
        new Word("search", "sagasu", "さがす"),
        new Word("play", "asobu", "あそぶ"),
        new Word("wait", "matsu", "まつ"),
        new Word("learn/study", "manabu", "まなぶ"),
        new Word("sleep", "yasumu", "やすむ"),
        new Word("leave", "saru", "さる"),
    ], []),
    // new Vocab("Medium")
]);

time_and_date = new Vocab("Time & date", [], [
    new Vocab("Easy", [
        new Word("today", "kyou", "きょう"),
        new Word("tomorrow", "ashita", "あした"),
        new Word("yesterday", "kinou", "きのう"),
        new Word("day", "nichi/hi", "にち・ひ"),
        new Word("week", "shuu", "しゅう"),
        new Word("month", "getsu", "げつ"),
        new Word("year", "toshi/nen", "とし・ねん"),
        new Word("second", "byou", "びょう"),
        new Word("minute", "fun", "ふん"),
        new Word("hour", "jikan", "じかん"),
        new Word("morning", "asa", "あさ"),
        new Word("afternoon", "hiru", "ひる"),
        new Word("night", "yoru", "よる"),
        new Word("now", "ima", "いま"),
        new Word("before", "mae", "まえ"),
        new Word("later", "ato", "あと"),
        new Word("a.m.", "gozen", "ごぜん"),
        new Word("p.m.", "gogo", "ごご"),
    ], []),
    new Vocab("Medium", [
        new Word("sunday", "nichiyoubi", "にちようび"),
        new Word("monday", "getsuyoubi", "げつようび"),
        new Word("tuesday", "kayoubi", "かようび"),
        new Word("wednesday", "suiyoubi", "すいようび"),
        new Word("thursday", "mokuyoubi", "もくようび"),
        new Word("friday", "kinyoubi", "きにょうび"),
        new Word("saturday", "doyoubi", "どようび"),
        new Word("season", "kisetsu", "きせつ"),
        new Word("spring", "haru", "はる"),
        new Word("summer", "natsu", "なつ"),
        new Word("fall", "aki", "あき"),
        new Word("winter", "fuyu", "ふゆ"),
    ], [])
]);

colors = new Vocab("Colors", [
    new Word("black", "くろ", "kuro"),
    new Word("white", "しろ", "shiro"),
    new Word("green", "みどり", "midori"),
    new Word("blue", "あお", "ao"),
    new Word("red", "あか", "aka"),
    new Word("yellow", "きいろ", "kiiro"),
    new Word("purple", "むらさき", "murasaki"),
    new Word("brown", "ちゃいろ", "chairo"),
    new Word("grey", "はいろ", "hairo"),
], []);

directions = new Vocab("Directions", [
    new Word("up","うえ", "ue"),
    new Word("down","した", "shita"),
    new Word("left","ひだり", "hidari"),
    new Word("right","みぎ", "migi"),
    new Word("front","まえ", "mae"),
    new Word("behind","うしろ", "ushiro"),
    new Word("inside","なか", "naka"),
    new Word("outside","そと", "soto"),
    new Word("north","きた", "kita"),
    new Word("south","みなみ", "minami"),
    new Word("east","ひがし", "higashi"),
    new Word("west","にし", "nishi"),
], []);

japanese = new Vocab("Japanese", [], [
    new Vocab("Writing", [], [hiragana]),
    numbers,
    new Vocab("Words", [],
        [
            this_and_that,
            body_parts,
            verbs,
            time_and_date,
            colors,
            directions
        ])
]);
japanese.chainLink("V");