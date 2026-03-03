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
    new Expression("{ten}{one}", "{ten}{one}", {"ten":new Word("1", "juu", "じゅう"), "one":numbers_base}),
    new Expression("{tens}{one}", "{tens}{ten}{one}", {"tens": mult_numbers, "ten":new Word("1", "juu", "じゅう"), "one":numbers_base}),
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
    new Expression("{hund}{num}", "{hund}{num}", {"hund":new Word("1", "hyaku", "ひゃく"), "num":num_99}),
    new Expression("{hunds}{num}", "{hunds}{hund}{num}", {"hunds": normal_100, "hund":new Word("100", "hyaku", "ひゃく"), "num":num_99}),
    new Expression("{hunds}{num}", "{hunds}{num}", {"hunds": spec_100, "num":num_99}),
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
    new Expression("{thousand}{num}", "{thousand}{num}", {"thousand":new Word("1", "sen", "せん"), "num":num_999}),
    new Expression("{thousands}{num}", "{thousands}{thousand}{num}", {"thousands": normal_1000, "thousand":new Word("1", "sen", "せん"), "num":num_999}),
    new Expression("{thousands}{num}", "{thousands}{num}", {"thousands": spec_1000, "num":num_999}),
]);

num_99999 = new Vocab("10000-99999", [
    new Word("10000", "man", "まん"),
    new Expression("{tenthousand}{num}", "{tenthousand}{num}", {"tenthousand":new Word("1", "ichiman", "いちまん"), "num":num_9999}),
    new Expression("{tenthousands}{num}", "{tenthousands}{tenthousand}{num}", {"tenthousands": mult_numbers, "tenthousand":new Word("1", "man", "まん"), "num":num_9999}),
]);

complex_numbers = new Vocab("Complex numbers", [], [num_99, num_999, num_9999, num_99999]);

numbers = new Vocab("Numbers", [], [numbers_base, complex_numbers]);

japanese = new Vocab("Japanese", [], [
    new Vocab("Writing", [], [hiragana]),
    new Vocab("Words", [], [this_and_that, numbers])
]);
japanese.chainLink("V");